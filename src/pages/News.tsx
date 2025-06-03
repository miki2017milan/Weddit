import Feed from "../components/Feed.tsx";

function News() {
    let posts = [];
    posts.push({
        title: "First post",
        img: "post1.png",
        user: { img: "user1.png", name: "praise me" },
    });

    return (
        <Feed posts={posts}></Feed>
    );
}

export default News;
