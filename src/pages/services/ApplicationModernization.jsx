import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  DraftingCompass, 
  DatabaseZap, 
  Palette, 
  CloudCog, 
  Settings2,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const modernizationServices = [
  {
    icon: <ClipboardList className="h-10 w-10 text-teal-500" />,
    title: "Legacy System Assessment",
    description: "We begin by understanding your current system: technical and architectural review, identifying limitations, risks, opportunities, and evaluating user experience."
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-teal-500" />,
    title: "Modernization Strategy",
    description: "Get a clear roadmap to move forward. We help you decide whether to rehost, refactor, rebuild, or replace, defining priorities aligned with business goals."
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-teal-500" />,
    title: "Smooth Data & App Migration",
    description: "Seamlessly move your apps and data with zero or minimal downtime strategies, secure data migration, validation, and post-migration integrity checks."
  },
  {
    icon: <Palette className="h-10 w-10 text-teal-500" />,
    title: "UI/UX Redesign & Enhancements",
    description: "Give your app a fresh, modern feel with an improved user interface, enhanced accessibility, responsive design for all devices, and better usability."
  },
  {
    icon: <CloudCog className="h-10 w-10 text-teal-500" />,
    title: "Cloud Enablement & Integration",
    description: "Leverage modern infrastructure with scalable cloud deployment options, integration with APIs, third-party services, and enhanced resilience."
  },
  {
    icon: <Settings2 className="h-10 w-10 text-teal-500" />,
    title: "Ongoing Support & Optimization",
    description: "Post-migration success is critical. We provide performance monitoring, feedback-driven enhancements, and continuous delivery pipelines."
  }
];

const ApplicationModernization = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <div className="bg-white text-gray-800">
      <motion.section 
        className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-teal-700 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Application Modernization & Migration
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your outdated systems into agile, scalable, and secure solutions that meet today’s business needs and tomorrow’s opportunities.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {modernizationServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left"
                variants={itemVariants}
              >
                <div className="bg-teal-100 p-4 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 md:px-6 py-20">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Applications?</h2>
                <p className="text-teal-100 text-lg mb-8">
                    Let's create a modernization roadmap that aligns with your business goals and ensures a seamless transition to future-proof technology.
                </p>
                <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-bold">
                    <Link to="/contact">
                        Get a Free Assessment <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationModernization;