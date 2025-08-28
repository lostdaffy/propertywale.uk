import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Gallery data with categories
  const galleryData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      category: "residential",
      title: "Luxury Villa",
      location: "Beverly Hills",
      description: "Modern luxury villa with stunning architecture and premium amenities",
      price: "₹5.5 Crores",
      type: "4 BHK Villa"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      category: "commercial",
      title: "Modern Office Complex",
      location: "Downtown Mumbai",
      description: "State-of-the-art commercial building with modern facilities",
      price: "₹15 Crores",
      type: "Office Space"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
      category: "residential",
      title: "Contemporary Apartment",
      location: "Bandra West",
      description: "Elegantly designed apartment with city views and premium finishes",
      price: "₹3.2 Crores",
      type: "3 BHK Apartment"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      category: "commercial",
      title: "Shopping Complex",
      location: "Andheri East",
      description: "Prime retail space in high-traffic commercial area",
      price: "₹8.5 Crores",
      type: "Retail Space"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      category: "luxury",
      title: "Penthouse Suite",
      location: "Worli",
      description: "Ultra-luxury penthouse with panoramic city and sea views",
      price: "₹12.8 Crores",
      type: "Penthouse"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      category: "residential",
      title: "Family Home",
      location: "Juhu",
      description: "Spacious family home in prestigious neighborhood",
      price: "₹4.7 Crores",
      type: "5 BHK House"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      category: "luxury",
      title: "Designer Villa",
      location: "Alibaug",
      description: "Architect-designed villa with infinity pool and landscaped gardens",
      price: "₹9.2 Crores",
      type: "Designer Villa"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      category: "commercial",
      title: "Corporate Tower",
      location: "BKC",
      description: "Premium corporate tower in Mumbai's business district",
      price: "₹25 Crores",
      type: "Commercial Tower"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      category: "residential",
      title: "Sea View Apartment",
      location: "Marine Drive",
      description: "Exclusive apartment with unobstructed Arabian Sea views",
      price: "₹6.8 Crores",
      type: "3 BHK Sea View"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      category: "luxury",
      title: "Heritage Mansion",
      location: "Malabar Hill",
      description: "Restored heritage property with modern amenities",
      price: "₹18.5 Crores",
      type: "Heritage Mansion"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
      category: "residential",
      title: "Garden Apartment",
      location: "Khar West",
      description: "Ground floor apartment with private garden and modern amenities",
      price: "₹4.2 Crores",
      type: "Garden Apartment"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      category: "commercial",
      title: "Business Park",
      location: "Powai",
      description: "Modern business park with tech-enabled infrastructure",
      price: "₹12 Crores",
      type: "IT Space"
    }
  ];

  // Filter categories
  const categories = [
    { id: "all", label: "All Properties", count: galleryData.length },
    { id: "residential", label: "Residential", count: galleryData.filter(item => item.category === "residential").length },
    { id: "commercial", label: "Commercial", count: galleryData.filter(item => item.category === "commercial").length },
    { id: "luxury", label: "Luxury", count: galleryData.filter(item => item.category === "luxury").length }
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ HERO SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="bg-[#d4ad83]/10 inline-block px-4 py-2 rounded-full border border-[#d4ad83]/30 mb-6 font-semibold text-[#d4ad83] text-sm">
            Property Showcase
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight uppercase">
            Our <span className="text-[#d4ad83]">Gallery</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
            Explore our stunning collection of residential, commercial, and luxury properties. 
            Each property represents excellence in design, location, and value.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">500+</div>
              <div className="text-gray-300">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">₹2000+</div>
              <div className="text-gray-300">Crores Worth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">25+</div>
              <div className="text-gray-300">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">100%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------ FILTER TABS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#d4ad83] text-[#1c2636]"
                    : "bg-[#1f2937] text-white hover:bg-[#d4ad83]/20 border border-[#d4ad83]/30"
                }`}
              >
                {category.label}
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ------ GALLERY GRID ------ */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#1f2937]"
                onClick={() => openModal(image)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      image.category === 'residential' ? 'bg-blue-500 text-white' :
                      image.category === 'commercial' ? 'bg-green-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {image.category}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#d4ad83] text-[#1c2636] px-3 py-1 rounded-full text-xs font-bold">
                      {image.price}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-[#d4ad83] font-medium mb-2 flex items-center">
                        <span className="mr-1">📍</span>
                        {image.location}
                      </p>
                      <p className="text-sm text-gray-300 mb-2">{image.type}</p>
                      <button className="bg-[#d4ad83] text-[#1c2636] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c19a6b] transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ------ IMAGE MODAL ------ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-6xl w-full bg-[#1c2636] rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      selectedImage.category === 'residential' ? 'bg-blue-500 text-white' :
                      selectedImage.category === 'commercial' ? 'bg-green-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {selectedImage.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedImage.title}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-[#d4ad83]">
                      <span className="mr-2">📍</span>
                      <span className="font-semibold">{selectedImage.location}</span>
                    </div>
                    
                    <div className="flex items-center text-white">
                      <span className="mr-2">🏠</span>
                      <span>{selectedImage.type}</span>
                    </div>
                    
                    <div className="flex items-center text-[#d4ad83] text-2xl font-bold">
                      <span className="mr-2">💰</span>
                      <span>{selectedImage.price}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {selectedImage.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#d4ad83] text-[#1c2636] font-bold py-3 px-6 rounded-lg hover:bg-[#c19a6b] transition-colors duration-200">
                      Schedule Viewing
                    </button>
                    <button className="flex-1 border-2 border-[#d4ad83] text-[#d4ad83] font-bold py-3 px-6 rounded-lg hover:bg-[#d4ad83] hover:text-[#1c2636] transition-colors duration-200">
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------ FEATURED PROPERTIES ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-300 text-lg">Hand-picked premium properties with exceptional value</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {galleryData.slice(0, 3).map((property, index) => (
            <div key={property.id} className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl overflow-hidden border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300">
              <div className="relative h-48">
                <img src={property.src} alt={property.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#d4ad83] text-[#1c2636] px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-[#d4ad83] mb-2 flex items-center">
                  <span className="mr-1">📍</span>
                  {property.location}
                </p>
                <p className="text-gray-300 mb-4">{property.type}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#d4ad83]">{property.price}</span>
                  <button 
                    onClick={() => openModal(property)}
                    className="bg-[#d4ad83] text-[#1c2636] px-4 py-2 rounded-lg font-semibold hover:bg-[#c19a6b] transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------ TESTIMONIALS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">Success stories from satisfied property owners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajesh Sharma",
              property: "Luxury Villa, Juhu",
              text: "Found my dream home through their excellent gallery. The virtual tours were incredibly detailed and helped me make the right decision.",
              rating: 5,
              image: "👨‍💼"
            },
            {
              name: "Priya Patel",
              property: "Sea View Apartment, Worli",
              text: "Their property gallery made it so easy to browse and compare options. Professional service from start to finish.",
              rating: 5,
              image: "👩‍💼"
            },
            {
              name: "Amit Kumar",
              property: "Commercial Space, BKC",
              text: "Impressive portfolio of commercial properties. Found the perfect office space for our growing business.",
              rating: 5,
              image: "👨‍💻"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-[#d4ad83]">{testimonial.property}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#d4ad83] text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------ CTA SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#1c2636] mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-[#1c2636] text-lg mb-8 max-w-2xl mx-auto">
            Browse our extensive gallery or schedule a personal viewing with our expert team. 
            Your dream property is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1c2636] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a3441] transition-colors duration-300">
              Schedule Viewing
            </button>
            <button className="border-2 border-[#1c2636] text-[#1c2636] px-8 py-4 rounded-full font-semibold hover:bg-[#1c2636] hover:text-white transition-colors duration-300">
              Contact Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
