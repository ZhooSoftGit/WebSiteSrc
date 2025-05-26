
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

import { Layers, CheckCircle, Zap, Users, ShieldCheck, BarChart2, Settings, Cloud, Code, Search, Target, Lightbulb, GitMerge, Palette, Share2, Database, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const WebApplicationDevelopment = () => {
  const whyChooseWebApp = {
    title: "Why Choose Web Applications?",
    description: "Web applications offer unparalleled accessibility, running on any device with a web browser, eliminating the need for downloads or installations. They are easier to maintain and update, as changes are deployed centrally on the server. Web apps facilitate seamless collaboration, data sharing, and can be scaled efficiently to accommodate growing user bases and business needs.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    imageAlt: "User interacting with a web application on a laptop",
    Icon: Layers
  };

  const webAppBenefits = [
    { icon: Users, title: "Cross-Platform Accessibility", description: "Accessible from any device with a web browser (desktops, laptops, tablets, smartphones)." },
    { icon: Settings, title: "Easier Maintenance & Updates", description: "Updates are deployed centrally, ensuring all users have the latest version instantly." },
    { icon: Zap, title: "Cost-Effective Development", description: "Often more budget-friendly than native apps, especially for multi-platform presence." },
    { icon: Cloud, title: "Scalability", description: "Web applications can be easily scaled to handle increasing traffic and data loads." },
    { icon: ShieldCheck, title: "Enhanced Security", description: "Centralized data and robust server-side security measures can be implemented." },
    { icon: Share2, title: "Improved Collaboration", description: "Facilitate real-time data sharing and collaboration among users regardless of their location." },
  ];

  const webDevServices = [
    { icon: Code, title: "Custom Web App Development", description: "Tailor-made web applications built from scratch to meet your specific business requirements." },
    { icon: Palette, title: "Frontend Development", description: "Crafting responsive, intuitive, and visually appealing user interfaces using modern frameworks (React, Angular, Vue.js)." },
    { icon: Database, title: "Backend Development", description: "Building robust and scalable server-side logic, databases, and APIs (Node.js, Python, Java, .NET)." },
    { icon: Layers, title: "Full-Stack Development", description: "End-to-end web application development, covering both frontend and backend." },
    { icon: Cloud, title: "Progressive Web Apps (PWAs)", description: "Developing web apps that offer native app-like experiences, including offline capabilities and push notifications." },
    { icon: LinkIcon, title: "API Development & Integration", description: "Creating and integrating APIs to connect your web app with other services and systems." },
    { icon: Settings, title: "Web App Maintenance & Support", description: "Ongoing support, updates, performance optimization, and security enhancements for your web applications." },
  ];
  
  const techStack = [
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", color: "text-blue-500" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg", color: "text-red-600" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg", color: "text-green-500" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", color: "text-green-600" },
    { name: "Python (Django/Flask)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", color: "text-yellow-500" },
    { name: "PHP (Laravel)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg", color: "text-red-400" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", color: "text-blue-700" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", color: "text-green-500" },
  ];
  
  const developmentApproach = [
    { icon: Search, title: "Requirement Analysis", description: "Thorough understanding of your project goals, target audience, and functional requirements." },
    { icon: Palette, title: "UI/UX Design & Prototyping", description: "Creating wireframes, mockups, and interactive prototypes for optimal user experience." },
    { icon: Code, title: "Agile Development Sprints", description: "Iterative development cycles with regular feedback loops to ensure alignment and flexibility." },
    { icon: GitMerge, title: "Frontend & Backend Development", description: "Concurrent development of user interface and server-side logic for efficiency." },
    { icon: CheckCircle, title: "Rigorous Testing & QA", description: "Comprehensive testing across browsers and devices to ensure quality and performance." },
    { icon: Zap, title: "Deployment & Launch", description: "Smooth deployment to your chosen hosting environment and go-live support." },
    { icon: Settings, title: "Ongoing Maintenance", description: "Post-launch support, updates, and enhancements to keep your web app running smoothly." },
  ];

  const caseStudies = [
    { id: "1", title: "SaaS Platform for Project Management", client: "TaskFlow Solutions", challenge: "Need for a collaborative and intuitive web-based project management tool.", solution: "Developed a feature-rich SaaS application with real-time collaboration, task tracking, and reporting.", result: "Acquired 500+ paying customers within the first year of launch.", imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=60", tags: ["SaaS", "Project Management", "React"] },
    { id: "2", title: "E-learning Portal for Professional Development", client: "SkillUp Academy", challenge: "Deliver engaging online courses with progress tracking and certification.", solution: "Built a custom e-learning platform with interactive modules, video streaming, and automated assessments.", result: "Improved course completion rates by 40% and user satisfaction.", imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=60", tags: ["E-learning", "Portal", "Node.js"] },
    { id: "3", title: "Customer Portal for Utility Company", client: "PowerGrid Corp", challenge: "Provide customers with self-service options for billing and account management.", solution: "Developed a secure customer portal with features for bill payment, usage tracking, and support requests.", result: "Reduced customer service call volume by 25% and increased online payments.", imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=60", tags: ["Customer Portal", "Utilities", "Security"] },
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Web Application Development"
        subtitle="Building powerful, scalable, and secure web applications that deliver exceptional user experiences and drive business outcomes."
        CtaIcon={Layers}
        gradientColors="from-sky-500 to-cyan-600"
      />

      <ZigZagSection {...whyChooseWebApp} />
      <BenefitsSection title="Key Benefits of Web Applications" benefits={webAppBenefits} />
      
      <ServiceListSection 
        title="Our Web Development Services"
        subtitle="Comprehensive web application development services to bring your digital vision to life."
        services={webDevServices}
        accentColor="blue"
      />
      
      <TechStackSection 
        title="Our Web Development Technology Stack"
        subtitle="We use a wide array of modern and proven technologies to build high-performance web applications."
        technologies={techStack}
        bgColor="bg-gray-50"
      />
      
      <ProcessStepsSection 
        title="Our Web Application Development Approach"
        subtitle="A structured and agile methodology ensuring timely delivery of high-quality web solutions."
        steps={developmentApproach}
        accentColor="blue"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Web Application Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our custom web applications have helped businesses innovate and succeed online.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/services/web-application-development/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <WhyChooseUsService serviceName="Web App Development" />
      
      <CallToActionSection 
        title="Ready to Build Your Next Web Application?"
        subtitle="Partner with Zhoosoft to develop a cutting-edge web application that meets your business needs and exceeds user expectations."
      />
    </div>
  );
};

export default WebApplicationDevelopment;
