import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ArrowRight, Zap, ShoppingCart, Cloud, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "Zfleet",
      description: "Fleet management system to optimize vehicle operations.",
      link: "/products/ride-booking-app",
      icon: Zap,
      image: "fleet management system interface with map and vehicle status"
    },
    {
      name: "ZCart",
      description: "E-commerce and delivery system.",
      link: "/products/ecommerce-platform",
      icon: ShoppingCart,
      image: "e-commerce website dashboard with sales analytics and product listings"
    },
    {
      name: "Zhost",
      description: "Hosting and cloud solutions.",
      link: "/products/hotel-management",
      icon: Cloud,
      image: "cloud hosting dashboard showing server status and resource usage"
    },
    {
      name: "ZTask",
      description: "Task and productivity management.",
      link: "/products/task-management",
      icon: CheckSquare,
      image: "task management application with a Kanban board view"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Our Products - Zhoosoft</title>
        <meta name="description" content="Explore Zhoosoft's suite of innovative software products including Zfleet, ZCart, Zhost, and ZTask. Discover solutions for fleet management, e-commerce, cloud hosting, and task management." />
      </Helmet>
      <div className="bg-gray-50/50">
        <section className="py-20 md:py-28 text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our Suite of <span className="text-[#006A67]">Products</span>
            </h1>
            <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Innovative solutions designed to streamline your business, boost productivity, and drive growth.
            </p>
          </motion.div>
        </section>

        <section className="py-16 md:py-24">
          <motion.div
            className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className="group relative flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 overflow-hidden"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-teal-100 rounded-full mr-4">
                      <product.icon className="w-6 h-6 text-[#006A67]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#006A67]">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 flex-grow mb-6">{product.description}</p>
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-[#006A67] hover:bg-teal-700 text-white font-semibold transition-transform duration-300 group-hover:scale-105"
                    >
                      <Link to={product.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-[#006A67] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Ready to Transform Your Business?
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Let's discuss how our products can be tailored to meet your unique challenges and goals.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-[#006A67] hover:bg-teal-700 text-white">
                        <Link to="/contact">
                            Get in Touch
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Products;