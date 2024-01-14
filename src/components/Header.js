import "../styles/Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <a className="LOGOCLICK" href="/">AWDY</a>

            <div id="small_links">
                <Link to="/login">Login</Link>
                <Link to="/join">Join</Link>
            </div>

            
        </div>
    )
}

export default Header;