import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#1c2636] flex items-center justify-center pt-20 overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-x-hidden">
          {/* Content Section - Fixed overflow issue */}
          <motion.div
            className="flex flex-col justify-center overflow-x-hidden relative" // Added relative
            initial={{ opacity: 0, x: -30 }} // Further reduced from -50 to -30
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ 
              maxWidth: '100%',  // Ensure it never exceeds container width
              width: '100%'      // Full width utilization
            }}
          >
            {/* Content wrapper with overflow control */}
            <div className="w-full overflow-x-hidden">
              <div className="mb-4">
                <span className="text-[#d4ad83] text-sm font-medium tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight break-words">
                Your Trusted Real Estate Partner
              </h1>

              <p className="text-gray-300 mb-4 leading-relaxed">
                With decades of real estate excellence, we've helped thousands
                find their dream homes and build profitable portfolios. Our
                commitment to integrity and exceptional service makes us a market
                leader.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                We offer comprehensive solutions for luxury residential and prime
                commercial properties, with experienced teams providing end-to-end
                support for smooth, stress-free transactions.
              </p>

              {/* Advantages */}
              <div className="border-t border-gray-600 pt-6">
                <h2 className="text-2xl font-bold text-white mb-6 break-words">
                  Our Key Advantages
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-x-hidden">
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
                    <div
                      key={i}
                      className="flex items-start overflow-x-hidden"
                    >
                      <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div className="overflow-x-hidden flex-1">
                        <h4 className="text-white font-semibold mb-2 break-words">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm break-words">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative h-full min-h-[400px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }} // Further reduced from 50 to 30
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-img-container relative h-full w-full overflow-hidden">
              {/* Decorative border */}
              <motion.div
                className="absolute top-[10%] left-[20%] w-[60%] h-[80%] border-4 border-[#d4ad83] -z-10"
                initial={{ opacity: 0, scale: 0.9 }} // Reduced scale animation
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />

              {/* First image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover top-0 left-0 shadow-lg"
                src="/images/whychooseus-1.jpg"
                alt="Luxury residential property"
                initial={{ opacity: 0, scale: 1.02 }} // Minimal scale change
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />

              {/* Second image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover shadow-lg"
                style={{ 
                  marginTop: "20%", 
                  marginLeft: "30%"  // Further reduced from 35% to 30%
                }}
                src="/images/whychooseus-2.jpg"
                alt="Modern commercial development"
                initial={{ opacity: 0, scale: 1.02 }} // Minimal scale change
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
