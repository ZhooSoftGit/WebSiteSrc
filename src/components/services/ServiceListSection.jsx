import React from "react";
import { motion } from "framer-motion";

const ServiceListSection = ({ title, subtitle, services, accentColor = "blue" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  
  const accentColors = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-500" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-500" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-500" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-500" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-500" },
  };
  const color = accentColors[accentColor] || accentColors.blue;

  return (
    <section className="py-12 md:py-20 bg-white">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`p-6 rounded-xl shadow-lg border-l-4 ${color.border} bg-gray-50 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-center mb-3">
                <div className={`p-2 ${color.bg} ${color.text} rounded-full mr-3`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold ${color.text}`}>{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceListSection;