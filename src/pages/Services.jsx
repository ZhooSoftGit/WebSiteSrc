import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "We build tailored software solutions that address your specific business challenges and requirements.",
      image: "custom-software-development",
      features: [
        "Requirements analysis and planning",
        "Custom application development",
        "Legacy system modernization",
        "Integration with existing systems",
        "Quality assurance and testing"
      ]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Create engaging mobile experiences for your customers with our native and cross-platform app development services.",
      image: "mobile-app-development",
      features: [
        "iOS and Android native apps",
        "Cross-platform development",
        "UI/UX design for mobile",
        "App testing and optimization",
        "App store submission support"
      ]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing to enhance scalability, security, and efficiency of your IT infrastructure.",
      image: "cloud-solutions",
      features: [
        "Cloud migration strategies",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Cloud security and compliance"
      ]
    },
    {
      id: 4,
      title: "IT Consulting",
      description: "Get expert guidance on technology strategy, digital transformation, and IT infrastructure optimization.",
      image: "it-consulting",
      features: [
        "Technology assessment and roadmapping",
        "Digital transformation strategy",
        "IT infrastructure optimization",
        "Technology vendor selection",
        "IT governance and compliance"
      ]
    },
    {
      id: 5,
      title: "Web Development",
      description: "Create powerful, responsive websites and web applications that deliver exceptional user experiences.",
      image: "web-development",
      features: [
        "Responsive website development",
        "Progressive Web Apps (PWAs)",
        "E-commerce solutions",
        "Content Management Systems",
        "Web application development"
      ]
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence and machine learning to gain insights and automate processes.",
      image: "ai-machine-learning",
      features: [
        "Predictive analytics",
        "Natural Language Processing",
        "Computer Vision solutions",
        "Machine Learning models",
        "AI integration with existing systems"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              We provide comprehensive technology solutions to help your business thrive in the digital era. Our expert team delivers innovative services tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={fadeIn}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-lg opacity-75"></div>
                    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                      <img  alt={`${service.title} service illustration`} className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how our services can help your business grow and succeed.
            </p>
            <Button size="lg">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;