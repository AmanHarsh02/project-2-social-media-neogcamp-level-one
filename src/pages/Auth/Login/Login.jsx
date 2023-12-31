import { useEffect, useState } from "react";
import { BiUser as UserIcon, BiLockAlt as LockIcon } from "react-icons/bi";
import { FaEye as EyeIcon, FaEyeSlash as EyeOffIcon } from "react-icons/fa";
import { useLocation } from "react-router";
import { useAuth } from "../../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import login_page_logo from "../../../assets/login_page_logo.svg";
import { useData } from "../../../contexts/DataContext";

export function Login() {
  const location = useLocation();
  const {
    authState: { username, password, error },
    authDispatch,
    loginValidation,
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
    setTitle("Login");
  }, []);

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
    authDispatch({
      type: "SET_ERROR",
      payload: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-between">
      <div className="bg-blue-400 w-[50%] hidden md:flex h-screen justify-center items-center">
        <div className="flex flex-col items-center gap-4  w-[40%]">
          <img src={login_page_logo} alt="logo" className="w-[100%]" />
          <h1 className="text-white font-medium text-3xl">SnapSquad</h1>
        </div>
      </div>

      <div className="bg-blue-100 dark:text-slate-800 w-[50%] grow flex flex-col gap-4 h-screen justify-center items-center">
        <h1 className="text-blue-400 font-medium md:hidden">
          Login to SnapSquad
        </h1>
        <form
          onSubmit={handleLogin}
          className="w-[80%] max-w-[400px] md:w-[50%]"
        >
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
            <div className="text-sm mb-4">
              <span className="mr-1">New user?</span>

              <NavLink
                to="/signup"
                className="w-max underline underline-offset-2 text-slate-600 hover:text-slate-800"
              >
                Sign-up
              </NavLink>
            </div>
            <button
              type="submit"
              value="submit"
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
            {error && (
              <p className="text-red-600 text-center break-words">{`* ${error}`}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
