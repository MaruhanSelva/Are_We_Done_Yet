import { useLocation } from "react-router-dom";
import WLContent from "../components/wlContent.js";
import { getWatchList, getGroupInformation } from "../helpers/firebaseFunc.js";
import { useState, useEffect } from "react";
import Popup from "../components/Popup.js";
import "../styles/wlhub.css"
import HUBHeader from "../components/HUBHeader.js";



function WLHUB(props) {
    const location = useLocation();
    const { gid, gname, capacity, uid } = location.state;
    const [contentInfo, setContentInfo] = useState(null);
    const [groupInfo, setGroupInfo] = useState(null);

    const getContent = async () => {
        await getWatchList(gid)
        .then((item) => {
            const newData = item;
            setContentInfo(newData);
        }).catch(console.log("Retrieving Content Info..."));
    }

    const getGroupInfo = async() => {
        await getGroupInformation(gid)
        .then((item) => {
            const newData = item;
            setGroupInfo(newData);
        }).catch(console.log("Retrieving Group Info..."))
    }


    useEffect(() => {
        getContent();
        getGroupInfo();
    }, [])


    return (
        <div className="wlhub">

            <HUBHeader page="grouphub"/>

            <div className="section_title">{gname} WatchList</div>

            <div className="wl_content">
                <div className="wl_functions">
                    <Popup operation="add" gid={gid} gname={gname} capacity={capacity}/>

                    { (groupInfo) ? <Popup operation="members" gid={gid} gname={gname} capacity={capacity} gInfo={groupInfo}/>: <></>}

                    { (groupInfo) ? <Popup operation="settings" gid={gid} gname={gname} capacity={capacity} gInfo={groupInfo}/>: <></>}

                </div>

                <div className="wl_list">
                    Your WatchList
                    {
                        (contentInfo) ? <WLContent contentInfo={contentInfo} capacity={capacity} uid={uid}/> : <></>
                    }
                    

                </div>


            </div>


        </div>
    )
}

export default WLHUB;