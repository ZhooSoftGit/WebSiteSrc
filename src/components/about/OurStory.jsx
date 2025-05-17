import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
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
                <img  alt="Zhoosoft founding team" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1632435499182-e436787ce107" />
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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Zhoosoft began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a comprehensive technology solutions provider serving clients across industries.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, we've built a reputation for delivering high-quality, innovative solutions that drive real business results. Our team combines technical expertise with industry knowledge to create solutions that not only meet but exceed our clients' expectations.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Today, Zhoosoft continues to evolve and expand, staying at the forefront of technology trends while maintaining our commitment to excellence and client satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;