import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
      category: "residential",
      title: "Luxury Villa",
      location: "Beverly Hills",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      category: "commercial",
      title: "Modern Office Complex",
      location: "Downtown",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=500",
      category: "residential",
      title: "Contemporary Home",
      location: "Manhattan",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
      category: "commercial",
      title: "Shopping Center",
      location: "City Center",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      category: "luxury",
      title: "Penthouse Suite",
      location: "Upper East Side",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
      category: "residential",
      title: "Family Home",
      location: "Suburbs",
    },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-[#1c2636] pt-20">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        {/* Header Section */}
        <motion.div
          className="pb-12 text-right"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className=" text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white ">
              Our Gallery
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              We create innovative real estate strategies to enable
              transformative growth and unlock property potential
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openModal(image)}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-[#d4ad83] font-medium">
                      {image.location}
                    </p>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#d4ad83] text-[#1c2636] px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-[#d4ad83] transition-colors z-10"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-[#d4ad83] text-lg">
                  {selectedImage.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
