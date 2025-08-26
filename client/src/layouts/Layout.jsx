import React from "react";

import { Outlet } from "react-router-dom" ;
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
