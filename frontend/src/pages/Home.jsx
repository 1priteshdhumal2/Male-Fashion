import React from "react";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default home;
