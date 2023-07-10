import { useEffect, useState } from "react";
import {
  BiUser as UserIcon,
  BiLockAlt as LockIcon,
  BiCaretRight as RightArrowIcon,
} from "react-icons/bi";
import { FaEye as EyeIcon, FaEyeSlash as EyeOffIcon } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useData } from "../../../contexts/DataContext";

export function Signup() {
  const location = useLocation();
  const {
    authState: { firstname, lastname, username, password, error },
    authDispatch,
    signupValidation,
  } = useAuth();
  const { setTitle } = useData();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    authDispatch({ type: "SET_USERNAME", payload: "" });
    authDispatch({ type: "SET_PASSWORD", payload: "" });
    authDispatch({
      type: "SET_ERROR",
      payload: "",
    });
    setTitle("Sign Up");
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });

    signupValidation();
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-blue-400 h-[10%] flex justify-center items-center">
        <h1 className="text-white">Join SnapSquad</h1>
      </div>

      <div className="bg-blue-100 dark:text-slate-800 flex grow justify-center items-center">
        <form
          onSubmit={handleSignup}
          className="w-[80%] max-w-[400px] md:w-[50%]"
        >
          <div className="flex flex-col gap-2 shadow-md rounded-md p-3 bg-blue-50">
            <div className="flex bg-white p-2 px-2 gap-1 items-center rounded-md outline outline-1 outline-gray-300  focus-within:outline-blue-400 focus-within:outline-1">
              <RightArrowIcon className="text-gray-400 h-5 w-5" />

              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                className="w-full outline-none"
                onChange={(e) =>
                  authDispatch({
                    type: "SET_FIRSTNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex bg-white p-2 px-2 gap-1 items-center rounded-md outline outline-1 outline-gray-300  focus-within:outline-blue-400 focus-within:outline-1">
              <RightArrowIcon className="text-gray-400 h-5 w-5" />

              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                className="w-full outline-none"
                onChange={(e) =>
                  authDispatch({
                    type: "SET_LASTNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex bg-white p-2 px-2 gap-1 items-center rounded-md outline outline-1 outline-gray-300  focus-within:outline-blue-400 focus-within:outline-1">
              <UserIcon className="text-gray-400 h-5 w-5" />

              <input
                type="text"
                placeholder="Username"
                value={username}
                className="w-full outline-none"
                onChange={(e) =>
                  authDispatch({
                    type: "SET_USERNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex bg-white p-2 px-2 gap-1 items-center rounded-md outline outline-1 outline-gray-300 focus-within:outline-blue-400 focus-within:outline-1">
              <LockIcon className="text-gray-400 h-5 w-5" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                className="w-full outline-none"
                onChange={(e) =>
                  authDispatch({
                    type: "SET_PASSWORD",
                    payload: e.target.value,
                  })
                }
              />

              {showPassword ? (
                <EyeOffIcon
                  className="text-gray-400 h-5 w-5 cursor-pointer hover:text-slate-800 hover:scale-[120%]"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeIcon
                  className="text-gray-400 h-5 w-5 cursor-pointer hover:text-slate-800 hover:scale-[120%]"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <button
              type="submit"
              value="submit"
              className="bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-300 mt-4"
            >
              Signup
            </button>

            <div className="mt-4">
              <span className="text-sm  mr-1">Already a user?</span>

              <NavLink
                to="/login"
                className="underline w-max cursor-pointer text-slate-600 hover:text-slate-800"
              >
                Login
              </NavLink>
            </div>

            {error && (
              <p className="text-red-600 text-center break-words">{`* ${error}`}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
