import React from "react";
import Hero from "../components/home/Hero";
import RealEstateServices from "../components/home/RealEstateServices";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Gallery from "../components/home/Gallery";
import Team from "../components/home/Team";
import GetInTouch from "../components/global/GetInTouch";

const Home = () => {
  return (
    <>
      <div className="max-w-screen">
        <Hero />
        <RealEstateServices />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Team />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
