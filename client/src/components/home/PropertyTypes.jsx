import React from 'react';

const PropertyTypes = () => {
  const propertyTypes = [
    {
      id: 1,
      name: 'Apartment',
      count: '123',
      iconClass: 'ri-building-4-line',
      delay: '0.1s'
    },
    {
      id: 2,
      name: 'Villa',
      count: '123',
      iconClass: 'ri-home-3-line',
      delay: '0.3s'
    },
    {
      id: 3,
      name: 'Home',
      count: '123',
      iconClass: 'ri-building-2-line',
      delay: '0.5s'
    },
    {
      id: 4,
      name: 'Office',
      count: '123',
      iconClass: 'ri-home-office-line',
      delay: '0.7s'
    },
    {
      id: 5,
      name: 'Building',
      count: '123',
      iconClass: 'ri-building-line',
      delay: '0.1s'
    },
    {
      id: 6,
      name: 'Townhouse',
      count: '123',
      iconClass: 'ri-community-line',
      delay: '0.3s'
    },
    {
      id: 7,
      name: 'Shop',
      count: '123',
      iconClass: 'ri-store-2-line',
      delay: '0.5s'
    },
    {
      id: 8,
      name: 'Garage',
      count: '123',
      iconClass: 'ri-car-line',
      delay: '0.7s'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-[#1c2636]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mx-auto mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Property Types
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover various property types that suit your investment needs. From luxury apartments to commercial spaces, find your perfect match.
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer animate-fadeInUp"
              style={{ 
                animationDelay: property.delay,
                animationDuration: '0.6s',
                animationFillMode: 'both'
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm text-center rounded-lg p-6 transition-all duration-500 ease-in-out group-hover:bg-[#d4ad83] border border-dashed border-[#d4ad83]/30 group-hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105">
                {/* Icon */}
                <div className="mb-4">
                  <i 
                    className={`${property.iconClass} text-5xl text-[#d4ad83] group-hover:text-white transition-all duration-500 ease-in-out`}
                  ></i>
                </div>
                
                {/* Property Name */}
                <h6 className="text-xl font-semibold mb-2 text-white transition-all duration-500 ease-in-out">
                  {property.name}
                </h6>
                
                {/* Property Count */}
                <span className="text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out">
                  {property.count} Properties
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes;
