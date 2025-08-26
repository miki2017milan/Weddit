import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";

type Tag = {
    text: string;
    href: string;
};

type prop = {
    visible: boolean;
    updateFunc: Function;
};

function LeftSidebar({ visible, updateFunc }: prop) {
    let tags: Tag[] = [];

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

    const MOBILE_WIDTH = 1220;
    const prevWidth = useRef(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const currWidth = window.innerWidth;
            if (currWidth <= MOBILE_WIDTH && prevWidth.current > MOBILE_WIDTH) {
                updateFunc();
            } else if (
                currWidth > MOBILE_WIDTH &&
                prevWidth.current <= MOBILE_WIDTH
            ) {
                updateFunc();
            }
            prevWidth.current = currWidth;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={visible ? "left-sidebar" : "hidden"}>
            <div className="tags">
                {tags.map((tag: Tag, index: number) => (
                    <Link
                        to={tag.href}
                        className={index == selectedTag ? "selected-page" : ""}
                        onClick={() => setSelectedTag(index)}
                    >
                        <img src={"/" + tag.text.toLowerCase() + ".png"} />{" "}
                        {tag.text}
                    </Link>
                ))}
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
