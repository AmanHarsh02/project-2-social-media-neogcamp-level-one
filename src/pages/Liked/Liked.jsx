import { PostCard } from "../../components";
import { usePost } from "../../contexts/PostContext";

export function Liked() {
  const { likedPosts } = usePost();

  console.log(likedPosts);

  return (
    <div className="flex flex-col gap-6">
      {likedPosts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
      {likedPosts.length === 0 && <h2>Nothing in liked posts!</h2>}
    </div>
  );
}
