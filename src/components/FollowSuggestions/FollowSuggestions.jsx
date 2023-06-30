import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { UserCard } from "../index";

export function FollowSuggestions() {
  const { suggestedUsers } = useData();

  return (
    <div className="flex flex-col">
      <h3 className="p-2">Suggested for you</h3>

      <hr></hr>

      {suggestedUsers.map((user) => {
        return (
          <div key={user._id}>
            <UserCard user={user} options="follow" />

            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
