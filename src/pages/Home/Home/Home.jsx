import React from "react";
import EcommerceBanner from "../Banner/EcommerceBanner";
import Reffer from "../Reffer/Reffer";
import BestSeller from "../BestSeller/BestSeller";
import FreshVegitable from "../FreshVegitable/FreshVegitable";
import Chips from "../ChipsCollection/Chips";
import Curated from "../CuratedCollection/Curated";
import PromotionalBanner from "../Promotion/PromotionalBanner";
import WhisList from "../WhistList/WhistList";
import Cookies from "../Cookies/Cookies";

const Home = () => {
  return (
    <div className="bg-white lg:px-4 font-sans">
      <EcommerceBanner />
      <Reffer />
      <BestSeller />
      <FreshVegitable />
      <Chips />
      <Curated />
      {/* <PromotionalBanner />
            <WhisList /> */}
      <Cookies />
    </div>
  );
};

export default Home;
