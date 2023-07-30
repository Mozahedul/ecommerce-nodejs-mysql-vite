import React from "react";
import Header from "../sections/Header";
import Banner from "../sections/Banner";
import Deal from "../sections/Deal";

const Home = () => {
  return (
    <>
      <Header>
        <Banner />
        <Deal />
      </Header>
    </>
  );
};

export default Home;
