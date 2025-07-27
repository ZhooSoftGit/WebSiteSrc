
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, ShoppingCart, Building2, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "ZFleet",
    tagline: "Smart ride & fleet management",
    icon: <Car className="w-8 h-8 text-teal-500" />,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/d22183bd6a05b59431d78026e1b159c7.png",
  },
  {
    name: "ZCart",
    tagline: "E-commerce for sellers & wholesalers",
    icon: <ShoppingCart className="w-8 h-8 text-teal-500" />,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/0faa0ebcec13afac5037f6a7e9025ea9.png",
  },
  {
    name: "ZHost",
    tagline: "Simplified hotel operations",
    icon: <Building2 className="w-8 h-8 text-teal-500" />,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/eca856547a1813ba3ca123d4d6c06642.png",
  },
  {
    name: "ZTask",
    tagline: "Custom task & workflow tracking",
    icon: <ListChecks className="w-8 h-8 text-teal-500" />,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/02f110d5b8e8d8749eb160a2d3868b5d.png",
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-6 flex flex-col items-start cursor-pointer"
    >
      <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
        <img  alt={product.name} className="w-full h-full object-cover" src={product.image} />
      </div>
      <div className="flex items-center mb-2">
        {product.icon}
        <h3 className="text-xl font-bold text-gray-800 ml-3">{product.name}</h3>
      </div>
      <p className="text-gray-500 text-sm">{product.tagline}</p>
    </motion.div>
  );
};

const HeroSection = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const opacity = useTransform(scrollXProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
          <motion.div
            className="text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800">
              Building Smarter Digital Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              From custom apps to mobile, cloud, and legacy modernization — Zhoosoft helps you move faster, better.
            </p>
            <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-700">
              <Link to="/services">View Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full"
          >
            <div
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto py-8 px-2 hide-scrollbar snap-x snap-mandatory"
            >
              {products.map((product, index) => (
                <div key={index} className="snap-center">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" style={{ opacity }} />
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" style={{ opacity }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
