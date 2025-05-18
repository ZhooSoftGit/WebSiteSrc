import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Lightbulb } from "lucide-react";

const WhyChooseUsService = ({ titlePrefix = "Why Choose Zhoosoft for", serviceName, reasons, bgColor = "bg-gray-50" }) => {
  const defaultReasons = [
    { icon: Award, text: `Unparalleled expertise in ${serviceName}.` },
    { icon: Users, text: "Client-centric approach focused on your success." },
    { icon: Lightbulb, text: `Innovative and tailored ${serviceName} solutions.` },
    { icon: CheckCircle, text: "Proven track record of delivering impactful results." },
  ];

  const displayReasons = reasons || defaultReasons;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{titlePrefix} {serviceName}?</h2>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {displayReasons.map((reason, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-3"
            >
              <reason.icon className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{reason.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsService;