import React from "react";
import PropTypes from "prop-types";
import FullStarIcon from "../assets/icons/FullStarIcon.jsx";
import EmptyStarIcon from "../assets/icons/EmptyStarIcon.jsx";

const SelectedProduct = (props) => {
  const { title, url, price } = props;
  return (
    <div className="mt-1 flex h-48 cursor-pointer items-center justify-between bg-white p-4 shadow-sm lg:p-3">
      <div className="w-2/5">
        <img src={url} alt="featured products" className="w-44 max-w-full" />
      </div>
      <div className="ml-2 w-3/5">
        <h2 className="text-sm font-bold text-sky-600">{title}</h2>
        <p className="mb-2 mt-2 flex">
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <FullStarIcon css="w-4 h-4 text-yellow-400" />
          <EmptyStarIcon css="w-4 h-4 text-gray-300" />
        </p>
        <p className="text-lg font-medium text-gray-500">${price}</p>
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
