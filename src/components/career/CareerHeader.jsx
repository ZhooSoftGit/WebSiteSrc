import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { UserPlus, Briefcase as BriefcaseBusiness } from 'lucide-react';

const CareerHeader = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <header className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Innovative Team</h1>
        <p className="text-xl text-pink-100 max-w-2xl mx-auto">
          At Zhoosoft, we're passionate about technology and believe our people are our greatest asset. Explore exciting career opportunities and grow with us.
        </p>
        <div className="mt-8 space-x-4">
          <ScrollLink to="open-positions" smooth={true} duration={500} offset={-100}>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <BriefcaseBusiness className="mr-2 h-5 w-5" /> View Openings
            </Button>
          </ScrollLink>
          <ScrollLink to="register-interest" smooth={true} duration={500} offset={-100}>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-pink-50">
              <UserPlus className="mr-2 h-5 w-5" /> Apply Now
            </Button>
          </ScrollLink>
        </div>
      </motion.div>
    </header>
  );
};

export default CareerHeader;