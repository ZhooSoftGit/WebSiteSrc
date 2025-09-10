
import React from "react";
import ServiceHero from "@/components/services/ServiceHero";
import ZigZagSection from "@/components/services/ZigZagSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import CaseStudyCard from "@/components/services/CaseStudyCard";
import TechStackSection from "@/components/services/TechStackSection";
import CallToActionSection from "@/components/services/CallToActionSection";
import ServiceListSection from "@/components/services/ServiceListSection";
import WhyChooseUsService from "@/components/services/WhyChooseUsService";
import ProcessStepsSection from "@/components/services/ProcessStepsSection";

import { Zap, CheckCircle, Settings, RefreshCw, Database, ShieldCheck, Users, Briefcase, Cpu, Layers, BarChart2, Cloud, Search, Target, Lightbulb, Shuffle, Link as LinkIcon, GitMerge, Lock } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DigitalTransformation = () => {
  const whatIsDT = {
    title: "What is Digital Transformation?",
    description: "Digital Transformation (DT) is more than just adopting new technologies. It's a fundamental rethinking of how an organization uses technology, people, and processes to fundamentally change business performance. It involves integrating digital technologies into all areas of a business, resulting in profound changes in how businesses operate and deliver value to customers.",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c7DA?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Team collaborating on digital transformation strategy",
    Icon: Search
  };

  const whyDTBenefits = [
    { icon: Layers, title: "Enhanced Efficiency", description: "Streamline operations and automate processes to reduce costs and improve productivity." },
    { icon: BarChart2, title: "Data-Driven Insights", description: "Leverage data analytics to make informed decisions and uncover new opportunities." },
    { icon: Users, title: "Improved Customer Experience", description: "Create seamless, personalized experiences that build loyalty and drive engagement." },
    { icon: Zap, title: "Increased Agility", description: "Adapt quickly to market changes and evolving customer demands with flexible digital solutions." },
    { icon: CheckCircle, title: "Competitive Advantage", description: "Innovate faster and stay ahead of the competition by embracing digital-first strategies." },
    { icon: Cpu, title: "New Revenue Streams", description: "Unlock new business models and revenue opportunities through digital products and services." },
  ];

  const dtStrategy = {
    title: "Crafting Your Digital Transformation Strategy",
    description: "A successful digital transformation starts with a clear strategy. We help you define your vision, assess your current digital maturity, identify key areas for transformation, and create a roadmap that aligns with your business objectives. Our strategic approach ensures that your DT initiatives deliver measurable results and sustainable growth.",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Strategic planning session for digital transformation",
    Icon: Target
  };
  
  const howToEnable = {
    title: "Enabling Digital Transformation Across Your Organization",
    description: "Digital transformation is a journey, not a destination. It requires a holistic approach that encompasses technology, culture, and processes. We guide you through this journey by focusing on key enablers such as leadership alignment, fostering a digital-first culture, empowering employees with new skills, and implementing agile methodologies to drive continuous improvement and innovation.",
    imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Diverse team working together on a digital project",
    Icon: Lightbulb
  };

  const dtServices = [
    { icon: Cloud, title: "IT Modernization", description: "Upgrade legacy systems, migrate to the cloud, and integrate APIs for a flexible and scalable IT infrastructure." },
    { icon: Settings, title: "Process Automation", description: "Implement RPA and workflow automation to streamline operations, reduce manual effort, and improve efficiency." },
    { icon: Database, title: "Data & AI Solutions", description: "Harness the power of data analytics, machine learning, and business intelligence to drive insights and innovation." },
    { icon: Layers, title: "Customer Experience Platforms", description: "Develop engaging web and mobile applications, and revamp UX/UI to create exceptional customer journeys." },
    { icon: GitMerge, title: "DevOps and Agile Transformation", description: "Adopt agile methodologies and DevOps practices to accelerate development cycles and improve software quality." },
    { icon: Lock, title: "Cybersecurity & Compliance", description: "Strengthen your security posture and ensure regulatory compliance in the digital landscape." },
    { icon: Briefcase, title: "Digital Strategy Consulting", description: "Expert guidance to define your digital vision, roadmap, and ensure successful transformation outcomes." },
  ];

  const caseStudies = [
    { id: "1", title: "Manufacturing Giant Achieves 20% Efficiency Gain", client: "Global Manufacturing Co.", challenge: "Outdated legacy systems and manual processes hindering production.", solution: "Implemented an IoT-enabled smart factory solution with RPA for process automation.", result: "Reduced operational costs by 15% and improved production output by 20%.", imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=60", tags: ["Manufacturing", "IoT", "RPA"] },
    { id: "2", title: "Retailer Boosts Online Sales by 40%", client: "Fashion Retail Chain", challenge: "Siloed customer data and inconsistent online experience.", solution: "Developed a unified e-commerce platform with personalized recommendations and revamped mobile app.", result: "Increased online conversion rates by 25% and customer retention by 30%.", imageSrc: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=400&q=60", tags: ["Retail", "E-commerce", "CX"] },
    { id: "3", title: "Healthcare Provider Enhances Patient Care", client: "Multi-Specialty Hospital", challenge: "Fragmented patient records and inefficient appointment scheduling.", solution: "Implemented an integrated EHR system with a patient portal and AI-powered diagnostics support.", result: "Improved patient data accessibility, reduced wait times by 30%, and enhanced diagnostic accuracy.", imageSrc: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=60", tags: ["Healthcare", "EHR", "AI"] },
  ];
  
  const industries = [
    { name: "Healthcare", icon: Briefcase, path:"/industries/life-sciences-healthcare", logo: "https://placehold.co/80x80/E0F2F7/1D5F6D?text=HC" },
    { name: "Finance", icon: RefreshCw, path:"/industries/financial-services", logo: "https://placehold.co/80x80/D1FAE5/065F46?text=FIN" },
    { name: "Retail", icon: Settings, path:"/industries/retail", logo: "https://placehold.co/80x80/FEF3C7/92400E?text=RET" },
    { name: "Manufacturing", icon: Database, path:"/industries/manufacturing", logo: "https://placehold.co/80x80/E0E7FF/3730A3?text=MAN" }
  ];

  const ourApproachSteps = [
    { icon: Search, title: "Discover & Assess", description: "We begin by understanding your business, goals, and current digital capabilities through comprehensive assessments and workshops." },
    { icon: Target, title: "Strategize & Plan", description: "Collaboratively, we develop a tailored digital transformation roadmap, prioritizing initiatives that deliver maximum impact." },
    { icon: Layers, title: "Design & Develop", description: "Our expert teams design and build robust, scalable digital solutions using agile methodologies and cutting-edge technologies." },
    { icon: Zap, title: "Implement & Integrate", description: "We ensure seamless implementation and integration of new solutions with your existing systems and processes." },
    { icon: GitMerge, title: "Optimize & Evolve", description: "Post-launch, we provide ongoing support, monitor performance, and help you continuously optimize and evolve your digital ecosystem." },
    { icon: CheckCircle, title: "Measure & Scale", description: "We track key metrics to measure success, identify areas for improvement, and help you scale your digital initiatives effectively." },
  ];
  
  const technologies = [
    { name: "Cloud Platforms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "text-orange-500" },
    { name: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg", color: "text-orange-600" },
    { name: "Big Data", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original-wordmark.svg", color: "text-red-500" },
    { name: "IoT", logo: "https://img.icons8.com/fluency/48/iot-sensor.png", color: "text-green-500" },
    { name: "RPA", logo: "https://img.icons8.com/color/48/automation.png", color: "text-blue-500" },
    { name: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", color: "text-blue-400" },
    { name: "Agile", logo: "https://img.icons8.com/officel/48/agile.png", color: "text-purple-500" },
    { name: "Cybersecurity", logo: "https://img.icons8.com/ios-filled/50/cyber-security.png", color: "text-red-600" },
  ];


  return (
    <div className="bg-white">
      <ServiceHero
        title="Digital Transformation Services"
        subtitle="Empowering your business to thrive in the digital age through innovative strategies, cutting-edge technologies, and seamless execution."
        CtaIcon={Zap}
        gradientColors="from-teal-600 to-cyan-700"
      />

      <ZigZagSection {...whatIsDT} />
      <BenefitsSection title="Why Digital Transformation is Important?" benefits={whyDTBenefits} />
      <ZigZagSection {...dtStrategy} reverse={true} />
      <ZigZagSection {...howToEnable} />
      
      <ServiceListSection 
        title="Our Digital Transformation Services"
        subtitle="We offer a comprehensive suite of services to guide you through every step of your digital transformation journey."
        services={dtServices}
        accentColor="teal"
      />
      
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories in Digital Transformation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how we've helped businesses like yours achieve remarkable results through digital transformation.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/services/digital-transformation/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <TechStackSection 
        title="Industries We Empower with Digital Transformation"
        subtitle="We tailor digital transformation strategies for diverse sectors, driving innovation and growth."
        technologies={industries.map(ind => ({name: ind.name, logo: ind.logo, path: ind.path}))}
        bgColor="bg-white"
      />

      <ProcessStepsSection 
        title="Our Digital Transformation Approach"
        subtitle="A structured yet flexible methodology to ensure your digital transformation is successful and sustainable."
        steps={ourApproachSteps}
        accentColor="teal"
      />
      
      <TechStackSection 
        title="Tools & Technologies We Use"
        subtitle="Leveraging a robust stack of modern technologies to build powerful and scalable digital solutions."
        technologies={technologies}
        bgColor="bg-gray-50"
      />

      <WhyChooseUsService serviceName="Digital Transformation" />

      <CallToActionSection 
        title="Ready to Embrace Digital Transformation?"
        subtitle="Partner with Zhoosoft to navigate your digital journey and unlock new possibilities for your business."
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default DigitalTransformation;
