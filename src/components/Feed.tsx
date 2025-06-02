import PostUser from "./PostUser";

type Post = {
    title: string;
    img: string;
    user: { img: string; name: string };
};

function Feed() {
    let posts: Post[] = [];
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
        <div className="feed">
            <ul>
                {posts.map((post: Post) => (
                    <li>
                        <PostUser
                            img={post.user.img}
                            name={post.user.name}
                        ></PostUser>
                        <h1>{post.title}</h1>
                        <img src={"/" + post.img} className="post-img" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Feed;
