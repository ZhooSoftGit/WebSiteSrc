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

import { Gamepad2, Cloud, Cpu, ShoppingCart, Users, MessageSquare, BarChart2, ShieldCheck, Lightbulb, CheckCircle, Film, Music, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const GamingEntertainment = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Gaming & Entertainment" }
  ];

  const industryOverview = {
    title: "Powering Immersive Gaming & Entertainment Experiences",
    description: "The Gaming & Entertainment industry thrives on innovation, engagement, and cutting-edge technology. We specialize in developing scalable, high-performance solutions that captivate audiences, from immersive games and streaming platforms to AI-driven personalization and robust backend systems. Our expertise helps creators and distributors deliver unforgettable experiences.",
    imageSrc: "https://images.unsplash.com/photo-1580327344181-c11ac2a975e0?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Gamer playing a video game with a headset on",
    Icon: Gamepad2
  };

  const challenges = [
    { icon: Users, title: "User Acquisition & Retention", description: "Attracting and retaining users in a highly competitive market with ever-evolving trends." },
    { icon: Cloud, title: "Scalability & Performance", description: "Ensuring platforms can handle massive concurrent users and deliver low-latency experiences." },
    { icon: ShoppingCart, title: "Monetization Strategies", description: "Implementing effective and fair monetization models (in-app purchases, subscriptions, ads)." },
    { icon: ShieldCheck, title: "Security & Fair Play", description: "Protecting against cheating, fraud, and ensuring a secure environment for users and transactions." },
    { icon: Cpu, title: "Content Personalization", description: "Delivering relevant and engaging content recommendations to individual users at scale." },
    { icon: Puzzle, title: "Cross-Platform Compatibility", description: "Developing experiences that work seamlessly across various devices (mobile, console, PC, web)." },
  ];

  const solutions = [
    { icon: Gamepad2, title: "Game Development Services", description: "End-to-end game development for mobile, console, and web, including design, art, programming, and testing." },
    { icon: Cloud, title: "Cloud-Based Game Streaming Platforms", description: "Building scalable infrastructure for game streaming services, enabling play-anywhere experiences." },
    { icon: Cpu, title: "AI-Powered Content Personalization", description: "Using machine learning to recommend games, movies, music, and other content tailored to user preferences." },
    { icon: ShoppingCart, title: "In-App Purchase & Microtransaction Systems", description: "Secure and flexible systems for managing virtual goods, subscriptions, and in-app payments." },
    { icon: Users, title: "Scalable Multiplayer Backends", description: "Robust backend solutions using technologies like Kubernetes to support massive multiplayer online games." },
    { icon: Film, title: "Video-on-Demand (VOD) & Streaming Platforms", description: "Developing custom VOD platforms with features like content management, DRM, and adaptive streaming." },
  ];
  
  const caseStudies = [
    { id: "1", title: "Mobile Game Studio Achieves 1M+ Downloads", client: "PixelPlay Games", challenge: "Launching a new mobile game in a crowded market and scaling its backend.", solution: "Developed an engaging puzzle game with a scalable cloud backend and implemented effective user acquisition strategies.", result: "Reached over 1 million downloads in 6 months, high user retention rates.", imageSrc: "https://images.unsplash.com/photo-1593305842339-95291893595a?auto=format&fit=crop&w=400&q=60", tags: ["Mobile Gaming", "Scalability", "Cloud"] },
    { id: "2", title: "Streaming Service Enhances User Engagement", client: "StreamNow TV", challenge: "Low user engagement and high churn rate on their VOD platform.", solution: "Integrated an AI-powered recommendation engine and redesigned the user interface for better discovery.", result: "Increased average watch time by 25%, reduced churn by 15%.", imageSrc: "https://images.unsplash.com/photo-1578849227999-005597f51100?auto=format&fit=crop&w=400&q=60", tags: ["Streaming", "AI", "UX/UI"] },
  ];

  const techStack = [
    { name: "Unity / Unreal Engine", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", color: "text-gray-700" },
    { name: "Node.js / Python (Backend)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "text-green-500" },
    { name: "Kubernetes / Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "text-blue-600" },
    { name: "AWS / GCP (Cloud)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg", color: "text-orange-500" },
    { name: "React / Vue.js (Web Portals)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-sky-500" },
    { name: "Blockchain / NFTs", logo: "https://img.icons8.com/fluency/48/ethereum.png", color: "text-purple-500" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Immersive User Experiences", description: "Create captivating games and entertainment content that keeps users engaged." },
    { icon: Lightbulb, title: "Innovative Monetization", description: "Implement effective and user-friendly ways to generate revenue from your platforms." },
    { icon: Users, title: "Scalable & Reliable Platforms", description: "Build systems that can handle growth and provide consistent performance." },
    { icon: BarChart2, title: "Data-Driven Insights", description: "Understand user behavior to optimize content, improve retention, and personalize experiences." },
    { icon: ShieldCheck, title: "Secure & Fair Environments", description: "Protect your users and your platform from fraud and unfair practices." },
    { icon: Puzzle, title: "Cross-Platform Reach", description: "Deliver your content seamlessly across a wide range of devices and platforms." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's team was instrumental in building the backend for our multiplayer game. Their expertise in scalability was top-notch.", name: "Alex P., CTO", company: "EpicQuest Studios", rating: 5 },
    { quote: "The AI recommendation engine they developed significantly improved our VOD platform's user engagement.", name: "Maria S., Product Manager", company: "CineMax Stream", rating: 5 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Gaming & Entertainment Solutions"
        subtitle="Crafting immersive games, scalable streaming platforms, and AI-driven personalized experiences for the modern entertainment landscape."
        CtaIcon={Gamepad2}
        gradientColors="from-purple-600 to-pink-700"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Challenges in Gaming & Entertainment" benefits={challenges} subtitle="Navigating a fast-paced industry that demands constant innovation and user focus." />
      <ServiceListSection 
        title="Our Solutions for Gaming & Entertainment"
        subtitle="Comprehensive development services to bring your creative visions to life and engage audiences worldwide."
        services={solutions}
        accentColor="pink"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gaming & Entertainment Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Success stories from our work in the dynamic world of games and digital entertainment.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/gaming-entertainment/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use in Gaming & Entertainment"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Gaming & Entertainment Solutions" benefits={benefits} subtitle="Partner with Zhoosoft to create the next big hit." />
      <WhyChooseUsService serviceName="Gaming & Entertainment Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Ready to Create an Unforgettable Experience?"
        subtitle="Let's collaborate on your next gaming or entertainment project. Contact Zhoosoft to get started."
      />
    </div>
  );
};

export default GamingEntertainment;