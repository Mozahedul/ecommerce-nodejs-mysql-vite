import FullStarIcon from "../assets/icons/FullStarIcon";
import EmptyStarIcon from "../assets/icons/EmptyStarIcon";
import PropTypes from "prop-types";

const ProductReview = ({ icon }) => {
  console.log("ICON ==> ", icon);
  return (
    <div className="mt-2 flex items-center">
      <div className="flex">
        <FullStarIcon css="text-yellow-500 w-5 h-5" />
        <FullStarIcon css="text-yellow-500 w-5 h-5" />
        <FullStarIcon css="text-yellow-500 w-5 h-5" />
        <FullStarIcon css="text-yellow-500 w-5 h-5" />
        {icon === "Yes" ? (
          <FullStarIcon css="text-yellow-500 w-5 h-5" />
        ) : (
          <EmptyStarIcon css="text-gray-400 w-5 h-5" />
        )}
      </div>
      <div className="ml-8 flex items-center">
        <p
          className={`padding-3 md:48 h-2 w-32 rounded-full ${
            icon === "Yes" ? "bg-gray-400" : "bg-gray-200"
          }`}
        ></p>
        <span className="text-md ml-3 font-medium text-gray-400">0</span>
      </div>
    </div>
  );
};

ProductReview.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default ProductReview;
