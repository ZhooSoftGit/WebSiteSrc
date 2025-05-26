import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 hero-gradient text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Innovative Technology Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
              Transforming ideas into powerful digital experiences. We help businesses grow through technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-blue-700 hover:bg-white/10 hover:text-white">
                 <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-xl opacity-60 animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-2xl overflow-hidden ring-1 ring-white/20">
                <img style={{ height: "272px", objectFit: "cover" }}  alt="Modern office with tech professionals working on computers" className="w-full h-auto rounded-md" src="https://images.unsplash.com/photo-1542837336-d14bdf342f9b" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;