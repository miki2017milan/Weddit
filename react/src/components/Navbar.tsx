import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left-navbar">
                <img src="/logo.png" className="logo" />
                <ul>
                    <li>
                        <img src="/bell.png" className="icon" />
                    </li>
                    <li>
                        <img src="/message.png" className="icon" />
                    </li>
                </ul>
            </div>
            <div className="right-navbar">
                <SearchBar></SearchBar>
                <UserProfile></UserProfile>
            </div>
        </nav>
    );
}

export default Navbar;
