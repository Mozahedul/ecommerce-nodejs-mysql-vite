import React from "react";
import FullStarIcon from "../assets/icons/FullStarIcon";
import EmptyStarIcon from "../assets/icons/EmptyStarIcon";
import PropTypes from "prop-types";

const ProductDetailsCard = ({ title, url, price }) => {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div className="w-2/5 p-1">
        <img src={url} alt="Tablet" />
      </div>
      <div className="w-3/5">
        <p className="text-sm font-medium leading-5 text-gray-600">{title}</p>
        <div className="my-1 flex">
          <FullStarIcon css="w-4 h-4 text-yellow-600 inline-block" />
          <FullStarIcon css="w-4 h-4 text-yellow-600 inline-block" />
          <FullStarIcon css="w-4 h-4 text-yellow-600 inline-block" />
          <FullStarIcon css="w-4 h-4 text-yellow-600 inline-block" />
          <EmptyStarIcon css="w-4 h-4 text-yellow-600 inline-block" />
        </div>
        <p className="text-base font-semibold text-gray-600">${price}</p>
      </div>
    </div>
  );
};

ProductDetailsCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetailsCard;
