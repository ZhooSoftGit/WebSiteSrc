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

import { Code, Puzzle, Settings, Zap, BarChart2, Lightbulb, Users, ShieldCheck, Target, Search, GitMerge, CheckCircle, Layers, Cloud, Database, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const CustomSoftwareSolutions = () => {
  const whatAreCustomSolutions = {
    title: "What are Custom Software Solutions?",
    description: "Custom software solutions are applications specifically designed and developed to meet the unique requirements and processes of a particular organization. Unlike off-the-shelf software, custom solutions are tailor-made, providing a perfect fit for your business needs, enhancing operational efficiency, and offering a distinct competitive advantage.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Team discussing custom software development plans",
    Icon: Puzzle
  };

  const whyGoCustomBenefits = [
    { icon: Target, title: "Tailored to Your Needs", description: "Software built precisely for your workflows, eliminating unnecessary features and complexities." },
    { icon: Settings, title: "Enhanced Efficiency", description: "Streamline operations and automate specific tasks, boosting productivity and reducing manual effort." },
    { icon: Zap, title: "Competitive Advantage", description: "Gain unique capabilities that differentiate your business from competitors using generic software." },
    { icon: Layers, title: "Scalability & Flexibility", description: "Custom software can grow and adapt with your business, accommodating future changes and expansions." },
    { icon: ShieldCheck, title: "Improved Security", description: "Tailored security measures can be integrated to address specific threats and compliance requirements." },
    { icon: LinkIcon, title: "Seamless Integration", description: "Easily integrate with your existing systems and third-party applications for a unified IT ecosystem." },
  ];

  const customSoftwareServices = [
    { icon: Code, title: "Enterprise Software Development", description: "Building large-scale, complex applications to manage core business operations and data." },
    { icon: Layers, title: "Web Application Development", description: "Developing robust, scalable, and secure web-based applications, portals, and platforms." },
    { icon: Cloud, title: "Cloud-Native Application Development", description: "Designing and building applications specifically for cloud environments, leveraging microservices and serverless architectures." },
    { icon: Database, title: "Database Design & Development", description: "Creating efficient, secure, and scalable database solutions to manage your critical business data." },
    { icon: LinkIcon, title: "API Development & Integration", description: "Building and integrating APIs to connect disparate systems and enable seamless data exchange." },
    { icon: Settings, title: "Legacy System Modernization", description: "Updating or re-engineering outdated software to improve performance, security, and maintainability." },
    { icon: ShieldCheck, title: "Software Maintenance & Support", description: "Providing ongoing support, updates, and enhancements to ensure your custom software remains optimal." },
  ];
  
  const developmentProcess = [
    { icon: Search, title: "Discovery & Analysis", description: "In-depth understanding of your business requirements, goals, and existing processes." },
    { icon: Lightbulb, title: "Planning & Prototyping", description: "Strategic planning, feature prioritization, and creating interactive prototypes for early feedback." },
    { icon: Code, title: "Design & Architecture", description: "Designing intuitive user interfaces (UI/UX) and robust system architecture." },
    { icon: GitMerge, title: "Agile Development", description: "Iterative development sprints, ensuring flexibility, transparency, and regular progress updates." },
    { icon: CheckCircle, title: "Quality Assurance & Testing", description: "Comprehensive testing methodologies to ensure a high-quality, bug-free product." },
    { icon: Zap, title: "Deployment & Integration", description: "Seamless deployment to your chosen environment and integration with existing systems." },
    { icon: Settings, title: "Support & Evolution", description: "Post-launch support, maintenance, and planning for future enhancements and scalability." },
  ];

  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", color: "text-blue-500" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", color: "text-green-600" },
    { name: "Python (Django/Flask)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", color: "text-yellow-500" },
    { name: "Java (Spring)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg", color: "text-red-500" },
    { name: ".NET Core", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg", color: "text-purple-600" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", color: "text-blue-700" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", color: "text-green-500" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", color: "text-blue-400" },
  ];
  
  const caseStudies = [
    { id: "1", title: "Logistics Firm Streamlines Operations", client: "Global Transporters Inc.", challenge: "Inefficient manual processes for shipment tracking and fleet management.", solution: "Developed a custom logistics management platform with real-time tracking and automated reporting.", result: "Reduced operational overhead by 22% and improved delivery accuracy by 15%.", imageSrc: "https://images.unsplash.com/photo-1577563908411-579274201399?auto=format&fit=crop&w=400&q=60", tags: ["Logistics", "Automation", "Platform Dev"] },
    { id: "2", title: "Fintech Startup Launches Innovative Platform", client: "MoneyWise Solutions", challenge: "Need for a secure and scalable platform for a new financial product.", solution: "Built a custom cloud-native fintech application with robust security and compliance features.", result: "Successfully launched product, onboarding 10,000+ users in the first 3 months.", imageSrc: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&q=60", tags: ["Fintech", "Cloud-Native", "Security"] },
    { id: "3", title: "Educational Institute Digitizes Learning", client: "LearnForward Academy", challenge: "Lack of a centralized platform for online courses and student management.", solution: "Created a custom e-learning portal with interactive course modules, progress tracking, and admin dashboards.", result: "Increased student engagement by 35% and streamlined administrative tasks.", imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=60", tags: ["Education", "E-learning", "Portal"] },
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Custom Software Solutions"
        subtitle="Tailor-made software applications designed to perfectly fit your unique business processes, drive efficiency, and accelerate growth."
        CtaIcon={Code}
        gradientColors="from-teal-600 to-cyan-700"
      />

      <ZigZagSection {...whatAreCustomSolutions} />
      <BenefitsSection title="Why Go For Custom Software Solutions?" benefits={whyGoCustomBenefits} />
      
      <ServiceListSection 
        title="Our Custom Software Services"
        subtitle="From enterprise applications to specialized tools, we build custom software that solves your specific challenges."
        services={customSoftwareServices}
        accentColor="teal"
      />
      
      <ProcessStepsSection 
        title="Our Custom Software Development Process"
        subtitle="A collaborative and agile approach to deliver high-quality custom software that meets your exact specifications."
        steps={developmentProcess}
        accentColor="teal"
      />
      
      <TechStackSection 
        title="Technology Stack for Custom Solutions"
        subtitle="We leverage a diverse range of modern technologies to build robust, scalable, and future-proof custom software."
        technologies={techStack}
        bgColor="bg-gray-50"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Custom Software Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our bespoke software solutions have empowered businesses to overcome challenges and achieve their goals.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/services/custom-software-solutions/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <WhyChooseUsService serviceName="Custom Software Solutions" />
      
      <CallToActionSection 
        title="Need a Software Solution Built Just For You?"
        subtitle="Discuss your unique requirements with Zhoosoft, and let's build the perfect custom software for your business."
      />
    </div>
  );
};

export default CustomSoftwareSolutions;