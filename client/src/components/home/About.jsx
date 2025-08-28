import React, { useEffect, useRef, useState } from "react";

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
    <div className="min-h-screen bg-[#1c2636] flex items-center justify-center">
      <div className="max-w-8xl mx-auto px-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div
            className={`relative h-full min-h-[400px] transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            ref={sectionRef}
          >
            <div className="about-img-container relative h-full">
              {/* Background border effect */}
              <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] border-5 border-[#d4ad83] -z-10"></div>

              {/* First image */}
              <img
                className="absolute w-[60%] h-[80%] object-cover top-0 left-0 shadow-lg"
                src="/images/about-1.jpg"
                alt="Real estate project 1"
              />

              {/* Second image */}
              <img
                className="absolute w-[60%] h-[80%] object-cover shadow-lg"
                style={{ marginTop: "20%", marginLeft: "40%" }}
                src="/images/about-2.jpg"
                alt="Real estate project 2"
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-4">
              <span className="text-[#d4ad83] text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building Trust, One Property at a Time
            </h1>

            <p className="text-gray-300 mb-4 leading-relaxed">
              For over two decades, we have been a trusted name in the real
              estate industry, helping families find their dream homes and
              investors grow their portfolios. Our commitment to transparency,
              integrity, and personalized service has made us a leader in
              residential and commercial property solutions.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're buying, selling, or investing, our team of seasoned
              professionals provides expert guidance every step of the way. From
              luxury estates to modern developments, we pride ourselves on
              delivering properties that fit both lifestyle and financial goals.
            </p>

            {/* Experience Counter */}
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 flex items-center justify-center border-4 border-[#d4ad83] w-28 h-28 lg:w-32 lg:h-32">
                <span className="text-4xl lg:text-6xl font-bold text-white -mb-2">
                  {count}
                </span>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white">Years</h3>
                <h3 className="text-xl font-semibold text-white">Industry</h3>
                <h3 className="text-xl font-semibold text-white mb-0">
                  Experience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
