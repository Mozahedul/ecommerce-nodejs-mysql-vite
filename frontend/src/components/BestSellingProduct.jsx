import React from "react";
import CartIcon from "../assets/icons/CartIcon";
import PropTypes from "prop-types";

const BestSellingProduct = props => {
  const { subtitle, title, url, price } = props;
  return (
    <div className="flex justify-between items-center p-6 w-1/3">
      <img
        src={url}
        alt="console"
        style={{ maxWidth: "100%", width: "150px" }}
      />
      <div className="flex flex-col ml-6">
        <p className="text-sm text-gray-400 text-left">{subtitle}</p>
        <h2 className="text-sky-600 font-bold text-base text-left">{title}</h2>

        <div className="mt-10 flex justify-between items-center">
          <span className="text-gray-500 text-xl font-medium">${price}</span>
          <button className="bg-gray-200 rounded-full p-2 text-white transition-all duration-500 hover:bg-orange-400">
            <CartIcon css="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

BestSellingProduct.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BestSellingProduct;
