import { useState } from "react";
import { usePost } from "../../contexts/PostContext";
import { GenericModal, CreateNewPost } from "../index";
import { BiEditAlt as EditIcon } from "react-icons/bi";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";

export function PostActions({ postId, setShowPostActions }) {
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
      className="absolute right-4 top-12 rounded-md overflow-hidden bg-slate-100 dark:bg-gray-700 shadow-slate-600 shadow-md min-w-[100px]"
    >
      <div className="flex items-center gap-1 cursor-pointer p-2 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-400">
        <EditIcon />
        <p>Edit</p>
      </div>

      <hr className="border-slate-400"></hr>

      <div className="flex items-center gap-1 text-red-500 cursor-pointer p-2 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-red-500">
        <DeleteIcon />
        <p>Delete</p>
      </div>

      {showModal && (
        <GenericModal setShowModal={setShowModal}>
          <CreateNewPost postId={postId} edit={true} />
        </GenericModal>
      )}
    </div>
  );
}
