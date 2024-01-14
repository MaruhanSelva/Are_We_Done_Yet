import { Link } from "react-router-dom";
import "../styles/userhub.css";


function WLDashboardItem(props) {
    const itemColour = {
        background: props.color
    };


    return (
        <li className="wl_summary" style={itemColour} id={props.id}>

            <Link to='/group' state={{ gid: props.gid, gname:props.groupname, capacity:props.capacity, uid:props.uid}}>
                <div className="wl_title">{props.groupname}</div>

                <div className="wl_capacity">{props.capacity}/10</div>

            </Link>
        </li>
    )
}

function WLDashboard(props) {

    return (
        <ul className="WL_dash">
            {props.gInfo[0].map((e) => {
                return (<WLDashboardItem color="#8DFFF8" groupname={e.GroupName}
                capacity={e.members.length} gid={e.GID} uid={props.uid}
                key={e.id}/>)
            })}
        </ul>
    )
}


export default WLDashboard;