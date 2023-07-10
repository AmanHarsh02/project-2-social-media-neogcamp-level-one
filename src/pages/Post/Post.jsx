import { useParams } from "react-router-dom";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import { Navbar, PostCard } from "../../components/index";
import { useData } from "../../contexts/DataContext";
import { Oval } from "react-loader-spinner";

export function Post() {
  const { postId } = useParams();
  const { post, getPost, postLoading } = usePost();
  const { posts, setTitle } = useData();

  useEffect(() => setTitle("Post"), []);

  useEffect(() => {
    getPost(postId);
  }, [posts]);

  return (
    <div>
      <Navbar path="Post" />

      <div className="flex flex-col gap-6 px-4 md:px-0 mt-4">
        {post?._id === postId && <PostCard post={post} showComment={true} />}
        {postLoading && (
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
      </div>
    </div>
  );
}
