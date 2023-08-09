import { useEffect, useState } from "react";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";
import RecentProduct from "../components/RecentProduct";

const RecentProducts = () => {
  const [width, setWidth] = useState(0);
  const [isLeftBtnDisabled, setIsLeftBtnDisabled] = useState(true);
  const [isRightBtnDisabled, setIsRightBtnDisabled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [activeBtn, setActiveBtn] = useState(0);

  const element = document.getElementById("container");
  const totalWidth = element?.clientWidth;
  const elementNumber = Math.floor(totalWidth / 190);
  const elementWidth = Math.floor(totalWidth / elementNumber);

  console.log("ELEMENT WIDTH ==> ", elementWidth);

  // Find out the number of child component
  const numberOfChildComponents = element?.children.length;
  const numberOfDots = Math.ceil(numberOfChildComponents / elementNumber);

  // Handle right arrow
  // let scrollPosition = 0;

  const handleRightArrow = () => {
    let newScrollPosition = scrollPosition + elementWidth;

    const hiddenWidth = element.scrollWidth - element.offsetWidth;
    // const scrollDiff = hiddenWidth - newScrollPosition;

    // When the scroll reaches to the last point of the container
    // we disable the right arrow button
    // scroll position set to the last point of the container
    if (newScrollPosition >= hiddenWidth) {
      setIsRightBtnDisabled(true);
      setScrollPosition(hiddenWidth);
      newScrollPosition = hiddenWidth;
    } else {
      newScrollPosition = scrollPosition + elementWidth;
      setScrollPosition(newScrollPosition);
    }

    if (newScrollPosition >= 0) {
      setIsLeftBtnDisabled(false);
    }

    element?.scrollTo({
      top: 0,
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  // to slide a single product ## left arrow button
  const handleLeftArrow = () => {
    let newScrollPosition = scrollPosition - elementWidth;

    // click on right slider button for the first time
    // then continue to slide until the last
    if (newScrollPosition >= elementWidth) {
      setScrollPosition(newScrollPosition);
    }

    // If the slide exists at the first, then disable the left arrow button.
    // enable the right arrow button, and set the scroll position to 0
    if (newScrollPosition < elementWidth || newScrollPosition === 0) {
      setIsLeftBtnDisabled(true);
      setIsRightBtnDisabled(false);
      setScrollPosition(0);
      newScrollPosition = 0;
    }

    /**
     * If the scroll position exists at the right end, and we click
     * left arrow button once the right arrow button will enable
     */
    if (newScrollPosition < element.scrollWidth - element.offsetWidth) {
      setIsRightBtnDisabled(false);
    }

    element.scrollTo({
      top: 0,
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  // Handle dot slider
  const handleDot = (event, index) => {
    let dotBtns = document.querySelectorAll("#dotBtn");
    for (let i = 0; i < dotBtns.length; i++) {
      dotBtns[i].style.width = "12px";
      dotBtns[i].style.backgroundColor = "lightGray";
    }
    event.target.style.width = "24px";
    event.target.style.backgroundColor = "orange";

    let newScrollPosition = element.offsetWidth * index;

    if (newScrollPosition < element.offsetWidth) {
      setIsLeftBtnDisabled(true);
      setIsRightBtnDisabled(false);
      setScrollPosition(0);
    }

    if (newScrollPosition > element.scrollWidth - element.offsetWidth) {
      setIsRightBtnDisabled(true);
      setIsLeftBtnDisabled(false);
    }

    setScrollPosition(newScrollPosition);

    element.scrollTo({
      top: 0,
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const element = document.getElementById("container");
    const totalWidth = element?.clientWidth;
    const elementNumber = Math.floor(totalWidth / 190);
    const elementWidth = Math.floor(totalWidth / elementNumber);
    setWidth(elementWidth);

    // By default, the first dot will be highlighted
    const dotBtns = document.getElementById("#dotBtn");
    console.log("dot BUTTON ==> ", dotBtns);

    // leftArrow.disabled = true;
    element.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setScrollPosition(0);
  }, []);

  window.addEventListener("resize", () => {
    const element = document.getElementById("container");
    const totalWidth = element?.clientWidth;
    const elementNumber = Math.floor(totalWidth / 190);
    const elementWidth = Math.floor(totalWidth / elementNumber);
    setWidth(elementWidth);
    setScrollPosition(0);
    setIsLeftBtnDisabled(true);
    setIsRightBtnDisabled(false);
    element.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="mt-10 bg-white px-8 pb-6 pt-6" id="main">
      {/* heading */}
      <div className="flex items-center justify-between border-b-2 pb-3">
        <h2 className="text-2xl text-gray-600">Recently Added</h2>
        <div>
          <button
            disabled={isLeftBtnDisabled}
            id="btnLeft"
            onClick={() => handleLeftArrow()}
            className="mr-1 
            text-gray-600 transition-all duration-500 hover:text-gray-600 focus:text-orange-400 disabled:opacity-25"
          >
            <LeftArrowIcon css="w-5 h-5" />
          </button>
          <button
            disabled={isRightBtnDisabled}
            id="btnRight"
            onClick={() => handleRightArrow()}
            className="text-gray-600 transition-all duration-500 hover:text-gray-600 focus:text-orange-400 disabled:opacity-25"
          >
            <RightArrowIcon css="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Product cards */}
      <div
        className="visible:last:mr-2 mt-2 flex flex-nowrap overflow-x-hidden"
        id="container"
      >
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
      <div className="mt-4 flex items-center justify-center">
        {Array.from({ length: numberOfDots }, () => null).map((item, index) => (
          <button
            id="dotBtn"
            onClick={(event) => handleDot(event, index)}
            key={index}
            className={`m-1 h-3  w-3 rounded-full transition-all 
               ${
                 index === 0 ? "w-6 bg-orange-400" : "bg-gray-200"
               } duration-300 hover:bg-gray-400 focus:bg-orange-400
             `}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
