import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";
import { PostCard } from "../../components";

export function Profile() {
  const { userName } = useParams();
  const { users, getUserPosts, userPosts } = useData();

  useEffect(() => {
    getUserPosts(userName);
  }, [userPosts]);

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
  } = userFound ?? {
    firstName: "",
    lastName: "",
    username: "",
    avatarUrl: "",
    bio: "",
    website: "",
    followers: [],
    following: [],
  };

  return (
    <>
      <h2>{`${firstName} ${lastName}'s profile`}</h2>
      <div className="mt-4 overflow-y-auto ">
        <header className="relative flex justify-between border-slate-200 border-b">
          <img
            src={avatarUrl}
            alt={`${username}'s profile`}
            className="rounded-md"
          />
        </header>
        <main className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full relative">
            <div className="shrink-0 flex justify-between gap-2 mx-[1rem] sm:mx-[2rem]">
              <div className="flex flex-col gap-3 shrink-0 w-fit h-fit -mt-12 sm:-mt-20">
                <div className="relative">
                  <img
                    src={avatarUrl}
                    alt={`${username}'s profile`}
                    className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full object-cover outline outline-4 outline-gray-200"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium">{`${firstName} ${lastName}`}</h3>
                  <p>{`@${username}`}</p>
                </div>
              </div>
              <div>
                <button className="bg-blue-400 text-white p-2 px-4 mt-2 rounded-lg shadow-md hover:bg-blue-500">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="realtive w-full text-center md:text-left py-2 px-6">
              <p className="my-1">{bio}</p>
              <a href="/" target="blank">
                {website}
              </a>
              <div className="flex gap-4 my-1 justify-center md:justify-start text-slate-400 text-lg">
                <small className="cursor-pointer">{`${userPosts?.length} Posts`}</small>
                <small className="cursor-pointer">{`${followers.length} Followers`}</small>
                <small className="cursor-pointer">{`${following.length} Following`}</small>
              </div>
            </div>
          </div>
        </main>

        <hr className="h-0.5 w-full bg-slate-300"></hr>

        <div className="flex flex-col gap-[1.5rem] mt-4">
          {userPosts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      </div>
    </>
  );
}
