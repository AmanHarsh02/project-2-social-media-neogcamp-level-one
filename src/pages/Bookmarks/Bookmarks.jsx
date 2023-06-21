import { useEffect } from "react";
import { PostCard } from "../../components";
import { usePost } from "../../contexts/PostContext";

export function Bookmarks() {
  const { savedPosts, getBookmarks } = usePost();

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {savedPosts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
      {savedPosts.length === 0 && <h2>Nothing in bookmarks!</h2>}
    </div>
  );
}
