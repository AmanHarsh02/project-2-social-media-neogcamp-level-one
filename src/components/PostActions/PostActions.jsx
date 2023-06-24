import { useState } from "react";
import { usePost } from "../../contexts/PostContext";
import { GenericModal, CreateNewPost } from "../index";

export function PostActions({ postId }) {
  const { handleDeletePost } = usePost();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    const selectedAction = e.target.innerText;

    switch (selectedAction) {
      case "Edit": {
        setShowModal(!showModal);
        return;
      }
      case "Delete": {
        handleDeletePost(postId);
        return;
      }
      default:
        return;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="absolute right-4 top-12 text-right rounded-md overflow-hidden bg-slate-100 shadow-slate-600 shadow-md min-w-[100px]"
    >
      <p
        value="edit"
        className="cursor-pointer p-2 hover:bg-slate-200 hover:text-blue-400"
      >
        <strong>Edit</strong>
      </p>
      <hr className="border-slate-400"></hr>
      <p
        value="delete"
        className="cursor-pointer p-2 hover:bg-slate-200 hover:text-blue-400"
      >
        <strong>Delete</strong>
      </p>
      {showModal && (
        <GenericModal setShowModal={setShowModal}>
          <CreateNewPost postId={postId} edit={true} />
        </GenericModal>
      )}
    </div>
  );
}
