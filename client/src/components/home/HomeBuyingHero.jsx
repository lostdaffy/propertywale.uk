import React from "react";

const HomeBuyingHero = () => {
  return (
    <div className="bg-[#1c2636]">
      <div className="p-4 md:p-8 lg:p-10">
        <div className="relative">
          {/* Background Image Container with Rounded Corners */}
          <div className="relative rounded-t-3xl rounded-b-3xl overflow-hidden h-[300px] md:h-[500px] lg:h-[450px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/BuyingHero.jpg')`,
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-end h-full px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="max-w-sm md:max-w-md lg:max-w-3xl text-right">
                {/* Main Heading */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 md:mb-3">
                  Find Your 
                  <span className="text-[#d4ad83] block mt-1 md:mt-2">
                    Dream Home
                  </span>
                </h1>

                {/* Secondary text */}
                <div className="text-[#d4ad83] font-medium text-sm md:text-base lg:text-lg mb-3 md:mb-4 tracking-wide">
                  Premium Properties
                </div>

                {/* Subheading */}
                <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 font-light leading-relaxed">
                  Discover luxury homes crafted with excellence, designed for your perfect lifestyle
                </p>

                {/* CTA Button */}
                <button className="bg-[#d4ad83] hover:bg-[#c19a6b] text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors duration-300 flex items-center gap-2 ml-auto text-sm md:text-base shadow-lg">
                  Explore Properties
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBuyingHero;
