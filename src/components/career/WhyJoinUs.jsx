import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyJoinUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img  alt="Zhoosoft team collaborating" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
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
            <h2 className="text-3xl font-bold mb-6">Why Join Zhoosoft?</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Zhoosoft, we believe that our success is driven by our people. We're committed to creating an environment where talented individuals can thrive, innovate, and grow both personally and professionally.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Work on challenging projects with cutting-edge technologies</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Collaborative culture that values diverse perspectives</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Opportunities for continuous learning and career advancement</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Make a meaningful impact on businesses across industries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;