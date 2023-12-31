import { BiArrowBack as BackIcon } from "react-icons/bi";
import {
  BsSunFill as SunIcon,
  BsFillMoonStarsFill as MoonIcon,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

export function Navbar({ path }) {
  const navigate = useNavigate();
  const { theme, handleToggleTheme } = useData();

  return (
    <div
      className={`h-[60px] flex items-center justify-between gap-1 ${
        path === "Home" ? "px-4 md:px-2" : ""
      } ${
        path === "Explore" ? "mb-4" : ""
      } pr-16 md:pr-2 sticky top-0 bg-transparent backdrop-blur-md z-30 border-b-[1px] border-x-[1px] border-gray-300 dark:border-gray-700`}
    >
      <div className="flex items-center gap-1">
        {path !== "Home" && (
          <div
            onClick={() => navigate(-1)}
            className="cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-slate-700 rounded-full"
          >
            <BackIcon size={24} className="text-blue-400" />
          </div>
        )}

        <h1 className="text-blue-400">{path}</h1>
      </div>

      {theme === "light" ? (
        <div
          onClick={handleToggleTheme}
          className="cursor-pointer p-2 hover:bg-gray-300 text-gray-600 rounded-full"
        >
          <MoonIcon className="text-lg md:text-xl" />
        </div>
      ) : (
        <div
          onClick={handleToggleTheme}
          className="cursor-pointer p-2 hover:bg-gray-600 text-gray-300 rounded-full"
        >
          <SunIcon className="text-lg md:text-xl" />
        </div>
      )}
    </div>
  );
}
