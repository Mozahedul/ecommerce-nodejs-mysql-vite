import RightArrowIconLong from "../assets/icons/RightArrowIconLong.jsx";
import CartIcon from "../assets/icons/CartIcon.jsx";

const BestDeals = () => {
  return (
    <div className="mt-12 pt-4 pl-24 pr-24 pb-8 bg-white">
      <div className="flex justify-center text-gray-500 border-b-2 font-medium">
        <button className="mr-6 text-sm border-b-4 py-2 border-orange-400">
          Best Deals
        </button>
        <button className="mr-6  py-2 text-sm">TV & Audio</button>
        <button className="mr-6  py-2 text-sm">Cameras</button>
        <button className="mr-6  py-2 text-sm">Audio</button>
        <button className="mr-6  py-2 text-sm">Smartphones</button>
        <button className="mr-6  py-2 text-sm">GPS & Navigation</button>
        <button className="mr-6  py-2 text-sm">Computers</button>
        <button className="mr-6  py-2 text-sm">Portable Audio</button>
        <button className="py-2 text-sm">Accessories</button>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col w-1/4">
          <div className="flex flex-col justify-between mb-2 bg-gray-100 p-4">
            <p className="text-gray-400 text-sm">Power Banks</p>
            <h2 className="text-sky-600 text-lg font-semibold">
              Powerbank 1130 mAh Blue
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/powerbank.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl text-red-700 font-semibold">
                $200.00
              </span>
              <button className="bg-gray-300 hover:bg-orange-400 p-2 text-white transition-all duration-500 rounded-full">
                <RightArrowIconLong css="w-4 h-4" />
              </button>
            </p>
          </div>
          <div className="flex flex-col justify-between bg-gray-100 p-4">
            <p className="text-gray-400 text-sm">Laptops</p>
            <h2 className="text-sky-600 text-lg font-semibold">
              Laptop Screener CX70 2QF-621XPL 17.3″ 4210
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/applap.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl text-gray-700 font-semibold">
                $2399.00
              </span>
              <button className="bg-gray-300 hover:bg-orange-400 p-2 text-white transition-all duration-500 rounded-full">
                <CartIcon css="w-4 h-4" />
              </button>
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-gray-100 ml-2 mr-2 p-5 flex flex-col justify-between">
          <div>
            <p className="text-gray-400 text-sm">Game Consoles</p>
            <h2 className="text-sky-600 font-semibold">
              Game Console Controller + USB3.0 Cable
            </h2>
          </div>
          <img
            src="/best-deals/consal.png"
            alt="best deal"
            className="max-w-full"
          />
          <div className="flex">
            <img
              className="cursor-pointer w-16 p-2 mr-2 border-2 max-w-full"
              src="/best-deals/consal2.png"
              alt="console 2"
            />
            <img
              className="cursor-pointer w-16 p-2 mr-2 border-2 max-w-full"
              src="/best-deals/gade1.png"
              alt="gade1"
            />
            <img
              className="cursor-pointer w-16 p-2 border-2 max-w-full"
              src="/best-deals/gadtet.png"
              alt="console 3"
            />
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold text-xl">$99.00</span>
            <button className="bg-orange-400 rounded-full px-4 py-1 font-bold text-white transition-all duration-500 hover:bg-blue-600">
              <CartIcon css="w-4 h-4 inline-block" /> Add to cart
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <div className="flex flex-col justify-between mb-2 bg-gray-100 p-4">
            <p className="text-gray-400 text-sm">Computer Cases, Servers</p>
            <h2 className="text-sky-600 text-lg font-semibold">
              Aerocool EN52377 Dead Silence Gaming Cube Case
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/gamecabin.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl text-red-700 font-semibold">
                $150.00
              </span>
              <button className="bg-gray-300 hover:bg-orange-400 p-2 text-white transition-all duration-500 rounded-full">
                <RightArrowIconLong css="w-4 h-4" />
              </button>
            </p>
          </div>
          <div className="flex flex-col justify-between bg-gray-100 p-4">
            <p className="text-gray-400 text-sm">TVs</p>
            <h2 className="text-sky-600 text-lg font-semibold">
              Widescreen 4K SUHD TV
            </h2>
            <img
              className="max-w-full"
              src="/best-deals/widetv.png"
              alt="power bank"
            />
            <p className="flex justify-between">
              <span className="text-xl text-gray-700 font-semibold">
                $3299.00
              </span>
              <button className="bg-gray-300 hover:bg-orange-400 p-2 text-white transition-all duration-500 rounded-full">
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
