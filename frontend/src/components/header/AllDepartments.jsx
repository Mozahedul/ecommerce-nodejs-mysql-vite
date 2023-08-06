import { useEffect, useRef, useState } from "react";
import BarIcon from "../../assets/icons/BarIcon";

const AllDepartments = () => {
  const depRef = useRef();
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="relative mr-8">
      <button
        onClick={() => handleMenu()}
        className="flex w-72 items-center rounded-t-md bg-orange-400 px-4 py-2 text-left font-bold text-gray-700"
      >
        <BarIcon css="w-6 h-6 mr-2 " /> All Departments
      </button>
      <ul
        ref={depRef}
        className={`text-md absolute left-0 right-0 z-50 w-72 rounded-b-md bg-gray-50 px-4 text-gray-700 shadow-md ${
          show ? "block" : "hidden"
        }`}
      >
        <li className="cursor-pointer border-b-2 py-2 pl-1 font-bold hover:bg-gray-100">
          <a href="#">Value of the day</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 font-bold hover:bg-gray-100">
          <a href="#">Top 100 Offers</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 font-bold hover:bg-gray-100">
          <a href="#">New Arrivals</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">Computer & Accessories</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">Camera, Audio, & Video</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">Mobile & Tablets</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">Movie, Music, & Video Games</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">TV & Audio</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">Watches & Eyewear</a>
        </li>
        <li className="cursor-pointer border-b-2 py-2 pl-1 hover:bg-gray-100">
          <a href="#">Car, Motorbike, & Industrial</a>
        </li>
        <li className="cursor-pointer py-2 pl-1 hover:bg-gray-100">
          <a href="#">Accessories</a>
        </li>
      </ul>
    </div>
  );
};

export default AllDepartments;
