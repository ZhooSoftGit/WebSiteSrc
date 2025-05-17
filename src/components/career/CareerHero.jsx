import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CareerHero = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 mb-8">
            Build your career at Zhoosoft and be part of a team that's shaping the future of technology.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            View Open Positions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHero;