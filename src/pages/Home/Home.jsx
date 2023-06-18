import {
  CreateNewPost,
  FollowSuggestions,
  SideNavigation,
  UserFeed,
} from "../../components/index";

export function Home() {
  return (
    <div className="flex flex-row justify-center h-screen bg-gray-200">
      <div className="flex justify-around gap-4 mx-2 mt-4 max-w-[90%] grow relative overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <aside className="mb-4 w-[20%] h-[98%] sticky top-0 hidden md:block overflow-y-auto">
          <SideNavigation />
        </aside>
        <main className="w-[100%] mb-0 md:w-[50%]">
          <div className="flex flex-col gap-6">
            <CreateNewPost />
            <UserFeed />
          </div>
        </main>
        <aside className="bg-white mb-4 w-[25%] h-[98%] sticky top-0 hidden md:block rounded-lg overflow-y-auto">
          <FollowSuggestions />
        </aside>
      </div>
    </div>
  );
}
