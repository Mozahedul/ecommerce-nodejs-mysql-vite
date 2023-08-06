import { useState } from "react";
import AllDepartments from "../components/header/AllDepartments";

const BottomHeader = () => {
  // const [hidden, setHidden] = useState("hidden");
  const [opacity, setOpacity] = useState("opacity-0");

  const handleMenu = () => {
    // hidden === "hidden" ? setHidden("flex") : setHidden("hidden");
    opacity === "opacity-0"
      ? setOpacity("opacity-100")
      : setOpacity("opacity-0");
  };

  return (
    <div className="relative flex h-10 items-center px-8 ">
      <AllDepartments />
      <button
        onClick={handleMenu}
        className="ml-auto rounded-md bg-orange-500 px-3 py-2 font-semibold text-white shadow-md transition-all duration-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
      >
        Menu
      </button>
      <div
        className={`${opacity} absolute right-8 top-10 z-40 flex w-1/2 flex-col whitespace-nowrap rounded-b-md bg-gray-100 p-3 shadow-xl transition-all  duration-500 lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:opacity-100 lg:shadow-none`}
      >
        <button className="rounded-md py-2 pl-3 pr-6 text-left font-semibold transition-all duration-500 hover:bg-gray-200 hover:text-orange-400 lg:py-1">
          <a href="#">Home</a>
        </button>
        <button className="rounded-md py-2 pl-3 pr-6 text-left font-semibold transition-all duration-500 hover:bg-gray-200 hover:text-orange-400 lg:px-6 lg:py-1">
          <a href="/shop">shop</a>
        </button>
        <button className="rounded-md py-2 pl-3 pr-6 text-left font-semibold transition-all duration-500 hover:bg-gray-200 hover:text-orange-400 lg:px-6 lg:py-1">
          <a href="/shop">Fashion</a>
        </button>
        <button className="rounded-md py-2 pl-3 pr-6 text-left font-semibold transition-all duration-500 hover:bg-gray-200 hover:text-orange-400 lg:px-6 lg:py-1">
          <a href="/shop">Electronics</a>
        </button>
        <button className="rounded-md py-2 pl-3 pr-6 text-left font-semibold transition-all duration-500 hover:bg-gray-200 hover:text-orange-400 lg:px-6 lg:py-1">
          <a href="/shop">Baby & Kids</a>
        </button>
        <button className="rounded-md py-2 pl-3 pr-6 text-left font-semibold transition-all duration-500 hover:bg-gray-200 hover:text-orange-400 lg:px-6 lg:py-1">
          <a href="/shop">Sports</a>
        </button>
      </div>
    </div>
  );
};

export default BottomHeader;
