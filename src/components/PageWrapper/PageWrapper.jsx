import { useEffect, useState } from "react";
import {
  SideNavigation,
  FollowSuggestions,
  GenericModal,
  CreateNewPost,
  BottomNavigation,
  SideNavDrawer,
  SearchBar,
} from "../index";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";
import { GrClose as CloseIcon } from "react-icons/gr";

export function PageWrapper({ children }) {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    document.getElementById("main").scrollTo({ top: 0, behavior: "smooth" });
  });

  const handleSideNavClose = (e) => {
    if (!showSideNav) return;

    const clickedOn = e.target.dataset.nav;
    const clickedOnUserCard = e.target.closest("#user-card")?.dataset?.nav;

    if (clickedOn !== "side-nav" && clickedOnUserCard !== "user-card") {
      setShowSideNav(false);
    }
  };

  return (
    <div
      id="main"
      onClick={(e) => handleSideNavClose(e)}
      className="flex flex-row justify-around h-screen bg-gray-200 dark:bg-gray-800 gap-4 md:px-4 lg:px-16 w-screen grow relative overflow-y-auto [&::-webkit-scrollbar]:hidden"
    >
      <aside className="mb-4 w-[15%] lg:w-[20%] h-[98%] py-4 sticky top-0 hidden md:block overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <SideNavigation setShowPostModal={setShowPostModal} />
      </aside>

      <main className="flex flex-col w-[100%] lg:w-[50%] h-max mb-[4rem]">
        <div
          onClick={() => setShowSideNav(!showSideNav)}
          className="fixed top-2 right-4 cursor-pointer self-end w-max p-2 mb-4 rounded-lg bg-white dark:bg-gray-600 hover:bg-slate-100 dark:hover:bg-gray-500 shadow-md md:hidden z-40"
        >
          {!showSideNav ? <HamburgerIcon size={24} /> : <CloseIcon size={24} />}
        </div>
        {children}
        <BottomNavigation />
      </main>

      <aside className="hidden lg:flex flex-col gap-4 mb-4 w-[25%] max-h-[98%] py-4 h-max sticky top-0 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <SearchBar />
        <FollowSuggestions />
      </aside>

      {showPostModal && (
        <GenericModal setShowModal={setShowPostModal}>
          <CreateNewPost />
        </GenericModal>
      )}

      <SideNavDrawer
        setShowPostModal={setShowPostModal}
        showSideNav={showSideNav}
      />
    </div>
  );
}
