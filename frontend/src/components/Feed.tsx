import PostUser from "./PostUser";
import PostImage from "./PostImage";

type Post = {
    title: string;
    img: string;
    user: { img: string; name: string };
};

type PostArray = {
    posts: Post[];
};

function Feed({ posts }: PostArray) {
    return (
        <div className="feed">
            <ul>
                {posts.map((post: Post) => (
                    <li>
                        <PostUser
                            img={post.user.img}
                            name={post.user.name}
                        ></PostUser>
                        <PostImage
                            img={post.img}
                            title={post.title}
                        ></PostImage>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Feed;
