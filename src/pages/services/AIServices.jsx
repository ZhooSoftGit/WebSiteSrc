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

import { Cpu, Zap, Bot, BarChart2, MessageSquare, Brain, Search, Target, Lightbulb, GitMerge, CheckCircle, Settings, Database, ShieldCheck, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const AIServices = () => {
  const whatAreAIServices = {
    title: "What are AI Services & Agents?",
    description: "AI Services encompass a range of technologies that enable machines to perform tasks typically requiring human intelligence, such as learning, problem-solving, and decision-making. AI Agents are autonomous software entities that perceive their environment, make decisions, and take actions to achieve specific goals. They can automate complex tasks, provide personalized experiences, and unlock powerful insights from data.",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Abstract representation of artificial intelligence network",
    Icon: Cpu,
    children: (
      <>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Types of AI Agents:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li><strong>Simple Reflex Agents:</strong> Act based on current percepts only.</li>
          <li><strong>Model-Based Reflex Agents:</strong> Maintain an internal state to track aspects of the world.</li>
          <li><strong>Goal-Based Agents:</strong> Act to achieve explicit goals.</li>
          <li><strong>Utility-Based Agents:</strong> Try to maximize their own expected 'happiness' or utility.</li>
          <li><strong>Learning Agents:</strong> Can learn from experience and improve performance.</li>
        </ul>
      </>
    )
  };

  const aiCapabilities = [
    { icon: Brain, title: "Machine Learning (ML)", description: "Develop and deploy ML models for prediction, classification, and anomaly detection using supervised, unsupervised, and reinforcement learning." },
    { icon: MessageSquare, title: "Natural Language Processing (NLP)", description: "Build solutions for sentiment analysis, text summarization, chatbots, voice assistants, and language translation." },
    { icon: Search, title: "Computer Vision", description: "Implement systems for image recognition, object detection, facial recognition, and video analysis." },
    { icon: Bot, title: "AI-Powered Automation (RPA+)", description: "Enhance Robotic Process Automation with AI capabilities for intelligent decision-making in automated workflows." },
    { icon: BarChart2, title: "Predictive Analytics", description: "Utilize historical data and AI models to forecast future trends, customer behavior, and business outcomes." },
    { icon: Share2, title: "AI Chatbots & Virtual Assistants", description: "Create intelligent conversational agents to automate customer support, sales engagement, and internal processes." },
  ];

  const aiUseCases = [
    { icon: Zap, title: "Personalized Customer Experiences", description: "AI analyzes customer data to deliver tailored recommendations, content, and offers, enhancing engagement." },
    { icon: Settings, title: "Intelligent Process Automation", description: "Automate complex business processes, from data entry and document processing to fraud detection and supply chain optimization." },
    { icon: ShieldCheck, title: "Enhanced Cybersecurity", description: "AI algorithms detect and respond to cyber threats in real-time, predicting potential vulnerabilities and anomalies." },
    { icon: BarChart2, title: "Predictive Maintenance", description: "In manufacturing and utilities, AI predicts equipment failures, enabling proactive maintenance and reducing downtime." },
    { icon: Brain, title: "Smart Diagnostics in Healthcare", description: "AI assists in analyzing medical images, identifying patterns in patient data, and supporting clinical decision-making." },
    { icon: MessageSquare, title: "Automated Content Generation", description: "Leverage AI to create marketing copy, product descriptions, reports, and other textual content efficiently." },
  ];
  
  const aiSolutionDeliveryProcess = [
    { icon: Search, title: "Discovery & Use Case Definition", description: "Understand your business challenges and identify high-impact AI use cases aligned with your strategic goals." },
    { icon: Database, title: "Data Collection & Preparation", description: "Gather, clean, and preprocess relevant data, ensuring quality and suitability for AI model training." },
    { icon: Brain, title: "Model Development & Training", description: "Select appropriate AI algorithms, develop custom models, and train them using your prepared datasets." },
    { icon: GitMerge, title: "Integration & Deployment", description: "Integrate trained AI models into your existing systems and deploy them in a scalable and reliable environment." },
    { icon: CheckCircle, title: "Testing & Validation", description: "Rigorously test AI solutions for accuracy, performance, and fairness, ensuring they meet defined objectives." },
    { icon: Settings, title: "Monitoring & Continuous Improvement", description: "Monitor AI model performance post-deployment, retrain as needed, and continuously optimize for better results." },
  ];

  const aiTechStack = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", color: "text-blue-500" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg", color: "text-orange-600" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg", color: "text-red-500" },
    { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", color: "text-orange-400" },
    { name: "AWS SageMaker", logo: "https://img.icons8.com/?size=48&id=テッドVeTuR5hH&format=png", color: "text-yellow-500" },
    { name: "Azure ML", logo: "https://img.icons8.com/?size=48&id=b67GrtX5L0x0&format=png", color: "text-blue-600" },
    { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg", color: "text-green-500" },
    { name: "Dialogflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dialogflow/dialogflow-original.svg", color: "text-yellow-600" },
  ];
  
  const caseStudies = [
    { id: "1", title: "E-commerce Giant Personalizes Shopping with AI", client: "ShopSmart Inc.", challenge: "Low conversion rates despite high traffic.", solution: "Developed an AI recommendation engine analyzing user behavior and product data.", result: "Increased conversion rates by 18% and average order value by 12%.", imageSrc: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=400&q=60", tags: ["E-commerce", "Recommendation Engine", "ML"] },
    { id: "2", title: "Logistics Firm Optimizes Routes with AI Agents", client: "SwiftHaul Logistics", challenge: "High fuel costs and inefficient delivery routes.", solution: "Implemented an AI-powered route optimization system using intelligent agents.", result: "Reduced fuel consumption by 15% and improved delivery times by 20%.", imageSrc: "https://images.unsplash.com/photo-1586435988094-b75880253197?auto=format&fit=crop&w=400&q=60", tags: ["Logistics", "Route Optimization", "AI Agents"] },
    { id: "3", title: "Healthcare Provider Automates Patient Triage", client: "CareWell Clinics", challenge: "Long wait times and inefficient initial patient assessment.", solution: "Developed an AI chatbot for preliminary patient triage and appointment scheduling.", result: "Reduced patient wait times by 40% and improved staff efficiency.", imageSrc: "https://images.unsplash.com/photo-1470290299792-579028ab0a4a?auto=format&fit=crop&w=400&q=60", tags: ["Healthcare", "Chatbot", "NLP"] },
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="AI Services & Intelligent Agents"
        subtitle="Unlock the power of Artificial Intelligence to automate processes, gain deep insights, and create transformative experiences for your business."
        CtaIcon={Cpu}
        gradientColors="from-indigo-600 to-purple-700"
      />

      <ZigZagSection {...whatAreAIServices} />
      <ServiceListSection 
        title="Our AI Capabilities"
        subtitle="We offer a wide range of AI services to help you leverage the full potential of artificial intelligence."
        services={aiCapabilities}
        accentColor="purple"
      />
      <BenefitsSection title="AI Agents in Action: Real-World Use Cases" subtitle="Discover how AI agents are revolutionizing industries and delivering tangible business value." benefits={aiUseCases} />
      
      <ProcessStepsSection 
        title="Our Approach to AI Solution Delivery"
        subtitle="A structured methodology to ensure your AI initiatives are successful, from concept to deployment and beyond."
        steps={aiSolutionDeliveryProcess}
        accentColor="purple"
      />
      
      <TechStackSection 
        title="AI Technology Stack We Master"
        subtitle="Utilizing leading-edge AI frameworks, tools, and platforms to build robust and scalable intelligent solutions."
        technologies={aiTechStack}
        bgColor="bg-gray-50"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">AI Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore how our AI solutions have driven innovation and efficiency for our clients.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={{visible: {transition: {staggerChildren:0.1}}}}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id} 
                {...study} 
                link={`/services/ai-services/case-study/${study.id}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      <WhyChooseUsService serviceName="AI Solutions" />
      
      <CallToActionSection 
        title="Ready to Infuse AI into Your Business?"
        subtitle="Let Zhoosoft be your partner in harnessing the transformative power of Artificial Intelligence."
        secondaryButtonText="Learn About Our Process"
        secondaryButtonLink="/about" 
      />
    </div>
  );
};

export default AIServices;