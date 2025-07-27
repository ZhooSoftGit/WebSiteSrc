import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, Goal, Users, HeartHandshake as Handshake, Rocket, ChevronRight } from 'lucide-react';

const aboutSections = [
  {
    icon: <Building className="h-12 w-12 text-teal-500" />,
    title: "Who We Are",
    content: "Zhoosoft Private Limited is a growing software company founded by experienced developers with over 13 years of hands-on expertise in the Microsoft .NET ecosystem. We bring this deep technical knowledge into building practical, scalable, and modern software solutions."
  },
  {
    icon: <Goal className="h-12 w-12 text-teal-500" />,
    title: "Our Mission",
    content: "To help businesses transition smoothly into the modern digital world — whether through building new solutions or modernizing legacy systems — with clean code, practical design, and long-term support."
  },
  {
    icon: <Users className="h-12 w-12 text-teal-500" />,
    title: "Our Team",
    content: "Zhoosoft is built by passionate professionals with deep expertise in software development, architecture, and digital transformation. Our team brings a shared commitment to quality, innovation, and continuous learning — and we’re growing with every new challenge we take on."
  },
  {
    icon: <Handshake className="h-12 w-12 text-teal-500" />,
    title: "Working with Zhoosoft",
    content: "We understand the real-world challenges of maintaining and modernizing software. Whether you're dealing with a legacy application, planning a MAUI migration, or building something new in .NET — we’re here to make the journey easier. With hands-on experience, clean coding standards, and a practical mindset, we offer solutions that just work — and evolve with your business."
  },
  {
    icon: <Rocket className="h-12 w-12 text-teal-500" />,
    title: "Looking Ahead",
    content: "We're actively building a suite of flagship products in ride booking, e-commerce, hospitality, and task management. Each product is designed to evolve with real-world business needs."
  }
];

const About = () => {
  const sectionVariants = (isLeft) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>About Zhoosoft - Our Story, Mission, and Team</title>
        <meta name="description" content="Learn about Zhoosoft Private Limited, our mission to deliver scalable software solutions, our expert team, and our approach to digital transformation." />
      </Helmet>

      <motion.section
        className="py-20 md:py-28 bg-gradient-to-br from-teal-600 to-cyan-700 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Zhoosoft
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building the future of software, one solution at a time.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          {aboutSections.map((section, index) => {
            const isLeftAligned = index % 2 === 0;
            return (
              <motion.div
                key={section.title}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isLeftAligned ? '' : 'md:flex-row-reverse'}`}
                variants={sectionVariants(isLeftAligned)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="p-6 bg-white rounded-full shadow-lg border border-gray-100">
                    {section.icon}
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">{section.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 md:p-12 text-center shadow-lg border border-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">Have a Project in Mind?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Let's talk about how we can help you achieve your business goals. We're ready to listen and build something great together.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;