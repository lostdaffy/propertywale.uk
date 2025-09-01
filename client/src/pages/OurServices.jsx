import React, { useState } from "react";
import { motion } from "framer-motion";
import RealEstateServices from "../components/home/RealEstateServices";
import Services from "../components/home/Services";
import GetInTouch from "../components/global/GetInTouch";

const OurServices = () => {

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
              Our{" "}
              <motion.span
                className="text-[#d4ad83]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Services
              </motion.span>
            </motion.h1>
            <motion.h3
              className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Home{" > "} <span className="text-[#d4ad83]">Services</span>
            </motion.h3>
          </motion.div>
        </div>
      </motion.div>

      <RealEstateServices />
      <Services />

      {/* ------ TESTIMONIALS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Home Buyer",
              text: "Exceptional service! They helped me find my dream home within my budget. The team was professional and responsive throughout the entire process.",
              rating: 5,
            },
            {
              name: "Michael Chen",
              role: "Home Buyer",
              text: "Their investment analysis and market insights helped me build a profitable real estate portfolio. Highly recommend their services!",
              rating: 5,
            },
            {
              name: "Lisa Rodriguez",
              role: "Home Buyer",
              text: "Outstanding property management services. They handle everything professionally, and I receive detailed reports monthly. Great communication!",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#d4ad83] text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-[#d4ad83]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default OurServices;
