import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";

type Post = {
    title: string;
    img: string;
    user: { img: string; name: string };
};

function Container() {
    let test: Post[] = [];
    return (
        <div className="container">
            <LeftSidebar></LeftSidebar>
            <Feed posts={[]}></Feed>
            <div className="right-sidebar"></div>
        </div>
    );
}

export default Container;
