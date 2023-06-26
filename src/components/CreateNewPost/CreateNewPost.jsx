import { BiEditAlt as EditIcon, BiCamera as MediaIcon } from "react-icons/bi";
import { useData } from "../../contexts/DataContext";
import { usePost } from "../../contexts/PostContext";
import { useEffect, useRef, useState } from "react";

export function CreateNewPost({ postId, edit = false }) {
  const { user, posts } = useData();
  const { handleCreatePost, handleEditPost, handleMediaUpload } = usePost();
  const [selectedPost, setSelectedPost] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [mediaUrl, setMediaUrl] = useState("");
  const postContentRef = useRef("");
  let postFound = null;

  useEffect(() => {
    if (edit) {
      postFound = posts.find(({ _id }) => _id === postId);
      setSelectedPost(postFound);
    }
  }, []);

  useEffect(() => {
    setMediaUrl(selectedPost?.mediaURL);
  }, [selectedPost]);

  const handlePostClick = (e) => {
    const editOrPost = e.target.innerText;

    if (editOrPost === "Post") {
      if (postContentRef?.current?.value?.length <= 0) {
        setErrorState(true);
      } else {
        handleCreatePost(postContentRef?.current?.value, mediaUrl);
        postContentRef.current.value = "";
        setMediaUrl("");
      }
    } else {
      if (postContentRef?.current?.value?.length <= 0) {
        setErrorState(true);
      } else {
        handleEditPost(
          selectedPost?._id,
          postContentRef?.current?.value,
          mediaUrl
        );
      }
    }
  };

  const handleMediaClick = async (e) => {
    const response = await handleMediaUpload(e.target.files[0]);

    if (response) {
      setMediaUrl(response);
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

      <div className="flex flex-row gap-2 h-max p-2">
        <div className="h-[100%] w-max flex justify-center ">
          <img
            src={user.avatarUrl}
            alt={`${user.username}'s Profile Image`}
            className="h-[4rem] w-[4rem] mt-1 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 grow">
          <textarea
            ref={postContentRef}
            defaultValue={edit ? selectedPost?.content : ""}
            onChange={() => setErrorState(false)}
            placeholder="Have something to share? Why not post it here!"
            className="resize-none outline-none p-1 placeholder:font-light min-h-[150px]"
          />

          {mediaUrl && <hr></hr>}

          {mediaUrl && (
            <img
              src={mediaUrl}
              alt="post"
              className="w-max max-h-[150px] rounded-md"
            />
          )}
        </div>
      </div>

      <hr></hr>

      <div className="flex items-center justify-between p-3">
        <div className="flex gap-2 items-center">
          <label className="flex items-center gap-1 cursor-pointer bg-blue-100 text-slate-400 px-4 py-1 rounded-2xl hover:bg-blue-200 hover:text-slate-800 hover:shadow-md">
            <input
              type="file"
              onChange={(e) => handleMediaClick(e)}
              className="hidden"
            />
            <MediaIcon />
            Media
          </label>
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

      {mediaUrl && (
        <div className="flex px-4 pb-4 text-green-500">
          * Media uploaded successfully!
        </div>
      )}
    </div>
  );
}
