import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1c2636] text-gray-300 pt-16 pb-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img
                src="/images/logo.png"
                className="w-40 mb-4"
                alt="PropertyWale Logo"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in real estate. We help you find your dream
                property with professional expertise and personalized service.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Property Buying
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Property Selling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Property Rental
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Investment Advisory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Legal Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-[#D4AD83] text-xl mt-1"></i>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Plot -8 & 79 Vaid Enclave,
                    <br />
                    Salempur, Mahdood -2,
                    <br />
                    Haridwar, Uttarakhand - 249402
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#D4AD83] text-xl"></i>
                <a
                  href="mailto:info@propertywale.uk.com"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 text-sm"
                >
                  info@propertywale.uk.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#D4AD83] text-xl"></i>
                <div className="space-y-1">
                  <a
                    href="tel:+917060000337"
                    className="block text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 text-sm"
                  >
                    +91 70600 00337
                  </a>
                  <a
                    href="tel:+919410100597"
                    className="block text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 text-sm"
                  >
                    +91 9410100597
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-[#D4AD83] text-xl mt-1"></i>
                <div>
                  <p className="text-gray-400 text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} propertywale.uk.com. All rights
                reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
