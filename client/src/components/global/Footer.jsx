import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1c2636] text-gray-300 pt-16 pb-8 border-t-2 border-[#D4AD83] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AD83] rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#D4AD83] rounded-full translate-x-12 translate-y-12"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info - spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-6">
              <img
                src="/images/logo.png"
                className="w-40 mb-4 filter brightness-110"
                alt="PropertyWale Logo"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your trusted partner in real estate. We help you find your dream
                property with professional expertise and personalized service
                across Uttarakhand.
              </p>
            </div>

            {/* Social Media - External links रहेंगे a tag में */}
            <div>
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/propertywale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a3441] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AD83] transition-all duration-200 transform hover:scale-110"
                >
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a
                  href="https://instagram.com/propertywale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a3441] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AD83] transition-all duration-200 transform hover:scale-110"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </a>
                <a
                  href="https://twitter.com/propertywale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a3441] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AD83] transition-all duration-200 transform hover:scale-110"
                >
                  <i className="ri-twitter-x-line text-lg"></i>
                </a>
                <a
                  href="https://linkedin.com/company/propertywale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a3441] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AD83] transition-all duration-200 transform hover:scale-110"
                >
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a
                  href="https://youtube.com/propertywale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a3441] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D4AD83] transition-all duration-200 transform hover:scale-110"
                >
                  <i className="ri-youtube-fill text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - सभी Link tag में convert */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AD83]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services - सभी Link tag में convert */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AD83]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/buying"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Property Buying
                </Link>
              </li>
              <li>
                <Link
                  to="/services/selling"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Property Selling
                </Link>
              </li>
              <li>
                <Link
                  to="/services/rental"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Rental Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consultation"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Consultation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/valuation"
                  className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-2 group-hover:translate-x-1 transition-transform"></i>
                  Property Valuation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information - External links रहेंगे a tag में */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AD83]"></span>
            </h3>
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start space-x-3 p-3 bg-[#2a3441] rounded-lg hover:bg-[#334155] transition-colors">
                <i className="ri-map-pin-line text-[#D4AD83] text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Plot -8 & 79 Vaid Enclave,
                    <br />
                    Salempur, Mahdood -2,
                    <br />
                    Haridwar, Uttarakhand - 249402
                  </p>
                </div>
              </div>

              {/* Email - External link है तो a tag */}
              <div className="flex items-center space-x-3 p-3 bg-[#2a3441] rounded-lg hover:bg-[#334155] transition-colors">
                <i className="ri-mail-line text-[#D4AD83] text-xl flex-shrink-0"></i>
                <a
                  href="mailto:info@propertywale.uk.com"
                  className="text-gray-300 hover:text-[#D4AD83] transition-colors duration-200 text-sm break-all"
                >
                  info@propertywale.uk.com
                </a>
              </div>

              {/* Phone Numbers - External links हैं तो a tag */}
              <div className="flex items-start space-x-3 p-3 bg-[#2a3441] rounded-lg hover:bg-[#334155] transition-colors">
                <i className="ri-phone-line text-[#D4AD83] text-xl mt-1 flex-shrink-0"></i>
                <div className="space-y-2">
                  <a
                    href="tel:+917060000337"
                    className="block text-gray-300 hover:text-[#D4AD83] transition-colors duration-200 text-sm"
                  >
                    +91 70600 00337
                  </a>
                  <a
                    href="tel:+919410100597"
                    className="block text-gray-300 hover:text-[#D4AD83] transition-colors duration-200 text-sm"
                  >
                    +91 94101 00597
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer - सभी internal links को Link tag में convert */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} PropertyWale.uk.com. All rights
                reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AD83] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 relative group"
              >
                Terms & Conditions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AD83] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 relative group"
              >
                Sitemap
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AD83] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/careers"
                className="text-gray-400 hover:text-[#D4AD83] transition-colors duration-200 relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AD83] transition-all group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
