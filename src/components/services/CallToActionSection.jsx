import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CallToActionSection = ({ 
    title = "Ready to Start Your Transformation?", 
    subtitle = "Let's discuss how Zhoosoft can help you achieve your business goals with our expert solutions.",
    primaryButtonText = "Contact Us Today",
    primaryButtonLink = "/contact",
    secondaryButtonText = "Explore Our Work",
    secondaryButtonLink = "/projects" // You might want to create a projects/portfolio page
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <Phone className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-blue-300"/>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to={primaryButtonLink}>{primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                 <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;