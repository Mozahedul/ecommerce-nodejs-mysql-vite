import RightArrowIcon from "../assets/icons/RightArrowIcon";

const Deal = () => {
  return (
    <div className="px-4 flex items-start mt-8 lg:px-8 overflow-x-auto lg:overflow-x-hidden">
      <div
        className="justify-around h-40 bg-white p-2 mr-3 lg:p-3 lg:justify-between flex items-center "
        style={{ minWidth: "300px" }}
      >
        <img className="max-w-full" src="/deal/camera.png" alt="camera" />
        <div>
          <p className="text-xl text-gray-600 font-thin leading-6 uppercase break-words">
            Catch big deals on the cameras
          </p>
          <button className="mt-2 font-bold text-md">
            Shop Now
            <RightArrowIcon css="w-5 h-5 inline-block bg-orange-400 rounded-full p-1 ml-2 text-white" />
          </button>
        </div>
      </div>
      <div
        className="flex h-40 items-center justify-around bg-white p-2 mr-3 lg:mt-0 lg:p-3  lg:justify-between"
        style={{ minWidth: "300px" }}
      >
        <img className="max-w-full" src="/deal/laptop.png" alt="camera" />
        <div>
          <p className="text-xl text-gray-600 font-thin leading-6 uppercase break-words">
            Tables, Smart phones & More
          </p>
          <button className="mt-2 font-bold text-md">
            Up to 60%
            <RightArrowIcon css="w-5 h-5 inline-block bg-orange-400 rounded-full p-1 ml-2 text-white" />
          </button>
        </div>
      </div>
      <div
        className="flex h-40 items-center justify-around bg-white p-2 lg:mt-0 lg:p-3  lg:justify-between"
        style={{ minWidth: "300px" }}
      >
        <img className="max-w-full w-40" src="/deal/desktop.png" alt="camera" />
        <div>
          <p className="text-xl text-gray-600 font-thin leading-6 break-words">
            Shop the, hottest products
          </p>
          <button className="mt-2 font-bold text-md">
            Shop Now
            <RightArrowIcon css="w-5 h-5 inline-block bg-orange-400 rounded-full p-1 ml-2 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
