import { SlOptions as OptionsIcon } from "react-icons/sl";
import { BiUserPlus as FollowIcon } from "react-icons/bi";
import { useData } from "../../contexts/DataContext";
import { NavLink, useNavigate } from "react-router-dom";

export function UserCard({ user, options, hideDetails }) {
  const { followUserHandler } = useData();
  const navigate = useNavigate();

  const handleUserAction = (e) => {
    if (options === "follow") {
      followUserHandler(user._id);
    }
  };

  const handleNavigate = (e) => {
    if (e.target.closest("#icon-div") !== null) return;

    if (options === "follow" || options === "followDetails") {
      navigate(`/profile/${user.username}`);
    }
  };

  return (
    <div
      onClick={(e) => handleNavigate(e)}
      className={`cursor-pointer flex items-center gap-2 min-h-[80px] ${
        options === "profile" ? "rounded-xl " : ""
      } overflow-hidden pl-2 pr-3 py-2 ${
        options === "profile" ? "shadow-md" : ""
      } bg-white hover:bg-slate-100`}
    >
      <div
        className={`h-[100%] w-max flex justify-center grow ${
          options === "profile" && "shrink-0"
        }`}
      >
        <img
          src={user.avatarUrl}
          alt={`${user.username}'s Profile Image`}
          className="h-[4rem] w-[4rem] rounded-full object-cover"
        />
      </div>

      <div
        className={`grow h-[100%] lg:flex flex-col justify-center  ${
          !hideDetails ? "" : "md:hidden"
        } `}
      >
        <h3 className="-mb-1">{`${user.firstName} ${user.lastName}`}</h3>
        <p className="-mt-1 text-slate-500">{`@${user.username}`}</p>
      </div>

      <div data-icon="yes" id="icon-div" onClick={(e) => handleUserAction(e)}>
        {options === "profile" && (
          <OptionsIcon className="text-slate-400 h-[2rem] w-[2rem] p-2 rounded-full hover:bg-slate-200 hover:fill-blue-400 md:hidden lg:block" />
        )}
        {options === "follow" && (
          <FollowIcon className="text-slate-400 h-[2.5rem] w-[2.5rem] p-2 rounded-full hover:bg-slate-200 hover:fill-blue-400 z-10" />
        )}
      </div>
    </div>
  );
}
