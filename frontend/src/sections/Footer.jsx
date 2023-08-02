import PhoneIcon from "../assets/icons/PhoneIcon";

const Footer = () => {
  return (
    <div>
      <div className="pl-24 pr-24 bg-gray-100 py-12 flex">
        <div className="w-2/5">
          <img src="/logo.svg" alt="website logo" className="w-32" />
          <div className="flex mt-4">
            <PhoneIcon css="w-12 h-12 text-orange-400" />
            <div className="ml-4">
              <p className="text-gray-400 text-sm">
                Any Queries? Call us 24/7!
              </p>
              <p className="text-xl font-semibold text-gray-600">
                (+880)-1738-648749, <br /> (+880)-1923-242894{" "}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-700 font-bold">Contact Info</p>
            <p className="text-base text-gray-600">
              32 Rajib Road, Rangpur, Bangladesh
            </p>
          </div>
        </div>
        <div className="w-1/5 ml-3">
          <h2 className="text-lg font-bold mb-3">Find It Fast</h2>
          <ul>
            <li className="text-base text-gray-600 pt-1">
              Laptops & Computers
            </li>
            <li className="text-base text-gray-600 pt-1">
              Cameras & Photography
            </li>
            <li className="text-base text-gray-600 pt-1">
              Smart Phones & Tablets
            </li>
            <li className="text-base text-gray-600 pt-1">
              Video Games & Consoles
            </li>
            <li className="text-base text-gray-600 pt-1">TV & Audio</li>
            <li className="text-base text-gray-600 pt-1">Gadgets</li>
            <li className="text-base text-gray-600 pt-1">
              Waterproof Headphones
            </li>
          </ul>
        </div>
        <div className="w-1/5 ml-3 mt-8">
          <ul>
            <li className="text-base text-gray-600 pt-1">About</li>
            <li className="text-base text-gray-600 pt-1">Contact</li>
            <li className="text-base text-gray-600 pt-1">Wishlist</li>
            <li className="text-base text-gray-600 pt-1">Compare</li>
            <li className="text-base text-gray-600 pt-1">FAQ</li>
            <li className="text-base text-gray-600 pt-1">Store Directory</li>
          </ul>
        </div>
        <div className="w-1/5 ml-3">
          <h2 className="text-lg font-bold mb-3">Customer Care</h2>
          <ul>
            <li className="text-base text-gray-600 pt-1">My Account</li>
            <li className="text-base text-gray-600 pt-1">Track Your Order</li>
            <li className="text-base text-gray-600 pt-1">Customer Service</li>
            <li className="text-base text-gray-600 pt-1">Returns/Exchange</li>
            <li className="text-base text-gray-600 pt-1">FAQs</li>
            <li className="text-base text-gray-600 pt-1">Product Support</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 py-2 px-24 flex justify-between items-center">
        <p className="text-gray-500">
          ©<span className="font-bold text-gray-600"> ecom.</span> - All rights
          reserved.
        </p>
        <img src="/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
