import PostCard from "./components/postcard";

const posts = [
    { id: 1, username: "JohnDoe", profilePic: "https://via.placeholder.com/50", content: "Hello world!" },
    { id: 2, username: "JaneSmith", profilePic: "https://via.placeholder.com/50", content: "This is my first post!" },
    { id: 3, username: "Coder123", profilePic: "https://via.placeholder.com/50", content: "Loving React!" }
];

const App = () => {
    return (
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default App;