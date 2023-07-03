import { Oval } from "react-loader-spinner";
import { useData } from "../../contexts/DataContext";
import { PostCard } from "../index";

export function UserFeed() {
  const { userFeed, postsLoading } = useData();

  return (
    <div className="h-max flex flex-col gap-6">
      {postsLoading && (
        <div className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] self-center">
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

      {userFeed.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
}
