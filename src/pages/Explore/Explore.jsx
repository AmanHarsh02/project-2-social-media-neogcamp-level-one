import { Navbar, PostCard, PostSortingOptions } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Explore() {
  const { filteredPosts } = useData();

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
