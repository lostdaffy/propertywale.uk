import React from "react";
import { motion } from "framer-motion";
import Gallery from "../components/home/Gallery";
import GetInTouch from "../components/global/GetInTouch";

const OurGallery = () => {
  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ TOP BANNER WITH PARALLAX ------ */}
      <motion.div
        className="relative h-[250px] sm:h-[300px] text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(/images/banner-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex h-full items-center px-4 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 
              className="uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our <motion.span 
                className="text-[#d4ad83]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Gallery
              </motion.span>
            </motion.h1>
            <motion.h3 
              className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Home{" > "} <span className="text-[#d4ad83]">Gallery</span>
            </motion.h3>
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Component with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Gallery />
      </motion.div>

      {/* GetInTouch Component with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <GetInTouch />
      </motion.div>
    </div>
  );
};

export default OurGallery;
