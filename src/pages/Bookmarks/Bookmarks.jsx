import { useEffect } from "react";
import { PostCard } from "../../components";
import { usePost } from "../../contexts/PostContext";
import { useData } from "../../contexts/DataContext";

export function Bookmarks() {
  const { savedPosts, getBookmarks } = usePost();
  const { posts } = useData();

  useEffect(() => {
    getBookmarks();
  }, [posts]);

  return (
    <div className="flex flex-col gap-6">
      {savedPosts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
      {savedPosts.length === 0 && <h2>Nothing in bookmarks!</h2>}
    </div>
  );
}
