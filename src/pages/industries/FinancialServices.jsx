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

import { Banknote, ShieldCheck, Cpu, Smartphone, BarChart2, Users, Lightbulb, CheckCircle, Landmark, CreditCard, Bot, FileSearch, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const FinancialServices = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Banking & Finance" }
  ];

  const industryOverview = {
    title: "Driving Digital Innovation in Banking & Finance",
    description: "The Banking and Financial Services industry is undergoing rapid digital transformation, driven by evolving customer expectations, regulatory changes, and the rise of fintech. We provide secure, compliant, and innovative software solutions that help financial institutions modernize operations, enhance customer experiences, mitigate risks, and unlock new growth opportunities.",
    imageSrc: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Modern banking interface on a tablet",
    Icon: Banknote
  };

  const challenges = [
    { icon: ShieldCheck, title: "Security & Fraud Prevention", description: "Protecting sensitive financial data and transactions from increasingly sophisticated cyber threats and fraud." },
    { icon: FileSearch, title: "Regulatory Compliance (KYC/AML)", description: "Adhering to complex and evolving regulations like KYC, AML, PSD2, and data privacy laws." },
    { icon: Users, title: "Customer Experience & Personalization", description: "Meeting demands for seamless digital experiences, personalized financial advice, and 24/7 accessibility." },
    { icon: Landmark, title: "Legacy System Modernization", description: "Updating outdated core banking systems to improve agility, efficiency, and support for new digital services." },
    { icon: Cpu, title: "Fintech Competition", description: "Competing with agile fintech startups والمبتكرين الذين يعيدون تشكيل الخدمات المالية." },
    { icon: BarChart2, title: "Data Analytics & Risk Management", description: "Leveraging vast amounts of data for better risk assessment, fraud detection, and personalized offerings." },
  ];

  const solutions = [
    { icon: Landmark, title: "Core Banking Software Development", description: "Modernizing or building new core banking systems for improved efficiency, scalability, and digital readiness." },
    { icon: CreditCard, title: "Digital Wallet & Payment Gateway Integrations", description: "Developing secure and convenient digital payment solutions, including mobile wallets and payment gateway integrations." },
    { icon: Cpu, title: "Fraud Detection using AI & ML", description: "Implementing AI-powered systems for real-time fraud detection, anomaly identification, and risk scoring." },
    { icon: FileSearch, title: "Regulatory Compliance Solutions (RegTech)", description: "Automating compliance processes for KYC/AML, transaction monitoring, and regulatory reporting." },
    { icon: Smartphone, title: "Mobile Banking Apps", description: "User-friendly and secure mobile banking applications with features like fund transfers, bill payments, and financial planning tools." },
    { icon: TrendingUp, title: "Investment & Wealth Management Platforms", description: "Digital platforms for investment advice, portfolio management, robo-advisory, and wealth tracking." },
  ];
  
  const caseStudies = [
    { id: "1", title: "Bank Enhances Security with AI Fraud Detection", client: "SecureTrust Bank", challenge: "Rising instances of sophisticated online fraud.", solution: "Developed and deployed an AI-driven real-time fraud detection system analyzing transaction patterns.", result: "Reduced fraudulent transactions by 40%, improved customer trust.", imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=60", tags: ["Banking", "AI", "Fraud Detection"] },
    { id: "2", title: "Fintech Launches P2P Lending Platform", client: "ConnectFund Capital", challenge: "Building a secure and compliant peer-to-peer lending marketplace.", solution: "Created a custom P2P platform with automated credit scoring, secure transactions, and regulatory reporting features.", result: "Successfully facilitated $10M in loans within the first year.", imageSrc: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?auto=format&fit=crop&w=400&q=60", tags: ["Fintech", "P2P Lending", "Platform"] },
  ];

  const techStack = [
    { name: "Java / .NET (Enterprise)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "text-red-500" },
    { name: "Python (AI/ML, Analytics)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-yellow-500" },
    { name: "Blockchain Technologies", logo: "https://img.icons8.com/fluency/48/ethereum.png", color: "text-purple-500" },
    { name: "Cloud (AWS, Azure, GCP)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "text-orange-500" },
    { name: "Mobile (iOS, Android, React Native)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-sky-500" },
    { name: "Cybersecurity Tools", logo: "https://img.icons8.com/ios-filled/50/000000/cyber-security.png", color: "text-red-600" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Enhanced Security & Compliance", description: "Protect sensitive data, prevent fraud, and meet stringent regulatory requirements." },
    { icon: Lightbulb, title: "Improved Customer Experience", description: "Offer seamless, personalized, and convenient digital banking and financial services." },
    { icon: Users, title: "Operational Efficiency", description: "Streamline processes, automate tasks, and reduce manual intervention in banking operations." },
    { icon: BarChart2, title: "Data-Driven Insights & Risk Management", description: "Leverage analytics for better decision-making, risk assessment, and personalized offerings." },
    { icon: TrendingUp, title: "Faster Innovation & Time-to-Market", description: "Modernize systems and adopt agile practices to launch new products and services quickly." },
    { icon: Landmark, title: "Modernized Core Systems", description: "Upgrade legacy infrastructure to support digital transformation and future growth." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's expertise in AI helped us significantly reduce fraud. Their team was professional and delivered beyond expectations.", name: "Michael B., Head of Security", company: "Global Finance Corp", rating: 5 },
    { quote: "The mobile banking app they developed is a hit with our customers. It's intuitive, secure, and feature-rich.", name: "Linda W., Digital Banking Manager", company: "Community First Bank", rating: 5 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Banking & Financial Services Solutions"
        subtitle="Secure, compliant, and innovative digital solutions to modernize banking operations, enhance customer experiences, and drive growth in the financial sector."
        CtaIcon={Banknote}
        gradientColors="from-indigo-600 to-blue-700"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Key Challenges in Banking & Finance" benefits={challenges} subtitle="Navigating a landscape of stringent regulations, evolving customer needs, and technological disruption." />
      <ServiceListSection 
        title="Our Solutions for Banking & Finance"
        subtitle="Comprehensive technology offerings to empower financial institutions in the digital age."
        services={solutions}
        accentColor="blue"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Banking & Finance Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how we've helped financial institutions innovate and achieve their strategic goals.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/financial-services/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use in Banking & Finance"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Banking & Finance Solutions" benefits={benefits} subtitle="Partner with Zhoosoft to build the future of finance." />
      <WhyChooseUsService serviceName="Banking & Finance Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Ready to Transform Your Financial Services?"
        subtitle="Contact Zhoosoft to explore how our secure and innovative solutions can help your institution thrive in the digital era."
      />
    </div>
  );
};

export default FinancialServices;