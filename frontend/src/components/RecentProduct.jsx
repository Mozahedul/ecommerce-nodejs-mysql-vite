import CartIcon from "../assets/icons/CartIcon.jsx";
import PropTypes from "prop-types";

const RecentProduct = props => {
  const { width, subtitle, title, url, price } = props;
  // console.clear();
  console.log("WIDTH ==> ", width);

  return (
    <div
      className="flex flex-col justify-between bg-gray-100 p-3 shadow-md"
      style={{ minWidth: width }}
    >
      <div>
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <h2 className="font-bold text-base text-sky-700">{title}</h2>
      </div>
      <img src={url} alt="headphone casin" className="max-w-full" />
      <div className="flex justify-between">
        <span className="text-lg font-medium text-gray-500">${price}</span>
        <button className="text-white bg-gray-300 rounded-full p-2 transition-all duration-500 hover:bg-gray-500">
          <CartIcon css="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

RecentProduct.propTypes = {
  width: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default RecentProduct;
