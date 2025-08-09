import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, ShoppingBag, Hotel, ListChecks } from "lucide-react";

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
    { 
      name: "ZFleet", 
      headline: "Unified Transport & Fleet Management",
      icon: <Car className="h-10 w-10 text-teal-500" />, 
      description: "A complete platform for ride booking, fleet coordination, driver/vendor onboarding, spare parts tracking, and a buy/sell vehicle marketplace — built to evolve with every aspect of your transport business.", 
      path: "/products/ride-booking-app" 
    },
    { 
      name: "ZCart", 
      headline: "Multi-Channel Commerce Platform",
      icon: <ShoppingBag className="h-10 w-10 text-teal-500" />, 
      description: "Launch and manage your online store with ease. Designed for retailers, wholesalers, and manufacturers to sell smarter through a unified e-commerce solution.", 
      path: "/products/ecommerce-platform" 
    },
    { 
      name: "ZHost", 
      headline: "Hotel & Reservation Management",
      icon: <Hotel className="h-10 w-10 text-teal-500" />, 
      description: "Streamline daily hotel operations with modules for reservations, waitlists, table assignments, staff shifts, and invoicing — all in one clean dashboard.", 
      path: "/products/hotel-management" 
    },
    { 
      name: "ZTask", 
      headline: "Dynamic Workflow & Task Manager",
      icon: <ListChecks className="h-10 w-10 text-teal-500" />, 
      description: "Create your own modules and custom forms to track, manage, and automate team activities with maximum flexibility and visibility.", 
      path: "/products/task-management" 
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Flagship Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart, scalable, and ready-to-deploy platforms designed to streamline operations and accelerate business growth.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg card-hover flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
            >
              <div className="flex-shrink-0 p-4 bg-teal-100 rounded-full inline-flex items-center justify-center">
                {product.icon}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name} – {product.headline}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <Link to={product.path}>
                  <Button variant="link" className="text-teal-600 font-semibold p-0 hover:no-underline">
                    Explore Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHighlight;