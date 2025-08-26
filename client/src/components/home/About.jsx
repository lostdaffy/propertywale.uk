// AboutSection.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-[#1c2636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden p-6 pr-0">
              {/* Background skewed shape */}
              <div className="absolute top-0 -left-1/3 w-4/5 h-full bg-[#d4ad83] transform skew-x-12 z-0"></div>

              {/* Main image */}
              <img
                src="/images/hero.jpg"
                alt="About Propertywale"
                className="relative w-full max-w-md lg:max-w-lg h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Who We Are
              </h1>

              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Under the leadership of{" "}
                <span className="text-[#d4ad83] font-semibold">
                  Mr. Aashish Kumar Chauhan
                </span>{" "}
                (Managing Director, CEO, and Chairman) and{" "}
                <span className="text-[#d4ad83] font-semibold">
                  Mrs. Dipti Chauhan
                </span>{" "}
                (Director and Vice Chairman), Propertywale has built a
                diversified portfolio across multiple sectors.
              </p>
            </div>

            {/* Our Complex Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#d4ad83] mb-4">
                Our Complex Has:
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-start space-x-2">
                  <i className="ri-building-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Commercial</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-home-4-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Residential</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-hotel-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Hospitality</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-building-3-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Industrial</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-store-3-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Warehousing</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-customer-service-2-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Services</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-community-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Co-living</span>
                </div>

                <div className="flex items-start space-x-2">
                  <i className="ri-school-line text-[#d4ad83] text-lg flex-shrink-0 mt-1"></i>
                  <span className="text-gray-200 text-sm">Education</span>
                </div>
              </div>
            </div>

            {/* Location Coverage */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-[#d4ad83]">
                Our Operations Span Across:
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Major Indian regions including{" "}
                <span className="text-white font-medium">
                  Haridwar, Dehradun
                </span>
                , other parts of{" "}
                <span className="text-white font-medium">Uttarakhand</span>,
                <span className="text-white font-medium">
                  {" "}
                  Saharanpur, Noida, NCR
                </span>
                , and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
