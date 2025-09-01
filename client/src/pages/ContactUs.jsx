import React, { useState } from "react";
import { motion } from "framer-motion";
import GetInTouch from "../components/global/GetInTouch";

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
              Contact{" "}
              <motion.span
                className="text-[#d4ad83]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                PropertyWale
              </motion.span>
            </motion.h1>
            <motion.h3
              className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Home{" > "} <span className="text-[#d4ad83]">Contact</span>
            </motion.h3>
          </motion.div>
        </div>
      </motion.div>

      {/* ------ CONTACT INFO CARDS ------ */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Call Us Card */}
          <motion.div
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              className="w-16 h-16 bg-[#d4ad83]/20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">📞</span>
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Call Us
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Speak directly with our experts
            </motion.p>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#d4ad83] font-semibold">+91 98765 43210</p>
              <p className="text-[#d4ad83] font-semibold">+91 87654 32109</p>
            </motion.div>
          </motion.div>

          {/* Email Us Card */}
          <motion.div
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              className="w-16 h-16 bg-[#d4ad83]/20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">✉️</span>
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Email Us
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Send us a detailed message
            </motion.p>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#d4ad83] font-semibold">
                <a href="mailto:info@propertywale.uk.com">
                  info@propertywale.uk.com
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Visit Us Card */}
          <motion.div
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-8 text-center border border-[#d4ad83]/20 hover:border-[#d4ad83]/60 transition-all duration-300"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              className="w-16 h-16 bg-[#d4ad83]/20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">📍</span>
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Visit Us
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              Come to our office
            </motion.p>
            <motion.p
              className="text-[#d4ad83] font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              123 Business District, Mumbai, Maharashtra 400001
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ------ GOOGLE MAP WITH SATELLITE VIEW ------ */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-6 border border-[#d4ad83]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Find Us Here
            </motion.h3>
            <motion.div
              className="w-full h-96 rounded-xl overflow-hidden border border-[#d4ad83]/30"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0479798288477!2d72.8776595!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b0e1b64b4b%3A0x4c0e4c6e5e5e5e5e!2sBusiness%20District%2C%20Mumbai%2C%20Maharashtra%20400001!5e1!3m2!1sen!2sin!4v1693840800000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location - Satellite View"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ------ CONTACT FORM & MAP ------ */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <GetInTouch />
      </motion.div>
    </div>
  );
};

export default ContactUs;
