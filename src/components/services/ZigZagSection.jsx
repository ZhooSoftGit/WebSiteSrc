import React from "react";
import { motion } from "framer-motion";

const ZigZagSection = ({ title, description, Icon, imageSrc, imageAlt, reverse = false, children }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <motion.section 
      className="py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className={`absolute -inset-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl blur-lg opacity-50 animate-pulse-slow`}></div>
              <img  src={imageSrc} alt={imageAlt} className="relative w-full h-auto max-h-[400px] object-cover rounded-xl shadow-2xl" />
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {Icon && (
              <div className="p-3 bg-teal-100 text-teal-600 rounded-full inline-block mb-4">
                <Icon className="h-8 w-8" />
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            {children}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ZigZagSection;