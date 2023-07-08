import { useState } from "react";
import { useData } from "../../contexts/DataContext";
import { UserCard } from "../UserCard/UserCard";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { users } = useData();

  const searchResult =
    searchValue.trim() &&
    users.filter(
      ({ firstName, lastName, username }) =>
        firstName.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
        lastName.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
        username.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
        `${firstName.toLowerCase()} ${lastName.toLowerCase()}`
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase())
    );

  return (
    <div className="flex flex-col shrink-0 bg-white dark:bg-gray-600 rounded-lg border-2 border-white dark:border-gray-800 focus-within:border-blue-400">
      <label className="font-medium w-full flex items-center py-0 px-2">
        Search:
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="search for users..."
          className="w-full p-2 outline-none border-none font-normal dark:bg-gray-600"
        />
      </label>

      {searchResult && (
        <div className="absolute bottom-0 left-auto right-auto top-12 rounded-lg h-max max-h-[50%] overflow-y-auto [&::-webkit-scrollbar]:hidden overflow-hidden shadow-xl w-[80%] self-center">
          {searchResult.map((user) => {
            return (
              <div key={user._id}>
                <UserCard user={user} options="followDetails" />

                <hr></hr>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
