import React from "react";
import { motion } from "framer-motion";
import { CheckSquare, Award, Users, Lightbulb, TrendingUp, Zap, MessageSquare, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reasons = [
  { 
    icon: <Award className="h-10 w-10 text-teal-500" />, 
    title: "Proven Expertise", 
    description: "Years of experience and a portfolio of successful projects across diverse industries demonstrate our capability to deliver results." 
  },
  { 
    icon: <Users className="h-10 w-10 text-teal-500" />, 
    title: "Client-Centric Approach", 
    description: "We prioritize your needs, working closely with you to understand your goals and tailor solutions that provide real business value." 
  },
  { 
    icon: <Lightbulb className="h-10 w-10 text-teal-500" />, 
    title: "Innovative Solutions", 
    description: "We stay at the forefront of technology, leveraging the latest tools and methodologies to build future-proof solutions." 
  },
  { 
    icon: <TrendingUp className="h-10 w-10 text-teal-500" />, 
    title: "Scalability & Performance", 
    description: "Our solutions are designed for growth, ensuring they can scale with your business and perform reliably under demand." 
  },
  { 
    icon: <Zap className="h-10 w-10 text-teal-500" />, 
    title: "Agile & Transparent", 
    description: "We follow agile practices for flexibility and maintain transparent communication throughout the project lifecycle." 
  },
  { 
    icon: <MessageSquare className="h-10 w-10 text-teal-500" />, 
    title: "Dedicated Support", 
    description: "Our commitment doesn't end at delivery. We offer ongoing support and maintenance to ensure your long-term success." 
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const AboutWhyChooseUs = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-gray-50">
      <header className="py-12 md:py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <CheckSquare className="h-16 w-16 mx-auto mb-4 text-teal-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Partner with Zhoosoft?</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Discover the distinct advantages that make Zhoosoft the ideal technology partner for your business growth and innovation.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center card-hover-subtle border border-gray-200"
              variants={fadeIn}
            >
              <div className="p-4 bg-teal-50 rounded-full mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-xl shadow-2xl text-center"
          initial={{opacity:0, scale:0.95}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.7, ease:"easeOut"}}
        >
          <Search className="h-12 w-12 mx-auto mb-4 text-teal-300" />
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-lg text-teal-100 mb-8 max-w-xl mx-auto">
            Let's discuss how Zhoosoft's expertise can translate into tangible results for your organization.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutWhyChooseUs;