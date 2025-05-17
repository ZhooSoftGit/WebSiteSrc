import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake as Handshake, Zap, Aperture, ShieldCheck } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const partnersData = [
  { 
    name: "Innovatech Global", 
    logo: "https://images.unsplash.com/photo-1599305445671-ac28a540aaa9?auto=format&fit=crop&w=150&q=80", 
    description: "A leading provider of cutting-edge cloud infrastructure and AI platforms, helping us deliver scalable and intelligent solutions.",
    category: "Cloud & AI"
  },
  { 
    name: "DataDriven Inc.", 
    logo: "https://images.unsplash.com/photo-1611095562057-2e70a9bf061d?auto=format&fit=crop&w=150&q=80", 
    description: "Experts in big data analytics and business intelligence, empowering our clients with actionable insights from complex datasets.",
    category: "Data Analytics"
  },
  { 
    name: "CyberSecure Solutions", 
    logo: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=150&q=80", 
    description: "Specialists in cybersecurity services, ensuring the highest levels of protection for our clients' digital assets.",
    category: "Cybersecurity"
  },
  { 
    name: "ConnectSphere Comms", 
    logo: "https://images.unsplash.com/photo-1616530940355-351b9d6a6ce4?auto=format&fit=crop&w=150&q=80", 
    description: "Pioneers in next-generation communication technologies, enabling seamless connectivity and collaboration.",
    category: "Communication Tech"
  },
  { 
    name: "AgileFlow Systems", 
    logo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=150&q=80", 
    description: "Providers of advanced project management and DevOps tools, enhancing our development efficiency and delivery speed.",
    category: "DevOps & PM Tools"
  },
   { 
    name: "GreenTech Innovations", 
    logo: "https://images.unsplash.com/photo-1509014601487-e3eac5f46f83?auto=format&fit=crop&w=150&q=80", 
    description: "Focused on sustainable technology solutions, helping us build eco-friendly and responsible digital products.",
    category: "Sustainable Tech"
  }
];

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
      <header className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-teal-700 text-white text-center">
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
          {partnersData.map((partner, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 card-hover-subtle border border-gray-200"
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <img  alt={`${partner.name} logo`} src={partner.logo} className="h-16 w-16 mr-4 rounded-md object-contain bg-gray-100 p-1" />
                <div>
                  <h3 className="text-xl font-bold text-green-700">{partner.name}</h3>
                  <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">{partner.category}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm flex-grow">{partner.description}</p>
              <Button variant="link" className="mt-4 self-start text-green-600 hover:text-green-800 px-0">
                Visit Partner <Zap size={16} className="ml-1"/>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay: partnersData.length * 0.05 + 0.2}}
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