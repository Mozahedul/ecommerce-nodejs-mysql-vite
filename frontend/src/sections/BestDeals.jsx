import RightArrowIconLong from "../assets/icons/RightArrowIconLong.jsx";
import CartIcon from "../assets/icons/CartIcon.jsx";

const BestDeals = () => {
  return (
    <div className="mt-12 bg-white px-8 pb-8 pt-4">
      <div
        id="mainMenu"
        className="flex w-full overflow-x-auto whitespace-nowrap border-b-2 font-medium text-gray-500 lg:justify-center"
      >
        <button className="mr-6 border-b-4 border-orange-400 py-2 text-sm">
          Best Deals
        </button>
        <button className="mr-6 py-2 text-sm">TV & Audio</button>
        <button className="mr-6 py-2 text-sm">Cameras</button>
        <button className="mr-6 py-2 text-sm">Audio</button>
        <button className="mr-6 py-2 text-sm">Smartphones</button>
        <button className="mr-6 py-2 text-sm">GPS & Navigation</button>
        <button className="mr-6 py-2 text-sm">Computers</button>
        <button className="mr-6 py-2 text-sm">Portable Audio</button>
        <button className="py-2 text-sm">Accessories</button>
      </div>
      <div className="mt-2 flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/3 lg:w-1/4">
          <div className="mb-2 flex flex-col justify-between bg-gray-100 p-4">
            <p className="text-sm text-gray-400">Power Banks</p>
            <h2 className="text-lg font-semibold text-sky-600">
              Powerbank 1130 mAh Blue
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/powerbank.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl font-semibold text-red-700">
                $200.00
              </span>
              <button className="rounded-full bg-gray-300 p-2 text-white transition-all duration-500 hover:bg-orange-400">
                <RightArrowIconLong css="w-4 h-4" />
              </button>
            </p>
          </div>
          <div className="flex flex-col justify-between bg-gray-100 p-4">
            <p className="text-sm text-gray-400">Laptops</p>
            <h2 className="text-lg font-semibold text-sky-600">
              Laptop Screener CX70 2QF-621XPL 17.3″ 4210
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/applap.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl font-semibold text-gray-700">
                $2399.00
              </span>
              <button className="rounded-full bg-gray-300 p-2 text-white transition-all duration-500 hover:bg-orange-400">
                <CartIcon css="w-4 h-4" />
              </button>
            </p>
          </div>
        </div>
        <div className="my-2 flex flex-col justify-between bg-gray-100 p-2 md:mx-2 md:my-0 md:w-1/3 lg:my-0 lg:ml-2 lg:mr-2 lg:w-1/2 lg:p-4">
          <div>
            <p className="text-sm text-gray-400">Game Consoles</p>
            <h2 className="font-semibold text-sky-600">
              Game Console Controller + USB3.0 Cable
            </h2>
          </div>
          <img
            src="/best-deals/consal.png"
            alt="best deal"
            className="max-w-full"
          />
          <div className="mb-4 flex justify-center md:mb-0">
            <img
              className="w-16 max-w-full cursor-pointer border-2 p-2 md:mr-1 lg:mr-2"
              src="/best-deals/consal2.png"
              alt="console 2"
            />
            <img
              className="w-16 max-w-full cursor-pointer border-2 p-2 md:mr-1 lg:mr-2"
              src="/best-deals/gade1.png"
              alt="gade1"
            />
            <img
              className="w-16 max-w-full cursor-pointer border-2 p-2"
              src="/best-deals/gadtet.png"
              alt="console 3"
            />
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold text-gray-600">$99.00</span>
            <button className="rounded-full bg-orange-400 px-2 py-1 text-sm font-semibold text-white transition-all duration-500 hover:bg-blue-600 md:px-4 md:text-sm md:font-bold lg:px-3 lg:py-2 lg:text-base">
              <CartIcon css="w-4 h-4 inline-block" /> Add to cart
            </button>
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 lg:w-1/4">
          <div className="mb-2 flex flex-col justify-between bg-gray-100 p-4">
            <p className="text-sm text-gray-400">Computer Cases, Servers</p>
            <h2 className="text-lg font-semibold text-sky-600">
              Aerocool EN52377 Dead Silence Gaming Cube Case
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/gamecabin.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl font-semibold text-red-700">
                $150.00
              </span>
              <button className="rounded-full bg-gray-300 p-2 text-white transition-all duration-500 hover:bg-orange-400">
                <RightArrowIconLong css="w-4 h-4" />
              </button>
            </p>
          </div>
          <div className="flex flex-col justify-between bg-gray-100 p-4">
            <p className="text-sm text-gray-400">TVs</p>
            <h2 className="text-lg font-semibold text-sky-600">
              Widescreen 4K SUHD TV
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/widetv.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl font-semibold text-gray-700">
                $3299.00
              </span>
              <button className="rounded-full bg-gray-300 p-2 text-white transition-all duration-500 hover:bg-orange-400">
                <CartIcon css="w-4 h-4" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
