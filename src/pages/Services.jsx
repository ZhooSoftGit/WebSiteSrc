
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Mic, Cpu, Replace } from 'lucide-react';
import { Helmet } from "react-helmet";
import CallToActionSection from "@/components/services/CallToActionSection";
import ServiceHero from "@/components/services/ServiceHero";

const services = [
  {
    title: 'Custom App Development',
    description: 'Tailored software solutions built around your business goals — using modern Microsoft and open-source technologies for long-term scalability. We design and build applications from scratch to fit your unique processes.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/3d58bd69e1104e94f8e83b7c4ae3a31f.png",
    path: '/services/custom-app-development',
    icon: Code
  },
  {
    title: 'Cross-Platform Mobile Solutions',
    description: 'Build high-performance apps with .NET MAUI for Android, iOS, and more. We also handle smooth migrations from Xamarin to MAUI, ensuring a seamless user experience across all devices.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/f2f8a2ec885a3c588e3e6102d3d66015.png",
    path: '/services/cross-platform-mobile-solutions',
    icon: Smartphone
  },
  {
    title: 'Cloud Architecture & Deployment',
    description: 'Design and deploy secure, scalable cloud applications on Azure or AWS — built for performance, availability, and future growth. We help you leverage the full power of the cloud.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/86f289b5476a30bfe85263a463eac26e.png",
    path: '/services/cloud-architecture-deployment',
    icon: Cloud
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic guidance to modernize your systems, control technical debt, and align IT investments with real business value. We act as your trusted advisor to navigate complex technology landscapes.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/43a9511fd2cb9936e6152d0c1f3304c1.png",
    path: '/services/technology-consulting',
    icon: Mic
  },
  {
    title: 'Legacy System Support',
    description: 'Support and extend the life of older platforms like ASP.NET, WinForms, and WPF — with performance tuning, bug fixes, and feature additions. We keep your critical systems running smoothly.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/23e7942e1daaeac9e3f251c8173a3a84.png",
    path: '/services/legacy-system-support',
    icon: Cpu
  },
  {
    title: 'Application Modernization & Migration',
    description: 'Rebuild or migrate outdated apps to .NET 8, MAUI, or the cloud — for better speed, security, and adaptability to new business demands. Transform your legacy apps into modern assets.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/7fe4b9f4f222dbd13eac20d7c2a99da6.png",
    path: '/services/application-modernization-migration',
    icon: Replace
  },
];

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group card-hover"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={service.title}
          src={service.image} />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4 p-3 bg-teal-500/80 text-white rounded-full">
          <service.icon className="h-6 w-6" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <Button asChild variant="link" className="text-teal-600 font-semibold p-0 self-start hover:no-underline">
          <Link to={service.path}>
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};


const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Our Services - Zhoosoft</title>
        <meta name="description" content="Explore Zhoosoft's comprehensive technology services, from custom app development and mobile solutions to cloud architecture and legacy system modernization." />
      </Helmet>
      
      <ServiceHero 
        title="Our Services"
        subtitle="We provide comprehensive technology solutions to help your business thrive in the digital era. Our expert team delivers innovative services tailored to your specific needs."
        CtaIcon={Code}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Get Started?"
        subtitle="Contact us today to discuss how our services can help your business grow and succeed."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        secondaryButtonLink={null}
      />
    </div>
  );
};

export default Services;
