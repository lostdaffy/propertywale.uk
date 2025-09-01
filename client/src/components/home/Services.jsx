import React, { useState, memo } from "react";
import { motion } from "framer-motion";

const ServiceCard = memo(({ service, index, isHovered, onHover, onLeave }) => (
  <motion.div
    className={`${service.bgColor} rounded-2xl p-8 h-96 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-[#d4ad83]/20 hover:border-[#d4ad83]/40 relative overflow-hidden`}
    role="button"
    tabIndex={0}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={onLeave}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        console.log(`Selected ${service.title}`);
      }
    }}
    aria-label={`Learn more about ${service.title} services`}
    
    // Onscroll animations
    initial={{ opacity: 0, y: 100, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      delay: index * 0.2, 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    viewport={{ once: true, amount: 0.3 }}
    
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
  >
    {/* Background Image */}
    <motion.div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
      style={{ backgroundImage: `url(${service.backgroundImage})` }}
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1.2, delay: index * 0.1 }}
      viewport={{ once: true }}
    />

    {/* Content - positioned relative to appear above background */}
    <div className="relative z-10 flex flex-col justify-between h-full">
      {/* Icon */}
      <motion.div
        className={`${service.iconColor} mb-8`}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3 + index * 0.1,
          type: "spring",
          stiffness: 200
        }}
        viewport={{ once: true }}
        animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 5 : 0 }}
      >
        <i className={`${service.icon} text-6xl`}></i>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.5 + index * 0.1 
        }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.6 + index * 0.1 
          }}
          viewport={{ once: true }}
        >
          {service.title}
        </motion.h3>
        <motion.p 
          className="text-gray-300 leading-relaxed text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.7 + index * 0.1 
          }}
          viewport={{ once: true }}
        >
          {service.description}
        </motion.p>
      </motion.div>
    </div>
  </motion.div>
));

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Residential",
      description:
        "Expert residential property consulting, market analysis, and investment guidance for homeowners and buyers",
      iconColor: "text-[#d4ad83]",
      backgroundImage: "/images/services-1.jpg",
      icon: "ri-home-line",
    },
    {
      title: "Business Solutions",
      description:
        "Commercial real estate strategies, property management, and business asset optimization services",
      iconColor: "text-[#d4ad83]",
      backgroundImage: "/images/services-2.jpg",
      icon: "ri-building-line",
    },
    {
      title: "Land Services",
      description:
        "Land acquisition, development planning, and rural property investment with comprehensive market expertise",
      iconColor: "text-[#d4ad83]",
      backgroundImage: "/images/services-3.jpg",
      icon: "ri-landscape-line",
    },
    {
      title: "Retail Properties",
      description:
        "Strategic retail real estate solutions, location analysis, and commercial space optimization services",
      iconColor: "text-[#d4ad83]",
      backgroundImage: "/images/services-4.jpg",
      icon: "ri-store-line",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1c2636] pt-5 sm:pt-20">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header Section */}
        <motion.div
          className="mb-12 text-center sm:text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We create innovative real estate strategies to enable transformative
            growth and unlock property potential
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.3
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isHovered={hoveredService === index}
              onHover={setHoveredService}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
