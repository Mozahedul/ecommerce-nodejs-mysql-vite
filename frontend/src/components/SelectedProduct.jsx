import React from "react";
import PropTypes from "prop-types";
import FullStarIcon from "../assets/icons/FullStarIcon.jsx";
import EmptyStarIcon from "../assets/icons/EmptyStarIcon.jsx";

const SelectedProduct = props => {
  const { title, url, price } = props;
  return (
    <div className="flex items-center justify-between bg-white p-4 mt-1 cursor-pointer">
      <img src={url} alt="featured products" className="max-w-full w-20" />
      <div className="ml-2">
        <h2 className="text-sm font-bold text-sky-600">{title}</h2>
        <p className="flex mt-2 mb-2">
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <EmptyStarIcon css="w-4 h-4 text-gray-300" />
        </p>
        <p className="text-gray-500 text-lg font-medium">${price}</p>
      </div>
    </div>
  );
};

SelectedProduct.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SelectedProduct;
