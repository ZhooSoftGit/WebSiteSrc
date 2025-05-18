import React from "react";
import { motion } from "framer-motion";

const TechStackSection = ({ title = "Our Technology Stack", subtitle, technologies, bgColor = "bg-white" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className={`py-12 md:py-20 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center aspect-square transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {tech.icon ? <tech.icon className={`h-10 w-10 mb-2 ${tech.color || 'text-blue-600'}`} /> : <img  src={tech.logo} alt={tech.name} className="h-10 w-10 mb-2 object-contain"/> }
              <p className="text-sm font-medium text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;