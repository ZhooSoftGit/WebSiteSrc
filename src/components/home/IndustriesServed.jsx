import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Banknote, HeartHandshake, Cpu, Fuel, Gamepad2 } from "lucide-react";

const IndustriesServed = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const industries = [
    { name: "Travel & Logistics", icon: <Plane className="h-8 w-8" />, path: "/industries/travel-logistics" },
    { name: "Banking & Finance", icon: <Banknote className="h-8 w-8" />, path: "/industries/financial-services" },
    { name: "Healthcare", icon: <HeartHandshake className="h-8 w-8" />, path: "/industries/life-sciences-healthcare" },
    { name: "Automation", icon: <Cpu className="h-8 w-8" />, path: "/industries/industry-automation" },
    { name: "Energy & Utilities", icon: <Fuel className="h-8 w-8" />, path: "/industries/energy-utilities" },
    { name: "Gaming & Entertainment", icon: <Gamepad2 className="h-8 w-8" />, path: "/industries/gaming-entertainment" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering specialized technology solutions across a diverse range of sectors.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg card-hover text-center flex flex-col items-center justify-center aspect-square"
            >
              <Link to={industry.path} className="flex flex-col items-center justify-center h-full">
                <div className="text-primary mb-3">{industry.icon}</div>
                <h3 className="text-md font-semibold text-gray-700">{industry.name}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServed;