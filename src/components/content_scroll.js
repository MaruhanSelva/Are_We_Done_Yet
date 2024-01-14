import "../styles/content_scroll.css";
import addImage from "../assets/add.png";
import noImage from "../assets/noimage.png";
import { addToWatchList } from "../helpers/firebaseFunc";
import { useNavigate } from "react-router-dom";


function ContentItem(props) {
    const navigate = useNavigate();

    const removeBlankImages = () => {
        if (props.imglink === "https://cdn.watchmode.com/posters/blank.gif") {
            return noImage;
        } else {
            return props.imglink;
        }
    }

    const clickButton = async() => {
        await addToWatchList(props.gid, props.id, props.name)
        .then(()=> {
            window.location.reload();
        })
    }

    return (
        <li className="result_content">
            <img src={removeBlankImages()} alt={props.name + " poster"} className="result_picture"></img>
            <div className="result_format">
                <div className="result_info">
                    <div className="result_name">{props.name}</div>

                    <div className="result_year">{"("}{props.year}{")"}</div>
                </div>
                <button className="add_button" onClick={clickButton}>
                    <img src={addImage} alt="add logo to add content to Watchlist"/>
                </button>
                
            </div>
            
        </li>
    )

}


function ContentScroll(props) {

    return (
        <ul className="content_scroll">
            { props.contentInfo[0].results.slice(0, 10).map((e) => {
                return (<ContentItem key={e.image_url + e.year} name={e.name} imglink={e.image_url} year={e.year} id={e.id} gid={props.gid} gname={props.gname} capacity={props.capacity}/>)
            })}
        </ul>
    )

}

export default ContentScroll;