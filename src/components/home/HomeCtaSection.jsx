import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-teal-50">
            <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCtaSection;