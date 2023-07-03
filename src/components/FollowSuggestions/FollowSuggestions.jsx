import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { UserCard } from "../index";
import { Oval } from "react-loader-spinner";

export function FollowSuggestions() {
  const { suggestedUsers, usersLoading } = useData();

  return (
    <div className="flex flex-col">
      <h3 className="p-2">Suggested for you</h3>

      <hr></hr>

      {usersLoading && (
        <div className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] self-center mt-2">
          <Oval
            height={"100%"}
            width={"100%"}
            color="#42A5F5"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#90CAF9"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}

      {suggestedUsers.length === 0 && (
        <p className="p-2">No suggestions for now!</p>
      )}

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
