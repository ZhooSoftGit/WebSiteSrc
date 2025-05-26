
import React from "react";
import IndustryHero from "@/components/industries/IndustryHero";
import ZigZagSection from "@/components/services/ZigZagSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import CaseStudyCard from "@/components/services/CaseStudyCard";
import TechStackSection from "@/components/services/TechStackSection";
import CallToActionSection from "@/components/services/CallToActionSection";
import ServiceListSection from "@/components/services/ServiceListSection";
import WhyChooseUsService from "@/components/services/WhyChooseUsService";
import TestimonialSection from "@/components/industries/TestimonialSection";

import { Plane, MapPin, Truck, Warehouse, Ticket, Settings, Cpu, BarChart2, ShieldCheck, Users, Lightbulb, CheckCircle, Package, Route, Ship, Zap } from "lucide-react";
import { motion } from "framer-motion";

const TravelLogistics = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Travel & Logistics" }
  ];

  const industryOverview = {
    title: "Digitizing Travel & Logistics Operations",
    description: "The Travel & Logistics industry is undergoing a massive transformation, driven by technology. From optimizing complex supply chains and managing global fleets to enhancing passenger experiences and ensuring timely deliveries, digital solutions are key. We help businesses in this sector leverage technology to improve efficiency, reduce costs, and gain a competitive edge.",
    imageSrc: "https://images.unsplash.com/photo-1578574577315-3f16ce767452?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Global logistics network visualization",
    Icon: Plane
  };

  const challenges = [
    { icon: Route, title: "Route Optimization", description: "Inefficient routing leading to increased fuel costs and delivery times." },
    { icon: Package, title: "Inventory Management", description: "Lack of real-time visibility into inventory levels and warehouse operations." },
    { icon: Ship, title: "Supply Chain Complexity", description: "Managing intricate global supply chains with multiple stakeholders and potential disruptions." },
    { icon: Users, title: "Customer Expectations", description: "Meeting demands for real-time tracking, personalized services, and seamless booking experiences." },
    { icon: BarChart2, title: "Data Silos", description: "Fragmented data across different systems hindering effective decision-making and forecasting." },
    { icon: ShieldCheck, title: "Regulatory Compliance", description: "Navigating complex customs, safety, and environmental regulations." },
  ];

  const solutions = [
    { icon: MapPin, title: "Route Optimization & GPS Tracking", description: "AI-powered solutions for dynamic route planning and real-time vehicle tracking to minimize delays and costs." },
    { icon: Truck, title: "Transportation Management Systems (TMS)", description: "Comprehensive TMS to manage all aspects of transportation, from planning and execution to freight audit." },
    { icon: Warehouse, title: "Warehouse & Inventory Management (WMS)", description: "Smart WMS for optimized storage, real-time inventory tracking, and efficient order fulfillment." },
    { icon: Settings, title: "Fleet Telematics & Predictive Maintenance", description: "IoT solutions for fleet monitoring, driver behavior analysis, and predictive maintenance to reduce downtime." },
    { icon: Ticket, title: "Mobile Booking & Ticketing Systems", description: "User-friendly mobile apps for seamless travel booking, ticketing, and passenger information." },
    { icon: Cpu, title: "AI for Demand Forecasting & Planning", description: "Machine learning models to predict demand, optimize resource allocation, and improve planning accuracy." },
  ];

  const caseStudies = [
    { id: "1", title: "Logistics Co. Reduces Fuel Costs by 15%", client: "SwiftDeliveries Inc.", challenge: "High operational costs due to inefficient routing.", solution: "Implemented an AI-driven route optimization and fleet management system.", result: "15% reduction in fuel consumption, 20% improvement in on-time deliveries.", imageSrc: "https://images.unsplash.com/photo-1586435988094-b75880253197?auto=format&fit=crop&w=400&q=60", tags: ["Logistics", "AI", "Route Optimization"] },
    { id: "2", title: "Travel Agency Enhances Booking Experience", client: "ExploreMore Travels", challenge: "Outdated booking portal and poor mobile experience.", solution: "Developed a new responsive web portal and mobile apps with personalized travel recommendations.", result: "30% increase in online bookings, improved customer satisfaction scores.", imageSrc: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=400&q=60", tags: ["Travel", "Mobile App", "UX"] },
  ];
  
  const techStack = [
    { name: "IoT Platforms", logo: "https://img.icons8.com/fluency/48/iot-sensor.png", color: "text-green-500" },
    { name: "AI & ML (Python, TensorFlow)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-blue-500" },
    { name: "GIS & Mapping APIs", logo: "https://img.icons8.com/color/48/google-maps-new.png", color: "text-red-500" },
    { name: "Cloud (AWS, Azure)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "text-orange-500" },
    { name: "Mobile (React Native, Flutter)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-sky-500" },
    { name: "ERP/CRM Integration", logo: "https://img.icons8.com/fluency/48/data-transfer.png", color: "text-purple-500" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Improved Operational Efficiency", description: "Streamline processes, automate tasks, and optimize resource utilization." },
    { icon: BarChart2, title: "Enhanced Visibility & Control", description: "Gain real-time insights into your operations, from fleet movement to inventory levels." },
    { icon: Users, title: "Better Customer Experience", description: "Provide seamless booking, real-time tracking, and personalized services." },
    { icon: Lightbulb, title: "Data-Driven Decision Making", description: "Leverage analytics and AI to make informed strategic and operational decisions." },
    { icon: ShieldCheck, title: "Reduced Costs", description: "Optimize routes, manage assets efficiently, and reduce manual effort to lower operational expenses." },
    { icon: Zap, title: "Increased Agility & Responsiveness", description: "Adapt quickly to changing market demands and supply chain disruptions." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's TMS solution revolutionized our logistics. We've seen significant cost savings and improved delivery times.", name: "John D., CEO", company: "Global Freight Solutions", rating: 5 },
    { quote: "The mobile booking app developed by Zhoosoft has been a game-changer for our travel agency. Our customers love it!", name: "Sarah L., Owner", company: "Adventure Tours Co.", rating: 5 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Travel & Logistics Solutions"
        subtitle="Driving efficiency and innovation in transportation, fleet management, and global logistics with cutting-edge digital solutions."
        CtaIcon={Plane}
        gradientColors="from-cyan-600 to-blue-700"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Challenges in Travel & Logistics" benefits={challenges} subtitle="Navigating the complexities of a dynamic and demanding industry." />
      <ServiceListSection 
        title="Our Solutions for Travel & Logistics"
        subtitle="Tailored technology offerings to address the unique needs of the travel and logistics sector."
        services={solutions}
        accentColor="blue"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Travel & Logistics Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real-world examples of how we've helped travel and logistics companies succeed.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/travel-logistics/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use in Travel & Logistics"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Travel & Logistics Solutions" benefits={benefits} subtitle="Unlock significant advantages by partnering with Zhoosoft." />
      <WhyChooseUsService serviceName="Travel & Logistics Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Optimize Your Travel & Logistics Operations?"
        subtitle="Let's discuss how Zhoosoft's expertise can transform your business in the travel and logistics sector."
      />
    </div>
  );
};

export default TravelLogistics;
