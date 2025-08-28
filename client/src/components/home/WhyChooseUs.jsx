import React, { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
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
    <div className="min-h-screen bg-[#1c2636] flex items-center justify-center">
      <div className="max-w-8xl mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content Section - Now on Left */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            ref={sectionRef}
          >
            <div className="mb-4">
              <span className="text-[#d4ad83] text-sm font-medium tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted Real Estate Partner
            </h1>

            <p className="text-gray-300 mb-4 leading-relaxed">
              With decades of real estate excellence, we've helped thousands
              find their dream homes and build profitable portfolios. Our
              commitment to integrity and exceptional service makes us a market
              leader.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              We offer comprehensive solutions for luxury residential and prime
              commercial properties, with experienced teams providing end-to-end
              support for smooth, stress-free transactions.
            </p>

            {/* Why Choose Us Section */}
            <div className="border-t border-gray-600 pt-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Our Key Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Investment Advisory
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Strategic investment guidance for maximum returns
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Virtual Property Tours
                    </h4>
                    <p className="text-gray-400 text-sm">
                      360° virtual tours and AR visualization technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Property Management
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Complete rental management and maintenance services
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Market Analytics
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Real-time market data and price trend analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Now on Right */}
          <div
            className={`relative h-full min-h-[400px] transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="about-img-container relative h-full">
              {/* Background border effect */}
              <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] border-5 border-[#d4ad83] -z-10"></div>

              {/* First image */}
              <img
                className="absolute w-[60%] h-[80%] object-cover top-0 left-0 shadow-lg"
                src="/images/about-1.jpg"
                alt="Luxury residential property"
              />

              {/* Second image */}
              <img
                className="absolute w-[60%] h-[80%] object-cover shadow-lg"
                style={{ marginTop: "20%", marginLeft: "40%" }}
                src="/images/about-2.jpg"
                alt="Modern commercial development"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
