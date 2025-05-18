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

import { Cloud, Zap, Settings, ShieldCheck, BarChart2, Users, Layers, RefreshCw, GitMerge, Server, Target, Search, CheckCircle, Briefcase, Database } from "lucide-react";
import { motion } from "framer-motion";

const CloudSolutions = () => {
  const whyCloudSolution = {
    title: "Why Embrace Cloud Solutions?",
    description: "Cloud solutions offer businesses unprecedented flexibility, scalability, and cost-efficiency. By migrating to the cloud, organizations can reduce IT infrastructure overhead, enhance collaboration, improve data security, and accelerate innovation. The cloud empowers businesses to adapt quickly to market changes and focus on their core competencies.",
    imageSrc: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Abstract representation of cloud computing network",
    Icon: Cloud
  };

  const cloudBenefits = [
    { icon: Zap, title: "Scalability & Elasticity", description: "Easily scale resources up or down based on demand, paying only for what you use." },
    { icon: BarChart2, title: "Cost Efficiency", description: "Reduce capital expenditure on hardware and IT infrastructure, shifting to a predictable operational expense model." },
    { icon: RefreshCw, title: "Enhanced Collaboration", description: "Enable seamless access to data and applications from anywhere, fostering teamwork and productivity." },
    { icon: ShieldCheck, title: "Improved Security & Compliance", description: "Leverage robust security measures and compliance certifications offered by leading cloud providers." },
    { icon: Layers, title: "Disaster Recovery & Business Continuity", description: "Ensure data backup and rapid recovery in case of unforeseen events, minimizing downtime." },
    { icon: Settings, title: "Focus on Core Business", description: "Offload IT infrastructure management to focus on strategic initiatives and innovation." },
  ];

  const cloudServices = [
    { icon: Cloud, title: "Cloud Strategy & Consulting", description: "Develop a tailored cloud adoption roadmap, assess readiness, and select the right cloud model (public, private, hybrid)." },
    { icon: Server, title: "Cloud Migration Services", description: "Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal disruption." },
    { icon: Layers, title: "Cloud-Native Development", description: "Design and build applications optimized for cloud environments, leveraging microservices, containers, and serverless architectures." },
    { icon: Settings, title: "Cloud Infrastructure Management", description: "Proactive management, monitoring, and optimization of your cloud infrastructure for performance and cost." },
    { icon: ShieldCheck, title: "Cloud Security & Compliance", description: "Implement robust security controls, manage identities, and ensure compliance with industry regulations in the cloud." },
    { icon: GitMerge, title: "DevOps & Cloud Automation", description: "Implement CI/CD pipelines, infrastructure-as-code, and automation to accelerate development and deployment on the cloud." },
    { icon: Database, title: "Data Solutions in the Cloud", description: "Leverage cloud-based data warehousing, analytics, and machine learning services to unlock insights from your data." },
  ];
  
  const platformsWeSupport = [
    { name: "Amazon Web Services (AWS)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "text-orange-500" },
    { name: "Microsoft Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg", color: "text-blue-500" },
    { name: "Google Cloud Platform (GCP)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg", color: "text-blue-400" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg", color: "text-blue-700" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", color: "text-sky-600" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg", color: "text-purple-500" },
  ];
  
  const cloudAdoptionFramework = [
    { icon: Search, title: "Strategy & Envisioning", description: "Define business objectives, assess current state, and develop a clear cloud vision and strategy." },
    { icon: Target, title: "Plan & Design", description: "Create a detailed migration plan, design target cloud architecture, and establish governance policies." },
    { icon: CheckCircle, title: "Pilot & Proof of Concept", description: "Validate the strategy and architecture with pilot migrations or PoCs for key workloads." },
    { icon: Layers, title: "Migrate & Modernize", description: "Execute the migration plan, rehost, replatform, or refactor applications as needed for the cloud." },
    { icon: Settings, title: "Optimize & Secure", description: "Optimize cloud resources for cost and performance, and implement robust security measures." },
    { icon: GitMerge, title: "Govern & Manage", description: "Establish ongoing cloud governance, monitoring, and management processes for sustained success." },
  ];

  const caseStudies = [
    { id: "1", title: "E-commerce Platform Scales for Peak Seasons on AWS", client: "ShopNow Retail", challenge: "Inability to handle traffic spikes during holiday seasons, leading to downtime.", solution: "Migrated to a scalable AWS infrastructure with auto-scaling and load balancing.", result: "Achieved 99.99% uptime during peak periods and reduced infrastructure costs by 20%.", imageSrc: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=60", tags: ["E-commerce", "AWS", "Scalability"] },
    { id: "2", title: "SaaS Company Achieves Global Reach with Azure", client: "InnovateSoft", challenge: "Need to deploy their SaaS application globally with low latency and high availability.", solution: "Re-architected application for Azure, utilizing global data centers and PaaS services.", result: "Expanded to new international markets, improving application performance for global users.", imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=60", tags: ["SaaS", "Azure", "Global Deployment"] },
    { id: "3", title: "Manufacturing Firm Modernizes Data Analytics on GCP", client: "Precision Parts Ltd.", challenge: "Siloed data and lack of real-time insights from factory floor operations.", solution: "Implemented a data lake and analytics platform on GCP, integrating IoT data.", result: "Enabled predictive maintenance, reducing equipment downtime by 25%.", imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=60", tags: ["Manufacturing", "GCP", "Data Analytics", "IoT"] },
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Cloud Solutions & Services"
        subtitle="Unlock agility, scalability, and innovation with our comprehensive cloud solutions, tailored to your business needs and powered by leading platforms."
        CtaIcon={Cloud}
        gradientColors="from-blue-500 to-sky-600"
      />

      <ZigZagSection {...whyCloudSolution} />
      <BenefitsSection title="Key Benefits of Adopting Cloud Solutions" benefits={cloudBenefits} />
      
      <ServiceListSection 
        title="Our Comprehensive Cloud Services"
        subtitle="From strategy and migration to management and optimization, we cover every aspect of your cloud journey."
        services={cloudServices}
        accentColor="blue"
      />
      
      <TechStackSection 
        title="Cloud Platforms We Support & Master"
        subtitle="Expertise across leading cloud providers and essential cloud technologies to build your ideal solution."
        technologies={platformsWeSupport}
        bgColor="bg-gray-50"
      />
      
      <ProcessStepsSection 
        title="Our Cloud Adoption Framework"
        subtitle="A structured approach to guide your business through a successful and seamless transition to the cloud."
        steps={cloudAdoptionFramework}
        accentColor="blue"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Cloud Transformation Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how businesses have leveraged our cloud expertise to innovate, scale, and optimize operations.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/services/cloud-solutions/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <WhyChooseUsService serviceName="Cloud Solutions" />
      
      <CallToActionSection 
        title="Ready to Move Your Business to the Cloud?"
        subtitle="Partner with Zhoosoft for expert cloud strategy, migration, and management services. Let's build your future in the cloud."
      />
    </div>
  );
};

export default CloudSolutions;