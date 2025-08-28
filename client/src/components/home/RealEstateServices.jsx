import React from "react";
import { motion } from "framer-motion";

const RealEstateServices = () => {
  const servicesData = {
    propertyValuation: {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#d4ad83"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Property Valuation",
      description:
        "Expert property assessment and market analysis to determine accurate property values. Our certified appraisers provide comprehensive valuation reports for buying, selling, or investment decisions.",
    },
    investmentSolutions: {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#d4ad83"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Investment Solutions",
      description:
        "Strategic real estate investment opportunities and portfolio management. We identify high-potential properties and provide innovative financing solutions to maximize your investment returns.",
    },
    propertyManagement: {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#d4ad83"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Property Management",
      description:
        "Complete property management services including tenant screening, rent collection, maintenance coordination, and financial reporting. Let us handle the day-to-day operations while you enjoy passive income.",
    },
  };

  return (
    <div className="py-10 sm:pb-12 md:pb-15 bg-[#1c2636]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {Object.values(servicesData).map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-[#1f2937] to-[#111827] text-center p-6 sm:p-8 shadow-2xl hover:shadow-[#d4ad83]/20 transition-all duration-500 border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 hover:-translate-y-2 rounded-xl sm:rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4ad83]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

              <div className="relative mb-4 sm:mb-6 flex justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#d4ad83]/20 to-[#d4ad83]/5 rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#d4ad83]/30 group-hover:border-[#d4ad83] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#d4ad83]/25">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#d4ad83] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateServices;
