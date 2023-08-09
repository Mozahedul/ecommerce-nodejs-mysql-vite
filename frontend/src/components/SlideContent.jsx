import React from "react";
import PropTypes from "prop-types";

const SlideContent = ({ title, subtitle, btnText }) => {
  return (
    <div
      className="absolute left-1/4 top-1/4 text-left md:top-1/3 md:w-5/12"
      // style={{ left: "40px" }}
    >
      <p className="text-sm font-semibold uppercase text-blue-500 lg:text-2xl">
        {subtitle}
      </p>
      <h2 className="leading-12 mt-0 text-lg font-bold leading-4 md:mt-2 lg:text-5xl">
        {title}
      </h2>
      <button className="mt-2 rounded-md bg-orange-400 px-2 py-1 text-sm font-bold transition-all duration-500 hover:bg-orange-500 hover:text-white md:mt-10 md:px-7 md:py-3 md:text-lg">
        {btnText}
      </button>
    </div>
  );
};

SlideContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default SlideContent;
