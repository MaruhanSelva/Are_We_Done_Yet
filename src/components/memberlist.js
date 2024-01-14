import { useState } from "react";
import crownIcon from "../assets/crown.png";
import "../styles/memberlist.css";

function MemberListItem(props) {
    const LeaderUID = props.LeaderUID;

    const getCrown = () => {
        if (props.name === LeaderUID) {
            return (<img src={crownIcon} className="crown_img" alt="crown icon"/>)
        } else {
            return (<></>)
        }
    }

    return (
        <li className="member_item">
            <div className="member_name">
                {props.name}

            </div>      

            {getCrown()}

        </li>
    )
}


function MemberList(props) {
    const LeaderUID = props.gInfo[0][0].LeaderUID;

    return  (
        <div className="members">
            <ul className="member_list">
                { props.gInfo[0][0].members.map((e) => {
                    return (<MemberListItem key={e} name={e} LeaderUID={LeaderUID}/>)
                })}
                

            </ul>

        </div>
    )
}

export default MemberList;