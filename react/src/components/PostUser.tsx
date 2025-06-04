interface Prop {
    img: string;
    name: string;
}

function PostUser({ img, name }: Prop) {
    return (
        <div className="post-user">
            <img src={img} className="post-user-img" />
            <h2>{name}</h2>
        </div>
    );
}

export default PostUser;
