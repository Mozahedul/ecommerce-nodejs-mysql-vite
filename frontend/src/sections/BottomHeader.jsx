import React from "react";
import AllDepartments from "../components/header/AllDepartments";

const BottomHeader = () => {
  return (
    <div className="pl-24 pr-24 flex items-center">
      <AllDepartments />
      <button className="py-3 pr-6">
        <a href="#">Home</a>
      </button>
      <button className="py-3 px-6">
        <a href="/shop">shop</a>
      </button>
      <button className="py-3 px-6">
        <a href="/shop">Fashion</a>
      </button>
      <button className="py-3 px-6">
        <a href="/shop">Electronics</a>
      </button>
      <button className="py-3 px-6">
        <a href="/shop">Baby & Kids</a>
      </button>
      <button className="py-3 px-6">
        <a href="/shop">Sports</a>
      </button>
    </div>
  );
};

export default BottomHeader;
