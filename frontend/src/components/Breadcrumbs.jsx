import React from "react";
import { Link } from "react-router-dom";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const Breadcrumbs = () => {
  return (
    <div className="mt-6 flex items-center overflow-auto whitespace-nowrap px-8 pb-2">
      <Link to="/">
        <button className="text-sm font-medium text-gray-600">Home</button>
      </Link>
      <RightArrowIcon css="w-4 h-4 inline-block ml-3 mr-3" />
      <Link to="#">
        <button className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-500 hover:bg-gray-300 hover:text-white">
          Laptops & Computers
        </button>
      </Link>
      <RightArrowIcon css="w-4 h-4 inline-block ml-2 mr-2" />
      <Link to="#">
        <button className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-500 hover:bg-gray-300 hover:text-white">
          Ultrabooks
        </button>
      </Link>
      <RightArrowIcon css="w-4 h-4 inline-block ml-2 mr-2" />
      <Link to="/">
        <button className="text-sm font-medium text-gray-600">
          Tablet Red EliteBook Revolve 810 G2
        </button>
      </Link>
    </div>
  );
};

export default Breadcrumbs;
