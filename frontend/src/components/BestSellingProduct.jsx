import React from "react";
import CartIcon from "../assets/icons/CartIcon";
import PropTypes from "prop-types";

const BestSellingProduct = (props) => {
  const { subtitle, title, url, price } = props;
  return (
    <div className="flex items-center justify-between border-b-2 p-6 last:border-b-0 md:border-none md:p-3 md:shadow-sm">
      <div className="w-2/5">
        <img
          src={url}
          alt="console"
          className="max-w-full"
          // style={{ maxWidth: "100%", width: "150px" }}
        />
      </div>
      <div className="ml-6 flex w-3/5 flex-col">
        <p className="text-left text-sm text-gray-400">{subtitle}</p>
        <h2 className="text-left text-base font-bold text-sky-600">{title}</h2>

        <div className="mt-10 flex items-center justify-between">
          <span className="text-xl font-medium text-gray-500">${price}</span>
          <button className="rounded-full bg-gray-200 p-2 text-white transition-all duration-500 hover:bg-orange-400">
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
