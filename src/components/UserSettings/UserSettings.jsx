import { useAuth } from "../../contexts/AuthContext";

export function UserSettings() {
  const { handleLogout } = useAuth();

  const handleClick = (e) => {
    const clickedOn = e.target?.dataset?.option;

    if (clickedOn === "logout") {
      handleLogout();
    } else if (clickedOn === "switch-theme") {
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-1 bg-white rounded-xl text-right overflow-hidden"
    >
      <h3
        data-option="logout"
        className="cursor-pointer hover:bg-slate-100 p-2 px-4"
      >
        Logout
      </h3>
      <hr></hr>
      <h3
        data-option="switch-theme"
        className="cursor-pointer hover:bg-slate-100 p-2 px-4"
      >
        Dark
      </h3>
    </div>
  );
}
