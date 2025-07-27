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

import { Car, Wrench, Cpu, Route, Zap, BarChart2, ShieldCheck, Users, Lightbulb, CheckCircle, Settings, GitMerge, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Automotive = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Automotive" }
  ];

  const industryOverview = {
    title: "Innovating the Future of Mobility",
    description: "The automotive industry is undergoing a profound transformation driven by connectivity, electrification, autonomous driving, and shared mobility (CASE). We provide cutting-edge software solutions that empower automotive manufacturers, suppliers, and service providers to innovate faster, enhance vehicle performance, improve customer experiences, and navigate this evolving landscape.",
    imageSrc: "https://images.unsplash.com/photo-1553531889-65d9c41c3a09?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Futuristic concept car design",
    Icon: Car
  };

  const challenges = [
    { icon: Cpu, title: "Connected Car & IoT Integration", description: "Managing complex connectivity, data from vehicle sensors, and ensuring secure V2X communication." },
    { icon: Zap, title: "Electric Vehicle (EV) Ecosystem", description: "Developing software for EV charging infrastructure, battery management systems, and EV-specific user experiences." },
    { icon: Eye, title: "Autonomous Driving Technologies", description: "Building and validating software for ADAS (Advanced Driver-Assistance Systems) and autonomous vehicles." },
    { icon: Users, title: "Evolving Customer Expectations", description: "Meeting demands for personalized in-car experiences, seamless digital services, and over-the-air (OTA) updates." },
    { icon: Settings, title: "Manufacturing & Supply Chain Optimization", description: "Improving efficiency in automotive manufacturing processes and managing complex global supply chains." },
    { icon: ShieldCheck, title: "Cybersecurity for Vehicles", description: "Protecting connected vehicles from cyber threats and ensuring data privacy." },
  ];

  const solutions = [
    { icon: Cpu, title: "Connected Car Solutions (IoT, V2X)", description: "Developing platforms for telematics, remote diagnostics, OTA updates, and vehicle-to-everything (V2X) communication." },
    { icon: Car, title: "In-Vehicle Infotainment (IVI) Software", description: "Creating rich, intuitive IVI systems with navigation, entertainment, and third-party app integration." },
    { icon: Route, title: "Telematics and Fleet Tracking Systems", description: "Advanced solutions for real-time fleet monitoring, driver behavior analysis, and logistics optimization." },
    { icon: Wrench, title: "Predictive Maintenance Solutions", description: "Using AI and sensor data to predict component failures, optimize maintenance schedules, and reduce downtime." },
    { icon: Zap, title: "Electric Vehicle (EV) Software Ecosystems", description: "Software for EV charging management, battery optimization, smart routing, and integration with energy grids." },
    { icon: Settings, title: "Manufacturing Process Automation", description: "Implementing smart factory solutions, robotics, and MES for automotive production lines." },
  ];
  
  const caseStudies = [
    { id: "1", title: "OEM Launches Next-Gen Connected Car Platform", client: "AutoDrive Corp", challenge: "Need for a scalable and secure platform for new connected vehicle services.", solution: "Developed a cloud-based connected car platform with OTA updates, remote diagnostics, and personalized IVI features.", result: "Enabled new revenue streams, improved customer engagement, and faster feature deployment.", imageSrc: "https://images.unsplash.com/photo-1617531038990-70d5c9b5c8cb?auto=format&fit=crop&w=400&q=60", tags: ["Automotive", "Connected Car", "IoT"] },
    { id: "2", title: "EV Startup Optimizes Battery Management", client: "ElectroWheels Inc.", challenge: "Maximizing EV battery life and performance through software.", solution: "Created an AI-powered Battery Management System (BMS) for real-time monitoring and adaptive charging strategies.", result: "Increased average battery lifespan by 15%, improved range prediction accuracy.", imageSrc: "https://images.unsplash.com/photo-1603984900006-56932747c80f?auto=format&fit=crop&w=400&q=60", tags: ["EV", "AI", "BMS"] },
  ];

  const techStack = [
    { name: "Embedded Systems (C/C++)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "text-blue-700" },
    { name: "Automotive Grade Linux / Android Automotive", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", color: "text-green-500" },
    { name: "IoT Platforms (AWS IoT, Azure IoT)", logo: "https://img.icons8.com/fluency/48/iot-sensor.png", color: "text-orange-500" },
    { name: "AI/ML for ADAS & Predictive Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-yellow-500" },
    { name: "Cloud Platforms for Connected Services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "text-orange-600" },
    { name: "Cybersecurity Frameworks (ISO 21434)", logo: "https://img.icons8.com/ios-filled/50/000000/cyber-security.png", color: "text-red-600" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Enhanced Vehicle Performance & Safety", description: "Improve vehicle functionality, enable advanced safety features, and optimize performance." },
    { icon: Lightbulb, title: "Accelerated Innovation & Development", description: "Speed up the development and deployment of new automotive features and services." },
    { icon: Users, title: "Improved Customer Experience", description: "Deliver personalized in-car experiences, seamless connectivity, and convenient digital services." },
    { icon: Settings, title: "Optimized Manufacturing & Supply Chain", description: "Increase efficiency, reduce costs, and improve quality in automotive production." },
    { icon: Zap, title: "New Revenue Streams", description: "Enable new business models through connected services, data monetization, and software-defined vehicles." },
    { icon: ShieldCheck, title: "Robust Vehicle Cybersecurity", description: "Protect vehicles and sensitive data from cyber threats and ensure compliance." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's expertise in IVI systems helped us deliver a truly next-generation experience to our customers.", name: "James L., Head of R&D", company: "FutureMobility Motors", rating: 5 },
    { quote: "The predictive maintenance solution they developed has significantly reduced our fleet's downtime. Highly recommended!", name: "Anna B., Fleet Manager", company: "LogiTrans Global", rating: 5 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Automotive Software Solutions"
        subtitle="Driving the future of mobility with innovative software for connected cars, electric vehicles, autonomous driving, and smart manufacturing."
        CtaIcon={Car}
        gradientColors="from-teal-600 to-cyan-700"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Key Challenges in the Automotive Industry" benefits={challenges} subtitle="Navigating a period of unprecedented technological disruption and transformation." />
      <ServiceListSection 
        title="Our Automotive Software Solutions"
        subtitle="Comprehensive software development services to help automotive players innovate and succeed."
        services={solutions}
        accentColor="teal"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Automotive Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our software solutions are shaping the future of mobility for our clients.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/automotive/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use in Automotive"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Automotive Solutions" benefits={benefits} subtitle="Partner with Zhoosoft to drive innovation in the automotive sector." />
      <WhyChooseUsService serviceName="Automotive Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Ready to Drive Automotive Innovation?"
        subtitle="Connect with Zhoosoft to explore how our software expertise can accelerate your journey in the evolving world of mobility."
      />
    </div>
  );
};

export default Automotive;