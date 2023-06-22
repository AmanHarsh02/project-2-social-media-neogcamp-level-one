import { useParams } from "react-router-dom";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import { PostCard } from "../../components/index";
import { useData } from "../../contexts/DataContext";

export function Post() {
  const { postId } = useParams();
  const { post, getPost, postLoading } = usePost();
  const { posts } = useData();

  useEffect(() => {
    getPost(postId);
  }, [posts]);

  console.log(post);

  return (
    <div className="flex flex-col gap-6">
      {post?._id === postId && <PostCard post={post} showComment={true} />}
      {postLoading && <h2>Loading...</h2>}
    </div>
  );
}
