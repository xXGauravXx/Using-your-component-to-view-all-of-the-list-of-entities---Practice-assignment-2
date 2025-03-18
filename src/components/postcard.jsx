import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "10px", maxWidth: "400px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img 
                    src={post.profilePic} 
                    alt={post.username} 
                    style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
                />
                <strong>{post.username}</strong>
            </div>
            <p>{post.content}</p>
            <LikeButton />
        </div>
    );
};

export default PostCard;