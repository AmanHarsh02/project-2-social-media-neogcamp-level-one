import { BiEditAlt as EditIcon, BiCamera as MediaIcon } from "react-icons/bi";

export function CreateNewPost() {
  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center gap-1 p-3">
        <EditIcon />
        <h2 className="font-normal">Create New Post</h2>
      </div>

      <hr></hr>

      <div className="flex flex-row gap-2 h-[130px] p-2">
        <div className="h-[100%] w-[10%] flex justify-center ">
          <div className="h-[4rem] w-[4rem] mt-1 rounded-full bg-blue-400"></div>
        </div>

        <textarea
          placeholder="Have something to share? Why not post it here"
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

        <button className="bg-blue-100 text-slate-400 px-4 py-1 rounded-2xl hover:bg-blue-200 hover:text-slate-800 hover:shadow-md">
          Post
        </button>
      </div>
    </div>
  );
}
