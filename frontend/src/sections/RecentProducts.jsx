import { useEffect, useState } from "react";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";
import RecentProduct from "../components/RecentProduct";

const RecentProducts = () => {
  const [width, setWidth] = useState();

  const responsiveHandle = () => {
    const element = document.getElementById("container");
    const totalWidth = element.clientWidth;
    const elementNumber = Math.floor(totalWidth / 180);
    const elementWidth = Math.floor(totalWidth / elementNumber) - 2;
    setWidth(elementWidth);
  };

  window.addEventListener("resize", responsiveHandle);
  useEffect(() => {
    responsiveHandle();
  }, []);

  return (
    <div className="px-24 bg-white mt-10 pt-6 pb-6" id="main">
      {/* heading */}
      <div className="flex justify-between items-center border-b-2 pb-3">
        <h2 className="text-2xl text-gray-600">Recently Added</h2>
        <div>
          <button className="mr-1 text-gray-400 transition-all duration-500 hover:text-gray-600 focus:text-orange-400">
            <LeftArrowIcon css="w-5 h-5" />
          </button>
          <button className="text-gray-400 transition-all duration-500 hover:text-gray-600 focus:text-orange-400">
            <RightArrowIcon css="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Product cards */}
      <div className="flex mt-2 flex-nowrap overflow-x-hidden" id="container">
        <RecentProduct
          width={width}
          subtitle="Headphones Cases"
          title="Universal Headphone casin"
          url="/recent/headphonecase.png"
          price={159.0}
        />
        <RecentProduct
          width={width}
          subtitle="Headphone Accessories"
          title="Headphones USB Wires"
          url="/recent/usbheadphone.png"
          price={50.0}
        />
        <RecentProduct
          width={width}
          subtitle="Headphones"
          title="Ultra Wireless S50 Headphones S50 with Bluetooth"
          url="/recent/headphone2.png"
          price={350.0}
        />
        <RecentProduct
          width={width}
          subtitle="Audio Speakers"
          title="Wireless Audio System Multiroom 360"
          url="/recent/WirelessSound.png"
          price={2299.0}
        />
        <RecentProduct
          width={width}
          subtitle="Audio Speakers"
          title="Wireless Audio System Multiroom 360"
          url="/recent/WirelessSound.png"
          price={2299.0}
        />
        <RecentProduct
          width={width}
          subtitle="Audio Speakers"
          title="Wireless Audio System Multiroom 360"
          url="/recent/WirelessSound.png"
          price={2299.0}
        />
        <RecentProduct
          width={width}
          subtitle="Audio Speakers"
          title="Wireless Audio System Multiroom 360"
          url="/recent/WirelessSound.png"
          price={2299.0}
        />
        <RecentProduct
          width={width}
          subtitle="Audio Speakers"
          title="Wireless Audio System Multiroom 360"
          url="/recent/WirelessSound.png"
          price={2299.0}
        />
      </div>
      {/* slider dots */}
      <div></div>
    </div>
  );
};

export default RecentProducts;
