import React from "react";
import Hero from "../components/home/Hero";
import RealEstateServices from "../components/home/RealEstateServices";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";


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
