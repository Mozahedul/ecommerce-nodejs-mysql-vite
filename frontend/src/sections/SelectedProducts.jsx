import SelectedProduct from "../components/SelectedProduct";

const SelectedProducts = () => {
  return (
    <div className="mt-6 grid grid-cols-1 bg-white px-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col pt-6">
        <h2 className="border-b-2 pb-3 text-xl font-semibold text-gray-700">
          Featured Products
        </h2>
        {/* <div className="flex flex-col"> */}
        <SelectedProduct
          title="Tablet Thin EliteBook Revolve 810 G6"
          url="/featured-products/tablet.png"
          price={1300.0}
        />
        <SelectedProduct
          title="Notebook Widescreen Z51-70 40K6013UPB"
          url="/featured-products/notebook.png"
          price={1100.0}
        />
        <SelectedProduct
          title="Smartphone 6S 128GB LTE"
          url="/featured-products/smartphone.png"
          price={750.0}
        />
        {/* </div> */}
      </div>
      <div className="ml-1 mr-1 flex flex-col pt-6">
        <h2 className="border-b-2 pb-3 text-xl font-semibold text-gray-700">
          Top Selling Products
        </h2>
        {/* <div className="flex flex-col"> */}
        <SelectedProduct
          title="Game Console Controller + USB 3.0 Cable"
          url="/top-selling/game-console.png"
          price={99.0}
        />
        <SelectedProduct
          title="Game Console Controller + USB 3.0 Cable"
          url="/top-selling/wireless.png"
          price={2299.0}
        />
        <SelectedProduct
          title="Tablet Thin EliteBook Revolve 810 G6"
          url="/top-selling/tablet-red.png"
          price={2100.0}
        />
        {/* </div> */}
      </div>
      <div className="flex flex-col pt-6">
        <h2 className="border-b-2 pb-3 text-xl font-semibold text-gray-700">
          On-sale Products
        </h2>
        {/* <div className="flex flex-col"> */}
        <SelectedProduct
          title="Apple MacBook Pro MF841HN/A 13-inch Laptop"
          url="/on-saling/apple-macbook.png"
          price={1500.0}
        />
        <SelectedProduct
          title="Notebook Black Spire V Nitro VN7-591G"
          url="/on-saling/iphone.png"
          price={1999.0}
        />
        <SelectedProduct
          title="Tablet Red EliteBook Revolve 810 G2"
          url="/onsale-products/tablet-red-elite.png"
          price={2100.0}
        />
        {/* </div> */}
      </div>
      <div className="mb-4 mt-4 md:mb-0 md:mt-12">
        <img
          src="/footer-widget.jpg"
          alt="footer widget"
          className="ml-6 max-w-full"
        />
      </div>
    </div>
  );
};

export default SelectedProducts;
