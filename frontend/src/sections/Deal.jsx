import React from "react";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const Deal = () => {
  return (
    <div className="pl-24 pr-24 flex items-start mt-8">
      <div className="flex items-center justify-around bg-white p-3 w-1/3 mr-6">
        <img className="max-w-full" src="/deal/camera.png" alt="camera" />
        <div>
          <p className="text-xl text-gray-600 font-thin leading-6 uppercase">
            Catch big <br /> deals on the
            <br /> cameras
          </p>
          <button className="mt-2 font-bold text-md">
            Shop Now
            <RightArrowIcon css="w-5 h-5 inline-block bg-orange-400 rounded-full p-1 ml-2 text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around bg-white p-3 w-1/3 mr-6">
        <img className="max-w-full" src="/deal/laptop.png" alt="camera" />
        <div>
          <p className="text-xl text-gray-600 font-thin leading-6 uppercase">
            Tables, <br /> Smartphones
            <br /> & More
          </p>
          <button className="mt-2 font-bold text-md">
            Up to 60%
            <RightArrowIcon css="w-5 h-5 inline-block bg-orange-400 rounded-full p-1 ml-2 text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around bg-white p-3 w-1/3">
        <img className="max-w-full" src="/deal/desktop.png" alt="camera" />
        <div>
          <p className="text-xl text-gray-600 font-thin leading-6">
            Shop the, <br /> hottest
            <br /> products
          </p>
          <button className="mt-2 font-bold text-md">
            Shop Now
            <RightArrowIcon css="w-5 h-5 inline-block bg-orange-400 rounded-full p-1 ml-2 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
