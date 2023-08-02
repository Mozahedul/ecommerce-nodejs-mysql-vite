import React from "react";
import Header from "../sections/Header";
import Banner from "../sections/Banner";
import Deal from "../sections/Deal";
import SpecialOffer from "../sections/SpecialOffer";
import BestDeals from "../sections/BestDeals";
import BestSellers from "../sections/BestSellers";
import RecentProducts from "../sections/RecentProducts";
import SelectedProducts from "../sections/SelectedProducts";

const Home = () => {
  return (
    <>
      <Header>
        <Banner />
        <Deal />
        <SpecialOffer />
        <BestDeals />
        <BestSellers />
        <RecentProducts />
        <SelectedProducts />
      </Header>
    </>
  );
};

export default Home;
