import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    // Handle form submission here
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ HERO SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="bg-[#d4ad83]/10 inline-block px-4 py-2 rounded-full border border-[#d4ad83]/30 mb-6 font-semibold text-[#d4ad83] text-sm">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight uppercase">
            Contact <span className="text-[#d4ad83]">Us</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
            Ready to transform your real estate dreams into reality? We're here to help you 
            every step of the way. Reach out to us for expert guidance and personalized solutions.
          </p>
        </div>
      </section>

      {/* ------ CONTACT INFO CARDS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300">
            <div className="w-16 h-16 bg-[#d4ad83]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <p className="text-gray-300 mb-4">Speak directly with our experts</p>
            <div className="space-y-2">
              <p className="text-[#d4ad83] font-semibold">+91 98765 43210</p>
              <p className="text-[#d4ad83] font-semibold">+91 87654 32109</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300">
            <div className="w-16 h-16 bg-[#d4ad83]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Email Us</h3>
            <p className="text-gray-300 mb-4">Send us a detailed message</p>
            <div className="space-y-2">
              <p className="text-[#d4ad83] font-semibold">info@propertywale.uk.com</p>
              <p className="text-[#d4ad83] font-semibold">sales@propertywale.uk.com</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300">
            <div className="w-16 h-16 bg-[#d4ad83]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Visit Us</h3>
            <p className="text-gray-300 mb-4">Come to our office</p>
            <p className="text-[#d4ad83] font-semibold">123 Business District, Mumbai, Maharashtra 400001</p>
          </div>
        </div>
      </section>

      {/* ------ CONTACT FORM & MAP ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white focus:border-[#d4ad83] focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Property Buying</option>
                  <option value="selling">Property Selling</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="management">Property Management</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:from-[#c19a6b] hover:to-[#b08954] transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Office Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Location</h2>
            
            {/* Map Placeholder */}
            <div className="bg-[#1f2937] rounded-2xl p-8 mb-8 h-96 flex items-center justify-center border border-[#d4ad83]/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-300">Interactive Map</p>
                <p className="text-sm text-gray-400 mt-2">Google Maps integration would go here</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/20">
              <h3 className="text-xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-[#d4ad83] font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-[#d4ad83] font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------ FAQ SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg">Quick answers to common questions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "How quickly do you respond to inquiries?",
              answer: "We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends."
            },
            {
              question: "Do you offer free property consultations?",
              answer: "Yes! We provide free initial consultations for all potential clients to discuss your real estate needs and goals."
            },
            {
              question: "What areas do you serve?",
              answer: "We primarily serve Mumbai, Pune, and surrounding areas in Maharashtra, but we can assist with properties across India."
            },
            {
              question: "Do you handle both buying and selling?",
              answer: "Absolutely! We provide comprehensive services for buying, selling, renting, and property management."
            },
            {
              question: "What documents do I need for property transactions?",
              answer: "Required documents vary by transaction type. We'll provide a complete checklist during your consultation and guide you through the entire process."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl p-6 border border-[#d4ad83]/20">
              <h3 className="text-lg font-semibold mb-3 text-[#d4ad83]">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------ SOCIAL & FOLLOW ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#1c2636] mb-6">Stay Connected</h2>
          <p className="text-[#1c2636] text-lg mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest property updates, market insights, and exclusive deals.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { name: "Facebook", icon: "📘" },
              { name: "Instagram", icon: "📷" },
              { name: "Twitter", icon: "🐦" },
              { name: "LinkedIn", icon: "💼" },
              { name: "YouTube", icon: "📺" }
            ].map((social, index) => (
              <button
                key={index}
                className="w-14 h-14 bg-[#1c2636] text-white rounded-full flex items-center justify-center hover:bg-[#2a3441] transition-colors duration-300 text-2xl"
                title={social.name}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
