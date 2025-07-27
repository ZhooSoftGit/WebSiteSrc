import React from "react";
import { motion } from "framer-motion";

const ProcessStepsSection = ({ title, subtitle, steps, accentColor = "blue" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const accentColors = {
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-500",
      border: "border-blue-500",
      hoverBg: "hover:bg-blue-600"
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-500",
      border: "border-purple-500",
      hoverBg: "hover:bg-purple-600"
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-500",
      border: "border-green-500",
      hoverBg: "hover:bg-green-600"
    },
    teal: {
        bg: "bg-teal-500",
        text: "text-teal-500",
        border: "border-teal-500",
        hoverBg: "hover:bg-teal-600"
    },
    pink: {
        bg: "bg-pink-500",
        text: "text-pink-500",
        border: "border-pink-500",
        hoverBg: "hover:bg-pink-600"
    },
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
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 ${color.border} transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 ${color.bg} text-white rounded-full mr-4`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold ${color.text}`}>{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;