import React, { useState } from "react";
import LocationIcon from "../../assets/icons/LocationIcon";
import TrackingIcon from "../../assets/icons/TrackingIcon";
import ShopingIcon from "../../assets/icons/ShopingIcon";
import UserIcon from "../../assets/icons/UserIcon";
import Sidebar from "../../sections/Sidebar";
import MenubarIcon from "../../assets/icons/MenubarIcon";

const MobileTopHeader = () => {
  const [width, setWidth] = useState(0);
  const handleSideBar = () => {
    setWidth(320);
  };
  return (
    <div className="flex items-center justify-between border-b-2 px-8 lg:hidden">
      <div>
        <button onClick={() => handleSideBar()}>
          <MenubarIcon css="inline-block w-8 h-8 mr-6" />
        </button>
        <Sidebar width={width} setWidth={setWidth} />
      </div>
      <div className="flex items-center justify-end pb-2 pt-2 text-sm">
        <span className="mr-4 flex items-center text-gray-700">
          <LocationIcon css="w-4 h-4 inline-block mr-1" />
        </span>
        <span className="mr-4 flex items-center text-gray-200">|</span>
        <span className="mr-4 text-gray-700">
          <TrackingIcon css="w-4 h-4 inline-block mr-1" />
        </span>
        <span className="mr-4 flex items-center text-gray-200">|</span>
        <span className="mr-4 text-gray-700">
          <ShopingIcon css="w-4 h-4 inline-block mr-1" />
        </span>
        <span className="mr-4 flex items-center text-gray-200">|</span>
        <span className="text-gray-700">
          <UserIcon css="w-4 h-4 inline-block mr-1" />
        </span>
      </div>
    </div>
  );
};

export default MobileTopHeader;
