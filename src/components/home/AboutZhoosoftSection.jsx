import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const AboutZhoosoftSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
             <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg blur-lg opacity-50"></div>
               <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                 <img  alt="Team of software developers in a meeting" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1556636530-6b7482d80e3d" />
               </div>
             </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Zhoosoft</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to transform businesses through technology, Zhoosoft has been delivering innovative solutions since 2010. Our team of experts combines technical excellence with industry knowledge to create solutions that drive growth.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start"><CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-0.5 flex-shrink-0" /><p className="text-gray-700">Expert team with diverse technology skills</p></div>
              <div className="flex items-start"><CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-0.5 flex-shrink-0" /><p className="text-gray-700">Proven track record of successful projects</p></div>
              <div className="flex items-start"><CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-0.5 flex-shrink-0" /><p className="text-gray-700">Client-focused approach to ensure satisfaction</p></div>
            </div>
            <Link to="/about">
              <Button size="lg">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutZhoosoftSection;