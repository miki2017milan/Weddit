import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

type prop = {
    updateFunc: Function;
};

function Navbar({ updateFunc }: prop) {
    return (
        <header>
            <nav className="navbar">
                <div className="left-navbar">
                    <img
                        src="/navbar-opener.png"
                        className="nav-opener"
                        onClick={() => updateFunc()}
                    />
                    <img src="/logowriting.png" className="logo-writing" />
                    <img src="/logo.png" className="logo" />
                </div>
                <div className="middle-navbar">
                    <div className="full-w">
                        <SearchBar></SearchBar>
                    </div>
                </div>
                <div className="right-navbar">
                    <UserProfile></UserProfile>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
