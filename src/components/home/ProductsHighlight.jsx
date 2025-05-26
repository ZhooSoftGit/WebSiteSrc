import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, ShoppingBag, Zap, CheckCircle } from "lucide-react";

const ProductsHighlight = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const products = [
    { name: "Ride Booking App", icon: <Car className="h-10 w-10 text-blue-500" />, description: "On-demand transport solution.", path: "/products/ride-booking-app" },
    { name: "E-commerce Platform", icon: <ShoppingBag className="h-10 w-10 text-green-500" />, description: "Build your online store.", path: "/products/ecommerce-platform" },
    { name: "Hotel Management", icon: <Zap className="h-10 w-10 text-purple-500" />, description: "Streamline hospitality.", path: "/products/hotel-management" },
    { name: "Task Management", icon: <CheckCircle className="h-10 w-10 text-red-500" />, description: "Organize team projects.", path: "/products/task-management" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Flagship Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative and ready-to-deploy solutions to accelerate your business growth.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg card-hover text-center flex flex-col items-center"
            >
              <div className="p-4 bg-gray-100 rounded-full mb-4 inline-block">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
              <Link to={product.path}>
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  Explore Product <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHighlight;