import React, { useState } from "react";
import WishlistIcon from "../assets/icons/WishlistIcon";
import CompareIcon from "../assets/icons/CompareIcon";
import CartIcon from "../assets/icons/CartIcon";
import FullStarIcon from "../assets/icons/FullStarIcon";
import EmptyStarIcon from "../assets/icons/EmptyStarIcon";

const ProductDetailDescription = () => {
  let [count, setCount] = useState(1);

  console.log("EVENT VALUE ==> ", count);

  const handleCount = (event) => {
    event.target.value < 1 ? true : setCount(event.target.value);
  };

  const handleIncrement = () => {
    count++;
    setCount(count);
  };

  const handleDecrement = () => {
    if (count <= 1) {
      return true;
    } else {
      count--;
      setCount(count);
    }
  };
  return (
    <div>
      <p>
        <strong>Category:</strong> Electronics
      </p>
      <h2 className="text-xl font-semibold text-gray-700">
        Purple NX Mini F1 aparat SMART NX
      </h2>
      <div className="my-3 flex">
        <div className="flex">
          <FullStarIcon css="w-4 h-4 text-yellow-600" />
          <FullStarIcon css="w-4 h-4 text-yellow-600" />
          <FullStarIcon css="w-4 h-4 text-yellow-600" />
          <FullStarIcon css="w-4 h-4 text-yellow-600" />
          <EmptyStarIcon css="w-4 h-4 text-yellow-600" />
        </div>
        <p className="ml-2 text-xs font-semibold text-gray-400">
          (8 customers reviews)
        </p>
      </div>
      <p className="mb-3 border-b-2 pb-2 text-base text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        magni ipsa cumque. Perspiciatis, itaque et.
      </p>
      <div className="mb-3 text-sm font-medium text-gray-500">
        <a href="#">
          <WishlistIcon css="w-4 h-4 inline-block" /> Wishlist
        </a>
        <a href="#" className="ml-6">
          <CompareIcon css="w-4 h-4 inline-block" /> Compare
        </a>
      </div>
      <div className="text-lg font-medium">$2299.00</div>
      <div className="my-3 flex w-fit items-center border-2">
        <button
          onClick={handleIncrement}
          className="px-2 text-2xl font-bold text-gray-600"
        >
          +
        </button>
        <input
          type="number"
          className="w-10 border-none bg-transparent font-bold text-gray-600 outline-none"
          value={count}
          onChange={handleCount}
        />
        <button
          onClick={handleDecrement}
          className="px-2 text-2xl font-bold text-gray-600"
        >
          -
        </button>
      </div>

      <p>
        <strong>Availability:</strong> In stock
      </p>
      <p className="my-3">
        <strong>Brand:</strong> Sony
      </p>
      <div className="my-3">
        <button className="text-md rounded-md bg-orange-400 px-3 py-2 font-semibold transition-all duration-500 hover:bg-orange-600 hover:text-white hover:shadow-lg">
          <CartIcon css="w-4 h-4 inline-block" /> Add To Cart
        </button>
      </div>
      <p className="my-3">
        <strong>Quantity:</strong> 125
      </p>
      <p>
        <strong className="text-lg text-orange-400">
          Accredited Payment Methods:
        </strong>
        <img src="../../public/payment.png" alt="Payment gateway" />
      </p>
    </div>
  );
};

export default ProductDetailDescription;
