import { useState } from "react";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const ProductDetailSidebar = () => {
  const [hidden, setHidden] = useState("hidden");
  const [rotate, setRotate] = useState("rotate-0");

  // Handle menu
  const handleMenu = () => {
    hidden === "hidden" ? setHidden("block") : setHidden("hidden");
    rotate === "rotate-0" ? setRotate("rotate-90") : setRotate("rotate-0");
  };
  return (
    <div>
      <ul>
        <li className="border-x-2 border-t-2 p-2">
          <a
            href="#"
            className="flex justify-between text-gray-600 focus:font-bold"
            onClick={handleMenu}
          >
            <span>Show all catetogories </span>
            <span>
              <RightArrowIcon
                css={`w-4 h-4 inline-block transition-all duration ${rotate}`}
              />
            </span>
          </a>
          <ul className={`${hidden} transition-all duration-500`}>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Accessories
              </a>
              <span className="text-xs text-gray-400"> (11)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Bluetooth Speakers
              </a>
              <span className="text-xs text-gray-400"> (7)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Cameras & Photography
              </a>
              <span className="text-xs text-gray-400"> (5)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Computer Components
              </a>
              <span className="text-xs text-gray-400"> (1)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Gadgets
              </a>
              <span className="text-xs text-gray-400"> (3)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Headphones
              </a>
              <span className="text-xs text-gray-400"> (7)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Home Entertainment
              </a>
              <span className="text-xs text-gray-400"> (1)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Home Theater
              </a>
              <span className="text-xs text-gray-400"> (7)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Laptop & Computers
              </a>
              <span className="text-xs text-gray-400"> (13)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Printers & Ink
              </a>
              <span className="text-xs text-gray-400"> (1)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Smart Phones & Tablets
              </a>
              <span className="text-xs text-gray-400"> (26)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Speakers
              </a>
              <span className="text-xs text-gray-400"> (7)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Stereo
              </a>
              <span className="text-xs text-gray-400"> (7)</span>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                TV & Audio
              </a>
              <span className="text-xs text-gray-400"> (1)</span>
            </li>
            <li className="py-1 pl-3">
              <a href="#" className="text-base text-gray-600">
                Video Games & Consoles
              </a>
              <span className="text-xs text-gray-400"> (3)</span>
            </li>
          </ul>
        </li>
        <li className="border-x-2 border-t-2 p-2">
          <a href="#" className="text-gray-600">
            Cases
          </a>
        </li>
        <li className="border-x-2 border-t-2 p-2">
          <a href="#" className="text-gray-600">
            Chargers
          </a>
        </li>
        <li className="border-x-2 border-t-2 p-2">
          <a href="#" className="text-gray-600">
            Headphone Accessories
          </a>
        </li>
        <li className="border-x-2 border-t-2 p-2">
          <a href="#" className="text-gray-600">
            Headphone Cases
          </a>
        </li>
        <li className="border-x-2 border-t-2 p-2">
          <a href="#" className="text-gray-600">
            Pen Drives
          </a>
        </li>
        <li className="border-x-2 border-b-2 border-t-2 p-2">
          <a href="#" className="text-gray-600">
            Power Banks
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailSidebar;
