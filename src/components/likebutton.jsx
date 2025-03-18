import { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    return (
        <button 
            onClick={() => setLiked(!liked)} 
            style={{
                backgroundColor: liked ? "red" : "gray", 
                color: "white", 
                border: "none", 
                padding: "10px 15px", 
                borderRadius: "5px", 
                cursor: "pointer"
            }}
        >
            {liked ? "Liked" : "Like"}
        </button>
    );
};

export default LikeButton;