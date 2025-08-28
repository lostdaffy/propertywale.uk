import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#1c2636] flex items-center justify-center pt-20">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="mb-4">
              <motion.span
                className="text-[#d4ad83] text-sm font-medium tracking-wider uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Us
              </motion.span>
            </div>

            <motion.h1
              className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
              custom={1}
            >
              Your Trusted Real Estate Partner
            </motion.h1>

            <motion.p
              className="text-gray-300 mb-4 leading-relaxed"
              variants={fadeInUp}
              custom={2}
            >
              With decades of real estate excellence, we've helped thousands
              find their dream homes and build profitable portfolios. Our
              commitment to integrity and exceptional service makes us a market
              leader.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
              custom={3}
            >
              We offer comprehensive solutions for luxury residential and prime
              commercial properties, with experienced teams providing end-to-end
              support for smooth, stress-free transactions.
            </motion.p>

            {/* Advantages */}
            <motion.div
              className="border-t border-gray-600 pt-6"
              variants={fadeInUp}
              custom={4}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Our Key Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Investment Advisory",
                    desc: "Strategic investment guidance for maximum returns",
                  },
                  {
                    title: "Virtual Property Tours",
                    desc: "360° virtual tours and AR visualization technology",
                  },
                  {
                    title: "Property Management",
                    desc: "Complete rental management and maintenance services",
                  },
                  {
                    title: "Market Analytics",
                    desc: "Real-time market data and price trend analysis",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    variants={fadeInUp}
                    custom={i + 5}
                  >
                    <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative h-full min-h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-img-container relative h-full">
              {/* Decorative border */}
              <motion.div
                className="absolute top-[10%] left-[20%] w-[60%] h-[80%] border-4 border-[#d4ad83] -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* First image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover top-0 left-0 shadow-lg rounded-lg"
                src="/images/whychooseus-1.jpg"
                alt="Luxury residential property"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />

              {/* Second image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover shadow-lg rounded-lg"
                style={{ marginTop: "20%", marginLeft: "40%" }}
                src="/images/whychooseus-2.jpg"
                alt="Modern commercial development"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;