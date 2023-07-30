import { useEffect, useRef, useState } from "react";
import BarIcon from "../../assets/icons/BarIcon";

const AllDepartments = () => {
  const depRef = useRef();
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <div className="relative mr-6">
      <button
        onClick={() => handleMenu()}
        className="bg-orange-400 w-72 text-left rounded-t-md py-2 px-4 flex items-center font-bold text-gray-700"
      >
        <BarIcon css="w-6 h-6 mr-2 " /> All Departments
      </button>
      <ul
        ref={depRef}
        className={`absolute left-0 right-0 bg-gray-50 px-4 text-md text-gray-700 ${
          show ? "block" : "hidden"
        }`}
      >
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2 font-bold">
          <a href="#">Value of the day</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2 font-bold">
          <a href="#">Top 100 Offers</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2 font-bold">
          <a href="#">New Arrivals</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">Computer & Accessories</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">Camera, Audio, & Video</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">Mobile & Tablets</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">Movie, Music, & Video Games</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">TV & Audio</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">Watches & Eyewear</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1 border-b-2">
          <a href="#">Car, Motorbike, & Industrial</a>
        </li>
        <li className="py-2 hover:bg-gray-100 cursor-pointer pl-1">
          <a href="#">Accessories</a>
        </li>
      </ul>
    </div>
  );
};

export default AllDepartments;
