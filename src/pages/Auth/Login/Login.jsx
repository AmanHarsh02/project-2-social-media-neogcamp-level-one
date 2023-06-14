import { useEffect, useRef, useState } from "react";
import { BiUser as UserIcon, BiLockAlt as LockIcon } from "react-icons/bi";
import { FaEye as EyeIcon, FaEyeSlash as EyeOffIcon } from "react-icons/fa";
import { useLocation } from "react-router";
import { useAuth } from "../../../contexts/AuthContext";

export function Login() {
  const location = useLocation();
  const {
    authState: { username, password },
    authDispatch,
    loginValidation,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });

    loginValidation();
  };

  const handleGuestLogin = () => {
    authDispatch({ type: "SET_USERNAME", payload: "amanharsh" });
    authDispatch({ type: "SET_PASSWORD", payload: "amanharsh123" });
  };

  return (
    <div className="min-h-screen flex justify-between">
      <div className="bg-blue-400 grow hidden md:flex h-screen justify-center items-center">
        <h1>Logo</h1>
      </div>

      <div className="bg-blue-100 grow flex h-screen justify-center items-center">
        <form className="min-w-[50%]">
          <div className="flex flex-col gap-2 shadow-md rounded-md p-3 bg-blue-50">
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
              onClick={handleLogin}
              className="bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-300"
            >
              Login
            </button>
            <p
              onClick={handleGuestLogin}
              className="underline cursor-pointer text-center text-slate-600 hover:text-slate-800"
            >
              Set Test Credentials
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
