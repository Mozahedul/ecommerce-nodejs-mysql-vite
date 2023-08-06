import Envelope from "../assets/icons/Envelope";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-yellow-400 px-8 py-3 lg:flex-row">
      <div className="flex items-center">
        <Envelope css="w-6 h-6 inline-block" />
        <p className="ml-3 text-2xl font-semibold">Signup to Newsletter</p>
      </div>
      <p className="my-3 text-base lg:my-0">
        ...and receive
        <span className="font-bold">$20 coupon for first shopping</span>
      </p>

      <div>
        <form action="#">
          <input
            type="email"
            placeholder="Enter email address..."
            className="rounded-l-full px-5 py-2 text-base"
          />
          <button
            type="submit"
            className="rounded-r-full bg-black px-5 py-2 text-base text-white"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
