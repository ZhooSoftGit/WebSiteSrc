import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceHero = ({ title, subtitle, CtaIcon, gradientColors = "from-blue-600 to-indigo-700" }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <header className={`py-12 md:py-20 bg-gradient-to-r ${gradientColors} text-white text-center`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4 md:px-6"
      >
        {CtaIcon && <CtaIcon className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-6 text-white/80" />}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link to="/contact">Request a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">
             <Link to="/services">Explore Other Services</Link>
          </Button>
        </div>
      </motion.div>
    </header>
  );
};

export default ServiceHero;