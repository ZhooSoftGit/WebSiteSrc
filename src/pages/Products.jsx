import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const products = [
    {
      id: 1,
      name: "ZhooERP",
      description: "Enterprise Resource Planning solution designed for mid-sized businesses. Streamline operations, manage resources, and gain insights with our comprehensive ERP system.",
      features: ["Financial Management", "Inventory Control", "HR & Payroll", "CRM Integration", "Business Intelligence"],
      image: "zhoo-erp"
    },
    {
      id: 2,
      name: "ZhooCRM",
      description: "Customer Relationship Management platform that helps businesses build stronger customer relationships. Track interactions, manage sales pipelines, and improve customer satisfaction.",
      features: ["Contact Management", "Sales Pipeline", "Marketing Automation", "Customer Support", "Analytics Dashboard"],
      image: "zhoo-crm"
    },
    {
      id: 3,
      name: "ZhooAnalytics",
      description: "Advanced analytics platform that transforms your data into actionable insights. Make data-driven decisions with powerful visualization and reporting tools.",
      features: ["Real-time Analytics", "Custom Dashboards", "Predictive Analysis", "Data Integration", "Automated Reporting"],
      image: "zhoo-analytics"
    },
    {
      id: 4,
      name: "ZhooSecure",
      description: "Comprehensive cybersecurity solution to protect your business from evolving threats. Ensure data security and compliance with our advanced security platform.",
      features: ["Threat Detection", "Data Encryption", "Access Control", "Compliance Management", "Security Auditing"],
      image: "zhoo-secure"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-teal-100 mb-8">
              Discover our suite of innovative software products designed to solve complex business challenges and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                variants={fadeIn}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg blur-lg opacity-75"></div>
                    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                      <img  alt={`${product.name} product interface`} className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                      Request Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our products
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img  alt="Client testimonial avatar" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1627513182299-4bc6693d2cae" />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CTO, TechInnovate</p>
                </div>
              </div>
              <p className="text-gray-700">
                "ZhooERP has completely transformed how we manage our operations. The system is intuitive, powerful, and has helped us reduce operational costs by 30%."
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img  alt="Client testimonial avatar" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1603359395445-92944cb9526e" />
                </div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-500">CEO, GrowthWave</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The insights we've gained from ZhooAnalytics have been game-changing for our business strategy. We can now make data-driven decisions with confidence."
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img  alt="Client testimonial avatar" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" />
                </div>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Marketing Director, Nexus</p>
                </div>
              </div>
              <p className="text-gray-700">
                "ZhooCRM has revolutionized our customer engagement. The automation features have saved our team countless hours and improved our customer satisfaction scores."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Explore our products and discover how they can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;