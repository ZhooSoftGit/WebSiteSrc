import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake as Handshake, Zap } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};


const AboutOurPartners = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-gray-50">
      <header className="py-12 md:py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Handshake className="h-16 w-16 mx-auto mb-4 text-teal-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Partners</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Collaboration is key to innovation. We partner with industry leaders to deliver comprehensive and cutting-edge solutions.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <img  alt="Innovatech Global logo" className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" src="https://images.unsplash.com/photo-1585065799297-ce07d1855c01" />
              <div>
                <h3 className="text-xl font-bold text-teal-700">Innovatech Global</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Cloud & AI</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex-grow">A leading provider of cutting-edge cloud infrastructure and AI platforms, helping us deliver scalable and intelligent solutions.</p>
            <Button variant="link" className="mt-4 self-start text-teal-600 hover:text-teal-800 px-0">Visit Partner <Zap size={16} className="ml-1"/></Button>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <img  alt="DataDriven Inc. logo" className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" src="https://images.unsplash.com/photo-1646939222913-1cba94051fe3" />
              <div>
                <h3 className="text-xl font-bold text-teal-700">DataDriven Inc.</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Data Analytics</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex-grow">Experts in big data analytics and business intelligence, empowering our clients with actionable insights from complex datasets.</p>
            <Button variant="link" className="mt-4 self-start text-teal-600 hover:text-teal-800 px-0">Visit Partner <Zap size={16} className="ml-1"/></Button>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <img  alt="CyberSecure Solutions logo" className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" src="https://images.unsplash.com/photo-1643101450344-f1f3dcde2411" />
              <div>
                <h3 className="text-xl font-bold text-teal-700">CyberSecure Solutions</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Cybersecurity</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex-grow">Specialists in cybersecurity services, ensuring the highest levels of protection for our clients' digital assets.</p>
            <Button variant="link" className="mt-4 self-start text-teal-600 hover:text-teal-800 px-0">Visit Partner <Zap size={16} className="ml-1"/></Button>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <img  alt="ConnectSphere Comms logo" className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" />
              <div>
                <h3 className="text-xl font-bold text-teal-700">ConnectSphere Comms</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Communication Tech</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex-grow">Pioneers in next-generation communication technologies, enabling seamless connectivity and collaboration.</p>
            <Button variant="link" className="mt-4 self-start text-teal-600 hover:text-teal-800 px-0">Visit Partner <Zap size={16} className="ml-1"/></Button>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <img  alt="AgileFlow Systems logo" className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" src="https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7" />
              <div>
                <h3 className="text-xl font-bold text-teal-700">AgileFlow Systems</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">DevOps & PM Tools</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex-grow">Providers of advanced project management and DevOps tools, enhancing our development efficiency and delivery speed.</p>
            <Button variant="link" className="mt-4 self-start text-teal-600 hover:text-teal-800 px-0">Visit Partner <Zap size={16} className="ml-1"/></Button>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <img  alt="GreenTech Innovations logo" className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" src="https://images.unsplash.com/photo-1577017580953-e7a5e95d938a" />
              <div>
                <h3 className="text-xl font-bold text-teal-700">GreenTech Innovations</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Sustainable Tech</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm flex-grow">Focused on sustainable technology solutions, helping us build eco-friendly and responsible digital products.</p>
            <Button variant="link" className="mt-4 self-start text-teal-600 hover:text-teal-800 px-0">Visit Partner <Zap size={16} className="ml-1"/></Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay: 1}}
        >
          <p className="text-lg text-gray-700 mb-6">
            Interested in partnering with Zhoosoft? We're always open to exploring synergistic collaborations.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Become a Partner</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutOurPartners;