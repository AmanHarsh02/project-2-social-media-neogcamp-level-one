import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";

export function Profile() {
  const { userName } = useParams();
  const { users } = useData();

  const userFound = users.find(({ username }) => username === userName);

  const {
    firstName,
    lastName,
    username,
    avatarUrl,
    bio,
    website,
    followers,
    following,
  } = userFound;

  return (
    <>
      <h2>{`${firstName} ${lastName}'s profile`}</h2>

      <div className="mt-4">
        <div>
          <img
            src={avatarUrl}
            alt={`${username}'s profile`}
            className="rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center w-max translate-y-[-30%] translate-x-[10%] sm:translate-y-[-40%] sm:translate-x-[25%]">
            <img
              src={avatarUrl}
              alt={`${username}'s profile`}
              className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full object-cover outline outline-4 outline-gray-200"
            />
            <div>
              <h3>{`${firstName} ${lastName}`}</h3>
              <p>{`@${username}`}</p>
            </div>
          </div>
          <div>
            <button className="bg-blue-400 text-white p-2 px-4 rounded-lg shadow-md hover:bg-blue-500 translate-y-[20%] translate-x-[-10%] sm:translate-x-[-25%]">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
