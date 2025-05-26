import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, Zap, Briefcase, ChevronRight } from "lucide-react";

const ServicesOverview = () => {
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
  
  const services = [
    { title: "Software Development", description: "Custom software solutions tailored to your business needs", icon: <Settings className="h-8 w-8"/>, gradient: "from-blue-500 to-indigo-600", path: "/services/custom-software-solutions" },
    { title: "Mobile Applications", description: "Native and cross-platform mobile apps for iOS and Android", icon: <Zap className="h-8 w-8"/>, gradient: "from-purple-500 to-pink-600", path: "/services/mobile-application-development"  },
    { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure and services", icon: <Zap className="h-8 w-8"/>, gradient: "from-cyan-500 to-blue-600", path: "/services/cloud-solutions" },
    { title: "IT Consulting", description: "Expert guidance to optimize your technology investments", icon: <Briefcase className="h-8 w-8"/>, gradient: "from-amber-500 to-orange-600", path: "/services/it-consulting" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital era.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.title}
              variants={fadeIn}
              className={`service-card bg-gradient-to-br ${service.gradient} p-6 rounded-xl text-white shadow-lg card-hover flex flex-col`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="mb-4 text-blue-100 flex-grow">{service.description}</p>
              <Link to={service.path} className="inline-flex items-center text-white hover:underline mt-auto">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;