import { Carousel } from "react-responsive-carousel";
import BestSeller from "./BestSeller.jsx";

const BestSellers = () => {
  return (
    <div className="pl-24 pr-24 bg-white mt-8 pt-4 pb-4">
      <div className="flex justify-between items-center border-b-2 py-3">
        <p className="text-2xl text-gray-600">Best Sellers</p>
        <div className="text-gray-500">
          <button className="border-2 border-orange-400 py-1 px-4 text-gray-500 font-bold rounded-full mr-8">
            Top 20
          </button>
          <button className="mr-8">Smartphones & Tablets</button>
          <button className="mr-8">Laptops & Computers</button>
          <button>Video Cameras</button>
        </div>
      </div>

      <Carousel showArrows="true" showThumbs="false">
        <BestSeller />
        <BestSeller />
        <BestSeller />
      </Carousel>
      <div>
        <img
          src="../../public/home-v5-banner.png"
          alt="advertisement"
          className="max-w-full"
        />
      </div>
    </div>
  );
};

export default BestSellers;
