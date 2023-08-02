import React from "react";
import SelectedProduct from "../components/SelectedProduct";

const SelectedProducts = () => {
  return (
    <div className="pl-24 pr-24 bg-white mt-6 flex">
      <div className="pt-6 w-1/4 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 pb-3">
          Featured Products
        </h2>
        {/* <div className="flex flex-col"> */}
        <SelectedProduct
          title="Tablet Thin EliteBook Revolve 810 G6"
          url="/featured-products/tablet.png"
          price={1300.0}
        />
        <SelectedProduct
          title="Notebook Widescreen Z51-70 40K6013UPB"
          url="/featured-products/notebook.png"
          price={1100.0}
        />
        <SelectedProduct
          title="Smartphone 6S 128GB LTE"
          url="/featured-products/smartphone.png"
          price={750.0}
        />
        {/* </div> */}
      </div>
      <div className="pt-6 w-1/4 flex flex-col ml-1 mr-1">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 pb-3">
          Top Selling Products
        </h2>
        {/* <div className="flex flex-col"> */}
        <SelectedProduct
          title="Game Console Controller + USB 3.0 Cable"
          url="/top-selling/game-console.png"
          price={99.0}
        />
        <SelectedProduct
          title="Game Console Controller + USB 3.0 Cable"
          url="/top-selling/wireless.png"
          price={2299.0}
        />
        <SelectedProduct
          title="Tablet Thin EliteBook Revolve 810 G6"
          url="/top-selling/tablet-red.png"
          price={2100.0}
        />
        {/* </div> */}
      </div>
      <div className="pt-6 w-1/4 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-700 border-b-2 pb-3">
          On-sale Products
        </h2>
        {/* <div className="flex flex-col"> */}
        <SelectedProduct
          title="Apple MacBook Pro MF841HN/A 13-inch Laptop"
          url="/on-saling/apple-macbook.png"
          price={1500.0}
        />
        <SelectedProduct
          title="Notebook Black Spire V Nitro VN7-591G"
          url="/on-saling/iphone.png"
          price={1999.0}
        />
        <SelectedProduct
          title="Tablet Red EliteBook Revolve 810 G2"
          url="/onsale-products/tablet-red-elite.png"
          price={2100.0}
        />
        {/* </div> */}
      </div>
      <div className="w-1/4 mt-12">
        <img
          src="/footer-widget.jpg"
          alt="footer widget"
          className="max-w-full ml-6"
        />
      </div>
    </div>
  );
};

export default SelectedProducts;
