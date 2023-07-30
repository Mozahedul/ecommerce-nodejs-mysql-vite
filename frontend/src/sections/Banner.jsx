import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SlideContent from "../components/SlideContent";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
      >
        <div>
          <img src="/slider/slider-01.jpg" />
          <SlideContent
            subtitle=" Shop to get what you love"
            title={`Shopping this summer with great discount`}
            btnText="Start Buying"
          />
        </div>
        <div>
          <img src="/slider/slider-02.jpg" />
          <SlideContent
            subtitle="Limited Time Offer"
            title={`Get Upto 100% Discount of a specific item`}
            btnText="Get More"
          />
        </div>
        <div>
          <img src="/slider/slider-03.jpg" />
          <SlideContent
            subtitle="Black Friday offer"
            title={`Hurry up! the offer will end soon`}
            btnText="Get More Offers"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
