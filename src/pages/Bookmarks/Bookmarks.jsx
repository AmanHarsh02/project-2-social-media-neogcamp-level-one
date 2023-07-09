import { useEffect } from "react";
import { Navbar, PostCard } from "../../components";
import { usePost } from "../../contexts/PostContext";
import { useData } from "../../contexts/DataContext";

export function Bookmarks() {
  const { savedPosts, getBookmarks } = usePost();
  const { posts } = useData();

  useEffect(() => {
    getBookmarks();
  }, [posts]);

  return (
    <div>
      <Navbar path="Bookmarks" />

      <div className="flex flex-col gap-6 px-4 md:px-0 mt-4">
        {savedPosts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
        {savedPosts.length === 0 && (
          <h2 className="mt-4">Nothing in bookmarks!</h2>
        )}
      </div>
    </div>
  );
}
