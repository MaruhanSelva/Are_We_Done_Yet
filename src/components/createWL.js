import { useState, useEffect } from "react";
import { query, where, collection, getDocs, limit } from "firebase/firestore";
import { db } from "../helpers/firebase.js";
import { createWatchList, updateUser } from "../helpers/firebaseFunc.js";


function CreateWatchList(props) {
    const [gid, setGID] = useState("");
    const [gPass, setGPass] = useState("");
    const [gname, setGName] = useState("");
    const [slot, setSlot] = useState(0);

    const onCreate = async(e) => {
        e.preventDefault();
        
        if (props.userInfo.length === 0 && props.groupInfo.length === 0) {
            return false;
        }
        
        // look up gid in docs. If exists, do not allow
        const groupQuery = query(
            collection(db, 'WatchLists'),
            where("GID", "==", gid),
            limit(1)
        );

        await getDocs(groupQuery)
        .then((querySnapshot)=> {
            const gData = querySnapshot.docs;
            if (gData.length === 0) {
                console.log("This group does not exist!, You're In!");
                if (props.groupInfo === null || props.groupInfo.length === 0) {
                    //empty array so just add it
                    setSlot(1);
                } else {
                    props.groupInfo.forEach((element) => {
                        if (element[0].GID === gid) {
                            console.log("This Watchlist is already here!")
                            return; // not needed to continue
                        }
                    })
                    // no repeats!
                    console.log(props.userInfo);
                    if (props.userInfo[0].GID1 === "") {
                        // set GID1 to be gid
                        setSlot(1);
                    } else if (props.userInfo[0].GID2 === "") {
                        setSlot(2);
                    } else if (props.userInfo[0].GID3 === "") {
                        setSlot(3);
                    } else if (props.userInfo[0].GID4 === "") {
                        setSlot(4);
                    } else if (props.userInfo[0].GID5 === "") {
                        setSlot(5);
                    } else {
                        // you have too many!!
                        console.log("Too many watchlists");
                        return;
                    }
                }
            
            } else {
                console.log("This GroupID already exists!");
            }
        }).catch(console.log("Loading"))
    }

    useEffect(() => {
        (async() => {
            if (slot === 1) {
                await updateUser(1, props.userInfo[0].UID, gid, props.userInfo[0].id);
                await createWatchList(gid, gname, gPass, props.userInfo[0].UID);
                console.log("add Successful");
                window.location.reload();
            } else if (slot === 2) {
                await updateUser(2, props.userInfo[0].UID, gid, props.userInfo[0].id);
                await createWatchList(gid, gname, gPass, props.userInfo[0].UID);
                console.log("add Successful");
                window.location.reload();
            } else if (slot === 3) {
                await updateUser(3, props.userInfo[0].UID, gid, props.userInfo[0].id);
                await createWatchList(gid, gname, gPass, props.userInfo[0].UID);
                console.log("add Successful");
                window.location.reload();
            } else if (slot === 4) {
                await updateUser(4, props.userInfo[0].UID, gid, props.userInfo[0].id);
                await createWatchList(gid, gname, gPass, props.userInfo[0].UID);
                console.log("add Successful");
                window.location.reload();
            } else if (slot === 5) {
                await updateUser(5, props.userInfo[0].UID, gid, props.userInfo[0].id);
                await createWatchList(gid, gname, gPass, props.userInfo[0].UID);
                console.log("add Successful");
                window.location.reload();
            }
        })();
    }, [slot])


    return  (
        <div className="add_wl">
            <form onSubmit={onCreate} className='addForm'>
                <h3>Create a WatchList</h3>
                <label> GroupID
                    <input 
                    type="text"
                    id="gid_id_create"
                    name="gid"
                    required
                    placeholder='Group ID'
                    onChange={(e) => setGID(e.target.value)}
                    />
                </label>

                <label> Group Name
                    <input 
                    type="text"
                    id="gname_create"
                    name="gname"
                    required
                    placeholder='Group Name'
                    onChange={(e) => setGName(e.target.value)}
                    />
                </label>

                <label> Group Password
                    <input 
                    type="password"
                    id="gid_pass_create"
                    name="gid_pass"
                    required
                    placeholder='Group Password'
                    onChange={(e) => setGPass(e.target.value)}
                    />
                </label>



                <input type="submit" className='submit_button' value="Join"/>

            </form>


        </div>

    )
}

export default CreateWatchList;