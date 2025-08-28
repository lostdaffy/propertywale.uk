import React from "react";

function RealEstateSection() {
  const services = [
    {
      id: 1,
      number: "01.",
      title: "Buy A New Home",
      description:
        "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      id: 2,
      number: "02.",
      title: "Rent A Home",
      description:
        "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
    },
    {
      id: 3,
      number: "03.",
      title: "Sell A Home",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    },
  ];

  const handleViewProperties = () => {
    // Add your navigation logic here
    console.log("Navigate to properties page");
  };

  return (
    <section className="bg-[#1c2636]" aria-labelledby="real-estate-heading">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 lg:px-16 py-14 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <h1 
            id="real-estate-heading"
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
          >
            Building Dreams, One
            <br />
            Home At A Time
          </h1>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
            Our mission goes beyond real estate — it's about guiding you through
            one of life's biggest milestones with heart, expertise, and
            unwavering commitment.
          </p>
          <button 
            onClick={handleViewProperties}
            className="bg-[#d4ad83] text-[#1c2636] py-4 px-8 rounded-lg font-semibold hover:bg-[#c19b6f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4ad83] focus:ring-offset-2 focus:ring-offset-[#1c2636]"
            aria-label="View available properties"
          >
            View Properties
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <div className="space-y-10">
            {services.map((service) => (
              <div key={service.id} className="flex items-start group">
                <div className="text-4xl font-bold text-[#d4ad83] mr-8 flex-shrink-0 group-hover:text-[#c19b6f] transition-colors duration-300">
                  {service.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4ad83] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealEstateSection;
