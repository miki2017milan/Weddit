import Feed from "../components/Feed.tsx";

function Home() {
    let posts = [];
    posts.push({
        title: "First post",
        img: "post1.png",
        user: { img: "user1.png", name: "praise me" },
    });
    posts.push({
        title: "Secound post",
        img: "post2.png",
        user: { img: "user2.png", name: "KarliCarlos" },
    });
    return (
        <Feed posts={posts}></Feed>
    );
}

export default Home;
