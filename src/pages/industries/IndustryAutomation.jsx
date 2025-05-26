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

import { Settings, Cpu, Bot, FileText, GitMerge, Cloud, BarChart2, ShieldCheck, Users, Lightbulb, CheckCircle, Zap, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const IndustryAutomation = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Industry & Automation" }
  ];

  const industryOverview = {
    title: "Driving Efficiency with Industry & Automation",
    description: "Industrial automation leverages technology to control and monitor processes, machinery, and devices in various industries, reducing manual intervention and improving efficiency, quality, and safety. We provide intelligent automation solutions, from Robotic Process Automation (RPA) for business workflows to advanced control systems for manufacturing, helping businesses optimize operations and achieve higher productivity.",
    imageSrc: "https://images.unsplash.com/photo-1560574128-39add1157c98?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Robotic arms working on an assembly line in a factory",
    Icon: Settings
  };

  const challenges = [
    { icon: SlidersHorizontal, title: "Manual & Repetitive Tasks", description: "High dependency on manual labor for routine tasks, leading to errors and inefficiencies." },
    { icon: Zap, title: "Operational Inefficiencies", description: "Bottlenecks in workflows, slow process cycle times, and suboptimal resource utilization." },
    { icon: BarChart2, title: "Lack of Real-time Visibility", description: "Limited insight into operational performance, making it difficult to identify and address issues promptly." },
    { icon: Users, title: "Scalability Issues", description: "Difficulty in scaling operations up or down quickly in response to changing market demands." },
    { icon: ShieldCheck, title: "Quality Control & Consistency", description: "Ensuring consistent product quality and adherence to standards in complex processes." },
    { icon: Cpu, title: "Integration of Disparate Systems", description: "Challenges in connecting legacy systems with modern automation technologies." },
  ];

  const solutions = [
    { icon: Bot, title: "Robotic Process Automation (RPA)", description: "Automating repetitive, rule-based tasks across various business functions like finance, HR, and customer service." },
    { icon: GitMerge, title: "Workflow & Business Process Automation (BPM)", description: "Designing and implementing automated workflows to streamline end-to-end business processes." },
    { icon: FileText, title: "Automated Document Processing (OCR, NLP)", description: "Using AI to extract data from documents, classify information, and automate document-centric workflows." },
    { icon: Settings, title: "Manufacturing Process Automation", description: "Implementing PLC, SCADA, and MES solutions for automated control and monitoring of manufacturing operations." },
    { icon: Cloud, title: "CI/CD Pipeline Automation for DevOps", description: "Automating software build, test, and deployment processes to accelerate software delivery." },
    { icon: CheckCircle, title: "Automated Testing Frameworks", description: "Developing and implementing automated testing solutions to improve software quality and reduce testing time." },
  ];
  
  const caseStudies = [
    { id: "1", title: "Manufacturer Boosts Production with RPA", client: "Precision Parts Ltd.", challenge: "Manual data entry and order processing slowing down production.", solution: "Implemented RPA bots to automate order intake, data validation, and system updates.", result: "Reduced order processing time by 60%, eliminated data entry errors.", imageSrc: "https://images.unsplash.com/photo-1619498190078-c7459559902a?auto=format&fit=crop&w=400&q=60", tags: ["Manufacturing", "RPA", "Efficiency"] },
    { id: "2", title: "Insurance Firm Automates Claims Processing", client: "SecureLife Insurance", challenge: "Lengthy and error-prone manual claims processing.", solution: "Developed an automated claims processing system using OCR for document extraction and RPA for data entry.", result: "Reduced claims processing cycle time by 70%, improved accuracy.", imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=60", tags: ["Insurance", "Automation", "OCR"] },
  ];

  const techStack = [
    { name: "RPA Tools (UiPath, Blue Prism)", logo: "https://img.icons8.com/fluency/48/robot.png", color: "text-blue-600" },
    { name: "BPM Platforms", logo: "https://img.icons8.com/color/48/process.png", color: "text-green-500" },
    { name: "AI/ML (Python, OCR Libraries)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-yellow-500" },
    { name: "PLC/SCADA Systems", logo: "https://img.icons8.com/ios-filled/50/000000/control-panel.png", color: "text-gray-700" },
    { name: "DevOps Tools (Jenkins, GitLab CI)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "text-red-500" },
    { name: "Cloud Automation (AWS Lambda, Azure Functions)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "text-orange-500" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Increased Productivity & Efficiency", description: "Automate tasks, reduce manual effort, and accelerate process cycle times." },
    { icon: Lightbulb, title: "Reduced Operational Costs", description: "Lower labor costs, minimize errors, and optimize resource utilization." },
    { icon: Zap, title: "Improved Accuracy & Quality", description: "Eliminate human errors in repetitive tasks and ensure consistent process execution." },
    { icon: Users, title: "Enhanced Scalability", description: "Easily scale automated processes up or down to meet changing business demands." },
    { icon: ShieldCheck, title: "Better Compliance & Governance", description: "Ensure adherence to regulatory requirements and maintain audit trails for automated processes." },
    { icon: BarChart2, title: "Faster Time-to-Market", description: "Accelerate product development and service delivery through automated workflows." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's RPA solution has transformed our back-office operations. We're more efficient and our team can focus on higher-value tasks.", name: "Sarah J., COO", company: "AdminPro Services", rating: 5 },
    { quote: "The automated document processing system they built for us is incredibly accurate and has saved us countless hours.", name: "Tom W., Finance Director", company: "Global Corp", rating: 4 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Industry & Automation Solutions"
        subtitle="Optimizing processes, reducing manual effort, and driving productivity with intelligent automation and advanced control systems."
        CtaIcon={Settings}
        gradientColors="from-gray-700 to-slate-800"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Challenges in Industrial Operations & Business Processes" benefits={challenges} subtitle="Addressing the need for greater efficiency, consistency, and agility in a competitive environment." />
      <ServiceListSection 
        title="Our Automation Solutions"
        subtitle="A comprehensive suite of automation services to streamline your operations from factory floor to back office."
        services={solutions}
        accentColor="blue"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Automation Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our automation solutions have delivered tangible results for businesses across industries.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/industry-automation/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use for Automation"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Automation Solutions" benefits={benefits} subtitle="Partner with Zhoosoft to unlock new levels of efficiency and productivity." />
      <WhyChooseUsService serviceName="Automation Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Ready to Automate Your Business Processes?"
        subtitle="Contact Zhoosoft to explore how our intelligent automation solutions can streamline your operations and drive growth."
      />
    </div>
  );
};

export default IndustryAutomation;