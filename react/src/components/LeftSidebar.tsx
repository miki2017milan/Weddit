import { useState } from "react";

import { Link } from "react-router-dom";

type Tag = {
    text: string
    href: string
}

function LeftSidebar() {
    let tags: Tag[] = []

    tags.push({
        text: "Home",
        href: "/",
    });
    tags.push({
        text: "News",
        href: "/news",
    });
    tags.push({
        text: "Explore",
        href: "/explore",
    });

    const [selectedTag, setSelectedTag] = useState(0);

    return (
        <div className="left-sidebar">
            <div className="tags">
                {
                    tags.map((tag: Tag, index: number) => (
                        <Link to={tag.href} className={index == selectedTag ? "selected-page" : ""} onClick={() => setSelectedTag(index)}>
                            <img src={"/" + tag.text.toLowerCase() + ".png"} /> {tag.text}
                        </Link>
                    ))
                }
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
