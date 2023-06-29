import { useState } from "react";
import {
  SideNavigation,
  FollowSuggestions,
  GenericModal,
  CreateNewPost,
  BottomNavigation,
} from "../index";

export function PageWrapper({ children }) {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="flex flex-row justify-around h-screen bg-gray-200   gap-4 p-4 md:px-4 lg:px-16 w-screen grow relative overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <aside className="mb-4 w-[15%] lg:w-[20%] h-[98%] sticky top-0 hidden md:block overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <SideNavigation setShowPostModal={setShowPostModal} />
      </aside>
      <main className="w-[100%] lg:w-[50%] h-max mb-[4rem]">
        {children}
        <BottomNavigation />
      </main>
      <aside className="bg-white mb-4 w-[25%] h-[98%] sticky top-0 hidden lg:block rounded-lg overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <FollowSuggestions />
      </aside>

      {showPostModal && (
        <GenericModal setShowModal={setShowPostModal}>
          <CreateNewPost />
        </GenericModal>
      )}
    </div>
  );
}
