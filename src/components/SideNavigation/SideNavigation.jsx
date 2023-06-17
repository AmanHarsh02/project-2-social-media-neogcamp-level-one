import {
  BiHome as HomeIcon,
  BiRocket as ExploreIcon,
  BiBookmark as BookmarkIcon,
  BiLike as LikeIcon,
  BiUserCircle as UserIcon,
} from "react-icons/bi";
import { SlOptions as OptionsIcon } from "react-icons/sl";
import { NavLink } from "react-router-dom";

export function SideNavigation() {
  return (
    <div className="flex flex-col h-[100%] justify-between gap-4">
      <div className=" grow flex flex-col gap-4 p-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-200 hover:shadow-md"
        >
          <HomeIcon size={18} />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/explore"
          className="flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-200 hover:shadow-md"
        >
          <ExploreIcon size={18} />
          <p>Explore</p>
        </NavLink>
        <NavLink
          to="/bookmarks"
          className="flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-200 hover:shadow-md"
        >
          <BookmarkIcon size={18} />
          <p>Bookmarks</p>
        </NavLink>
        <NavLink
          to="/liked"
          className="flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-200 hover:shadow-md"
        >
          <LikeIcon size={18} />
          <p>Liked</p>
        </NavLink>
        <NavLink
          to="/profile/:userName"
          className="flex items-center gap-2 p-2 pr-6 w-max rounded-full text-xl font-medium hover:bg-blue-200 hover:shadow-md"
        >
          <UserIcon size={18} />
          <p>Profile</p>
        </NavLink>
      </div>

      <div className="cursor-pointer flex items-center gap-2 rounded-full overflow-hidden pl-2 pr-3 py-2 shadow-md bg-white hover:bg-blue-200">
        <div className="h-[100%] w-[25%] flex justify-center">
          <div className="h-[4rem] w-[4rem] rounded-full bg-blue-400"></div>
        </div>
        <div className="grow h-[100%] flex flex-col justify-center">
          <h3 className="-mb-1">Aman Harsh</h3>
          <p className="-mt-1 text-slate-500">@amanharsh</p>
        </div>
        <OptionsIcon className="" />
      </div>
    </div>
  );
}
