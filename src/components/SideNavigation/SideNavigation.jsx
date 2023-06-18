import {
  BiHome as HomeIcon,
  BiRocket as ExploreIcon,
  BiBookmark as BookmarkIcon,
  BiLike as LikeIcon,
  BiUserCircle as UserIcon,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { UserCard } from "../UserCard/UserCard";

export function SideNavigation() {
  const { user } = useData();

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className=" grow flex flex-col gap-4 p-4">
        <NavLink
          to="/"
          className={({ isActive }) => {
            const classes =
              "flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-100 hover:shadow-md";

            return isActive ? `${classes} text-blue-400 font-bold` : classes;
          }}
        >
          <HomeIcon size={18} />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) => {
            const classes =
              "flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-100 hover:shadow-md";

            return isActive ? `${classes} text-blue-400 font-bold` : classes;
          }}
        >
          <ExploreIcon size={18} />
          <p>Explore</p>
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) => {
            const classes =
              "flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-100 hover:shadow-md";

            return isActive ? `${classes} text-blue-400 font-bold` : classes;
          }}
        >
          <BookmarkIcon size={18} />
          <p>Bookmarks</p>
        </NavLink>
        <NavLink
          to="/liked"
          className={({ isActive }) => {
            const classes =
              "flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-100 hover:shadow-md";

            return isActive ? `${classes} text-blue-400 font-bold` : classes;
          }}
        >
          <LikeIcon size={18} />
          <p>Liked</p>
        </NavLink>
        <NavLink
          to="/profile/:userName"
          className={({ isActive }) => {
            const classes =
              "flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-100 hover:shadow-md";

            return isActive ? `${classes} text-blue-400 font-bold` : classes;
          }}
        >
          <UserIcon size={18} />
          <p>Profile</p>
        </NavLink>
      </div>

      <UserCard user={user} options="profile" />
    </div>
  );
}
