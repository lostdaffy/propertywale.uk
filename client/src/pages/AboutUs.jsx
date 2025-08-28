import React from "react";
// Agar animation ya icons chahiye to yahan import karo

const AboutUs = () => {
  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ HERO / TOP SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-[#d4ad83]/10 inline-block px-4 py-2 rounded-full border border-[#d4ad83]/30 mb-6 font-semibold text-[#d4ad83] text-sm">25+ Years of Excellence</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight uppercase">About Our <span className="text-[#d4ad83]">Legacy</span></h1>
            <p className="text-lg text-gray-200 mb-8">For over two decades, we have been transforming the real estate landscape, creating exceptional value for our clients and building lasting relationships based on trust, integrity, and unparalleled service.</p>
            <div className="grid grid-cols-3 gap-4 max-w-sm">
              <div>
                <div className="text-3xl font-bold text-[#d4ad83]">25+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4ad83]">5000+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4ad83]">500+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/about-hero.jpg" alt="About Us" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c2636]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ------ STORY SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <div className="relative h-96 min-h-[300px]">
            <div className="absolute top-5 left-10 w-72 h-80 border-4 border-[#d4ad83] -z-10 rounded-2xl" />
            <img
              src="/images/story-1.jpg"
              alt="Our Story"
              className="absolute w-72 h-80 object-cover shadow-xl rounded-xl top-0 left-0"
            />
            <img
              src="/images/story-2.jpg"
              alt="Our Journey"
              className="absolute w-44 h-60 object-cover shadow-lg rounded-xl bottom-0 right-0 border-4 border-[#1c2636]"
            />
          </div>
          {/* Content */}
          <div>
            <div className="text-[#d4ad83] uppercase text-sm font-semibold mb-2">Our Story</div>
            <h2 className="text-3xl font-bold mb-4">A Journey of Excellence and Innovation</h2>
            <div className="space-y-4 text-gray-300">
              <p>Founded in 1999, our company began with a vision: to revolutionize real estate by putting clients first and delivering the highest value in every transaction.</p>
              <p>We grew from a small local agency to one of the most trusted real estate companies, handling everything from homes to commercial developments.</p>
              <p>Our success is built on three core principles: unwavering integrity, innovative solutions, and deep commitment to client success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------ MISSION, VISION & VALUES ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Foundation</h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">Built on strong values and clear vision, we continue to shape the future of real estate</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/30">
            <h3 className="text-xl font-bold mb-2 text-[#d4ad83]">Our Mission</h3>
            <p>To provide exceptional real estate services that exceed client expectations while building long-term relationships based on trust and integrity.</p>
          </div>
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/30">
            <h3 className="text-xl font-bold mb-2 text-[#d4ad83]">Our Vision</h3>
            <p>To be the most trusted and innovative real estate company, setting industry standards for excellence and client satisfaction.</p>
          </div>
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/30">
            <h3 className="text-xl font-bold mb-2 text-[#d4ad83]">Our Values</h3>
            <p>Integrity, Excellence, Innovation, and Client-first approach guide everything we do.</p>
          </div>
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/30">
            <h3 className="text-xl font-bold mb-2 text-[#d4ad83]">Our Promise</h3>
            <p>We promise transparency, professional expertise, and unwavering commitment to your real estate success.</p>
          </div>
        </div>
      </section>

      {/* ------ LEADERSHIP SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
          <p className="text-gray-300 text-lg">Meet our visionary leaders</p>
        </div>
        <div className="grid md:grid-cols-2 gap-14 items-stretch">
          <div className="bg-gradient-to-br from-[#2a3441] to-[#1e2832] rounded-2xl p-8 text-center shadow-xl flex flex-col items-center">
            <img src="/images/Aashish_Chauhan.jpg" alt="Mr. Aashish Kumar Chauhan" className="w-32 h-32 rounded-full mb-6 border-4 border-[#d4ad83] object-cover" />
            <h3 className="text-2xl font-bold mb-2">Mr. Aashish Kumar Chauhan</h3>
            <h4 className="text-lg text-[#d4ad83] font-semibold mb-2">Managing Director, CEO & Chairman</h4>
            <p className="text-gray-300 mb-3">With over 25 years of experience in real estate, Aashish has led the company's growth from a startup to an industry leader.</p>
          </div>
          <div className="bg-gradient-to-br from-[#2a3441] to-[#1e2832] rounded-2xl p-8 text-center shadow-xl flex flex-col items-center">
            <img src="/images/Dipti_Chauhan.jpg" alt="Mrs. Dipti Chauhan" className="w-32 h-32 rounded-full mb-6 border-4 border-[#d4ad83] object-cover" />
            <h3 className="text-2xl font-bold mb-2">Mrs. Dipti Chauhan</h3>
            <h4 className="text-lg text-[#d4ad83] font-semibold mb-2">Director & Vice Chairman</h4>
            <p className="text-gray-300 mb-3">Dipti brings strategic vision and operational excellence, overseeing key business development initiatives.</p>
          </div>
        </div>
      </section>

      {/* ------ TIMELINE/ MILESTONES ------ */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-300 text-lg">Key milestones in our history</p>
        </div>
        <div className="relative">
          <div className="absolute left-5 md:left-1/2 w-1 bg-[#d4ad83]/30 h-full top-0 -translate-x-1/2"></div>
          <div className="space-y-14 relative">
            {/* Timeline Items */}
            {[
              { year: "1999", title: "Company Founded", desc: "Started as a small real estate agency." },
              { year: "2005", title: "First Major Project", desc: "Completed our first large-scale residential development." },
              { year: "2010", title: "Commercial Expansion", desc: "Expanded into commercial and property management." },
              { year: "2015", title: "Digital Innovation", desc: "Launched digital platforms and virtual tours." },
              { year: "2020", title: "Industry Recognition", desc: "Received multiple awards for excellence." },
              { year: "2024", title: "Future Ready", desc: "Continuing to innovate with sustainable solutions." },
            ].map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 ? "flex-row-reverse" : ""}`}>
                <div className="w-20 min-w-20 flex-shrink-0 text-center">
                  <div className="text-2xl font-bold text-[#d4ad83]">{milestone.year}</div>
                  <div className="w-4 h-4 bg-[#d4ad83] rounded-full border-4 border-[#1c2636] mx-auto mt-4 mb-2"></div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl p-6 mx-6 border border-[#d4ad83]/20">
                  <h3 className="text-xl font-bold mb-2 text-[#d4ad83]">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
