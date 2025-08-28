import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Aashish Kumar Chauhan",
      designation: "Managing Director, CEO & Chairman",
      image: "/images/Aashish_Chauhan.jpg",
    },
    {
      id: 2,
      name: "Mrs. Dipti Chauhan",
      designation: "Director & Vice Chairman",
      image: "/images/Dipti_Chauhan.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-20 bg-[#1c2636]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center pb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white pb-4">
            Our Team
          </h1>
          <p className="text-gray-300 text-lg">Meet our leadership team</p>
        </div>

        {/* Team Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-[#2a3441] to-[#1e2832] rounded-2xl p-6 sm:p-8 text-center shadow-xl"
            >
              {/* Profile Image */}
              <motion.div whileHover={{ scale: 1.1 }} className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-[#d4ad83] shadow-lg object-cover"
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>

              {/* Designation */}
              <h4 className="text-base sm:text-lg text-[#d4ad83] font-semibold mb-4">
                {member.designation}
              </h4>

              {/* View Profile Link */}
              <Link
                to="/about"
                className="inline-block bg-[#d4ad83] hover:bg-[#c49a70] text-[#1c2636] font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Profile
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
