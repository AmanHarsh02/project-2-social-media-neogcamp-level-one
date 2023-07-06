import { PostCard, PostSortingOptions } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Explore() {
  const { filteredPosts } = useData();

  return (
    <div className="flex flex-col gap-6">
      <PostSortingOptions />
      {filteredPosts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
}
