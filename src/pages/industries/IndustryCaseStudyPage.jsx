import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Users, BarChart2, Settings, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToActionSection from "@/components/services/CallToActionSection";

const dummyIndustryCaseStudiesData = {
  "Travel & Logistics": [
    { id: "1", title: "Logistics Co. Reduces Fuel Costs by 15%", client: "SwiftDeliveries Inc.", challenge: "High operational costs due to inefficient routing and lack of real-time fleet visibility.", solutionDetails: "We implemented an AI-driven route optimization engine integrated with a real-time GPS tracking system. The solution provided drivers with optimized routes considering traffic and delivery windows, while managers gained a centralized dashboard for fleet monitoring and performance analytics.", keyMetrics: ["15% reduction in fuel consumption", "20% improvement in on-time deliveries", "10% increase in fleet utilization"], imageSrc: "https://images.unsplash.com/photo-1586435988094-b75880253197?auto=format&fit=crop&w=800&q=80", techUsed: ["AI/ML (Route Optimization)", "GPS Tracking", "Cloud Platform", "Mobile Driver App"] },
    { id: "2", title: "Travel Agency Enhances Booking Experience", client: "ExploreMore Travels", challenge: "Outdated online booking portal with a clunky user interface, leading to high cart abandonment rates and poor mobile experience.", solutionDetails: "Zhoosoft redesigned and developed a new responsive web portal and native mobile applications (iOS & Android). The new platform featured an intuitive search, personalized travel recommendations based on user history, and a streamlined booking process with multiple payment gateway integrations.", keyMetrics: ["30% increase in online bookings", "Significant improvement in customer satisfaction scores (NPS)", "50% reduction in booking errors"], imageSrc: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=800&q=80", techUsed: ["React (Web Portal)", "Swift (iOS)", "Kotlin (Android)", "Personalization AI", "API Integration"] },
  ],
  "Healthcare": [
     { id: "1", title: "Hospital Improves Patient Flow with Custom HMS", client: "City General Hospital", challenge: "Long patient wait times, inefficient bed management, and difficulties in inter-departmental coordination.", solutionDetails: "We developed and implemented a custom Hospital Management System (HMS) tailored to City General's specific workflows. Key modules included automated appointment scheduling, real-time bed management, integrated billing, and a secure communication platform for staff.", keyMetrics: ["Reduced average patient wait time by 25%", "Increased operational efficiency by 18%", "Improved staff communication and coordination"], imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", techUsed: ["Custom HMS Development", ".NET Core", "SQL Server", "Mobile Staff App"] },
  ],
   "Energy & Utilities": [
    { id: "1", title: "Utility Co. Optimizes Grid with Smart Meters", client: "PowerUp Utilities", challenge: "Lack of real-time data from consumers, leading to inefficient outage management and high meter reading costs.", solutionDetails: "Zhoosoft led the deployment of an Advanced Metering Infrastructure (AMI) across their service area. This included the installation of smart meters and the development of a Meter Data Management System (MDMS) for data collection, analysis, and remote meter control.", keyMetrics: ["Improved outage detection and response time by 40%", "Reduced manual meter reading costs by 60%", "Enabled dynamic pricing models"], imageSrc: "https://images.unsplash.com/photo-1620359043307-e19724f5e759?auto=format&fit=crop&w=800&q=80", techUsed: ["AMI", "MDMS", "IoT", "Cloud Analytics"] },
  ],
  "Gaming & Entertainment": [
    { id: "1", title: "Mobile Game Studio Achieves 1M+ Downloads", client: "PixelPlay Games", challenge: "Launching a new mobile puzzle game in a highly competitive market and ensuring backend scalability for a rapidly growing user base.", solutionDetails: "We provided end-to-end game development services, from concept and art to programming and testing. A scalable cloud-based backend was built using microservices architecture to handle concurrent users. We also assisted with ASO and initial user acquisition campaigns.", keyMetrics: ["Reached over 1 million downloads in the first 6 months", "Maintained high user retention rates (40% D30)", "Achieved average 4.5-star app store rating"], imageSrc: "https://images.unsplash.com/photo-1593305842339-95291893595a?auto=format&fit=crop&w=800&q=80", techUsed: ["Unity Engine", "C#", "AWS (Lambda, DynamoDB)", "Photon Engine (Multiplayer)"] },
  ],
   "Banking & Finance": [
    { id: "1", title: "Bank Enhances Security with AI Fraud Detection", client: "SecureTrust Bank", challenge: "Increasing instances of sophisticated online fraudulent transactions leading to financial losses and customer dissatisfaction.", solutionDetails: "Our team developed and deployed an AI-driven real-time fraud detection system. The system analyzed transaction patterns, user behavior, and device information to identify and flag suspicious activities with high accuracy, integrating seamlessly with their existing core banking system.", keyMetrics: ["Reduced fraudulent transactions by 40% within 6 months", "Improved customer trust and reduced fraud-related complaints", "Lowered manual review workload for fraud analysts by 50%"], imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", techUsed: ["Python (Scikit-learn, TensorFlow)", "Big Data Analytics", "Real-time Stream Processing", "API Integration"] },
  ],
  "Automation": [
    { id: "1", title: "Manufacturer Boosts Production with RPA", client: "Precision Parts Ltd.", challenge: "Manual data entry for order processing and inventory updates was time-consuming, error-prone, and slowing down the entire production cycle.", solutionDetails: "We implemented a suite of RPA bots to automate key processes. This included bots for reading incoming orders from emails and PDFs, validating data against their ERP system, updating inventory levels, and generating production schedules. Attended and unattended bots were deployed.", keyMetrics: ["Reduced order processing time by 60%", "Eliminated data entry errors, improving data accuracy to 99.9%", "Freed up 2 FTEs to focus on higher-value tasks"], imageSrc: "https://images.unsplash.com/photo-1619498190078-c7459559902a?auto=format&fit=crop&w=800&q=80", techUsed: ["UiPath", "OCR Technology", "ERP Integration", "Python scripting"] },
  ],
  "Automotive": [
    { id: "1", title: "OEM Launches Next-Gen Connected Car Platform", client: "AutoDrive Corp", challenge: "Needed a scalable and secure platform to deliver new connected vehicle services, including OTA updates, remote diagnostics, and personalized in-car experiences.", solutionDetails: "Zhoosoft architected and developed a cloud-based connected car platform. This involved creating secure APIs for vehicle communication, a data lake for telematics data, and a management portal for service provisioning. The platform supported OTA software updates and integrated with third-party service providers.", keyMetrics: ["Enabled new subscription-based revenue streams", "Improved customer engagement through personalized IVI features", "Reduced software recall costs via OTA updates"], imageSrc: "https://images.unsplash.com/photo-1617531038990-70d5c9b5c8cb?auto=format&fit=crop&w=800&q=80", techUsed: ["AWS IoT Core", "Microservices Architecture", "MQTT", "Cybersecurity (HSM)", "Big Data Analytics"] },
  ],
  "default": [{ id: "not-found", title: "Case Study Not Found", client: "N/A", challenge: "The requested case study could not be located for this industry.", solutionDetails: "Please check the link or navigate back to the industries page to find relevant case studies.", keyMetrics: [], imageSrc: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", techUsed: [] }]
};


const IndustryCaseStudyPage = ({ parentIndustry }) => {
  const { caseStudyId } = useParams();
  const caseStudiesForIndustry = dummyIndustryCaseStudiesData[parentIndustry] || dummyIndustryCaseStudiesData.default;
  const caseStudy = caseStudiesForIndustry.find(cs => cs.id === caseStudyId) || caseStudiesForIndustry[0];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };
  
  const industryPageLink = `/industries/${parentIndustry.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`;


  return (
    <div className="bg-gray-50">
      <header className="py-12 md:py-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <motion.div 
          className="container mx-auto px-4 md:px-6 text-center"
          initial="hidden" animate="visible" variants={fadeIn}
        >
          <p className="text-lg text-blue-300 mb-2">{parentIndustry} Success Story</p>
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
              <Link to={industryPageLink}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to {parentIndustry}
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
        title="Ready for Similar Success in Your Industry?"
        subtitle={`Let's discuss how our expertise in ${parentIndustry.toLowerCase()} can transform your business.`}
        primaryButtonLink="/contact"
        secondaryButtonText={`More ${parentIndustry} Info`}
        secondaryButtonLink={industryPageLink}
      />
    </div>
  );
};

export default IndustryCaseStudyPage;