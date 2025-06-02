import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";

function Container() {
    return (
        <div className="container">
            <LeftSidebar></LeftSidebar>
            <Feed></Feed>
            <div className="right-sidebar"></div>
        </div>
    );
}

export default Container;
