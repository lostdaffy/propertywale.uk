import React, { useState } from "react";
import { motion } from "framer-motion";
import GetInTouch from "../components/global/GetInTouch";

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

  // Web3Forms states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setApplicationForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setApplicationForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Updated form submission with Web3Forms integration and better error handling
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult('');

    try {
      const formData = new FormData();
      
      // Add Web3Forms access key
      formData.append('access_key', '260cad70-c5b5-4493-bad4-59b3452c6603');
      
      // Add form fields
      formData.append('name', applicationForm.name);
      formData.append('email', applicationForm.email);
      formData.append('phone', applicationForm.phone);
      formData.append('position', applicationForm.position || 'Not specified');
      formData.append('experience', applicationForm.experience);
      formData.append('cover_letter', applicationForm.coverLetter || 'No cover letter provided');
      
      // Add file if present (check file size - Web3Forms has 10MB limit)
      if (applicationForm.resume) {
        if (applicationForm.resume.size > 10 * 1024 * 1024) { // 10MB limit
          setSubmitResult('file_too_large');
          setIsSubmitting(false);
          return;
        }
        formData.append('attachment', applicationForm.resume);
      }

      // Add additional settings
      formData.append('subject', 'New Job Application - Career Portal');
      formData.append('from_name', 'Career Portal Application');

      console.log('Submitting form data:', {
        name: applicationForm.name,
        email: applicationForm.email,
        phone: applicationForm.phone,
        position: applicationForm.position || 'Not specified',
        experience: applicationForm.experience,
        hasResume: !!applicationForm.resume,
        resumeSize: applicationForm.resume ? applicationForm.resume.size : 0
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      console.log('Web3Forms response:', data);

      if (data.success) {
        setSubmitResult('success');
        // Reset form
        setApplicationForm({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          resume: null,
          coverLetter: "",
        });
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitResult(''), 5000);
      } else {
        setSubmitResult('error');
        console.error('Form submission error:', data);
        console.error('Error message:', data.message);
      }
    } catch (error) {
      setSubmitResult('network_error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
      description:
        "We are looking for a motivated Real Estate Agent to join our dynamic sales team. You will be responsible for helping clients buy, sell, and rent properties while providing exceptional customer service.",
      requirements: [
        "Bachelor's degree in any field",
        "2+ years of real estate experience",
        "Valid real estate license",
        "Excellent communication skills",
        "Strong networking abilities",
        "Knowledge of local market trends",
      ],
      responsibilities: [
        "Generate leads and build client relationships",
        "Show properties to potential buyers/tenants",
        "Negotiate deals and close transactions",
        "Maintain client database and follow-up",
        "Prepare property documents and contracts",
        "Stay updated with market trends",
      ],
    },
    {
      id: 2,
      title: "Property Manager",
      department: "Operations",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹4,00,000 - ₹6,00,000",
      description:
        "Join our operations team as a Property Manager to oversee residential and commercial properties, ensuring optimal performance and tenant satisfaction.",
      requirements: [
        "Bachelor's degree in Business/Real Estate",
        "3+ years of property management experience",
        "Strong organizational skills",
        "Knowledge of property laws and regulations",
        "Excellent problem-solving abilities",
        "Proficiency in property management software",
      ],
      responsibilities: [
        "Manage property operations and maintenance",
        "Handle tenant relations and lease agreements",
        "Coordinate with vendors and contractors",
        "Prepare financial reports and budgets",
        "Ensure compliance with regulations",
        "Oversee property improvements and renovations",
      ],
    },
    {
      id: 3,
      title: "Marketing Executive",
      department: "Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1+ years",
      salary: "₹2,50,000 - ₹4,00,000",
      description:
        "We're seeking a creative Marketing Executive to develop and execute marketing strategies that promote our real estate services and properties.",
      requirements: [
        "Bachelor's degree in Marketing/Communications",
        "1+ years of marketing experience",
        "Knowledge of digital marketing tools",
        "Creative thinking and design skills",
        "Social media management experience",
        "Strong written and verbal communication",
      ],
      responsibilities: [
        "Develop marketing campaigns and strategies",
        "Manage social media accounts and content",
        "Create marketing materials and brochures",
        "Coordinate property photography and videos",
        "Analyze marketing performance metrics",
        "Support sales team with marketing materials",
      ],
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Business Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹6,00,000 - ₹10,00,000",
      description:
        "Lead our business development initiatives to expand market reach, forge strategic partnerships, and drive revenue growth.",
      requirements: [
        "MBA or Bachelor's in Business",
        "4+ years of business development experience",
        "Real estate industry knowledge preferred",
        "Strong leadership and negotiation skills",
        "Strategic thinking and planning abilities",
        "Excellent presentation skills",
      ],
      responsibilities: [
        "Identify new business opportunities",
        "Develop strategic partnerships",
        "Create business development strategies",
        "Lead market expansion initiatives",
        "Manage key client relationships",
        "Prepare business proposals and presentations",
      ],
    },
  ];

  // Function to handle quick apply from job cards
  const handleQuickApply = (jobTitle) => {
    setApplicationForm(prev => ({
      ...prev,
      position: jobTitle
    }));
    // Scroll to application form
    document.getElementById('application-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="bg-[#1c2636] text-white">
      {/* ------ TOP BANNER WITH PARALLAX ------ */}
      <motion.div
        className="relative h-[250px] sm:h-[300px] text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(/images/banner-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex h-full items-center px-4 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Career{" "}
              <motion.span
                className="text-[#d4ad83]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Opportunity
              </motion.span>
            </motion.h1>
            <motion.h3
              className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Home{" > "} <span className="text-[#d4ad83]">Career</span>
            </motion.h3>
          </motion.div>
        </div>
      </motion.div>

      {/* ------ JOB OPENINGS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Current Job Openings</h2>
          <p className="text-gray-300 text-lg">
            Find the perfect role to start or advance your career
          </p>
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
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">
                    Department:
                  </span>{" "}
                  {job.department}
                </p>
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">
                    Location:
                  </span>{" "}
                  {job.location}
                </p>
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">
                    Experience:
                  </span>{" "}
                  {job.experience}
                </p>
                <p className="text-gray-300">
                  <span className="text-[#d4ad83] font-semibold">Salary:</span>{" "}
                  {job.salary}
                </p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {job.description}
              </p>

              <button 
                className="w-full bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-[#1c2636] font-bold py-3 px-6 rounded-lg hover:from-[#c19a6b] hover:to-[#b08954] transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickApply(job.title);
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ------ APPLICATION FORM ------ */}
      <section id="application-form" className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Quick Application</h2>
          <p className="text-gray-300 text-lg">
            Don't see a perfect match? Apply anyway - we're always looking for
            talented people!
          </p>
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
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
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
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#d4ad83] to-[#c19a6b] text-[#1c2636] font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:from-[#c19a6b] hover:to-[#b08954] transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Application...
              </div>
            ) : (
              'Submit Application'
            )}
          </button>

          {/* Success/Error Message */}
          {submitResult && (
            <div className={`text-center p-4 rounded-lg border ${
              submitResult === 'success' 
                ? 'bg-green-900/50 text-green-300 border-green-600' 
                : 'bg-red-900/50 text-red-300 border-red-600'
            }`}>
              {submitResult === 'success' && (
                <div>
                  <div className="font-semibold mb-1">✅ Application Submitted Successfully!</div>
                  <div className="text-sm">Thank you for your interest! We will review your application and get back to you soon.</div>
                </div>
              )}
              {submitResult === 'error' && (
                <div>
                  <div className="font-semibold mb-1">❌ Submission Failed</div>
                  <div className="text-sm">Something went wrong. Please check your information and try again. Check console for details.</div>
                </div>
              )}
              {submitResult === 'network_error' && (
                <div>
                  <div className="font-semibold mb-1">🌐 Network Error</div>
                  <div className="text-sm">Please check your internet connection and try again.</div>
                </div>
              )}
              {submitResult === 'file_too_large' && (
                <div>
                  <div className="font-semibold mb-1">📎 File Too Large</div>
                  <div className="text-sm">Please upload a resume smaller than 10MB.</div>
                </div>
              )}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Career;
