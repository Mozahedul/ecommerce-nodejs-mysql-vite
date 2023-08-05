import React, { useRef } from "react";
// import RightArrowIconLong from "../assets/icons/RightArrowIconLong";
import Special from "../components/Special";

const SpecialOffer = () => {
  const handleProducts = (event, option) => {
    const products = document.getElementsByClassName("product");
    console.log("PRODUCTS ==> ", products);
    for (let i = 0; i < products.length; i++) {
      products[i].style.display = "none";
    }
    document.getElementById(option).style.display = "block";

    const btns = document.getElementsByClassName("btn");
    for (let a = 0; a < btns.length; a++) {
      btns[a].style.borderBottom = "none";
      btns[a].style.fontWeight = "normal";
    }
    event.target.style.borderBottom = "4px solid orange";
    event.target.style.fontWeight = "bold";
  };

  return (
    <div className="px-8 mt-12 flex flex-col lg:flex-row">
      <div className="border-2 mb-8 border-orange-400 rounded-lg p-6 w-full h-fit text-center lg:mb-0 lg:w-1/3">
        <h2 className="font-semibold text-gray-500 text-xl">Special Offer</h2>
        <img
          className="max-w-full mt-6 m-auto"
          src="/special/game_console.png"
          alt="game console"
        />
        <h3 className="mt-8 text-sky-700 font-bold">
          Game Console Controller + USB 3.0 Cable
        </h3>
        <p className="text-center mt-6 text-3xl text-gray-600 font-normal">
          $99.00
        </p>
      </div>
      <div className="w-full lg:w-2/3 lg:ml-6">
        <div className="border-b-2 w-full text-center text-gray-500 font-normal text-lg">
          <button
            onClick={event => handleProducts(event, "featured")}
            className="mr-6 pb-3 font-bold border-b-4 border-orange-400 btn"
          >
            Featured
          </button>
          <button
            onClick={event => handleProducts(event, "onSale")}
            className="mr-6 pb-3 btn"
          >
            On Sale
          </button>
          <button
            onClick={event => handleProducts(event, "topRated")}
            className="pb-3 btn"
          >
            Top Rated
          </button>
        </div>
        {/* Featured */}
        <div id="featured" className="product">
          <div className="flex flex-wrap mt-2">
            <Special
              subtitle="Audio Speakers"
              title="Wireless Audio System Multiroom 360"
              url="/featured/WirelessSound.png"
              price={2299.0}
            />
            <Special
              subtitle="Laptops, Ultrabooks"
              title="Tablet Red EliteBook Resolve 810 G2"
              url="/featured/apptablet.png"
              price={2100.0}
            />
            <Special
              subtitle="Headphones"
              title="White Solo 2 Wireless"
              url="/featured/uniheadphone.png"
              price={248.0}
            />
            {/* </div>
          <div className="flex mt-2"> */}
            <Special
              subtitle="Smartphones"
              title="Smartphone 6S 32GB LTE"
              url="/featured/GoldPhone.png"
              price={1100.0}
            />
            <Special
              subtitle="Cameras"
              title="Purple NX Mini F1 aparat SMART NX"
              url="/featured/camera2.png"
              price={559.0}
            />
            <Special
              subtitle="Printers"
              title="Full Color LaserJet Pro M452dn"
              url="/featured/printer.png"
              price={1050.0}
            />
          </div>
        </div>

        {/* On Sale */}
        <div id="onSale" className="product" style={{ display: "none" }}>
          <div className="flex flex-wrap mt-2">
            <Special
              subtitle="Computer Cases, Servers"
              title="Aerocool EN52377 Dead Silence Gaming Cube Case"
              url="/onSale/gamecabin.png"
              price={150.0}
            />
            <Special
              subtitle="Smartphones"
              title="Smartphone 6S 32GB LTE"
              url="/onSale/GoldPhone.png"
              price={1100.0}
            />
            <Special
              subtitle="Power Banks"
              title="Powerbank 1130 mAh Blue"
              url="/onSale/powerbank.png"
              price={200.0}
            />
            {/* </div>
          <div className="flex mt-2"> */}
            <Special
              subtitle="Smartwatches"
              title="Smartwatch 2.0 LTE Wifi Waterproof"
              url="/onSale/watch.png"
              price={700.0}
            />
            <Special
              subtitle="Smartphones"
              title="Ultrabook UX305CA-FC050T"
              url="/onSale/redmi.png"
              price={1200.0}
            />
            <Special
              subtitle="Laptops, Ultrabooks"
              title="Tablet Red EliteBook Revolve 810 G2"
              url="/onSale/apptablet.png"
              price={1050.0}
            />
          </div>
        </div>

        {/* Top Rated */}
        <div id="topRated" className="product" style={{ display: "none" }}>
          <div className="flex flex-wrap mt-2">
            <Special
              subtitle="Headphone Cases"
              title="Universal Headphones Case in Black"
              url="/topRated/headphonecase.png"
              price={159.0}
            />
            <Special
              subtitle="Headphone Accessories"
              title="Headphones USB Wires"
              url="/topRated/usbheadphone.png"
              price={50.0}
            />
            <Special
              subtitle="Headphones"
              title="Ultra Wireless S50 Headphones S50 with Bluetooth"
              url="/topRated/headphone.png"
              price={350.0}
            />
            {/* </div>
          <div className="flex mt-2"> */}
            <Special
              subtitle="Audio Speakers"
              title="Wireless Audio System Multiroom 360"
              url="/topRated/WirelessSound.png"
              price={2299.0}
            />
            <Special
              subtitle="Laptops"
              title="Tablet White EliteBook Revolve 810 G2"
              url="/topRated/Ultrabooks.png"
              price={1300.0}
            />
            <Special
              subtitle="Headphones"
              title="Purple Solo 2 Wireless"
              url="/topRated/headphone1.png"
              price={248.0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
