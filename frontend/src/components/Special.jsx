import React, { useState } from "react";
import RightArrowIconLong from "../assets/icons/RightArrowIconLong";
import PropTypes from "prop-types";
import WishlistIcon from "../assets/icons/WishlistIcon.jsx";
import CompareIcon from "../assets/icons/CompareIcon.jsx";

const Special = props => {
  const { subtitle, title, url, price } = props;
  const [show, setShow] = useState("hidden");

  const handleHover = () => {
    setShow("block");
  };

  const handleHoverOut = () => {
    setShow("hidden");
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className={`p-6 bg-white mr-2 rounded-md flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:cursor-pointer`}
    >
      <div>
        <p className="text-xs text-gray-400">{subtitle}</p>
        <h2 className="text-sky-600 text-sm font-semibold">{title}</h2>
      </div>
      <img className="max-w-full" src={url} alt="Tablet" />
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">${price}</span>
        <button className="bg-gray-300 text-white transition-all duration-500 p-2 rounded-full hover:bg-orange-400">
          <RightArrowIconLong css="w-5 h-5" />
        </button>
      </div>
      <div
        className={`border-t-2 mt-2 pt-2 flex items-center justify-between text-gray-400 text-sm ${show}`}
      >
        <button className="transition-all duration-500 flex items-center hover:text-black">
          <WishlistIcon css="w-4 h-4 inline-block mr-1" />
          <span>Wishlist</span>
        </button>
        <button className="transition-all duration-500 flex items-center hover:text-black">
          <CompareIcon css="w-4 h-4 inline-block mr-1" />
          <span>Compare</span>
        </button>
      </div>
    </div>
  );
};

Special.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Special;
