import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Counter animation effect
  useEffect(() => {
    if (isVisible && count < 25) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1c2636] flex items-center justify-center py-10 sm:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          {/* Image Section */}
          <motion.div
            className="relative h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
            ref={sectionRef}
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <div className="about-img-container relative h-full">
              {/* Background border effect */}
              <motion.div 
                className="absolute top-[10%] left-[20%] w-[60%] h-[80%] border-4 lg:border-5 border-[#d4ad83] -z-10"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />

              {/* First image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover top-0 left-0 shadow-lg"
                src="/images/about-1.jpg"
                alt="Real estate project 1"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />

              {/* Second image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover shadow-lg"
                style={{ marginTop: "20%", marginLeft: "40%" }}
                src="/images/about-2.jpg"
                alt="Real estate project 2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.7,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <motion.div 
              className="mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <span className="text-[#d4ad83] text-xs sm:text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              Building Trust, One Property at a Time
            </motion.h1>

            <motion.p 
              className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-justify text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              For over two decades, we have been a trusted name in the real
              estate industry, helping families find their dream homes and
              investors grow their portfolios. Our commitment to transparency,
              integrity, and personalized service has made us a leader in
              residential and commercial property solutions.
            </motion.p>

            <motion.p 
              className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-justify text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              Whether you're buying, selling, or investing, our team of seasoned
              professionals provides expert guidance every step of the way. From
              luxury estates to modern developments, we pride ourselves on
              delivering properties that fit both lifestyle and financial goals.
            </motion.p>

            {/* Experience Counter */}
            <motion.div 
              className="flex items-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center border-3 sm:border-4 border-[#d4ad83] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                <motion.span 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white -mb-1 sm:-mb-2"
                  key={count}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {count}
                </motion.span>
              </div>
              <div className="ml-4 sm:ml-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Years</h3>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Industry</h3>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-0">
                  Experience
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
