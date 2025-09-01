import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Career from "../pages/Career";
import OurGallery from "../pages/OurGallery";
import OurServices from "../pages/OurServices";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<OurGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
