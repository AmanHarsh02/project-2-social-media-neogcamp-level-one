import { SideNavigation } from "../SideNavigation/SideNavigation";

export function SideNavDrawer({ setShowPostModal, showSideNav }) {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 w-max bg-gray-100 dark:bg-gray-700 shadow-2xl md:hidden ease-in-out duration-500 ${
        showSideNav ? "translate-x-0" : "-translate-x-full"
      } z-40`}
    >
      <SideNavigation setShowPostModal={setShowPostModal} />
    </div>
  );
}
