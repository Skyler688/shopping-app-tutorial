import React from "react";
import Slider from "../../components/Slider/Slider";
import "./home.scss";
import FeaturedProducts from "../../components/FeaturedProducts/FearuredProducts";
import Catagories from "../../components/Catagories/Catagories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Catagories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
