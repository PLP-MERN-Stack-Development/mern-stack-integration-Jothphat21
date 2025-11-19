import { usePosts } from "../context/PostsContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Home = () => {
  const { posts, loading } = usePosts();
  const { user } = useAuth();  
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/create");
  };

  if (loading) return <p>Loading posts...</p>;
  
  if (!posts.length) return (
    <div>
      {/* SHOW THE CREATE BUTTON EVEN IF NO POSTS */}
      {user && (
        <button
          onClick={handleCreatePost}
          className="bg-blue-600 text-white px-4 py-2 mb-4 rounded hover:bg-blue-700"
        >
          + Create Post
        </button>
      )}
      <p>No posts available.</p>
    </div>
  );

  return (
    <>
    {/* BUTTON ALWAYS SHOWS WHEN USER IS LOGGED IN */}
      {user && (
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Posts</h1>
          <button
            onClick={handleCreatePost}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Create Post
          </button>
        </div>
      )}
    
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-2">{post.excerpt}</p>
          <Link to={`/posts/${post._id}`} className="text-blue-600">Read more</Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
