import React, { useEffect, useState } from "react";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const BrandPartner = () => {
  const [slide, setSlide] = useState(0);
  const [leftBtnDisable, setLeftBtnDisable] = useState(false);
  const [rightBtnDisable, setRightBtnDisable] = useState(false);

  const handleRightBtn = () => {
    let newSlidePosition = slide + 224;

    const element = document.getElementById("slider");

    console.log("new slider position ==> ", newSlidePosition);

    const sliderPosition = element?.scrollWidth - element.offsetWidth;
    console.log("SLIDER POSITION ==> ", sliderPosition);
    // The right end of the slider
    if (newSlidePosition > sliderPosition - 224) {
      setRightBtnDisable(true);
      setLeftBtnDisable(false);
      newSlidePosition = sliderPosition;
      setSlide(newSlidePosition);
    }

    // Slider buttons will remain active when they are
    // in the range between > 224 and < hidden scroll width
    if (
      newSlidePosition >= 224 &&
      newSlidePosition <= element.scrollWidth - element.offsetWidth - 224
    ) {
      setLeftBtnDisable(false);
      setRightBtnDisable(false);
    }

    element?.scrollTo({
      top: 0,
      left: newSlidePosition,
      behavior: "smooth",
    });
    setSlide(newSlidePosition);
  };

  const handleLeftBtn = () => {
    const element = document.getElementById("slider");
    let newSlidePosition = slide - 224;

    if (newSlidePosition <= 224) {
      setLeftBtnDisable(true);
      setRightBtnDisable(false);
      newSlidePosition = 0;
    }

    if (
      newSlidePosition > 224 &&
      newSlidePosition <= element.scrollWidth - element.offsetWidth
    ) {
      setLeftBtnDisable(false);
      setRightBtnDisable(false);
    }

    element.scrollTo({
      top: 0,
      left: newSlidePosition,
      behavior: "smooth",
    });

    setSlide(newSlidePosition);
  };

  useEffect(() => {
    const element = document.getElementById("slider");

    if (slide < 224) {
      setLeftBtnDisable(true);
    }

    element?.scrollTo({
      top: 0,
      left: slide,
      behavior: "smooth",
    });
  }, [slide]);
  return (
    <div className="relative bg-white py-8">
      <button
        disabled={leftBtnDisable}
        onClick={handleLeftBtn}
        className={`absolute left-0 top-10 ${
          leftBtnDisable
            ? "cursor-not-allowed text-gray-200"
            : "cursor-pointer text-gray-500"
        }`}
      >
        <LeftArrowIcon css="w-7 h-7" />
      </button>
      <button
        disabled={rightBtnDisable}
        onClick={handleRightBtn}
        className={`absolute right-0 top-10 ${
          rightBtnDisable
            ? "cursor-not-allowed text-gray-200"
            : "cursor-pointer text-gray-500"
        }`}
      >
        <RightArrowIcon css="w-7 h-7" />
      </button>
      <div
        id="slider"
        className="mx-8 flex items-center justify-between overflow-x-hidden"
      >
        <img className="mx-8 w-40" src="/partners/airdnd.png" alt="air dnd" />
        <img
          className="mx-8 w-40"
          src="/partners/coinbuild.png"
          alt="coinbuild"
        />
        <img
          className="mx-8 w-40"
          src="/partners/dribble.png"
          alt="coinbuild"
        />
        <img
          className="mx-8 w-40"
          src="/partners/instagram.png"
          alt="coinbuild"
        />
        <img
          className="mx-8 w-40"
          src="/partners/netflix.png"
          alt="coinbuild"
        />
        <img
          className="mx-8 w-40"
          src="/partners/pinterest.png"
          alt="coinbuild"
        />
        <img
          className="mx-8 w-40"
          src="/partners/coinbuild.png"
          alt="coinbuild"
        />
        <img
          className="mx-8 w-40"
          src="/partners/dribble.png"
          alt="coinbuild"
        />
      </div>
    </div>
  );
};

export default BrandPartner;
