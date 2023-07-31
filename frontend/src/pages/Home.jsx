import React from "react";
import Header from "../sections/Header";
import Banner from "../sections/Banner";
import Deal from "../sections/Deal";
import SpecialOffer from "../sections/SpecialOffer";

const Home = () => {
  return (
    <>
      <Header>
        <Banner />
        <Deal />
        <SpecialOffer />
      </Header>
    </>
  );
};

export default Home;
