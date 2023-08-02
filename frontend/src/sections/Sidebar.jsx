import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../assets/icons/CloseIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";

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
        className={`fixed pb-6 transition ease-in-out duration-500 overflow-x-hidden top-0 h-full bg-white pt-12  drop-shadow-lg z-50`}
        style={{
          width: "320px",
          left: "-320px",
          transform: `translateX(${width}px)`,
        }}
      >
        <img
          src="/logo.svg"
          alt="home logo"
          className="w-24 mt-3 ml-2 absolute top-2 left-2"
        />
        <button
          className="absolute top-2 right-2 mt-2 mr-2 bg-gray-100 text-black p-1.5 rounded-lg transition-all duration-500 hover:text-red-500 hover:bg-gray-300"
          onClick={() => handleClose()}
        >
          <CloseIcon css="w-4 h-4" />
        </button>

        <div className="ml-3 mt-6 text-xs text-gray-400 uppercase">
          Main Menu
        </div>
        <ul className="mt-3 font-bold">
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Home</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Shop</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">About Us</a>
          </li>
          <li className="py-2 pl-4 border-b-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Contact Us</a>
          </li>
          <li className="py-2 pl-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="ml-3 mt-6 text-xs text-gray-400 uppercase">
          Category Menu
        </div>
        <ul className="mt-3 font-bold">
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
          <li className="py-2 pl-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
            <a href="#">Accessories</a>
          </li>
        </ul>
        <div className="ml-3 mt-6 text-xs text-gray-400 uppercase">
          Contact Details
        </div>
        <div className="ml-3 mt-2">
          <p className="font-bold">
            <PhoneIcon css="w-4 h-4 inline-block mr-2" />
            111-11-111
          </p>
          <p className="text-gray-400 text-sm ml-2">
            You can call anytime from 9 am to 6 pm.
          </p>
        </div>
        <div className="ml-3 mt-2">
          <p className="font-bold">
            <PhoneIcon css="w-4 h-4 inline-block mr-2" />
            mozahedul@ecom.com
          </p>
          <p className="text-gray-400 text-sm ml-2">
            The e-mail you sent will be returned as soon as possible.
          </p>
        </div>
        <div className="ml-3 mt-10">
          <p className="text-sm text-gray-500">
            Copyright 2023 © ecom website limited. All right reserved. Powered
            by ecom Theme.
          </p>
        </div>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  width: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
};

export default Sidebar;
