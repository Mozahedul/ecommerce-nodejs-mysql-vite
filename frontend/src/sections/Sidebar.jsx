import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../assets/icons/CloseIcon";

const Sidebar = ({ width, setWidth }) => {
  const sidebarRef = useRef();

  console.log("REFERENCE ==> ", sidebarRef);
  const handleClose = () => {
    setWidth(0);
  };

  useEffect(() => {
    document.addEventListener("mouseup", event => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setWidth(0);
      }
    });
  }, [setWidth]);
  return (
    <>
      <div className={`${width > 0 ? "bg-dark-transparent" : ""}`}></div>

      <nav
        ref={sidebarRef}
        className={`fixed transition ease-in-out duration-500 overflow-x-hidden top-0 h-full bg-white pt-12  drop-shadow-lg z-50`}
        style={{
          width: "280px",
          left: "-280px",
          transform: `translateX(${width}px)`,
        }}
      >
        <button
          className="absolute top-2 right-2 mt-2 mr-2 text-red-700 hover:text-red-500"
          onClick={() => handleClose()}
        >
          <CloseIcon css="w-6 h-6" />
        </button>
        <ul>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Value of the day</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Top 100 offers</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">New Arrival</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Computers & accessories</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Camera, audio, & videos</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Mobile & tablets</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Mobile & tablets</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Movies, Music, & Video Games</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">TV & Audio</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Watches & EyeWear</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Car, Motorbike, & Industrial</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Accessories</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  width: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
};

export default Sidebar;
