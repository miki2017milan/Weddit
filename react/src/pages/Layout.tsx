import LeftSidebar from "../components/LeftSidebar.tsx";
import Navbar from "../components/Navbar.tsx";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="main">
            <Navbar />
            <div className="container">
                <LeftSidebar></LeftSidebar>
                <Outlet></Outlet>
                <div className="right-sidebar"></div>
            </div>
        </div>
    );
}

export default Layout;
