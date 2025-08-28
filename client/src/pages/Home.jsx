import React from "react";
import Hero from "../components/home/Hero";
import RealEstateServices from "../components/home/RealEstateServices";
import About from "../components/home/About";
import PropertyTypes from "../components/home/PropertyTypes";
import HomeBuyingHero from "../components/home/HomeBuyingHero";
import Service from "../components/home/Service";
import RealEstateSection from "../components/home/RealEstateSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <RealEstateServices/>
      <About />
      <Service />
      <WhyChooseUs />
      {/* <HomeBuyingHero />
      <RealEstateSection />
      <PropertyTypes /> */}
    </>
  );
};

export default Home;
