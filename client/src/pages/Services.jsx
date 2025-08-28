import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [activeTab, setActiveTab] = useState("residential");

  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ HERO SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="bg-[#d4ad83]/10 inline-block px-4 py-2 rounded-full border border-[#d4ad83]/30 mb-6 font-semibold text-[#d4ad83] text-sm">
            Our Professional Services
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight uppercase">
            Real Estate <span className="text-[#d4ad83]">Services</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
            We provide comprehensive real estate solutions designed to meet all your property needs. 
            From residential homes to commercial investments, our expert team delivers exceptional results.
          </p>
        </div>
      </section>

      {/* ------ MAIN SERVICES GRID ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {[
            {
              icon: "🏠",
              title: "Residential Services",
              desc: "Expert residential property consulting, buying, selling, and investment guidance for homeowners.",
              features: ["Home Buying", "Home Selling", "Market Analysis", "Investment Properties"]
            },
            {
              icon: "🏢",
              title: "Commercial Real Estate",
              desc: "Strategic commercial property solutions for businesses looking to expand or relocate.",
              features: ["Office Spaces", "Retail Properties", "Warehouses", "Mixed-Use Buildings"]
            },
            {
              icon: "🌾",
              title: "Land Development",
              desc: "Land acquisition, development planning, and rural property investment expertise.",
              features: ["Land Acquisition", "Development Planning", "Zoning Assistance", "Rural Properties"]
            },
            {
              icon: "🏪",
              title: "Property Management",
              desc: "Complete property management services from tenant screening to maintenance coordination.",
              features: ["Tenant Management", "Rent Collection", "Property Maintenance", "Financial Reporting"]
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#d4ad83] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-[#d4ad83] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ------ SERVICE CATEGORIES TABS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Service Categories</h2>
          <p className="text-gray-300 text-lg">Explore our specialized services in detail</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {[
            { id: "residential", label: "Residential" },
            { id: "commercial", label: "Commercial" },
            { id: "investment", label: "Investment" },
            { id: "management", label: "Management" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#d4ad83] text-[#1c2636]"
                  : "bg-[#1f2937] text-white hover:bg-[#d4ad83]/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {activeTab === "residential" && (
            <>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#d4ad83]">Residential Services</h3>
                <div className="space-y-6">
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">🏡 Home Buying</h4>
                    <p className="text-gray-300">Complete assistance in finding and purchasing your dream home with market insights and negotiation support.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">💰 Property Valuation</h4>
                    <p className="text-gray-300">Professional property assessment and market analysis to determine accurate property values.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">📈 Market Analysis</h4>
                    <p className="text-gray-300">Detailed market reports and trends analysis to make informed buying or selling decisions.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/residential-service.jpg" alt="Residential Services" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2636]/40 to-transparent rounded-2xl"></div>
              </div>
            </>
          )}

          {activeTab === "commercial" && (
            <>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#d4ad83]">Commercial Real Estate</h3>
                <div className="space-y-6">
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">🏢 Office Spaces</h4>
                    <p className="text-gray-300">Premium office locations for businesses of all sizes with modern amenities and strategic locations.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">🏪 Retail Properties</h4>
                    <p className="text-gray-300">High-traffic retail spaces perfect for restaurants, shops, and service businesses.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">🏭 Industrial Properties</h4>
                    <p className="text-gray-300">Warehouses, manufacturing facilities, and industrial complexes for growing businesses.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/commercial-service.jpg" alt="Commercial Services" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2636]/40 to-transparent rounded-2xl"></div>
              </div>
            </>
          )}

          {activeTab === "investment" && (
            <>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#d4ad83]">Investment Solutions</h3>
                <div className="space-y-6">
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">📊 Portfolio Management</h4>
                    <p className="text-gray-300">Strategic real estate investment portfolio management for maximum returns and diversification.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">🎯 Investment Analysis</h4>
                    <p className="text-gray-300">Comprehensive analysis of investment opportunities with risk assessment and ROI projections.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">💡 Market Insights</h4>
                    <p className="text-gray-300">Expert market insights and trends analysis to identify lucrative investment opportunities.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/investment-service.jpg" alt="Investment Services" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2636]/40 to-transparent rounded-2xl"></div>
              </div>
            </>
          )}

          {activeTab === "management" && (
            <>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#d4ad83]">Property Management</h3>
                <div className="space-y-6">
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">👥 Tenant Services</h4>
                    <p className="text-gray-300">Complete tenant screening, management, and retention services for landlords and property owners.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">🔧 Maintenance</h4>
                    <p className="text-gray-300">24/7 property maintenance, repairs, and emergency services to keep properties in top condition.</p>
                  </div>
                  <div className="bg-[#1f2937] rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">📋 Financial Reporting</h4>
                    <p className="text-gray-300">Detailed financial reports, rent collection, and accounting services for property owners.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/management-service.jpg" alt="Management Services" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2636]/40 to-transparent rounded-2xl"></div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ------ PROCESS SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-300 text-lg">Simple steps to get started with our services</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Consultation", desc: "Initial consultation to understand your needs and goals." },
            { step: "02", title: "Strategy", desc: "Develop customized strategy based on your requirements." },
            { step: "03", title: "Execution", desc: "Implement the plan with our expert team and resources." },
            { step: "04", title: "Results", desc: "Achieve your real estate goals with ongoing support." }
          ].map((process, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4ad83] to-[#c19a6b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#1c2636] font-bold text-xl">{process.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{process.title}</h3>
              <p className="text-gray-300">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------ WHY CHOOSE OUR SERVICES ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              With over 25 years of experience in the real estate industry, we provide unmatched 
              expertise and personalized service to help you achieve your property goals.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "⭐", title: "Expert Team", desc: "Licensed professionals with deep market knowledge" },
                { icon: "🎯", title: "Personalized Service", desc: "Tailored solutions for your specific needs" },
                { icon: "📱", title: "Technology Driven", desc: "Modern tools and digital solutions" },
                { icon: "💼", title: "Full Service", desc: "Complete real estate solutions under one roof" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/images/why-choose-services.jpg" alt="Why Choose Us" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            <div className="absolute -top-6 -right-6 bg-[#d4ad83] text-[#1c2636] px-8 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------ CTA SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#1c2636] mb-6">Ready to Get Started?</h2>
          <p className="text-[#1c2636] text-lg mb-8 max-w-2xl mx-auto">
            Let our expert team help you with all your real estate needs. Contact us today 
            for a free consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1c2636] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a3441] transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-[#1c2636] text-[#1c2636] px-8 py-4 rounded-full font-semibold hover:bg-[#1c2636] hover:text-white transition-colors duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* ------ TESTIMONIALS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">Real feedback from satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Home Buyer",
              text: "Exceptional service! They helped me find my dream home within my budget. The team was professional and responsive throughout the entire process.",
              rating: 5
            },
            {
              name: "Michael Chen",
              role: "Property Investor",
              text: "Their investment analysis and market insights helped me build a profitable real estate portfolio. Highly recommend their services!",
              rating: 5
            },
            {
              name: "Lisa Rodriguez",
              role: "Property Owner",
              text: "Outstanding property management services. They handle everything professionally, and I receive detailed reports monthly. Great communication!",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/20">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#d4ad83] text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-[#d4ad83]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
