import { useParams } from "react-router-dom";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import { PostCard } from "../../components/index";

export function Post() {
  const { postId } = useParams();
  const { post, getPost, postLoading } = usePost();

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {post?._id === postId && <PostCard post={post} />}
      {postLoading && <h2>Loading...</h2>}
    </div>
  );
}
