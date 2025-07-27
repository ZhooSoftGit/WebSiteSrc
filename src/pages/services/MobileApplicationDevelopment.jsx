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

import { Smartphone, TrendingUp, Users, BarChartBig, Target, Lightbulb, Layers, Zap, CheckCircle, GitMerge, Search, Palette, Code, Settings, Cloud, Apple, Wind, TabletSmartphone, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const MobileApplicationDevelopment = () => {
  const whyMobileAppsMatter = {
    title: "Why Mobile Apps Matter Today",
    description: "In an increasingly connected world, mobile apps are no longer a luxury but a necessity for businesses. They provide a direct channel to engage with customers, enhance brand visibility, streamline operations, and unlock new revenue streams. A well-crafted mobile app can significantly boost user engagement and loyalty.",
    imageSrc: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Person using a mobile application on a smartphone",
    Icon: Smartphone
  };

  const mobileStats = [
    { icon: BarChartBig, title: "80% of Internet Traffic", description: "Comes from mobile devices, highlighting the importance of a mobile presence." },
    { icon: Users, title: "4x User Retention", description: "Mobile apps often lead to significantly higher user retention compared to mobile websites." },
    { icon: TrendingUp, title: "90% Enterprise Investment", description: "The majority of enterprises are investing in mobile-first experiences to stay competitive." },
  ];
  
  const mobileAppServices = [
    { icon: Apple, title: "iOS App Development", description: "Native iOS apps built with Swift/Objective-C for optimal performance and user experience on Apple devices." },
    { icon: Wind, title: "Android App Development", description: "High-quality native Android apps developed with Kotlin/Java for the diverse Android ecosystem." },
    { icon: TabletSmartphone, title: "Cross-Platform App Development", description: "Cost-effective solutions using frameworks like React Native or Flutter to build apps for multiple platforms with a single codebase." },
    { icon: Code, title: ".NET MAUI Development", description: "Build native, cross-platform apps for iOS, Android, Windows, and macOS with .NET MAUI, offering smooth transitions and a unified codebase." },
    { icon: Layers, title: "Xamarin Development", description: "Leverage Xamarin for creating native mobile apps with C#, sharing code across platforms for efficient development and maintenance." },
    { icon: Layers, title: "Progressive Web Apps (PWA)", description: "Web applications that offer an app-like experience, accessible via a browser and installable on devices." },
    { icon: Palette, title: "App UI/UX Design", description: "Intuitive, engaging, and visually stunning user interfaces and experiences designed to delight users." },
    { icon: Code, title: "Backend/API Development", description: "Robust and scalable backend systems and APIs to power your mobile applications." },
    { icon: Settings, title: "App Maintenance & Optimization", description: "Ongoing support, updates, and performance optimization to ensure your app remains current and efficient." },
  ];

  const appDevelopmentProcess = [
    { icon: Lightbulb, title: "Idea & Requirement Gathering", description: "We start by understanding your vision, target audience, and detailed requirements for the app." },
    { icon: Palette, title: "UI/UX Design & Prototyping", description: "Our designers create wireframes, mockups, and interactive prototypes for a user-centric design with smooth transitions." },
    { icon: GitMerge, title: "Agile Development", description: "We follow agile methodologies, building your app in iterative sprints for flexibility and regular feedback." },
    { icon: LinkIcon, title: "API & Backend Integration", description: "Seamless integration with necessary APIs and development of a robust backend if required." },
    { icon: CheckCircle, title: "Testing & Quality Assurance", description: "Rigorous testing across devices and scenarios to ensure a bug-free and high-performing application." },
    { icon: Zap, title: "Launch & App Store Deployment", description: "We handle the complexities of app store submissions (iOS App Store, Google Play Store)." },
    { icon: Settings, title: "Support & Enhancement", description: "Post-launch support, maintenance, and assistance with future enhancements and updates." },
  ];

  const mobileTechStack = [
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", color: "text-orange-500" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", color: "text-purple-600" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-blue-500" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "text-sky-500" },
    { name: ".NET MAUI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", color: "text-purple-500" },
    { name: "Xamarin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg", color: "text-blue-400" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", color: "text-yellow-500" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", color: "text-green-600" },
  ];
  
  const featuredProjects = [
    { id: "ride-booking", title: "Ride Booking App Platform", client: "Internal Product", challenge: "Develop a comprehensive Uber-like platform.", solution: "Created native iOS and Android apps with real-time tracking, payment integration, and driver/passenger profiles.", result: "A market-ready, scalable ride-hailing solution.", imageSrc: "https://images.unsplash.com/photo-1554260570-83dc2f46ef79?auto=format&fit=crop&w=400&q=60", tags: ["iOS", "Android", "Real-time"], link:"/products/ride-booking-app" },
    { id: "ecommerce-mobile", title: "Mobile E-commerce Solution", client: "Retail Startups", challenge: "Provide an accessible mobile shopping experience.", solution: "Cross-platform app with product listings, secure cart, and push notifications for promotions.", result: "Increased mobile sales conversion for early adopters.", imageSrc: "https://images.unsplash.com/photo-1580974928075-00a1371688a3?auto=format&fit=crop&w=400&q=60", tags: ["Cross-Platform", "E-commerce", "UX"], link:"/products/ecommerce-platform"},
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Mobile Application Development"
        subtitle="Crafting intuitive, high-performance mobile apps that captivate users and drive business growth across iOS, Android, and cross-platform technologies including .NET MAUI and Xamarin."
        CtaIcon={Smartphone}
        gradientColors="from-teal-600 to-cyan-700"
      />

      <ZigZagSection {...whyMobileAppsMatter} />
      <BenefitsSection title="Mobile App Impact: Key Statistics" benefits={mobileStats} />
      
      <ServiceListSection 
        title="Our Mobile App Development Services"
        subtitle="A full spectrum of services to bring your mobile app idea to life, from concept to launch and beyond, including expertise in MAUI and Xamarin for smooth, native cross-platform experiences."
        services={mobileAppServices}
        accentColor="teal"
      />
      
      <ProcessStepsSection 
        title="Our App Development Process"
        subtitle="A streamlined, agile process designed to deliver high-quality mobile applications efficiently and effectively, ensuring smooth transitions and excellent UI/UX."
        steps={appDevelopmentProcess}
        accentColor="teal"
      />
      
      <TechStackSection 
        title="Technology Stack We Use for Mobile Apps"
        subtitle="Leveraging the latest and most robust technologies, including .NET MAUI and Xamarin, to build exceptional mobile experiences."
        technologies={mobileTechStack}
        bgColor="bg-gray-50"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Mobile Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Showcasing our expertise in delivering successful mobile applications that solve real-world problems.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" 
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {featuredProjects.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={study.link}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <WhyChooseUsService serviceName="Mobile App Development" />
      
      <CallToActionSection 
        title="Ready to Build Your Mobile App?"
        subtitle="Partner with Zhoosoft to create a stunning, high-performing mobile application that will elevate your business."
        secondaryButtonText="Explore Our Products"
        secondaryButtonLink="/products"
      />
    </div>
  );
};

export default MobileApplicationDevelopment;