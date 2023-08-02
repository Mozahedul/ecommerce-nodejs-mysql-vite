import React from "react";
import Envelope from "../assets/icons/Envelope";

const Newsletter = () => {
  return (
    <div className="pl-24 pr-24 bg-yellow-400 flex justify-between items-center py-3">
      <div className="flex items-center">
        <Envelope css="w-6 h-6 inline-block" />
        <p className="font-semibold text-2xl ml-3">Signup to Newsletter</p>
      </div>
      <p className="text-base">
        ...and receive
        <span className="font-bold">$20 coupon for first shopping</span>
      </p>
      <div>
        <form action="#">
          <input
            type="email"
            placeholder="Enter email address..."
            className="rounded-l-full py-2 px-5 text-base"
          />
          <button
            type="submit"
            className="rounded-r-full bg-black text-white py-2 px-5 text-base"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
