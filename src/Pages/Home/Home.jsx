import React from "react";
import HeroSection from "./HeroSection";
import ProductsHome from "./ProductsHome";
import ExploreSection from "./ExploreSection";
import Clients from "./Clients";

const Home = () => {
  return (
    <div className="homeMain">
      <HeroSection />
      <ProductsHome />
      <Clients />
      <ExploreSection />
    </div>
  );
};
export default Home;
