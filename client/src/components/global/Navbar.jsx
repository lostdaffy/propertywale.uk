import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50 py-3 bg-[#1c2636]">
      <div className="max-w-8xl mx-auto px-20">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-24 ">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200"
            >
              Projects
            </Link>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link to="/">
              <img src="/images/logo.png" className="w-24 md:w-32" alt="Logo" />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex items-center space-x-24 ">
            <Link
              to="/about"
              className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/career"
              className="text-gray-300 hover:text-[#D4AD83] text-lg transition-colors duration-200"
            >
              Career
            </Link>
          </div>

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
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-700">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <i className="ri-home-4-line text-xl"></i>
              <span>Home</span>
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <i className="ri-building-line text-xl"></i>
              <span>Services</span>
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <i className="ri-folder-line text-xl"></i>
              <span>Projects</span>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className=" px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <i className="ri-user-line text-xl"></i>
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <i className="ri-mail-line text-xl"></i>
              <span>Contact</span>
            </Link>
            <Link
              to="/career"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-3 text-gray-300 hover:text-[#D4AD83] hover:bg-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center space-x-3"
            >
              <i className="ri-briefcase-line text-xl"></i>
              <span>Career</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
