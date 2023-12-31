import { useEffect } from "react";
import { Navbar, PostCard } from "../../components";
import { useData } from "../../contexts/DataContext";
import { usePost } from "../../contexts/PostContext";

export function Liked() {
  const { likedPosts } = usePost();
  const { setTitle } = useData();

  useEffect(() => setTitle("Liked Posts"), []);

  return (
    <div>
      <Navbar path="Liked Posts" />

      <div className="flex flex-col gap-6 px-4 md:px-0 mt-4">
        {likedPosts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
        {likedPosts.length === 0 && (
          <h2 className="mt-4">Nothing in liked posts!</h2>
        )}
      </div>
    </div>
  );
}
