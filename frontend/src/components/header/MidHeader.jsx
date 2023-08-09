// import React, { useEffect, useState } from "react";
import { useState } from "react";
import CompareIcon from "../../assets/icons/CompareIcon";
import MenubarIcon from "../../assets/icons/MenubarIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShopingIcon from "../../assets/icons/ShopingIcon";
import UserIcon from "../../assets/icons/UserIcon";
import WishlistIcon from "../../assets/icons/WishlistIcon";
import Sidebar from "../../sections/Sidebar";
import CloseIcon from "../../assets/icons/CloseIcon";

const MidHeader = () => {
  const [hidden, setHidden] = useState("hidden");
  const [searchBtn, setSearchBtn] = useState("block");
  const [closeBtn, setCloseBtn] = useState("hidden");
  const [width, setWidth] = useState(0);

  const handleSideBar = () => {
    setWidth(320);
  };

  const handleSearch = () => {
    hidden === "hidden" ? setHidden("flex") : setHidden("hidden");
    searchBtn === "block" ? setSearchBtn("hidden") : setSearchBtn("block");
    closeBtn === "hidden" ? setCloseBtn("block") : setCloseBtn("hidden");
  };

  return (
    <div className="flex items-center justify-between border-b-2 px-8 py-5 md:py-6">
      <div>
        <img className="w-24 md:w-32" src="/logo.svg" alt="logo" />
      </div>
      {/* Search bar */}
      <div className="flex items-center justify-between">
        <button onClick={() => handleSideBar()} className="hidden lg:block">
          <MenubarIcon css="inline-block w-8 h-8 mr-6" />
        </button>
        <Sidebar width={width} setWidth={setWidth} />
        <div className="flex">
          {/* search button */}
          <button
            onClick={handleSearch}
            className={`order-2 ${searchBtn} transition-all duration-500 lg:hidden`}
          >
            <SearchIcon css="inline-block text-gray-600 w-8 h-6 m-2" />
          </button>
          {/* search close button */}
          <button
            onClick={handleSearch}
            className={`order-2 ${closeBtn} transition-all duration-500 lg:hidden`}
          >
            <CloseIcon css="inline-block text-gray-600 w-8 h-6 m-2" />
          </button>
          {/* Search section */}
          <div
            className={`${hidden} absolute left-4 right-4 top-28 z-50 order-1 items-center border-2 bg-white transition-all duration-500 md:absolute md:left-36 md:right-36 lg:relative lg:left-0 lg:top-0  lg:flex`}
          >
            <form>
              <input
                type="search"
                placeholder="Search for products"
                className="border-none bg-transparent p-2 outline-none"
              />
            </form>
            <div className="ml-auto overflow-x-hidden pr-2">
              <select className="border-none bg-transparent text-gray-500 outline-none">
                <option>All Categories</option>
                <option>Accessories</option>
                <option>Camera & Photography</option>
                <option>Computer Components</option>
                <option>Gadgets</option>
                <option>Home Entertainment</option>
                <option>Printers & Ink</option>
                <option>Smart Phones & Tablets</option>
                <option>TV & Audio</option>
                <option>Video Games & Consoles</option>
                <option>Stereo</option>
                <option>Home Theatre</option>
                <option>Bluetooth Speakers</option>
                <option>Headphones</option>
                <option>Speakers</option>
              </select>
            </div>
            <div className="h-full bg-orange-400">
              <button className="hover:bg-orange-500">
                <SearchIcon css="text-white w-8 h-6 m-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="group relative mr-3 lg:mr-10">
          <CompareIcon css="md:w-6 md:h-6 w-4 h-4 " />
          <span className="absolute left-3 top-8 -translate-x-2/4 rounded-md bg-black pb-1 pl-2 pr-2 pt-1 text-sm text-white opacity-0 group-hover:opacity-100">
            Compare
          </span>
        </button>
        <button className="group relative mr-3 lg:mr-10">
          <WishlistIcon css="md:w-6 md:h-6 w-4 h-4 " />
          <span className="absolute left-2 top-8 -translate-x-2/4 rounded-md bg-black pb-1 pl-2 pr-2 pt-1 text-sm text-white opacity-0 group-hover:opacity-100">
            Wishlist
          </span>
        </button>
        <button className="group relative mr-3 lg:mr-10">
          <UserIcon css="md:w-6 md:h-6 w-4 h-4 " />
          <span className="absolute left-2 top-8 -translate-x-2/4 rounded-md bg-black pb-1 pl-2 pr-2 pt-1 text-sm text-white opacity-0 group-hover:opacity-100">
            Account
          </span>
        </button>
        <button className="group relative">
          <ShopingIcon css="md:w-6 md:h-6 w-4 h-4 " />
          <span className="absolute left-2 top-8 -translate-x-2/4 rounded-md bg-black pb-1 pl-2 pr-2 pt-1 text-sm text-white opacity-0 group-hover:opacity-100">
            Cart
          </span>
          <span className="absolute left-2 top-4 rounded-full bg-orange-200 px-1 text-sm">
            0
          </span>
          <span className="absolute -left-3 -top-5 rounded-full bg-gray-200 px-1 text-sm font-semibold">
            $0.00
          </span>
        </button>
      </div>
    </div>
  );
};

export default MidHeader;
