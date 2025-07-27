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

import { Fuel, Zap, Settings, BarChart2, ShieldCheck, Users, Lightbulb, CheckCircle, Cpu, Leaf, Cloud, Wind, Sun } from "lucide-react";
import { motion } from "framer-motion";

const EnergyUtilities = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Energy & Utilities" }
  ];

  const industryOverview = {
    title: "Powering the Future of Energy & Utilities",
    description: "The Energy & Utilities sector is at the forefront of a global shift towards sustainability, efficiency, and smart infrastructure. We provide advanced software solutions that help energy companies and utility providers optimize operations, manage resources effectively, integrate renewable energy sources, and enhance customer engagement in this dynamic landscape.",
    imageSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Wind turbines in a field at sunset, symbolizing renewable energy",
    Icon: Fuel
  };

  const challenges = [
    { icon: Leaf, title: "Renewable Energy Integration", description: "Managing the intermittency and integration of diverse renewable energy sources like solar and wind." },
    { icon: Zap, title: "Aging Infrastructure", description: "Modernizing legacy systems and infrastructure to improve reliability and efficiency." },
    { icon: BarChart2, title: "Data Management & Analytics", description: "Handling vast amounts of data from smart meters and sensors to derive actionable insights." },
    { icon: ShieldCheck, title: "Cybersecurity Threats", description: "Protecting critical infrastructure from evolving cyber threats and ensuring grid stability." },
    { icon: Users, title: "Customer Engagement", description: "Providing customers with better tools for energy management, billing transparency, and self-service." },
    { icon: Settings, title: "Regulatory Compliance", description: "Adhering to complex environmental regulations and reporting requirements." },
  ];

  const solutions = [
    { icon: Zap, title: "Smart Grid & Meter Data Management", description: "Solutions for real-time monitoring, control, and analysis of smart grid operations and meter data (AMI)." },
    { icon: Sun, title: "Renewable Energy Monitoring & Analytics", description: "Platforms for tracking performance, forecasting generation, and optimizing renewable energy assets." },
    { icon: Users, title: "Utility Billing & Customer Self-Service Portals", description: "Modern billing systems and customer portals for improved transparency and engagement." },
    { icon: Cpu, title: "SCADA and IoT Integration", description: "Integrating SCADA systems and IoT devices for enhanced monitoring, control, and automation of utility assets." },
    { icon: Settings, title: "Asset Performance Management (APM)", description: "APM solutions to optimize the performance, reliability, and lifespan of critical infrastructure." },
    { icon: Wind, title: "Predictive Maintenance for Infrastructure", description: "AI-driven predictive maintenance to anticipate equipment failures, reduce downtime, and optimize maintenance schedules." },
  ];
  
  const caseStudies = [
    { id: "1", title: "Utility Co. Optimizes Grid with Smart Meters", client: "PowerUp Utilities", challenge: "Lack of real-time data and inefficient outage management.", solution: "Deployed an Advanced Metering Infrastructure (AMI) with a Meter Data Management System (MDMS).", result: "Improved outage detection by 40%, reduced meter reading costs by 60%.", imageSrc: "https://images.unsplash.com/photo-1620359043307-e19724f5e759?auto=format&fit=crop&w=400&q=60", tags: ["Utilities", "Smart Grid", "MDMS"] },
    { id: "2", title: "Renewable Energy Firm Boosts Solar Farm Efficiency", client: "SolarGen Inc.", challenge: "Suboptimal performance of solar assets due to lack of predictive analytics.", solution: "Developed an AI-powered platform for solar generation forecasting and predictive maintenance of panels.", result: "Increased energy output by 8%, reduced maintenance costs by 12%.", imageSrc: "https://images.unsplash.com/photo-1508515053963-70c7caba3050?auto=format&fit=crop&w=400&q=60", tags: ["Renewable Energy", "AI", "Solar"] },
  ];

  const techStack = [
    { name: "IoT Platforms (Azure IoT, AWS IoT)", logo: "https://img.icons8.com/fluency/48/iot-sensor.png", color: "text-blue-500" },
    { name: "SCADA Systems", logo: "https://img.icons8.com/ios-filled/50/000000/control-panel.png", color: "text-gray-700" },
    { name: "Big Data (Hadoop, Spark)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg", color: "text-orange-500" },
    { name: "AI/ML for Predictive Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-yellow-500" },
    { name: "Cloud Platforms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "text-sky-500" },
    { name: "Cybersecurity Solutions", logo: "https://img.icons8.com/ios-filled/50/000000/cyber-security.png", color: "text-red-600" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Enhanced Grid Reliability", description: "Improve stability and reduce outages with smart monitoring and predictive capabilities." },
    { icon: Lightbulb, title: "Optimized Resource Management", description: "Efficiently manage energy generation, distribution, and consumption." },
    { icon: Leaf, title: "Support for Sustainability Goals", description: "Facilitate the integration of renewable energy and promote energy efficiency." },
    { icon: Users, title: "Improved Customer Satisfaction", description: "Offer better services, transparent billing, and tools for energy management." },
    { icon: Settings, title: "Reduced Operational Costs", description: "Automate processes, optimize maintenance, and improve asset performance." },
    { icon: ShieldCheck, title: "Strengthened Security & Compliance", description: "Protect critical infrastructure and meet regulatory requirements." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's smart grid solution has given us unprecedented visibility and control over our distribution network.", name: "David K., Operations Director", company: "Regional Electric Coop", rating: 5 },
    { quote: "The APM platform they developed helps us proactively manage our assets, saving us significant costs.", name: "Linda M., Asset Manager", company: "FutureEnergy Corp", rating: 4 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Energy & Utilities Solutions"
        subtitle="Empowering a sustainable and efficient energy future with smart software, IoT integration, and advanced analytics."
        CtaIcon={Fuel}
        gradientColors="from-teal-600 to-cyan-700"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Challenges in the Energy & Utilities Sector" benefits={challenges} subtitle="Navigating a complex transition towards a smarter, cleaner energy landscape." />
      <ServiceListSection 
        title="Our Solutions for Energy & Utilities"
        subtitle="Innovative technology offerings to help you manage resources, optimize operations, and embrace sustainability."
        services={solutions}
        accentColor="teal"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Energy & Utilities Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how we've helped energy and utility companies modernize and thrive.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/energy-utilities/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use in Energy & Utilities"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Energy & Utilities Solutions" benefits={benefits} subtitle="Partner with Zhoosoft for a smarter, more sustainable energy future." />
      <WhyChooseUsService serviceName="Energy & Utilities Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Modernize Your Energy & Utility Operations?"
        subtitle="Connect with Zhoosoft to explore how our digital solutions can power your success in the evolving energy landscape."
      />
    </div>
  );
};

export default EnergyUtilities;