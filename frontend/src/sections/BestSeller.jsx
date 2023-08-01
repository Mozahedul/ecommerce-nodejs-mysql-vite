import BestSellingProduct from "../components/BestSellingProduct";

const BestSeller = () => {
  return (
    <div>
      <div className="flex justify-between">
        <BestSellingProduct
          subtitle="Game Consoles"
          title="Game Console Controller + USB 3.0 Cable"
          url="/best-sellers/consal-300x300.png"
          price={99.0}
        />
        <BestSellingProduct
          subtitle="Audio Speakers"
          title="Wireless Audio System Multiroom 360"
          url="/best-sellers/WirelessSound-300x300.png"
          price={2299.0}
        />
        <BestSellingProduct
          subtitle="Laptops, Ultrabooks"
          title="Tablet Red EliteBook Revolve 810 G2"
          url="/best-sellers/apptablet-300x300.png"
          price={2100.0}
        />
      </div>
      <div className="flex justify-between">
        <BestSellingProduct
          subtitle="Headphones"
          title="Purple Solo 2 Wireless"
          url="/best-sellers/heade1-300x300.png"
          price={248.0}
        />
        <BestSellingProduct
          subtitle="Headphones"
          title="Ultra Wireless S50 Headphones S50 with Bluetooth"
          url="/best-sellers/1-300x300.png"
          price={350.0}
        />
        <BestSellingProduct
          subtitle="Smartphones"
          title="Tablet Thin EliteBook Revolve 810 G6"
          url="/best-sellers/redPhone-300x300.png"
          price={1300.0}
        />
      </div>
    </div>
  );
};

export default BestSeller;
