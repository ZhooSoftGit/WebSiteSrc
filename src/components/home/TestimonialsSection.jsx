import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "“Zhoosoft transformed our outdated desktop app into a cloud-based solution without disrupting our business.”",
    author: "Rahul Deshmukh",
    location: "Pune",
  },
  {
    quote: "“Our Xamarin-to-MAUI migration was seamless. The performance and UX have improved dramatically.”",
    author: "Emily Chen",
    location: "Singapore",
  },
  {
    quote: "“Their team quickly understood our legacy system and added critical features without a full rewrite.”",
    author: "James Whitmore",
    location: "London",
  },
  {
    quote: "“Zhoosoft’s consulting helped us realign our tech strategy with actual business goals — very rare insight.”",
    author: "Ananya Rao",
    location: "Bengaluru",
  },
  {
    quote: "“The support we received on our ASP.NET platform was timely and effective. Highly recommended.”",
    author: "Mark Fernandes",
    location: "Dubai",
  },
  {
    quote: "“Zhoosoft delivered a clean, scalable mobile app solution for our growing customer base.”",
    author: "Sofia Alvarez",
    location: "Mexico City",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] p-8 mx-4 bg-white rounded-xl shadow-lg flex flex-col justify-between">
    <blockquote className="text-lg text-gray-700 italic mb-6">
      {testimonial.quote}
    </blockquote>
    <div>
      <p className="font-bold text-gray-800">— {testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Customer Thoughts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've made a difference for businesses around the world.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;