import { useEffect } from "react";
import { Navbar, PostCard, PostSortingOptions } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Explore() {
  const { filteredPosts, setTitle } = useData();

  useEffect(() => setTitle("Explore"), []);

  return (
    <div>
      <Navbar path="Explore" />

      <div className="flex flex-col gap-6 px-4 md:px-0">
        <PostSortingOptions />
        {filteredPosts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
