import { CreateNewPost, UserFeed } from "../../components/index";

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <CreateNewPost />
      <UserFeed />
    </div>
  );
}
