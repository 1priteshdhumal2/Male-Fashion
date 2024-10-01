import React from "react";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import BestSeller from "../components/BestSeller";

const home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <BestSeller />
    </div>
  );
};

export default home;
