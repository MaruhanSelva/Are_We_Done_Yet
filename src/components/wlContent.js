import minusLogo from "../assets/minus.png";
import { removeFromWatchList, updateWatchStatus } from "../helpers/firebaseFunc";

function WLContentItem(props) {

    const checkWatched = () => {
        if (props.WatchedBy) {
            if (props.WatchedBy.includes(props.uid)) {
                return true;
            }
        }
        return false;
    }

    const removeContent = async() => {
        await removeFromWatchList(props.id)
        window.location.reload();
    }



    const updateWatch = async() => {
       await updateWatchStatus(props.id, props.uid);
       window.location.reload();
    }

    return (
        <li className="content_item">
            <div className="content_name">
                {props.ContentName}
            </div>
            <div className="content_align">
                <div className="content_status">

                    {
                        (checkWatched() === false) ? <button className="watched_button" onClick={updateWatch}>Finished it!</button> : <>Watched {" "}</>
                    }


                    { props.WatchedBy ? props.WatchedBy.length : 0}
                    / {props.capacity}

                    
                </div>

                <button className="removebutton" onClick={removeContent}>
                        <img src={minusLogo} alt={"Minus Logo for Removing Content from Watchlist"} className="removeimage"/>
                </button>

            </div>

            
        </li>   
    )

}


function WLContent(props) {

    return (
        <div className="WL_content">
            <ul className="content_list">
                {
                    props.contentInfo.map(element => (
                        <WLContentItem uid={props.uid} id={element[1]} key={element[0].ContentName} ContentName={element[0].ContentName} WatchedBy={element[0].WatchedBy} capacity={props.capacity} />
                    ))
                }

            </ul>

        </div>
    )
}

export default WLContent;