import React from "react";
import Hero from "../components/home/Hero";
import PropertyTypes from "../components/home/PropertyTypes";
import About from "../components/home/About";
import HomeBuyingHero from "../components/home/HomeBuyingHero";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeBuyingHero/>
      <About/>
      <PropertyTypes/>
    </>
  );
};

export default Home;
