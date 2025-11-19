import { useState } from "react";
import { postService } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext.jsx";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { fetchPosts } = usePosts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createPost({ title, content });
      fetchPosts();
      navigate("/");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="w-full border p-2 mb-3 h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default CreatePost;
