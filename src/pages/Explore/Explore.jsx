import { PostCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Explore() {
  const { posts } = useData();

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
}
