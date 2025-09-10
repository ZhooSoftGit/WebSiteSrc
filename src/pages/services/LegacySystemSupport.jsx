
import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Zap, 
  Puzzle, 
  ShieldCheck, 
  Route, 
  Wrench,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const supportServices = [
  {
    icon: <Database className="h-10 w-10 text-teal-500" />,
    title: "Platform Expertise",
    description: "We support a wide range of legacy business applications — no matter how outdated — ensuring stability and continued value. Our team works closely to understand your system’s architecture, workflows, and dependencies."
  },
  {
    icon: <Zap className="h-10 w-10 text-teal-500" />,
    title: "Performance Tuning & Optimization",
    description: "We analyze and fine-tune your application to improve speed and responsiveness, fix bottlenecks in both backend and UI, and enhance the overall user experience."
  },
  {
    icon: <Puzzle className="h-10 w-10 text-teal-500" />,
    title: "Feature Enhancements",
    description: "Evolve your existing system by adding new capabilities, such as modern user interfaces, business-specific modules or tools, and API integrations for automation."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
    title: "Security & Compliance Upgrades",
    description: "We ensure your legacy system stays protected by strengthening access controls, enhancing data privacy, applying best practices for secure code, and helping meet compliance standards."
  },
  {
    icon: <Route className="h-10 w-10 text-teal-500" />,
    title: "Migration Planning & Roadmapping",
    description: "If you’re ready to modernize, we help by assessing your system’s migration readiness, creating a detailed roadmap to modern platforms, and planning phased transitions to avoid disruptions."
  },
  {
    icon: <Wrench className="h-10 w-10 text-teal-500" />,
    title: "Ongoing Maintenance & Support",
    description: "Keep your legacy systems reliable with our ongoing support, including regular updates and bug fixes, dedicated support contracts, and comprehensive knowledge transfer with documentation."
  }
];

const LegacySystemSupport = () => {

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
            Legacy System Support & Modernization
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Breathe new life into your trusted systems. We extend the value of your legacy applications with expert support, enhancements, and strategic modernization.
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
            {supportServices.map((service, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Legacy Systems?</h2>
                <p className="text-teal-100 text-lg mb-8">
                    Let's discuss how we can enhance your existing applications or plan a seamless migration to modern technologies.
                </p>
                <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-bold">
                    <Link to="/contact">
                        Schedule a Consultation <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegacySystemSupport;
