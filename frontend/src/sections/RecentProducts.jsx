import React from "react";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const RecentProducts = () => {
  return (
    <div className="pl-24 pr-24 bg-white mt-10 pt-6">
      {/* heading */}
      <div className="flex justify-between items-center border-b-2 pb-3">
        <h2 className="text-2xl text-gray-600">Recently Added</h2>
        <div>
          <button className="mr-1 text-gray-400 transition-all duration-500 hover:text-gray-600 focus:text-orange-400">
            <LeftArrowIcon css="w-5 h-5" />
          </button>
          <button className="text-gray-400 transition-all duration-500 hover:text-gray-600 focus:text-orange-400">
            <RightArrowIcon css="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Product cards */}
      <div></div>
      {/* slider dots */}
      <div></div>
    </div>
  );
};

export default RecentProducts;
