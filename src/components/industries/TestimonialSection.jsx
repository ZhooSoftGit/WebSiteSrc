import React from "react";
import { motion } from "framer-motion";
import { Star, UserCircle } from "lucide-react";

const TestimonialSection = ({ testimonials, title = "What Our Clients Say", subtitle = "Real feedback from businesses we've helped transform." }) => {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">We are currently gathering testimonials. Check back soon!</p>
          <UserCircle className="h-24 w-24 mx-auto text-gray-300" />
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;