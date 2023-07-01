import { useState } from "react";
import {
  BiUserCircle as UserIcon,
  BiEditAlt as EditIcon,
  BiCamera as MediaIcon,
} from "react-icons/bi";
import { AvatarOptions } from "../AvatarOptions/AvatarOptions";

export function EditProfile({ user, setShowEditProfile }) {
  const [showImageOption, setShowImageOption] = useState(false);
  const [showAvatarOption, setShowAvatarOption] = useState(false);
  const [selectedImage, setSelectedImage] = useState(user?.avatarUrl);

  const { firstName, lastName, username, avatarUrl, bio, website } = user ?? {
    firstName: "",
    lastName: "",
    username: "",
    avatarUrl: "",
    bio: "",
    website: "",
  };

  const handleClick = (e) => {
    const buttonClicked = e.target.innerText;

    if (buttonClicked === "Save") {
    } else {
      setShowEditProfile(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-800 bg-opacity-50 z-20">
      <div className="relative flex flex-col gap-2 w-[70%] max-w-[500px] bg-white p-4 rounded-lg">
        <div className="flex gap-2 items-center">
          <EditIcon size={24} />
          <h1 className="font-medium">Edit Profile</h1>
        </div>

        <div className="relative self-center">
          <div className="w-[140px] md:w-[240px] shrink-0 overflow-hidden p-4">
            <img
              src={selectedImage}
              alt={`${username}'s profile`}
              className="h-[100px] md:h-[210px] shrink-0 object-cover rounded-full shadow-md shadow-slate-600"
            />
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 cursor-pointer bg-slate-200 hover:bg-slate-300 w-max p-2 rounded-full shadow-md">
              <MediaIcon
                onClick={() => setShowImageOption(!showImageOption)}
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
            </div>
          </div>

          {showImageOption && (
            <div className="absolute -bottom-[4.5rem] -right-[1.5rem] md:right-[1.5rem] w-max bg-slate-200 rounded-lg overflow-hidden">
              <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-300 p-2">
                <MediaIcon className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
                <p>Upload profile picture</p>
              </div>

              <hr className="border-gray-400"></hr>

              <div
                onClick={() => {
                  setShowAvatarOption(!showAvatarOption);
                  setShowImageOption(!showImageOption);
                }}
                className="flex gap-1 items-center cursor-pointer hover:bg-slate-300 p-2"
              >
                <UserIcon className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
                <p>Change avatar</p>
              </div>
            </div>
          )}
        </div>

        <h3 className="font-medium">Username: @{username}</h3>

        <label className="flex flex-col">
          <small>First Name</small>
          <input
            type="text"
            defaultValue={firstName}
            className="max-w-[100%] border border-slate-400 px-2 py-1 rounded-md"
          />
        </label>

        <label className="flex flex-col">
          <small>Last Name</small>
          <input
            type="text"
            defaultValue={lastName}
            className="max-w-[100%] border border-slate-400 px-2 py-1 rounded-md"
          />
        </label>

        <label className="flex flex-col">
          <small>Bio</small>
          <input
            type="text"
            defaultValue={bio}
            className="max-w-[100%] border border-slate-400 px-2 py-1 rounded-md"
          />
        </label>

        <label className="flex flex-col">
          <small>Website</small>
          <input
            type="text"
            defaultValue={website}
            className="max-w-[100%] border border-slate-400 px-2 py-1 rounded-md"
          />
        </label>

        <div onClick={handleClick} className="flex flex-wrap gap-3 mt-6">
          <button className="bg-blue-400 text-white px-4 py-1 rounded-md hover:bg-blue-500">
            Save
          </button>
          <button className="bg-gray-400 text-white  px-4 py-1 rounded-md hover:bg-gray-500">
            Cancel
          </button>
        </div>

        {showAvatarOption && (
          <AvatarOptions
            setShowAvatarOption={setShowAvatarOption}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
    </div>
  );
}
