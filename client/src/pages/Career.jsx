import React, { useState } from "react";
import { motion } from "framer-motion";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setApplicationForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setApplicationForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", applicationForm);
    // Handle application submission
    setApplicationForm({ name: "", email: "", phone: "", position: "", experience: "", resume: null, coverLetter: "" });
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Real Estate Agent",
      department: "Sales",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹3,00,000 - ₹5,00,000",
      description: "We are looking for a motivated Real Estate Agent to join our dynamic sales team. You will be responsible for helping clients buy, sell, and rent properties while providing exceptional customer service.",
      requirements: [
        "Bachelor's degree in any field",
        "2+ years of real estate experience",
        "Valid real estate license",
        "Excellent communication skills",
        "Strong networking abilities",
        "Knowledge of local market trends"
      ],
      responsibilities: [
        "Generate leads and build client relationships",
        "Show properties to potential buyers/tenants",
        "Negotiate deals and close transactions",
        "Maintain client database and follow-up",
        "Prepare property documents and contracts",
        "Stay updated with market trends"
      ]
    },
    {
      id: 2,
      title: "Property Manager",
      department: "Operations",
      location: "Mumbai, Maharashtra", 
      type: "Full-time",
      experience: "3+ years",
      salary: "₹4,00,000 - ₹6,00,000",
      description: "Join our operations team as a Property Manager to oversee residential and commercial properties, ensuring optimal performance and tenant satisfaction.",
      requirements: [
        "Bachelor's degree in Business/Real Estate",
        "3+ years of property management experience",
        "Strong organizational skills",
        "Knowledge of property laws and regulations",
        "Excellent problem-solving abilities",
        "Proficiency in property management software"
      ],
      responsibilities: [
        "Manage property operations and maintenance",
        "Handle tenant relations and lease agreements",
        "Coordinate with vendors and contractors",
        "Prepare financial reports and budgets",
        "Ensure compliance with regulations",
        "Oversee property improvements and renovations"
      ]
    },
    {
      id: 3,
      title: "Marketing Executive",
      department: "Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time", 
      experience: "1+ years",
      salary: "₹2,50,000 - ₹4,00,000",
      description: "We're seeking a creative Marketing Executive to develop and execute marketing strategies that promote our real estate services and properties.",
      requirements: [
        "Bachelor's degree in Marketing/Communications",
        "1+ years of marketing experience",
        "Knowledge of digital marketing tools",
        "Creative thinking and design skills",
        "Social media management experience",
        "Strong written and verbal communication"
      ],
      responsibilities: [
        "Develop marketing campaigns and strategies",
        "Manage social media accounts and content",
        "Create marketing materials and brochures",
        "Coordinate property photography and videos",
        "Analyze marketing performance metrics",
        "Support sales team with marketing materials"
      ]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Business Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹6,00,000 - ₹10,00,000",
      description: "Lead our business development initiatives to expand market reach, forge strategic partnerships, and drive revenue growth.",
      requirements: [
        "MBA or Bachelor's in Business",
        "4+ years of business development experience",
        "Real estate industry knowledge preferred",
        "Strong leadership and negotiation skills",
        "Strategic thinking and planning abilities",
        "Excellent presentation skills"
      ],
      responsibilities: [
        "Identify new business opportunities",
        "Develop strategic partnerships",
        "Create business development strategies",
        "Lead market expansion initiatives",
        "Manage key client relationships",
        "Prepare business proposals and presentations"
      ]
    }
  ];

  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ HERO SECTION ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="bg-[#d4ad83]/10 inline-block px-4 py-2 rounded-full border border-[#d4ad83]/30 mb-6 font-semibold text-[#d4ad83] text-sm">
            Join Our Team
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight uppercase">
            Build Your <span className="text-[#d4ad83]">Career</span> With Us
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
            Join a dynamic team of real estate professionals and grow your career in one of India's 
            most exciting industries. We offer competitive compensation, comprehensive training, and excellent growth opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">25+</div>
              <div className="text-gray-300">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">200+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4ad83] mb-2">50+</div>
              <div className="text-gray-300">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------ WHY JOIN US ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us as Your Career Partner?</h2>
          <p className="text-gray-300 text-lg">Discover the benefits of working with industry leaders</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Career Growth",
              description: "Clear advancement paths with regular promotions and skill development opportunities."
            },
            {
              icon: "💰",
              title: "Competitive Compensation",
              description: "Industry-leading salaries, performance bonuses, and comprehensive benefits packages."
            },
            {
              icon: "🎓",
              title: "Continuous Learning",
              description: "Regular training programs, certifications, and conferences to enhance your skills."
            },
            {
              icon: "🏆",
              title: "Recognition Programs",
              description: "Regular appreciation, awards, and recognition for outstanding performance and achievements."
            },
            {
              icon: "🤝",
              title: "Team Collaboration", 
              description: "Work with experienced professionals in a supportive and collaborative environment."
            },
            {
              icon: "⚖️",
              title: "Work-Life Balance",
              description: "Flexible working hours, remote work options, and generous leave policies."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------ JOB OPENINGS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Current Job Openings</h2>
          <p className="text-gray-300 text-lg">Find the perfect role to start or advance your career</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <span className="bg-[#d4ad83] text-[#1c2636] px-3 py-1 rounded-full text-sm font-semibold">
                  {job.type}
                </span>
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">Department:</span> {job.department}
                </p>
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">Location:</span> {job.location}
                </p>
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">Experience:</span> {job.experience}
                </p>
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">Salary:</span> {job.salary}
                </p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
              
              <button className="w-full bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-[#1c2636] font-bold py-3 px-6 rounded-lg hover:from-[#c19a6b] hover:to-[#b08954] transition-all duration-300">
                View Details & Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ------ JOB DETAILS MODAL ------ */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1c2636] rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                <p className="text-[#d4ad83] text-lg">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#d4ad83] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedJob(null)}
                className="flex-1 bg-[#1f2937] text-white py-3 px-6 rounded-lg border border-gray-600 hover:bg-[#2a3441] transition-colors duration-300"
              >
                Close
              </button>
              <button className="flex-1 bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-[#1c2636] font-bold py-3 px-6 rounded-lg hover:from-[#c19a6b] hover:to-[#b08954] transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------ APPLICATION FORM ------ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Quick Application</h2>
          <p className="text-gray-300 text-lg">Don't see a perfect match? Apply anyway - we're always looking for talented people!</p>
        </div>

        <form onSubmit={handleApplicationSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={applicationForm.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={applicationForm.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={applicationForm.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Position of Interest
              </label>
              <select
                name="position"
                value={applicationForm.position}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white focus:border-[#d4ad83] focus:outline-none transition-colors"
              >
                <option value="">Select a position</option>
                {jobOpenings.map((job) => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Years of Experience *
            </label>
            <select
              name="experience"
              value={applicationForm.experience}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white focus:border-[#d4ad83] focus:outline-none transition-colors"
            >
              <option value="">Select experience level</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Upload Resume *
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#d4ad83] file:text-[#1c2636] file:font-semibold hover:file:bg-[#c19a6b] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={applicationForm.coverLetter}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 bg-[#1f2937] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4ad83] focus:outline-none transition-colors resize-none"
              placeholder="Tell us why you'd be a great fit for our team..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-[#1c2636] font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:from-[#c19a6b] hover:to-[#b08954] transform hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* ------ COMPANY CULTURE ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#1c2636] mb-6">Our Company Culture</h2>
          <p className="text-[#1c2636] text-lg mb-8 max-w-3xl mx-auto">
            We believe in fostering a culture of innovation, collaboration, and excellence. Join us and be part of 
            a team that values your growth, celebrates your successes, and supports your professional journey.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-[#1c2636]">
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold">Excellence</h4>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-bold">Collaboration</h4>
            </div>
            <div>
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-bold">Innovation</h4>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-bold">Growth</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
