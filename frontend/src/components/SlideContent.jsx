import React from "react";

const SlideContent = ({ title, subtitle, btnText }) => {
  return (
    <div className="absolute top-1/3 left-1/4 text-left w-5/12">
      <p className="uppercase text-2xl text-blue-500 font-semibold">
        {subtitle}
      </p>
      <h2 className="font-semibold text-5xl leading-12 mt-2">{title}</h2>
      <button className="px-7 py-3 bg-orange-400 mt-10 font-bold text-lg rounded-md transition-all duration-500 hover:bg-orange-500 hover:text-white">
        {btnText}
      </button>
    </div>
  );
};

export default SlideContent;
