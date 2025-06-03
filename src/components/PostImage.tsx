interface Prop {
    img: string;
    title: string;
}

function PostImage({ img, title }: Prop) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <img src={img} className="post-img" />
        </div>
    );
}

export default PostImage;
