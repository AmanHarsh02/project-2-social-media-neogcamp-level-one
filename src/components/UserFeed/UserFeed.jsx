import { useData } from "../../contexts/DataContext";
import { PostCard } from "../index";

export function UserFeed() {
  const { userFeed } = useData();

  return (
    <div className="h-max flex flex-col gap-6">
      {userFeed.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
}
