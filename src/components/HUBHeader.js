import { auth } from "../helpers/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function HUBHeader(props) {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign Out Worked!
            navigate("/");
            console.log("Sign Out Successful");
        }).catch((error) => {
            console.log("An Error Occurred");
        });
    }

    const goBack = () => {
        navigate("/userpage");
    }


    return (
        <div className="HUB_header">

            { (props.page === "userhub") ? <button onClick={handleLogout}>Logout</button>: <button onClick={goBack}> {"<-"} Back</button>}
        </div>
    )
}

export default HUBHeader;
