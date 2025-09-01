import React, { useState, useEffect } from "react";
import { Search, MapPin, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample carousel images
  const carouselImages = [
    "/images/caro-1.jpg",
    "/images/caro-2.jpg",
    "/images/caro-3.jpg",
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Animation variants (Original values kept)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 }, // Original animation kept
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 }, // Original animation kept
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1c2636] overflow-x-hidden"> {/* Added overflow-x-hidden */}
      {/* Hero Content */}
      <div className="relative overflow-x-hidden"> {/* Added overflow-x-hidden */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 pt-6 sm:pt-8 md:pt-10 overflow-x-hidden"> {/* Changed max-w-8xl to max-w-7xl, added overflow-x-hidden */}
          <motion.div
            className="grid lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12 overflow-x-hidden" // Added overflow-x-hidden
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div
              className="space-y-6 lg:space-y-8 lg:pr-8 order-2 lg:order-1 text-center lg:text-left overflow-x-hidden" // Added overflow-x-hidden
              variants={leftContentVariants}
            >
              <div className="space-y-6 lg:space-y-8">
                <motion.div
                  className="inline-flex items-center space-x-2 bg-[#d4ad83]/10 border border-[#d4ad83]/20 px-4 py-2 rounded-full backdrop-blur-sm"
                  variants={badgeVariants}
                  whileHover={{ scale: 1.03 }} // Reduced from 1.05 to 1.03
                  whileTap={{ scale: 0.97 }} // Reduced from 0.95 to 0.97
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <MapPin className="h-4 w-4 text-[#d4ad83]" />
                  </motion.div>
                  <span className="text-[#d4ad83] text-sm font-medium">
                    Find Your Dream Location
                  </span>
                </motion.div>

                <motion.h1
                  className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-normal text-white"
                  variants={titleVariants}
                >
                  Building Wealth{" "}
                  <span className="text-[#d4ad83] relative block sm:inline">
                    Creating Elegance
                    <motion.div
                      className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-[#d4ad83] to-transparent rounded-full"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  variants={descriptionVariants}
                >
                  We offer premium real estate investments with world-class
                  amenities that enhance property value and maximize rental
                  income — creating spaces that inspire and returns that last.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
              >
                <motion.button
                  className="bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-white px-6 sm:px-8 py-3 rounded-full hover:from-[#c19a6b] hover:to-[#b08954] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-semibold"
                  whileHover={{ 
                    scale: 1.03, // Reduced from 1.05 to 1.03
                    boxShadow: "0 20px 25px -5px rgba(212, 173, 131, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Search className="h-5 w-5" />
                  <span>Explore Now</span>
                </motion.button>

                <motion.button
                  className="border-2 border-[#d4ad83] text-[#d4ad83] px-6 sm:px-8 py-3 rounded-full hover:bg-[#d4ad83] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
                  whileHover={{ 
                    scale: 1.03, // Reduced from 1.05 to 1.03
                    backgroundColor: "#d4ad83",
                    color: "#ffffff"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Building className="h-5 w-5" />
                  <span>View Properties</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Image Carousel */}
            <motion.div
              className="relative order-1 lg:order-2 overflow-hidden" // Added overflow-hidden
              variants={rightContentVariants}
            >
              <div className="relative overflow-hidden rounded-lg lg:rounded-none">
                <div className="aspect-[4/3] lg:aspect-[4/3.5] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      className="absolute inset-0"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <img
                        src={carouselImages[currentSlide]}
                        alt={`Property ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                        loading={currentSlide === 0 ? "eager" : "lazy"}
                      />
                      {/* Overlay gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? "bg-[#d4ad83] scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      whileHover={{ scale: 1.15 }} // Reduced from 1.2 to 1.15
                      whileTap={{ scale: 0.9 }}
                      animate={index === currentSlide ? { scale: 1.2 } : { scale: 1 }} // Reduced from 1.25 to 1.2
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
