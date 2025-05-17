import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Tag, Users, CreditCard, BarChart2, Settings } from "lucide-react";

const EcommercePlatform = () => {
  const features = [
    {
      icon: <Tag className="h-8 w-8 text-blue-500" />,
      title: "Product Listings & Management",
      description: "Easily list, categorize, and manage an extensive catalog of products with variants."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      title: "Shopping Cart & Wishlist",
      description: "Intuitive shopping cart functionality and wishlist features for enhanced user experience."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-purple-500" />,
      title: "Secure Payment Gateway Integration",
      description: "Multiple secure payment options to cater to diverse customer preferences."
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Seller Portal & Management",
      description: "Dedicated portal for sellers to manage their products, orders, and payouts."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-yellow-500" />,
      title: "Advanced Analytics & Reporting",
      description: "In-depth analytics on sales, customer behavior, and product performance."
    },
    {
      icon: <Settings className="h-8 w-8 text-teal-500" />,
      title: "Order & Inventory Management",
      description: "Streamlined order processing and real-time inventory tracking to prevent overselling."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">E-commerce Platform (like Amazon/Flipkart)</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A robust and scalable e-commerce solution designed to handle everything from small boutiques to large marketplaces.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
           <img  alt="E-commerce platform interface mockup" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1539278383962-a7774385fa02" />
        </div>
        
      </motion.div>
    </div>
  );
};
export default EcommercePlatform;