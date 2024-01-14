import React, { useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../helpers/firebase.js";
import { query, collection, where, limit, getDocs, or } from "firebase/firestore";
import WLDashboard from '../components/wlDashboard.js';
import "../styles/userhub.css"
import HUBHeader from '../components/HUBHeader.js';
import JoinWatchList from '../components/JoinWL.js';
import CreateWatchList from '../components/createWL.js';


function UserHub() {
    const [groups, setGroups] = useState(null);
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [uid, setUID] = useState("")

    const getGroupData = async(gid1, gid2, gid3, gid4, gid5) => {
        const groupQuery = query(
            collection(db, 'WatchLists'), 
            or(where("GID", "==", gid1), where("GID", "==", gid2), where("GID", "==", gid3), where("GID", "==", gid4), where("GID", "==", gid5)),
            limit(5)
        );
        await getDocs(groupQuery)
        .then((querySnapshot) => {
            const gData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id}));
            if (groups == null) {
                setGroups([gData])
            } else {
                setGroups(groups.push(gData));
            }
            
        }).catch(console.log("Loading..."));
    }


    const getUserData = async(uid) => {
        const userGroupsQuery = query(
            collection(db, 'Users'),
            where('UID', '==', uid), 
            limit(1)
        );
        await getDocs(userGroupsQuery)
        .then((querySnapshot) => {
            const userData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id: doc.id}));
            setUser(userData);
            setName(userData[0].Name);
            getGroupData(userData[0].GID1, userData[0].GID2, userData[0].GID3, userData[0].GID4, userData[0].GID5)
            /*
            if (userData[0].GID1 !== "") {
                getGroupData(userData[0].GID1);
            }

            if (userData[0].GID2 !== "") {
                getGroupData(userData[0].GID2);
            }

            if (userData[0].GID3 !== "") {
                getGroupData(userData[0].GID3);
            }

            if (userData[0].GID4 !== "") {
                getGroupData(userData[0].GID4);
            }

            if (userData[0].GID5 !== "") {
                getGroupData(userData[0].GID5);
            }
            */

        }).catch(console.log("Loading..."));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUserData(user.uid);
                setUID(user.uid);
            } else {
              console.log("user is logged out")
            }
          });
    }, [])


    return (
        <div className="userhub">
            <HUBHeader page="userhub"/>

            <p className='greeting'>Welcome Back
                {
                    (name !== "") ? (` ${name}!`) : ("!")
                }
            </p>

            <div className="hub_content">
                <div className="hub_section_title">
                    <p className="text_center">Your WatchLists</p>
                </div>
                
                <div>
                    {
                        (groups && uid) ? <WLDashboard gInfo={groups} uid={uid} /> : <></>
                    }
                </div>
            </div>

            <div className="add_WatchLists">
            {
                (user) ? <CreateWatchList groupInfo={groups} userInfo={user}/> : <></>
            }

            <div className='divider'></div>

            {
                (user) ? <JoinWatchList groupInfo={groups} userInfo={user}/> : <></>
            }
            </div>
            
        </div>
    )

}

export default UserHub;