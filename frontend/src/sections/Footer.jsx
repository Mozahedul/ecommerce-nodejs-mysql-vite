import PhoneIcon from "../assets/icons/PhoneIcon";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-gray-100 px-8 py-12 lg:grid-cols-4">
        <div>
          <img src="/logo.svg" alt="website logo" className="w-20 md:w-32" />
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
            <p className="text-sm text-gray-600 md:text-base">
              32 Rajib Road, Rangpur, Bangladesh
            </p>
          </div>
        </div>
        <div className="ml-3 ">
          <h2 className="mb-3 text-lg font-bold">Find It Fast</h2>
          <ul>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Laptops & Computers
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Cameras & Photography
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Smart Phones & Tablets
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Video Games & Consoles
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              TV & Audio
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">Gadgets</li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Waterproof Headphones
            </li>
          </ul>
        </div>
        <div className="ml-3 mt-8 ">
          <ul>
            <li className="pt-1 text-sm text-gray-600 md:text-base">About</li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">Contact</li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Wishlist
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">Compare</li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">FAQ</li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Store Directory
            </li>
          </ul>
        </div>
        <div className="ml-3">
          <h2 className="mb-3 text-lg font-bold">Customer Care</h2>
          <ul>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              My Account
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Track Your Order
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Customer Service
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Returns/Exchange
            </li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">FAQs</li>
            <li className="pt-1 text-sm text-gray-600 md:text-base">
              Product Support
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between bg-gray-200 px-8 py-2 md:flex-row">
        <p className="whitespace-nowrap text-gray-500">
          ©<span className="font-bold text-gray-600"> ecom.</span> - All rights
          reserved.
        </p>
        <img src="/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
