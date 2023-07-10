import { useState } from "react";
import { FaSortAmountDown as SortIcon } from "react-icons/fa";
import {
  BiTimeFive as TimeIcon,
  BiTrendingUp as TrendingIcon,
} from "react-icons/bi";
import { useData } from "../../contexts/DataContext";

export function PostSortingOptions() {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const { dataDispatch } = useData();

  const handleClick = (e) => {
    const selectedMethod = e.target.closest("#sort")?.dataset?.sort;

    if (selectedMethod) {
      dataDispatch({ type: "SET_SORT_METHOD", payload: selectedMethod });
      setShowSortOptions(false);
    }
  };

  return (
    <div className="relative self-end flex flex-col gap-2">
      <div
        onClick={() => setShowSortOptions(!showSortOptions)}
        className="self-end bg-white dark:bg-gray-600 hover:bg-blue-50 dark:hover:bg-gray-500 p-2 rounded-lg shadow-lg cursor-pointer"
      >
        <SortIcon size={24} />
      </div>

      {showSortOptions && (
        <div
          onClick={handleClick}
          className="absolute -bottom-[6rem] right-0 z-10 mr-2 w-max bg-white dark:bg-gray-600 rounded-lg shadow-lg dark:shadow-gray-700 overflow-hidden"
        >
          <div
            id="sort"
            data-sort="latest"
            className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-blue-400 "
          >
            <TimeIcon />
            <p>
              <strong>Latest First</strong>
            </p>
          </div>

          <hr></hr>

          <div
            id="sort"
            data-sort="trending"
            className="flex items-center gap-1 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-blue-400 "
          >
            <TrendingIcon />
            <p>
              <strong>Trending First</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
