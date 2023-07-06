import { useState } from "react";
import { FaSortAmountDown as SortIcon } from "react-icons/fa";
import { useData } from "../../contexts/DataContext";

export function PostSortingOptions() {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const { dataDispatch } = useData();

  const handleClick = (e) => {
    const selectedMethod = e.target?.dataset?.sort;

    if (selectedMethod) {
      dataDispatch({ type: "SET_SORT_METHOD", payload: selectedMethod });
      setShowSortOptions(false);
    }
  };

  return (
    <div className="relative self-end flex flex-col gap-2">
      <div
        onClick={() => setShowSortOptions(!showSortOptions)}
        className="self-end mr-4 bg-white hover:bg-blue-50 p-2 rounded-lg shadow-lg cursor-pointer"
      >
        <SortIcon size={24} />
      </div>

      {showSortOptions && (
        <div
          onClick={handleClick}
          className="absolute -bottom-[6rem] right-0 z-10 mr-4 w-max bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <h3
            data-sort="latest"
            className="p-2 cursor-pointer hover:bg-slate-100"
          >
            Latest First
          </h3>
          <hr></hr>
          <h3
            data-sort="trending"
            className="p-2 cursor-pointer hover:bg-slate-100"
          >
            Trending First
          </h3>
        </div>
      )}
    </div>
  );
}
