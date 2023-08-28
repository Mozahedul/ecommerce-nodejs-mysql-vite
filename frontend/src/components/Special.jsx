import { useState } from "react";
import RightArrowIconLong from "../assets/icons/RightArrowIconLong";
import PropTypes from "prop-types";
import WishlistIcon from "../assets/icons/WishlistIcon.jsx";
import CompareIcon from "../assets/icons/CompareIcon.jsx";

const Special = (props) => {
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
      className="mt-1 flex w-1/2 flex-col justify-between bg-white p-6 shadow-md transition-all duration-500 last:mr-0 hover:cursor-pointer hover:shadow-2xl md:w-1/3"
    >
      <div>
        <p className="text-xs text-gray-400">{subtitle}</p>
        <h2 className="text-sm font-semibold text-sky-600">{title}</h2>
      </div>
      <img className="max-w-full" src={url} alt="Tablet" />
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">${price}</span>
        <button className="rounded-full bg-gray-300 p-2 text-white transition-all duration-500 hover:bg-orange-400">
          <RightArrowIconLong css="w-5 h-5" />
        </button>
      </div>
      <div
        className={`mt-2 flex items-center justify-between border-t-2 pt-2 text-sm text-gray-400 ${show}`}
      >
        <button className="flex items-center transition-all duration-500 hover:text-black">
          <WishlistIcon css="w-4 h-4 inline-block mr-1" />
          <span>Wishlist</span>
        </button>
        <button className="flex items-center transition-all duration-500 hover:text-black">
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
