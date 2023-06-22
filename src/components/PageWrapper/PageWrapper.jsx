import { SideNavigation, FollowSuggestions } from "../index";

export function PageWrapper({ children }) {
  return (
    <div className="flex flex-row justify-around h-screen bg-gray-200   gap-4 p-4 md:px-16 w-screen grow relative overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <aside className="mb-4 w-[20%] h-[98%] sticky top-0 hidden lg:block overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <SideNavigation />
      </aside>
      <main className="w-[100%] mb-0 lg:w-[50%]">{children}</main>
      <aside className="bg-white mb-4 w-[25%] h-[98%] sticky top-0 hidden lg:block rounded-lg overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <FollowSuggestions />
      </aside>
    </div>
  );
}
