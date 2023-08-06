import React from "react";
import LocationIcon from "../../assets/icons/LocationIcon";
import TrackingIcon from "../../assets/icons/TrackingIcon";
import ShopingIcon from "../../assets/icons/ShopingIcon";
import UserIcon from "../../assets/icons/UserIcon";

const TopHeader = () => {
  return (
    <div className="hidden border-b-2 px-8 lg:block">
      <div className="flex items-center justify-between pb-2 pt-2 text-sm">
        <p>Welcome to Worldwide Electronics Store</p>
        <div className="flex flex-row">
          <span className="mr-4 flex items-center text-gray-700">
            <LocationIcon css="w-4 h-4 inline-block mr-1" />
            Store Locator
          </span>
          <span className="mr-4 flex items-center text-gray-200">|</span>
          <span className="mr-4 text-gray-700">
            <TrackingIcon css="w-4 h-4 inline-block mr-1" />
            Track Your Order
          </span>
          <span className="mr-4 flex items-center text-gray-200">|</span>
          <span className="mr-4 text-gray-700">
            <ShopingIcon css="w-4 h-4 inline-block mr-1" />
            Shop
          </span>
          <span className="mr-4 flex items-center text-gray-200">|</span>
          <span className="text-gray-700">
            <UserIcon css="w-4 h-4 inline-block mr-1" /> My Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
