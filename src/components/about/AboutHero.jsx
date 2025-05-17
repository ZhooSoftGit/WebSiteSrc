import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zhoosoft</h1>
          <p className="text-xl text-blue-100 mb-8">
            We are a team of passionate technology experts dedicated to helping businesses thrive in the digital era.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;