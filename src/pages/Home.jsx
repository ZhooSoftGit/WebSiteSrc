import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight, Briefcase, Users, Award, Zap, ShoppingBag, Settings, Plane, Banknote, HeartHandshake, Cpu, Fuel, Car, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
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

  const services = [
    { title: "Software Development", description: "Custom software solutions tailored to your business needs", icon: <Settings className="h-8 w-8"/>, gradient: "from-blue-500 to-indigo-600", path: "/services/custom-software-solutions" },
    { title: "Mobile Applications", description: "Native and cross-platform mobile apps for iOS and Android", icon: <Zap className="h-8 w-8"/>, gradient: "from-purple-500 to-pink-600", path: "/services/mobile-application-development"  },
    { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure and services", icon: <Zap className="h-8 w-8"/>, gradient: "from-cyan-500 to-blue-600", path: "/services/cloud-solutions" },
    { title: "IT Consulting", description: "Expert guidance to optimize your technology investments", icon: <Briefcase className="h-8 w-8"/>, gradient: "from-amber-500 to-orange-600", path: "/services/it-consulting" }
  ];

  const products = [
    { name: "Ride Booking App", icon: <Car className="h-10 w-10 text-blue-500" />, description: "On-demand transport solution.", path: "/products/ride-booking-app" },
    { name: "E-commerce Platform", icon: <ShoppingBag className="h-10 w-10 text-green-500" />, description: "Build your online store.", path: "/products/ecommerce-platform" },
    { name: "Hotel Management", icon: <Zap className="h-10 w-10 text-purple-500" />, description: "Streamline hospitality.", path: "/products/hotel-management" },
    { name: "Task Management", icon: <CheckCircle className="h-10 w-10 text-red-500" />, description: "Organize team projects.", path: "/products/task-management" },
  ];

  const industries = [
    { name: "Travel & Logistics", icon: <Plane className="h-8 w-8" />, path: "/industries/travel-logistics" },
    { name: "Banking & Finance", icon: <Banknote className="h-8 w-8" />, path: "/industries/financial-services" },
    { name: "Healthcare", icon: <HeartHandshake className="h-8 w-8" />, path: "/industries/life-sciences-healthcare" },
    { name: "Automation", icon: <Cpu className="h-8 w-8" />, path: "/industries/industry-automation" },
    { name: "Energy & Utilities", icon: <Fuel className="h-8 w-8" />, path: "/industries/energy-utilities" },
    { name: "Gaming & Entertainment", icon: <Gamepad2 className="h-8 w-8" />, path: "/industries/gaming-entertainment" },
  ];

  const achievements = [
    { number: "12+", text: "Years of Experience", icon: <Award className="h-10 w-10 text-yellow-400"/> },
    { number: "250+", text: "Projects Delivered", icon: <CheckCircle className="h-10 w-10 text-green-400"/> },
    { number: "100+", text: "Satisfied Clients", icon: <Users className="h-10 w-10 text-blue-400"/> },
    { number: "15+", text: "Countries Served", icon: <Zap className="h-10 w-10 text-purple-400"/> },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Innovative Technology Solutions for Your Business
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
                Transforming ideas into powerful digital experiences. We help businesses grow through technology innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                   <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-xl opacity-60 animate-pulse-slow"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-2xl overflow-hidden ring-1 ring-white/20">
                  <img  alt="Modern office with tech professionals working on computers" className="w-full h-auto rounded-md" src="https://images.unsplash.com/photo-1542837336-d14bdf342f9b" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital era.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.div 
                key={service.title}
                variants={fadeIn}
                className={`service-card bg-gradient-to-br ${service.gradient} p-6 rounded-xl text-white shadow-lg card-hover flex flex-col`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-4 text-blue-100 flex-grow">{service.description}</p>
                <Link to={service.path} className="inline-flex items-center text-white hover:underline mt-auto">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering specialized technology solutions across a diverse range of sectors.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-lg card-hover text-center flex flex-col items-center justify-center aspect-square"
              >
                <Link to={industry.path} className="flex flex-col items-center justify-center h-full">
                  <div className="text-blue-600 mb-3">{industry.icon}</div>
                  <h3 className="text-md font-semibold text-gray-700">{industry.name}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers that speak of our dedication, expertise, and client trust.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.text}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center flex flex-col items-center"
              >
                <div className="mb-4">{achievement.icon}</div>
                <p className="text-4xl font-bold text-white mb-2">{achievement.number}</p>
                <p className="text-lg text-gray-300">{achievement.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-100 p-8 md:p-12 rounded-xl shadow-lg">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
               <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-lg opacity-50"></div>
                 <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                   <img  alt="Team of software developers in a meeting" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1556636530-6b7482d80e3d" />
                 </div>
               </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Zhoosoft</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to transform businesses through technology, Zhoosoft has been delivering innovative solutions since 2010. Our team of experts combines technical excellence with industry knowledge to create solutions that drive growth.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><p className="text-gray-700">Expert team with diverse technology skills</p></div>
                <div className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><p className="text-gray-700">Proven track record of successful projects</p></div>
                <div className="flex items-start"><CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><p className="text-gray-700">Client-focused approach to ensure satisfaction</p></div>
              </div>
              <Link to="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;