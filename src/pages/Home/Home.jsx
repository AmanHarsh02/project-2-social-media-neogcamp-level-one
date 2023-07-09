import {
  CreateNewPost,
  Navbar,
  PostSortingOptions,
  UserFeed,
} from "../../components/index";

export function Home() {
  return (
    <div>
      <Navbar path="Home" />

      <div className="flex flex-col gap-6 px-4 md:px-0 mt-4">
        <CreateNewPost />
        <PostSortingOptions />
        <UserFeed />
      </div>
    </div>
  );
}
