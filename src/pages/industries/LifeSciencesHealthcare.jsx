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

import { HeartHandshake, Stethoscope, FileText, MonitorSmartphone, BarChart2, ShieldCheck, Users, Lightbulb, CheckCircle, Cpu, Microscope, Pill, Brain } from "lucide-react";
import { motion } from "framer-motion";

const LifeSciencesHealthcare = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Industries", link: "/industries" },
    { name: "Healthcare & Life Sciences" }
  ];

  const industryOverview = {
    title: "Transforming Healthcare & Life Sciences",
    description: "The Healthcare and Life Sciences sectors are rapidly evolving, driven by technological advancements, changing patient expectations, and the need for more efficient and personalized care. We provide innovative digital solutions that empower healthcare providers, pharmaceutical companies, and research institutions to improve patient outcomes, streamline operations, and accelerate scientific discovery.",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Medical professionals using technology in a hospital setting",
    Icon: HeartHandshake
  };

  const challenges = [
    { icon: FileText, title: "Data Management & Interoperability", description: "Managing vast amounts of patient data securely and ensuring seamless data exchange between disparate systems." },
    { icon: ShieldCheck, title: "Regulatory Compliance (HIPAA, GDPR)", description: "Adhering to strict data privacy and security regulations in handling sensitive health information." },
    { icon: Users, title: "Patient Engagement & Experience", description: "Meeting patient demands for convenient access to care, personalized communication, and digital health tools." },
    { icon: Stethoscope, title: "Operational Efficiency", description: "Streamlining clinical workflows, reducing administrative burdens, and optimizing resource allocation." },
    { icon: Microscope, title: "Drug Discovery & Development", description: "Accelerating research and development cycles in the life sciences sector through data analytics and AI." },
    { icon: BarChart2, title: "Healthcare Analytics", description: "Leveraging data to improve clinical outcomes, population health management, and operational performance." },
  ];

  const solutions = [
    { icon: FileText, title: "Electronic Health Records (EHR/EMR)", description: "Custom EHR/EMR solutions for efficient patient data management, clinical documentation, and interoperability." },
    { icon: MonitorSmartphone, title: "Telemedicine & Remote Consultation", description: "Secure and user-friendly telehealth platforms for virtual patient care and remote monitoring." },
    { icon: Users, title: "Patient Portals & Mobile Health Apps", description: "Engaging digital tools for patients to access records, schedule appointments, and manage their health." },
    { icon: BarChart2, title: "Healthcare Analytics & Reporting", description: "Dashboards and analytics solutions for data-driven insights into clinical, operational, and financial performance." },
    { icon: Cpu, title: "AI/ML in Diagnostics & Predictive Care", description: "AI-powered tools for medical image analysis, disease prediction, personalized treatment planning, and drug discovery." },
    { icon: Stethoscope, title: "Hospital Management Systems (HMS)", description: "Comprehensive HMS to streamline hospital operations, from patient registration to billing and resource management." },
  ];
  
  const caseStudies = [
    { id: "1", title: "Hospital Improves Patient Flow with HMS", client: "City General Hospital", challenge: "Long wait times and inefficient patient management.", solution: "Implemented a custom Hospital Management System with automated scheduling and real-time bed management.", result: "Reduced average patient wait time by 25%, increased operational efficiency.", imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=60", tags: ["Healthcare", "HMS", "Efficiency"] },
    { id: "2", title: "Pharma Co. Accelerates Drug Discovery with AI", client: "BioFuture Labs", challenge: "Slow and costly drug discovery process.", solution: "Developed an AI platform for analyzing research data and predicting potential drug candidates.", result: "Shortened early-stage discovery timelines by 30%, identified promising new compounds.", imageSrc: "https://images.unsplash.com/photo-1581093450021-4a7360dd9e69?auto=format&fit=crop&w=400&q=60", tags: ["Life Sciences", "AI", "Drug Discovery"] },
  ];

  const techStack = [
    { name: "HL7/FHIR Standards", logo: "https://img.icons8.com/fluency/48/data-transfer.png", color: "text-blue-600" },
    { name: "AI/ML (Python, TensorFlow)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-yellow-500" },
    { name: "Cloud (AWS Healthcare, Azure for Health)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "text-sky-500" },
    { name: "Mobile Health (iOS, Android)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", color: "text-gray-700" },
    { name: "Secure APIs & Microservices", logo: "https://img.icons8.com/ios-glyphs/48/api-settings.png", color: "text-purple-500" },
    { name: "Big Data Analytics", logo: "https://img.icons8.com/color/48/hadoop-distributed-file-system.png", color: "text-orange-500" },
  ];

  const benefits = [
    { icon: CheckCircle, title: "Improved Patient Outcomes", description: "Enhance diagnostic accuracy, personalize treatments, and enable better care coordination." },
    { icon: Lightbulb, title: "Accelerated Innovation", description: "Speed up research, drug discovery, and the development of new medical technologies." },
    { icon: Users, title: "Enhanced Patient Engagement", description: "Empower patients with digital tools for better health management and communication." },
    { icon: ShieldCheck, title: "Data Security & Compliance", description: "Ensure robust protection of sensitive health information and adherence to regulations." },
    { icon: Stethoscope, title: "Increased Operational Efficiency", description: "Streamline workflows, reduce administrative tasks, and optimize resource utilization." },
    { icon: BarChart2, title: "Data-Driven Insights", description: "Leverage healthcare data for better decision-making in clinical and operational areas." },
  ];
  
  const testimonials = [
    { quote: "Zhoosoft's telehealth platform has allowed us to reach more patients and provide care more efficiently. It's been a fantastic partnership.", name: "Dr. Emily Carter, Clinic Director", company: "Wellness First Clinics", rating: 5 },
    { quote: "The custom EHR system Zhoosoft built for us is intuitive and has significantly improved our data management.", name: "Mark Chen, IT Manager", company: "Regional Medical Center", rating: 4 },
  ];

  return (
    <div className="bg-white">
      <IndustryHero
        title="Healthcare & Life Sciences Solutions"
        subtitle="Empowering innovation in patient care, medical research, and pharmaceutical development through advanced digital technologies."
        CtaIcon={HeartHandshake}
        gradientColors="from-red-500 to-pink-600"
        breadcrumbs={breadcrumbs}
      />
      <ZigZagSection {...industryOverview} />
      <BenefitsSection title="Key Challenges in Healthcare & Life Sciences" benefits={challenges} subtitle="Addressing the complex demands of a critical and highly regulated sector." />
      <ServiceListSection 
        title="Our Solutions for Healthcare & Life Sciences"
        subtitle="Comprehensive digital offerings to support every aspect of the healthcare and life sciences value chain."
        services={solutions}
        accentColor="pink"
      />
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Healthcare & Life Sciences Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Examples of our impactful work in transforming healthcare and advancing life sciences.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/industries/life-sciences-healthcare/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <TechStackSection 
        title="Technologies We Use in Healthcare & Life Sciences"
        technologies={techStack}
        bgColor="bg-white"
      />
      <BenefitsSection title="Benefits of Our Healthcare & Life Sciences Solutions" benefits={benefits} subtitle="Partner with Zhoosoft to achieve transformative results." />
      <WhyChooseUsService serviceName="Healthcare & Life Sciences Solutions" />
      <TestimonialSection testimonials={testimonials} />
      <CallToActionSection 
        title="Innovate Your Healthcare & Life Sciences Operations?"
        subtitle="Contact Zhoosoft to explore how our digital solutions can help you achieve your goals in this vital sector."
      />
    </div>
  );
};

export default LifeSciencesHealthcare;