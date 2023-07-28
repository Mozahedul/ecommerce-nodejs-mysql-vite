// import React, { useEffect, useState } from "react";
import MenubarIcon from "../../assets/icons/MenubarIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import CompareIcon from "../../assets/icons/CompareIcon";
import WishlistIcon from "../../assets/icons/WishlistIcon";
import UserIcon from "../../assets/icons/UserIcon";
import ShopingIcon from "../../assets/icons/ShopingIcon";

const MidHeader = () => {
  return (
    <div className="pl-24 pr-24 pt-6 pb-6 flex items-center justify-between">
      <div>
        <img className="w-32" src="../../../public/logo.svg" alt="logo" />
      </div>
      {/* Search bar */}
      <div className="flex items-center">
        <button>
          <MenubarIcon css="inline-block w-8 h-8 mr-6" />
        </button>
        <div className="flex items-center border-2 border-orange-400">
          <form>
            <input
              type="search"
              placeholder="Search for products"
              className="border-none outline-none p-2"
            />
          </form>
          <div className="pr-2">
            <select className="text-gray-500 border-none outline-none">
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
          <div className="bg-orange-400 h-full">
            <button className="hover:bg-orange-500">
              <SearchIcon css="inline-block text-white w-8 h-6 m-2" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <button className="mr-10 group relative">
          <CompareIcon css="w-6 h-6" />
          <span className="absolute top-8 left-3 -translate-x-2/4 text-sm bg-black text-white pl-2 pr-2 pt-1 pb-1 rounded-md opacity-0 group-hover:opacity-100">
            Compare
          </span>
        </button>
        <button className="mr-10 group relative">
          <WishlistIcon css="w-6 h-6" />
          <span className="absolute top-8 left-2 -translate-x-2/4 text-sm bg-black text-white pl-2 pr-2 pt-1 pb-1 rounded-md opacity-0 group-hover:opacity-100">
            Wishlist
          </span>
        </button>
        <button className="mr-10 group relative">
          <UserIcon css="w-6 h-6" />
          <span className="absolute top-8 left-2 -translate-x-2/4 text-sm bg-black text-white pl-2 pr-2 pt-1 pb-1 rounded-md opacity-0 group-hover:opacity-100">
            Account
          </span>
        </button>
        <button className="group relative">
          <ShopingIcon css="w-6 h-6" />
          <span className="absolute top-8 left-2 -translate-x-2/4 text-sm bg-black text-white pl-2 pr-2 pt-1 pb-1 rounded-md opacity-0 group-hover:opacity-100">
            Cart
          </span>
          <span className="absolute top-4 left-2 text-sm bg-orange-200 rounded-full px-1">
            0
          </span>
          <span className="absolute top-0 left-6 text-md font-semibold rounded-full px-1">
            $0.00
          </span>
        </button>
      </div>
    </div>
  );
};

export default MidHeader;
