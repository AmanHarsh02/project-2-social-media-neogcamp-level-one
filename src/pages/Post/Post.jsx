import { useParams } from "react-router-dom";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import { PostCard } from "../../components/index";

export function Post() {
  const { postId } = useParams();
  const { post, getPost } = usePost();

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {post && <PostCard post={post} />}
    </div>
  );
}
