import { BiEditAlt as EditIcon, BiCamera as MediaIcon } from "react-icons/bi";
import { useData } from "../../contexts/DataContext";
import { usePost } from "../../contexts/PostContext";
import { useEffect, useRef, useState } from "react";

export function CreateNewPost({ postId, edit = false }) {
  const { user, posts } = useData();
  const { handleCreatePost, handleEditPost } = usePost();
  const [errorState, setErrorState] = useState(false);
  const postContentRef = useRef("");
  const mediaUrl = "";
  let selectedPost = null;

  if (edit) {
    selectedPost = posts.find(({ _id }) => _id === postId);
  }

  const handlePostClick = (e) => {
    const editOrPost = e.target.value;

    if (editOrPost === "Post") {
      if (postContentRef?.current?.value?.length <= 0) {
        setErrorState(true);
      } else {
        handleCreatePost(postContentRef?.current?.value);
        postContentRef.current.value = "";
      }
    } else {
      if (postContentRef?.current?.value?.length <= 0) {
        setErrorState(true);
      } else {
        handleEditPost(selectedPost?._id, postContentRef?.current?.value);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center gap-1 p-3">
        <EditIcon />
        <h2 className="font-normal">
          {edit ? "Edit Post" : "Create New Post"}
        </h2>
      </div>

      <hr></hr>

      <div className="flex flex-row gap-2 h-[130px] p-2">
        <div className="h-[100%] w-max flex justify-center ">
          <img
            src={user.avatarUrl}
            alt={`${user.username}'s Profile Image`}
            className="h-[4rem] w-[4rem] mt-1 rounded-full object-cover"
          />
        </div>

        <textarea
          ref={postContentRef}
          defaultValue={edit ? selectedPost?.content : ""}
          onChange={() => setErrorState(false)}
          placeholder="Have something to share? Why not post it here!"
          className="grow resize-none outline-none p-1 placeholder:font-light"
        />
      </div>

      <hr></hr>

      <div className="flex items-center justify-between p-3">
        <div className="flex gap-2 items-center">
          <button className="flex items-center gap-1 bg-blue-100 text-slate-400 px-4 py-1 rounded-2xl hover:bg-blue-200 hover:text-slate-800 hover:shadow-md">
            <MediaIcon />
            Media
          </button>
          <div className="cursor-pointer text-xl">😀</div>
        </div>

        <button
          onClick={handlePostClick}
          className="bg-blue-100 text-slate-400 px-4 py-1 rounded-2xl hover:bg-blue-200 hover:text-slate-800 hover:shadow-md"
        >
          {edit ? "Edit Post" : "Post"}
        </button>
      </div>

      {errorState && (
        <div className="flex px-4 pb-4 text-red-500">
          * Please write something to post!
        </div>
      )}
    </div>
  );
}
