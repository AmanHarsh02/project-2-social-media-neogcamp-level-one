import {
  BiHome as HomeIcon,
  BiRocket as ExploreIcon,
  BiBookmark as BookmarkIcon,
  BiLike as LikeIcon,
  BiUserCircle as UserIcon,
  BiEditAlt as EditIcon,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex gap-2 justify-around items-center bg-gray-200 w-[100%] p-2 rounded-t-lg shadow-2xl shadow-black drop-shadow-2xl z-10 md:hidden">
      <NavLink
        to="/"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <HomeIcon size={32} />
      </NavLink>

      <hr className="bg-slate-300 w-2 h-12"></hr>

      <NavLink
        to="/explore"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <ExploreIcon size={32} />
      </NavLink>

      <hr className="bg-slate-300 w-2 h-12"></hr>

      <NavLink
        to="/liked"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <LikeIcon size={32} />
      </NavLink>

      <hr className="bg-slate-300 w-2 h-12"></hr>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) => {
          const classes =
            "flex items-center justify-center gap-2 p-2 w-full rounded-sm text-xl font-medium hover:bg-slate-300 hover:shadow-md";

          return isActive ? `${classes} text-blue-400 font-bold` : classes;
        }}
      >
        <BookmarkIcon size={32} />
      </NavLink>
    </div>
  );
}
