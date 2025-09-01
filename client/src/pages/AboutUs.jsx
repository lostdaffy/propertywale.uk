import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "../components/home/About";

const AboutUs = () => {
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 500], [0, 150]);

  // Animation variants for different scroll effects
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const rotateIn = {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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
          y: bannerY
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex h-full items-center px-4 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h1 
              className="uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              About <motion.span 
                className="text-[#d4ad83]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                PropertyWale
              </motion.span>
            </motion.h1>
            <motion.h3 
              className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Home{" > "} <span className="text-[#d4ad83]">About</span>{" "}
            </motion.h3>
          </motion.div>
        </div>
      </motion.div>

      {/* ------ STORY SECTION WITH SCROLL ANIMATIONS ------ */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image container - Right side on large screens */}
          <motion.div
            className="relative order-2 lg:order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            {/* Decorative border with animation */}
            <motion.div 
              className="absolute top-4 left-4 w-full h-full border-2 sm:border-4 border-[#d4ad83] rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Image container */}
            <motion.div 
              className="relative bg-[#1c2636] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full border-y-4 sm:border-y-8 border-[#d4ad83]">
                <motion.img
                  src="/images/our-story.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Left side on large screens */}
          <motion.div
            className="order-1 lg:order-1"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-[#d4ad83] uppercase text-sm font-semibold mb-3 tracking-wider"
              variants={staggerItem}
            >
              Our Story
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight"
              variants={staggerItem}
            >
              A Journey of <br /> Excellence and Innovation
            </motion.h2>
            <motion.div
              className="space-y-4 sm:space-y-5 text-gray-300 text-justify"
              variants={staggerContainer}
            >
              <motion.p 
                className="text-base sm:text-lg"
                variants={staggerItem}
              >
                <strong>Founded in 1999</strong>, our company began with a
                vision: to revolutionize real estate by putting clients first
                and delivering the highest value in every transaction.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg"
                variants={staggerItem}
              >
                We grew from a small local agency to one of the most trusted
                real estate companies, handling everything from homes to
                commercial developments. <br className="hidden sm:block" /> <br className="hidden sm:block" />
                Our success is built on three core principles: unwavering
                integrity, innovative solutions, and deep commitment to client
                success.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------ About SECTION WITH FADE IN ------ */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <About />
      </motion.div>

      {/* ------ MISSION, VISION & VALUES WITH ADVANCED ANIMATIONS ------ */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInDown}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Foundation
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Built on strong values and clear vision, we continue to shape the
            future of real estate
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "Our Mission",
              content: "To provide exceptional real estate services that exceed client expectations while building long-term relationships based on trust and integrity."
            },
            {
              title: "Our Vision", 
              content: "To be the most trusted and innovative real estate company, setting industry standards for excellence and client satisfaction."
            },
            {
              title: "Our Values",
              content: "Integrity, Excellence, Innovation, and Client-first approach guide everything we do."
            },
            {
              title: "Our Promise",
              content: "We promise transparency, professional expertise, and unwavering commitment to your real estate success."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-6 sm:p-8 border border-[#d4ad83]/30"
              variants={{
                initial: { 
                  opacity: 0, 
                  y: 60, 
                  scale: 0.9,
                  rotate: index % 2 === 0 ? -5 : 5 
                },
                animate: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotate: 0,
                  transition: { 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: index * 0.1 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                transition: { duration: 0.3 }
              }}
              whileInView="animate"
              initial="initial"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-lg sm:text-xl font-bold mb-2 text-[#d4ad83]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ------ LEADERSHIP SECTION WITH COMPLEX ANIMATIONS ------ */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleIn}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, letterSpacing: "10px" }}
            whileInView={{ opacity: 1, letterSpacing: "normal" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Leadership
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Meet our visionary leaders
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-stretch"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              image: "/images/Aashish_Chauhan.jpg",
              name: "Mr. Aashish Kumar Chauhan",
              position: "Managing Director, CEO & Chairman",
              description: "With over 25 years of experience in real estate, Aashish has led the company's growth from a startup to an industry leader."
            },
            {
              image: "/images/Dipti_Chauhan.jpg", 
              name: "Mrs. Dipti Chauhan",
              position: "Director & Vice Chairman",
              description: "Dipti brings strategic vision and operational excellence, overseeing key business development initiatives."
            }
          ].map((leader, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#2a3441] to-[#1e2832] rounded-2xl p-6 sm:p-8 text-center shadow-xl flex flex-col items-center"
              variants={{
                initial: { 
                  opacity: 0, 
                  y: 100, 
                  scale: 0.8,
                  rotateY: index === 0 ? -45 : 45
                },
                animate: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateY: 0,
                  transition: { 
                    duration: 1, 
                    ease: "easeOut",
                    delay: index * 0.3 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: index === 0 ? 5 : -5,
                transition: { duration: 0.4 }
              }}
            >
              <motion.img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-4 sm:mb-6 border-4 border-[#d4ad83] object-cover"
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: index === 0 ? 5 : -5,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {leader.name}
              </motion.h3>
              <motion.h4 
                className="text-base sm:text-lg text-[#d4ad83] font-semibold mb-2"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {leader.position}
              </motion.h4>
              <motion.p 
                className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {leader.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
