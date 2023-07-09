import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/DataContext";

export function UserSettings({ setShowUserSettings }) {
  const { handleLogout } = useAuth();
  const { theme, handleToggleTheme } = useData();

  const handleClick = (e) => {
    const clickedOn = e.target?.dataset?.option;

    if (clickedOn === "logout") {
      handleLogout();
    } else if (clickedOn === "switch-theme") {
      handleToggleTheme();
      setShowUserSettings(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-1 bg-white dark:bg-gray-600 rounded-xl text-right shadow-lg overflow-hidden"
    >
      <h3
        data-option="logout"
        className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 p-2 px-4"
      >
        Logout
      </h3>
      <hr></hr>
      <h3
        data-option="switch-theme"
        className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 p-2 px-4"
      >
        {theme === "light" ? "Dark" : "Light"}
      </h3>
    </div>
  );
}
