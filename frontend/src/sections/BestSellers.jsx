import { Carousel } from "react-responsive-carousel";
import BestSeller from "./BestSeller.jsx";

const BestSellers = () => {
  return (
    <div className="mt-8 bg-white px-8 pb-4 pt-4">
      <div className="flex flex-col border-b-2 py-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-2xl text-gray-600">Best Sellers</p>
        <div className="mt-4 flex overflow-x-auto whitespace-nowrap pb-2 text-gray-500 lg:mt-0 lg:pb-0">
          <button className="mr-8 rounded-full border-2 border-orange-400 px-4 py-1 font-bold text-gray-500">
            Top 20
          </button>
          <button className="mr-8">Smartphones & Tablets</button>
          <button className="mr-8">Laptops & Computers</button>
          <button>Video Cameras</button>
        </div>
      </div>

      <Carousel showArrows={true} showThumbs={false}>
        <BestSeller />
        <BestSeller />
        <BestSeller />
      </Carousel>
      <div>
        <img
          src="/home-v5-banner.png"
          alt="advertisement"
          className="mt-8 max-w-full md:mt-0"
        />
      </div>
    </div>
  );
};

export default BestSellers;
