function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div className="tags">
                <a href="#">
                    <img src="/home.png" /> Home
                </a>
                <a href="#">
                    <img src="/news.png" /> News
                </a>
                <a href="#">
                    <img src="/explore.png" /> Explore
                </a>
                <a href="#">
                    <img src="/topics.png" /> Topics
                </a>
                <a href="#">See more</a>
            </div>

            <div className="communities">
                <p>Communities</p>
                <a href="#">
                    <img src="/foto.png" /> Photographie
                </a>
                <a href="#">
                    <img src="/colors.png" /> Beauty
                </a>
            </div>
        </div>
    );
}

export default LeftSidebar;
