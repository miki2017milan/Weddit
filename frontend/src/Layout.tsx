import LeftSidebar from "./components/LeftSidebar.tsx";
import Navbar from "./components/Navbar.tsx";

import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    const [navbarVisiable, setNavbarVisiable] = useState(true);

    function toggleVisiable() {
        setNavbarVisiable((prevState) => !prevState);
    }

    return (
        <div className="main">
            <Navbar updateFunc={toggleVisiable} />
            <div className="container">
                <LeftSidebar
                    visible={navbarVisiable}
                    updateFunc={toggleVisiable}
                ></LeftSidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Layout;
