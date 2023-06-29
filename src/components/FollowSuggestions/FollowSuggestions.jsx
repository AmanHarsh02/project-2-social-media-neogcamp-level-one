import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { UserCard } from "../index";

export function FollowSuggestions() {
  const { user, users } = useData();

  const suggestedUsers = users.filter(
    (suggestedUser) =>
      suggestedUser._id !== user._id &&
      !user.following.includes(suggestedUser.username)
  );

  return (
    <div className="flex flex-col">
      <h3 className="p-2">Suggested for you</h3>

      <hr></hr>

      {suggestedUsers.map((user) => {
        return (
          <NavLink to={`/profile/${user.username}`} key={user._id}>
            <UserCard user={user} options="follow" />

            <hr></hr>
          </NavLink>
        );
      })}
    </div>
  );
}
