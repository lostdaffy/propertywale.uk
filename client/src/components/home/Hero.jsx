import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  MapPin,
  Building,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample carousel images
  const carouselImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-[#1c2636]">
      {/* Hero Content */}
      <div className="relative">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12 min-h-screen ">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#d4ad83]/10 border border-[#d4ad83]/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-[#d4ad83]" />
                  <span className="text-[#d4ad83] text-sm font-medium">
                    Find Your Dream Location
                  </span>
                </div>

                <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-normal text-white">
                  Where{"  "}
                  <span className="text-[#d4ad83] relative">
                    Luxury Meets
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d4ad83] to-transparent rounded-full"></div>
                  </span>{" "}
                  Higher Returns
                </h1>

                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
                  We offer premium real estate investments with world-class
                  amenities that enhance property value and maximize rental
                  income — creating spaces that inspire and returns that last.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-white px-8 py-4 rounded-full hover:from-[#c19a6b] hover:to-[#b08954] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
                  <Search className="h-5 w-5" />
                  <span>Explore Now</span>
                </button>

                <button className="border-2 border-[#d4ad83] text-[#d4ad83] px-8 py-4 rounded-full hover:bg-[#d4ad83] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                  <Building className="h-5 w-5" />
                  <span>View Properties</span>
                </button>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden ">
                <div className="aspect-[4/3.5] relative">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Property ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-[#d4ad83] scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #d4ad83 2px, transparent 2px), radial-gradient(circle at 75% 75%, #d4ad83 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
