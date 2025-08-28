import React, { useState } from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#1c2636] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to transform your real estate dreams into reality? We're here
            to help you every step of the way. Reach out to us for expert
            guidance and personalized solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Contact Info */}
            <div className="mb-8 bg-gradient-to-r from-[#2a3441] to-[#1e2832] rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="text-[#d4ad83] text-lg">📞</span>
                    <span className="text-gray-300 text-sm font-medium">Call Us</span>
                  </div>
                  <p className="text-white font-bold">+91 98765 43210</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="text-[#d4ad83] text-lg">✉️</span>
                    <span className="text-gray-300 text-sm font-medium">Email Us</span>
                  </div>
                  <a
                    href="mailto:info@propertywale.uk.com"
                    className="text-white font-bold hover:text-[#d4ad83] transition-colors"
                  >
                    info@propertywale.uk.com
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/images/GetInTouch.jpg"
                alt="Real Estate Contact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c2636]/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's Build Your Future Together
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Our expert team is ready to assist you with all your real estate needs. 
                  From finding your dream home to making smart investment decisions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#2a3441] to-[#1e2832] rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1c2636] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1c2636] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1c2636] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1c2636] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#d4ad83] hover:bg-[#c49a70] text-[#1c2636] font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
