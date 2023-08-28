import Header from "../sections/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDetailSidebar from "../components/ProductDetailSidebar";
import ProductDetailDescription from "../components/ProductDetailDescription";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsDescriptionTab from "../components/ProductDetailsDescriptionTab";
import ProductDetailSpecification from "../components/ProductDetailSpecification";
import SelectedProducts from "../sections/SelectedProducts";
import BrandPartner from "../sections/BrandPartner";
import RecentProduct from "../components/RecentProduct";
import ProductReviews from "../sections/ProductReviews";

const ProductDetails = () => {
  const handleDetails = (event, id) => {
    const lists = document.getElementsByClassName("details");
    const btnLists = document.getElementsByClassName("btnDetails");
    console.log("BUTTON LISTS ==> ", btnLists);

    for (let i = 0; i < lists.length; i++) {
      lists[i].style.display = "none";
      btnLists[i].style.fontWeight = "normal";
      btnLists[i].style.borderBottom = "none";
      btnLists[i].style.color = "gray";
    }

    document.getElementById(id).style.display = "block";
    event.target.style.fontWeight = "bold";
    event.target.style.borderBottom = "2px solid orange";
    event.target.style.color = "orange";
  };
  return (
    <Header>
      <Breadcrumbs />
      <div className="mt-8 flex flex-col items-center px-8 lg:flex-row lg:justify-between">
        {/* Product details sidebar */}
        <div className="w-full lg:w-1/5">
          <ProductDetailSidebar />
        </div>
        {/* Product details image */}
        <div className="mx-6 w-full lg:w-2/5">
          <img src="/product-details/camera.jpg" alt="app tablet" />
        </div>
        {/* Product details description */}
        <div className="w-full lg:w-2/5">
          <ProductDetailDescription />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center px-8 lg:flex-row lg:items-start">
        <div className="order-2 mt-3 w-full lg:order-1 lg:w-1/5">
          <img src="/shop-sidebar-ad-banner.jpg" alt="" />
          <h2 className="mb-3 mt-8 border-b-2 text-lg font-semibold text-gray-700">
            Latest Products
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-1">
            <ProductDetailsCard
              title="Tablet Thin EliteBook Revolve 810 G2"
              url="/onsale-products/tablet-red-elite.png"
              price={1347.0}
            />
            <ProductDetailsCard
              title="Wireless Audio System Multiroom 360"
              url="/topRated/WirelessSound.png"
              price={2299.0}
            />
            <ProductDetailsCard
              title="Smartphone 6S 32GB LTE"
              url="/featured-products/smartphone.png"
              price={1199}
            />
            <ProductDetailsCard
              title="Tablet Thin EliteBook Revolve 810 G2"
              url="/onsale-products/tablet-red-elite.png"
              price={1347.0}
            />
            <ProductDetailsCard
              title="Wireless Audio System Multiroom 360"
              url="/topRated/WirelessSound.png"
              price={2299.0}
            />
            <ProductDetailsCard
              title="Smartphone 6S 32GB LTE"
              url="/featured-products/smartphone.png"
              price={1199}
            />
          </div>
        </div>
        <div className="order-1 w-full rounded-md bg-white p-3 md:p-8 lg:order-2 lg:ml-8 lg:w-4/5">
          <div className="font-base py-4 text-center text-lg ">
            <button
              onClick={(event) => handleDetails(event, "description")}
              className="btnDetails hover:font-bold hover:text-orange-400"
            >
              Description
            </button>
            <button
              onClick={(event) => handleDetails(event, "specification")}
              className="btnDetails mx-3 hover:font-bold hover:text-orange-400 lg:mx-12"
            >
              Specification
            </button>
            <button
              onClick={(event) => handleDetails(event, "review")}
              className="btnDetails hover:font-bold hover:text-orange-400"
            >
              Reviews
            </button>
          </div>
          <div className="rounded-2xl border-2 p-2 md:p-6">
            <div
              id="description"
              className="details transition-all duration-500"
            >
              <ProductDetailsDescriptionTab />
            </div>
            <div
              id="specification"
              className="details hidden transition-all duration-500"
            >
              <ProductDetailSpecification />
            </div>
            <div
              id="review"
              className="details hidden transition-all duration-500"
            >
              <ProductReviews />
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 flex flex-col px-9">
        <h2 className="my-6 border-b-2 pb-4 text-2xl font-semibold">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <RecentProduct
            subtitle="Headphone"
            title="White Solo 2 Wireless"
            url="/topRated/headphone.png"
            price={599}
          />
          <RecentProduct
            subtitle="Headphone"
            title="White Solo 2 Wireless"
            url="/topRated/headphone.png"
            price={599}
          />
          <RecentProduct
            subtitle="Headphone"
            title="White Solo 2 Wireless"
            url="/topRated/headphone.png"
            price={599}
          />
          <RecentProduct
            subtitle="Headphone"
            title="White Solo 2 Wireless"
            url="/topRated/headphone.png"
            price={599}
          />
          <RecentProduct
            subtitle="Headphone"
            title="White Solo 2 Wireless"
            url="/topRated/headphone.png"
            price={599}
          />
          <RecentProduct
            subtitle="Headphone"
            title="White Solo 2 Wireless"
            url="/topRated/headphone.png"
            price={599}
          />
        </div>
      </div>
      <BrandPartner />
      <SelectedProducts />
    </Header>
  );
};

export default ProductDetails;
