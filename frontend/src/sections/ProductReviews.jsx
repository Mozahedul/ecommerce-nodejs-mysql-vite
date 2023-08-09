import ProductReview from "../components/ProductReview";
import EmptyStarIcon from "../assets/icons/EmptyStarIcon";

const ProductReviews = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="mr-8 w-2/4">
          <h2 className="mb-6 text-lg font-semibold">Based on 1 review</h2>
          <p className="mb-6 flex flex-col">
            <span className="text-4xl font-bold">4.0</span>
            <span className="text-gray-500">overall</span>
          </p>
          <div>
            <ProductReview icon="No" />
            <ProductReview icon="Yes" />
            <ProductReview icon="No" />
            <ProductReview icon="No" />
            <ProductReview icon="No" />
          </div>
        </div>
        <div className="ml-8 w-2/4">
          <h2>Add a review</h2>
          <div className="flex items-center">
            <strong className="w-2/5">Your Rating</strong>
            <span className="flex w-3/5">
              <EmptyStarIcon css="w-4 h-4 text-yellow-600" />
              <EmptyStarIcon css="w-4 h-4 text-yellow-600" />
              <EmptyStarIcon css="w-4 h-4 text-yellow-600" />
              <EmptyStarIcon css="w-4 h-4 text-yellow-600" />
              <EmptyStarIcon css="w-4 h-4 text-yellow-600" />
            </span>
          </div>
          <form className="mt-6 flex flex-col">
            <div className="flex items-center">
              <label className="w-2/5 font-bold">Your Review</label>
              <textarea
                className="h-24 w-3/5 rounded-lg border-2 pl-2 pt-1"
                placeholder="Write your review here..."
              />
            </div>
            <div className="mt-6 flex items-center">
              <label className="w-2/5 font-bold">Name*</label>
              <input
                type="text"
                placeholder="Mozahedul"
                className="h-10 w-3/5 rounded-lg border-2 pl-2"
              />
            </div>
            <div className="mt-6 flex items-center">
              <label className="w-2/5 font-bold">Email*</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="h-10 w-3/5 rounded-lg border-2 pl-2"
              />
            </div>
            <div className="mt-6 font-semibold text-gray-600">
              <input type="checkbox" /> Save my name, email, and website in this
              browser for the next time I comment.
            </div>
            <div className="mt-6">
              <button className="rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-500 hover:bg-black hover:text-white">
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="font-base mt-8 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          atque minus sunt enim, delectus recusandae! Suscipit, saepe
          reiciendis! Asperiores dolor quibusdam porro, incidunt quam magni
          exercitationem nisi quo deleniti.
        </p>
        <p className="mt-6 text-sm">
          <strong>Elton John</strong> -{" "}
          <span className="text-gray-400">November 19, 2021</span>
        </p>
      </div>
    </div>
  );
};

export default ProductReviews;
