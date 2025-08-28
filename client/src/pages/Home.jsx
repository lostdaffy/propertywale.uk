import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import RealEstateServices from "../components/home/RealEstateServices";
import Services from "../components/home/Services";


const Home = () => {
  return (
    <>
      <Hero />
      <RealEstateServices/>
      <About />
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default Home;
