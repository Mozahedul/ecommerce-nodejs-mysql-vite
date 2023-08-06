import PhoneIcon from "../assets/icons/PhoneIcon";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-gray-100 px-8 py-12 lg:grid-cols-4">
        <div>
          <img src="/logo.svg" alt="website logo" className="w-32" />
          <div className="mt-4 flex">
            <PhoneIcon css="w-12 h-12 text-orange-400" />
            <div className="ml-4">
              <p className="text-sm text-gray-400">
                Any Queries? Call us 24/7!
              </p>
              <p className="text-base font-semibold text-gray-600 lg:text-xl">
                (+880)-1738-648749, <br /> (+880)-1923-242894{" "}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg font-bold text-gray-700">Contact Info</p>
            <p className="text-base text-gray-600">
              32 Rajib Road, Rangpur, Bangladesh
            </p>
          </div>
        </div>
        <div className="ml-3 ">
          <h2 className="mb-3 text-lg font-bold">Find It Fast</h2>
          <ul>
            <li className="pt-1 text-base text-gray-600">
              Laptops & Computers
            </li>
            <li className="pt-1 text-base text-gray-600">
              Cameras & Photography
            </li>
            <li className="pt-1 text-base text-gray-600">
              Smart Phones & Tablets
            </li>
            <li className="pt-1 text-base text-gray-600">
              Video Games & Consoles
            </li>
            <li className="pt-1 text-base text-gray-600">TV & Audio</li>
            <li className="pt-1 text-base text-gray-600">Gadgets</li>
            <li className="pt-1 text-base text-gray-600">
              Waterproof Headphones
            </li>
          </ul>
        </div>
        <div className="ml-3 mt-8 ">
          <ul>
            <li className="pt-1 text-base text-gray-600">About</li>
            <li className="pt-1 text-base text-gray-600">Contact</li>
            <li className="pt-1 text-base text-gray-600">Wishlist</li>
            <li className="pt-1 text-base text-gray-600">Compare</li>
            <li className="pt-1 text-base text-gray-600">FAQ</li>
            <li className="pt-1 text-base text-gray-600">Store Directory</li>
          </ul>
        </div>
        <div className="ml-3">
          <h2 className="mb-3 text-lg font-bold">Customer Care</h2>
          <ul>
            <li className="pt-1 text-base text-gray-600">My Account</li>
            <li className="pt-1 text-base text-gray-600">Track Your Order</li>
            <li className="pt-1 text-base text-gray-600">Customer Service</li>
            <li className="pt-1 text-base text-gray-600">Returns/Exchange</li>
            <li className="pt-1 text-base text-gray-600">FAQs</li>
            <li className="pt-1 text-base text-gray-600">Product Support</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-200 px-24 py-2">
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
