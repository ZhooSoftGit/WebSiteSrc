
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Users, BarChart2, Settings, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToActionSection from "@/components/services/CallToActionSection";

const dummyCaseStudiesData = {
  "Digital Transformation": [
    { id: "1", title: "Manufacturing Giant Achieves 20% Efficiency Gain", client: "Global Manufacturing Co.", challenge: "Outdated legacy systems and manual processes were severely hindering production efficiency and responsiveness to market changes.", solutionDetails: "We partnered with Global Manufacturing Co. to implement a comprehensive smart factory solution. This involved deploying IoT sensors across their production line for real-time data acquisition, integrating an AI-powered analytics platform for predictive maintenance, and implementing Robotic Process Automation (RPA) for several key back-office tasks, including order processing and inventory management. A custom dashboard provided actionable insights to plant managers.", keyMetrics: ["Reduced operational costs by 15%", "Improved production output by 20%", "Decreased unplanned downtime by 25%"], imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", techUsed: ["IoT", "RPA", "AI Analytics", "Cloud Platform"] },
    { id: "2", title: "Retailer Boosts Online Sales by 40%", client: "Fashion Retail Chain", challenge: "A fragmented online presence with siloed customer data led to inconsistent user experiences and missed sales opportunities.", solutionDetails: "Zhoosoft developed a unified e-commerce platform built on a modern microservices architecture. We integrated all customer data points into a central Customer Data Platform (CDP), enabling personalized product recommendations and targeted marketing campaigns. The mobile app was revamped for a seamless UX.", keyMetrics: ["Increased online conversion rates by 25%", "Improved customer retention by 30%", "Grew mobile sales by 40%"], imageSrc: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=800&q=80", techUsed: ["E-commerce Platform", "CDP", "Mobile App Dev", "Personalization AI"] },
    { id: "3", title: "Healthcare Provider Enhances Patient Care", client: "Multi-Specialty Hospital", challenge: "Fragmented patient records across departments led to inefficiencies, diagnostic delays, and difficulties in coordinating care.", solutionDetails: "We implemented an integrated Electronic Health Record (EHR) system, connecting all hospital departments. A secure patient portal was developed for appointment scheduling and record access. AI-powered image analysis tools were integrated to support radiologists.", keyMetrics: ["Improved patient data accessibility across departments", "Reduced patient wait times by 30%", "Enhanced diagnostic accuracy support by 15%"], imageSrc: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80", techUsed: ["EHR System", "Patient Portal", "AI Diagnostics", "HL7/FHIR Integration"] },
  ],
  "IT Consulting": [
     { id: "1", title: "Financial Firm Modernizes IT Infrastructure via Consulting", client: "Alpha Investments", challenge: "Aging IT systems were impacting performance, increasing security vulnerabilities, and hindering the adoption of new financial technologies.", solutionDetails: "Our IT consulting team conducted a thorough assessment of Alpha Investments' existing infrastructure. We developed a phased cloud migration strategy, prioritizing critical applications. We also designed and helped implement modern security protocols, including multi-factor authentication and advanced threat detection.", keyMetrics: ["Improved system uptime by 25%", "Reduced IT operational costs by 18%", "Enhanced overall security posture significantly"], imageSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80", techUsed: ["Cloud Strategy (AWS)", "Cybersecurity Frameworks", "IT Governance"] },
  ],
   "Mobile Application Development": [
    { id: "ride-booking", title: "Ride Booking App Platform Development", client: "Zhoosoft Product Initiative", challenge: "To develop a comprehensive and scalable Uber-like platform catering to passengers, drivers, and administrators.", solutionDetails: "We designed and developed native iOS and Android applications for passengers and drivers, featuring real-time GPS tracking, secure in-app payments, dynamic pricing, and detailed user profiles. A robust admin panel was created for operational management, analytics, and support. The architecture was built for scalability and regional customization.", keyMetrics: ["Market-ready, feature-rich solution", "Scalable architecture for future growth", "Positive user feedback on UI/UX during beta testing"], imageSrc: "https://images.unsplash.com/photo-1554260570-83dc2f46ef79?auto=format&fit=crop&w=800&q=80", techUsed: ["Swift (iOS)", "Kotlin (Android)", "Node.js (Backend)", "Firebase", "Stripe SDK"] },
  ],
  // Add more parentService keys and their case studies as needed
};
// Default case study if specific one is not found
dummyCaseStudiesData.default = [{ id: "not-found", title: "Case Study Not Found", client: "N/A", challenge: "The requested case study could not be located.", solutionDetails: "Please check the link or navigate back to the services page to find relevant case studies.", keyMetrics: [], imageSrc: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", techUsed: [] }];


const CaseStudyPage = ({ parentService }) => {
  const { caseStudyId } = useParams();
  const caseStudiesForService = dummyCaseStudiesData[parentService] || dummyCaseStudiesData.default;
  const caseStudy = caseStudiesForService.find(cs => cs.id === caseStudyId) || caseStudiesForService[0]; // Fallback to first or default

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <div className="bg-gray-50">
      <header className="py-12 md:py-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <motion.div 
          className="container mx-auto px-4 md:px-6 text-center"
          initial="hidden" animate="visible" variants={fadeIn}
        >
          <p className="text-lg text-blue-300 mb-2">{parentService} Success Story</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-300">Client: {caseStudy.client}</p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div 
          className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-2xl"
          initial="hidden" animate="visible" variants={fadeIn}
        >
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link to={`/services/${parentService.toLowerCase().replace(/\s+/g, '-')}`}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to {parentService}
              </Link>
            </Button>
          </div>

          <img  src={caseStudy.imageSrc} alt={caseStudy.title} className="w-full h-auto max-h-[450px] object-cover rounded-lg mb-8 shadow-lg" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <Target className="text-blue-600 mr-3 h-7 w-7" /> The Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <Settings className="text-green-600 mr-3 h-7 w-7" /> Our Solution
            </h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.solutionDetails}</p>
          </section>

          {caseStudy.keyMetrics && caseStudy.keyMetrics.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <BarChart2 className="text-purple-600 mr-3 h-7 w-7" /> Key Results & Impact
              </h2>
              <ul className="space-y-2">
                {caseStudy.keyMetrics.map((metric, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          
          {caseStudy.techUsed && caseStudy.techUsed.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                 <Zap className="text-yellow-500 mr-3 h-7 w-7" /> Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techUsed.map(tech => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>
          )}

        </motion.div>
      </div>
      <CallToActionSection 
        title="Ready for Similar Success?"
        subtitle={`Let's discuss how our ${parentService.toLowerCase()} expertise can transform your business.`}
        primaryButtonLink="/contact"
        secondaryButtonText={`More ${parentService} Info`}
        secondaryButtonLink={`/services/${parentService.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
};

export default CaseStudyPage;
