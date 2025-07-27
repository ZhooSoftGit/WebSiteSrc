import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom App Development',
    description: 'Tailored software solutions built around your business goals — using modern Microsoft and open-source technologies for long-term scalability.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/3d58bd69e1104e94f8e83b7c4ae3a31f.png",
    path: '/services/custom-app-development',
  },
  {
    title: 'Cross-Platform Mobile Solutions',
    description: 'Build high-performance apps with .NET MAUI for Android, iOS, and more. We also handle smooth migrations from Xamarin to MAUI.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/f2f8a2ec885a3c588e3e6102d3d66015.png",
    path: '/services/cross-platform-mobile-solutions',
  },
  {
    title: 'Cloud Architecture & Deployment',
    description: 'Design and deploy secure, scalable cloud applications on Azure or AWS — built for performance, availability, and future growth.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/86f289b5476a30bfe85263a463eac26e.png",
    path: '/services/cloud-architecture-deployment',
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic guidance to modernize your systems, control technical debt, and align IT investments with real business value.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/43a9511fd2cb9936e6152d0c1f3304c1.png",
    path: '/services/technology-consulting',
  },
  {
    title: 'Legacy System Support',
    description: 'Support and extend the life of older platforms like ASP.NET, WinForms, and WPF — with performance tuning, bug fixes, and feature additions.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/23e7942e1daaeac9e3f251c8173a3a84.png",
    path: '/services/legacy-system-support',
  },
  {
    title: 'Application Modernization & Migration',
    description: 'Rebuild or migrate outdated apps to .NET 8, MAUI, or the cloud — for better speed, security, and adaptability to new business demands.',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/7fe4b9f4f222dbd13eac20d7c2a99da6.png",
    path: '/services/application-modernization-migration',
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
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
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

const ServicesOverview = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transforming Ideas into Scalable Digital Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Smart, future-ready technology services to accelerate your business growth and innovation.
          </p>
        </motion.div>

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
  );
};

export default ServicesOverview;