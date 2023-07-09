import {
  BiHome as HomeIcon,
  BiRocket as ExploreIcon,
  BiBookmark as BookmarkIcon,
  BiLike as LikeIcon,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

export function BottomNavigation() {
  const { user } = useData();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex gap-2 justify-around items-center bg-gray-200 dark:bg-gray-900 w-[100%] p-1 rounded-t-lg shadow-2xl shadow-black drop-shadow-2xl z-50 md:hidden">
      <NavLink
        to="/"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-600 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <HomeIcon size={28} />
      </NavLink>

      <hr className="bg-slate-300 dark:bg-slate-500 w-2 h-12"></hr>

      <NavLink
        to="/explore"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-600 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <ExploreIcon size={28} />
      </NavLink>

      <hr className="bg-slate-300 dark:bg-slate-500 w-2 h-12"></hr>

      <NavLink
        to="/liked"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-600 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <LikeIcon size={28} />
      </NavLink>

      <hr className="bg-slate-300 dark:bg-slate-500 w-2 h-12"></hr>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-600 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <BookmarkIcon size={28} />
      </NavLink>

      <hr className="bg-slate-300 dark:bg-slate-500 w-2 h-12"></hr>

      <NavLink
        to={`/profile/${user?.username}`}
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-600 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <div className="shrink-0">
          <img
            src={user?.avatarUrl}
            alt={`${user?.username}'s profile`}
            className="rounded-full h-[2rem] w-[2rem] object-cover"
          />
        </div>
      </NavLink>
    </div>
  );
}
