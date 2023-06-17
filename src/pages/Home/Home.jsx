import {
  CreateNewPost,
  FollowSuggestions,
  SideNavigation,
  UserFeed,
} from "../../components/index";

export function Home() {
  return (
    <div className="flex flex-row justify-center h-screen">
      <div className="flex justify-around gap-4 mx-2 mt-4 max-w-[90%] grow relative overflow-y-auto">
        <aside className="bg-blue-200 mb-4 w-[25%] sticky top-0">
          <SideNavigation />
        </aside>
        <main className=" w-[50%] mb-0">
          <CreateNewPost />
          <UserFeed />
        </main>
        <aside className="bg-blue-200 mb-4 w-[25%] sticky top-0">
          <FollowSuggestions />
        </aside>
      </div>
    </div>
  );
}
