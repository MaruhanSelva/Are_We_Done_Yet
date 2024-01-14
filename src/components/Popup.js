import React, { useState } from "react";
import "../styles/Popup.css";
import MemberList from "./memberlist";
import { generateURL } from "../helpers/watchmodeFunc.js";
import { wm_KEY } from '../helpers/config.js';
import ContentScroll from "./content_scroll.js";
import SettingsList from "./settingsinfo.js";

function Popup(props) {
    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [addContent, setAddContent] = useState("");
    const [contentResults, setContentResults] = useState([]);
    const [contentType, setContentType] = useState("TV Show");

    // get the content information
    const contentLookup = async(e) => {
        // API CALLS
        e.preventDefault();
        console.log(contentType);
        console.log(addContent);
        var type = 1; // this is for tv show
        if (type === "Movie") {
            type = 2;
        }

        var url = generateURL(addContent, wm_KEY, type);
        // Now we need to search it up 
        fetch(url, { method: 'get'})
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setContentResults([
                data
            ]);
        })
        .catch((error) => console.log(error));
    }

    const getHeader = () => {
        if (props.operation === "add") {
            return "Add Content";
        } else if (props.operation === "members") {
            return "Members";
        } else if (props.operation === "settings") {
            return "Settings";
        }
    }

    const getPopupContent = () => {
        if (props.operation === "add") {
            return (
                <div>
                    <h2>Add Content</h2>
                    <form onSubmit={contentLookup}>
                        <label> Name of Content

                            <input
                            type="text"
                            id="content_name"
                            name="content_name"
                            placeholder="Content Name"
                            required
                            onChange={(e) => setAddContent(e.target.value)}
                            />

                            <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
                                <option name="TV Show">TV Show</option>
                                <option name="Movie">Movie</option>
                            </select>

                            <input type="submit" value="Lookup"/>

                        </label>
                    </form>

                    <div className="content_results">

                        {
                            (contentResults.length !== 0) ? <ContentScroll contentInfo={contentResults} gid={props.gid} gname={props.gid} capacity={props.capacity}/> : <></>
                        }

                    </div>

                </div>
            )
        } else if (props.operation === "members") {
            return (
                <>  
                    <h2>Members</h2>
                    <MemberList gInfo={props.gInfo}/>
                </>
                
            )

        } else if (props.operation === "settings") {
            return (
                <>
                    <h2>Settings</h2>
                    <SettingsList gInfo={props.gInfo}/>
                </>
            )
        }
    }


    const togglePopup= () => {
        setDisplayPopUp(!displayPopUp);
    };

    if (displayPopUp) {
        document.body.classList.add('active-popup');
    } else {
        document.body.classList.remove('active-popup');
    }

    return (
        <>
            <button onClick={togglePopup} className="btn-popup">
                {getHeader()}
            </button>

            {displayPopUp  && (
                <div className="Popup">
                    <div onClick={togglePopup} className="overlay"></div>
                    <div className="popup-content">

                        {getPopupContent()}

                        <button className="close-popup" onClick={togglePopup}>
                            CLOSE
                        </button>

                    </div>
                </div>
            )}
        
        </>
    )



}


export default Popup;