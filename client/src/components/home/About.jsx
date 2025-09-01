import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  // Reduced transform values to prevent overflow
  const y = useTransform(scrollY, [0, 1000], [0, -30]);

  // Animation variants with constrained transforms
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -50, 
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  const textItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <div className="min-h-screen bg-[#1c2636] flex items-center justify-center pt-10 sm:pt-20 overflow-hidden">
      <motion.div 
        className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 w-full"
        style={{ y }}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Section - Simplified animations */}
          <motion.div
            className="relative h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
            variants={imageVariants}
          >
            <div className="about-img-container relative h-full">
              {/* Background border */}
              <motion.div 
                className="absolute top-[10%] left-[20%] w-[60%] h-[80%] border-4 lg:border-5 border-[#d4ad83] -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />

              {/* First image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover top-0 left-0 shadow-lg"
                src="/images/about-1.jpg"
                alt="Real estate project 1"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />

              {/* Second image */}
              <motion.img
                className="absolute w-[60%] h-[80%] object-cover shadow-lg"
                style={{ marginTop: "20%", marginLeft: "40%" }}
                src="/images/about-2.jpg"
                alt="Real estate project 2"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center"
            variants={contentVariants}
          >
            {/* About Us Label */}
            <motion.div 
              className="mb-3 sm:mb-4"
              variants={textItemVariants}
            >
              <span className="text-[#d4ad83] text-xs sm:text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              variants={textItemVariants}
            >
              Building Trust, One Property at a Time
            </motion.h1>

            {/* First Paragraph */}
            <motion.p 
              className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-justify text-sm sm:text-base"
              variants={textItemVariants}
            >
              For over two decades, we have been a trusted name in the real
              estate industry, helping families find their dream homes and
              investors grow their portfolios. Our commitment to transparency,
              integrity, and personalized service has made us a leader in
              residential and commercial property solutions.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p 
              className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-justify text-sm sm:text-base"
              variants={textItemVariants}
            >
              Whether you're buying, selling, or investing, our team of seasoned
              professionals provides expert guidance every step of the way. From
              luxury estates to modern developments, we pride ourselves on
              delivering properties that fit both lifestyle and financial goals.
            </motion.p>

            {/* Experience Counter */}
            <motion.div 
              className="flex items-center mb-6 sm:mb-8"
              variants={textItemVariants}
            >
              <motion.div 
                className="flex-shrink-0 flex items-center justify-center border-3 sm:border-4 border-[#d4ad83] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white -mb-1 sm:-mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  25
                </motion.span>
              </motion.div>

              <div className="ml-4 sm:ml-6">
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  Years
                </motion.h3>
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Industry
                </motion.h3>
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white mb-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  Experience
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
