import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50 py-3 bg-[#1c2636]">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-12"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200">
              Services
            </Link>
            <Link to="/gallery" className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200">
              Gallery
            </Link>
          </motion.div>

          {/* Centered Logo */}
          <motion.div
            className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <img src="/images/logo.png" className="w-24 md:w-32" alt="Logo" />
            </Link>
          </motion.div>

          {/* Right Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-12"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            transition={{ delay: 0.3 }}
          >
            <Link to="/about" className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200">
              Contact
            </Link>
            <Link to="/career" className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200">
              Career
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-[#D4AD83] transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="ri-close-line text-2xl"></i>
              ) : (
                <i className="ri-menu-line text-2xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black border-t border-gray-700"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  { to: "/", label: "Home", icon: "ri-home-4-line" },
                  { to: "/services", label: "Services", icon: "ri-building-line" },
                  { to: "/gallery", label: "Gallery", icon: "ri-folder-line" },
                  { to: "/about", label: "About", icon: "ri-user-line" },
                  { to: "/contact", label: "Contact", icon: "ri-mail-line" },
                  { to: "/career", label: "Career", icon: "ri-briefcase-line" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200"
                    >
                      <i className={`${item.icon} text-xl`}></i>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
