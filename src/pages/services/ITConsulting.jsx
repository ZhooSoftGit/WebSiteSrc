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

import { Briefcase, CheckCircle, Lightbulb, BarChart2, Settings, ShieldCheck, Cloud, Zap, Users, Cpu, Target, Search, GitMerge, Code, Database } from "lucide-react";
import { motion } from "framer-motion";

const ITConsulting = () => {
  const whatIsITConsulting = {
    title: "What is IT Consulting?",
    description: "IT Consulting involves providing expert advice and guidance to businesses on how to best leverage technology to achieve their objectives. This can range from strategic planning and system architecture design to cybersecurity assessments and digital transformation roadmapping. Effective IT consulting helps organizations optimize their IT infrastructure, improve efficiency, reduce costs, and innovate faster.",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Consultants discussing strategy around a table",
    Icon: Briefcase
  };

  const whyITConsultingBenefits = [
    { icon: Target, title: "Strategic Alignment", description: "Ensure your IT strategy is perfectly aligned with your overall business goals for maximum impact." },
    { icon: Lightbulb, title: "Expert Insights", description: "Gain access to specialized knowledge, industry best practices, and emerging technology trends." },
    { icon: Settings, title: "Optimized Performance", description: "Improve the efficiency and effectiveness of your IT systems and processes." },
    { icon: ShieldCheck, title: "Risk Mitigation", description: "Identify and address potential IT risks, including cybersecurity threats and compliance issues." },
    { icon: Zap, title: "Cost Reduction", description: "Optimize IT spending and identify cost-saving opportunities without compromising quality." },
    { icon: BarChart2, title: "Innovation Catalyst", description: "Leverage technology to drive innovation, create new products/services, and gain a competitive edge." },
  ];

  const itConsultingServices = [
    { icon: Cloud, title: "Cloud Strategy & Migration", description: "Develop and implement cloud strategies, including migration planning, cost optimization, and cloud-native architecture." },
    { icon: ShieldCheck, title: "Cybersecurity Consulting", description: "Assess security posture, develop robust security strategies, and ensure compliance with industry regulations." },
    { icon: Database, title: "Data & Analytics Consulting", description: "Unlock the value of your data with strategies for data governance, business intelligence, and advanced analytics." },
    { icon: Zap, title: "Digital Transformation Advisory", description: "Guide your digital transformation journey from strategy development to implementation and change management." },
    { icon: Settings, title: "IT Infrastructure Optimization", description: "Assess and optimize your IT infrastructure for performance, scalability, reliability, and cost-effectiveness." },
    { icon: Cpu, title: "Software & Solution Architecture", description: "Design robust and scalable architectures for custom software, enterprise applications, and integrated systems." },
    { icon: Users, title: "IT Governance & Compliance", description: "Establish effective IT governance frameworks and ensure adherence to relevant industry standards and regulations." },
  ];
  
  const caseStudies = [
    { id: "1", title: "Financial Firm Modernizes IT Infrastructure", client: "Alpha Investments", challenge: "Aging IT systems impacting performance and security.", solution: "Developed a phased cloud migration strategy and implemented modern security protocols.", result: "Improved system uptime by 25%, reduced IT operational costs by 18%.", imageSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=60", tags: ["Finance", "Cloud Migration", "Security"] },
    { id: "2", title: "Retailer Enhances Customer Data Strategy", client: "Chic Boutique Co.", challenge: "Lack of unified customer data and personalized marketing capabilities.", solution: "Designed a customer data platform (CDP) architecture and data governance framework.", result: "Enabled targeted marketing campaigns, increasing customer engagement by 30%.", imageSrc: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=60", tags: ["Retail", "Data Strategy", "CDP"] },
    { id: "3", title: "Healthcare Startup Achieves HIPAA Compliance", client: "HealthTech Innovators", challenge: "Navigating complex HIPAA regulations for a new digital health platform.", solution: "Provided comprehensive HIPAA compliance consulting and implemented necessary security controls.", result: "Successfully launched a compliant platform, ensuring patient data privacy and security.", imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=60", tags: ["Healthcare", "Compliance", "HIPAA"] },
  ];
  
  const consultingApproachSteps = [
    { icon: Search, title: "Understand & Analyze", description: "Deep dive into your business challenges, objectives, and existing IT landscape to gain a comprehensive understanding." },
    { icon: Target, title: "Strategize & Recommend", description: "Develop tailored IT strategies and actionable recommendations aligned with your specific needs and goals." },
    { icon: GitMerge, title: "Plan & Design", description: "Create detailed roadmaps, architectures, and implementation plans for the recommended solutions." },
    { icon: Users, title: "Implement & Support", description: "Provide expert guidance during implementation and offer ongoing support to ensure successful adoption." },
    { icon: BarChart2, title: "Measure & Optimize", description: "Track key performance indicators, measure the impact of IT initiatives, and continuously optimize for better results." },
    { icon: Lightbulb, title: "Empower & Transfer Knowledge", description: "Work collaboratively with your team, empowering them with the knowledge and skills for long-term success." },
  ];
  
  const techWeRecommend = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "text-orange-500" },
    { name: "Microsoft Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg", color: "text-blue-500" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg", color: "text-blue-400" },
    { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg", color: "text-sky-500" },
    { name: "SAP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sap/sap-original.svg", color: "text-blue-600" },
    { name: "ServiceNow", logo: "https://img.icons8.com/color/48/servicenow.png", color: "text-green-500" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg", color: "text-blue-700" },
    { name: "Okta", logo: "https://img.icons8.com/?size=48&id=PoxG92S14n73&format=png", color: "text-blue-800"},
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="IT Consulting Services"
        subtitle="Strategic IT guidance to optimize your technology investments, mitigate risks, and drive business innovation and growth."
        CtaIcon={Briefcase}
        gradientColors="from-teal-600 to-cyan-700"
      />
      
      <ZigZagSection {...whatIsITConsulting} />
      <BenefitsSection title="Why IT Consulting is Important?" benefits={whyITConsultingBenefits} />
      
      <ServiceListSection 
        title="Our IT Consulting Services"
        subtitle="Comprehensive consulting services to address your most critical IT challenges and opportunities."
        services={itConsultingServices}
        accentColor="teal"
      />
      
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">IT Consulting Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how our expert IT consulting has empowered businesses to achieve their strategic objectives.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/services/it-consulting/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <ProcessStepsSection 
        title="Our Consulting Approach"
        subtitle="A collaborative and results-driven approach to deliver IT strategies that create lasting value."
        steps={consultingApproachSteps}
        accentColor="teal"
      />
      
      <TechStackSection 
        title="Technologies We Recommend & Implement"
        subtitle="We leverage best-in-class technologies and platforms to deliver robust and effective IT solutions."
        technologies={techWeRecommend}
        bgColor="bg-gray-50"
      />
      
      <WhyChooseUsService serviceName="IT Consulting" />
      
      <CallToActionSection 
        title="Need Expert IT Advice?"
        subtitle="Let Zhoosoft's experienced IT consultants help you navigate the complexities of technology and achieve your business goals."
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default ITConsulting;