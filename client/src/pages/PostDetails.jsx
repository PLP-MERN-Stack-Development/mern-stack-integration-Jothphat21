import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { postService } from "../services/api.js";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(id).then(setPost).catch(console.error);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      {post.featuredImage && <img src={post.featuredImage} className="mb-4 rounded" />}
      <p>{post.content}</p>
    </article>
  );
};

export default PostDetails;
