import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

import Services from "@/pages/Services";
import DigitalTransformation from "@/pages/services/DigitalTransformation";
import CustomSoftwareSolutions from "@/pages/services/CustomSoftwareSolutions";
import ITConsulting from "@/pages/services/ITConsulting";
import WebApplicationDevelopment from "@/pages/services/WebApplicationDevelopment";
import MobileApplicationDevelopment from "@/pages/services/MobileApplicationDevelopment";
import CloudSolutions from "@/pages/services/CloudSolutions";
import AIServices from "@/pages/services/AIServices";
import CaseStudyPage from "@/pages/services/CaseStudyPage";

import Products from "@/pages/Products";
import RideBookingApp from "@/pages/products/RideBookingApp";
import EcommercePlatform from "@/pages/products/EcommercePlatform";
import HotelManagement from "@/pages/products/HotelManagement";
import TaskManagement from "@/pages/products/TaskManagement";

import Industries from "@/pages/Industries";
import TravelLogistics from "@/pages/industries/TravelLogistics";
import FinancialServices from "@/pages/industries/FinancialServices";
import LifeSciencesHealthcare from "@/pages/industries/LifeSciencesHealthcare";
import IndustryAutomation from "@/pages/industries/IndustryAutomation";
import EnergyUtilities from "@/pages/industries/EnergyUtilities";
import Automotive from "@/pages/industries/Automotive";
import GamingEntertainment from "@/pages/industries/GamingEntertainment";

import Career from "@/pages/Career";

import About from "@/pages/About";
import AboutHistory from "@/pages/about/AboutHistory";
import AboutLeadership from "@/pages/about/AboutLeadership";
import AboutWhyChooseUs from "@/pages/about/AboutWhyChooseUs";
import AboutOurPartners from "@/pages/about/AboutOurPartners";

import Blogs from "@/pages/Blogs";
import BlogDetails from "@/pages/blogs/BlogDetails";

import GenericPage from "@/pages/GenericPage";
import ContactPage from "@/pages/ContactPage";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/digital-transformation/case-study/:caseStudyId" element={<CaseStudyPage parentService="Digital Transformation"/>} />
            <Route path="/services/custom-software-solutions" element={<CustomSoftwareSolutions />} />
            <Route path="/services/custom-software-solutions/case-study/:caseStudyId" element={<CaseStudyPage parentService="Custom Software Solutions"/>} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/it-consulting/case-study/:caseStudyId" element={<CaseStudyPage parentService="IT Consulting"/>} />
            <Route path="/services/web-application-development" element={<WebApplicationDevelopment />} />
            <Route path="/services/web-application-development/case-study/:caseStudyId" element={<CaseStudyPage parentService="Web Application Development"/>} />
            <Route path="/services/mobile-application-development" element={<MobileApplicationDevelopment />} />
             <Route path="/services/mobile-application-development/case-study/:caseStudyId" element={<CaseStudyPage parentService="Mobile Application Development"/>} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/cloud-solutions/case-study/:caseStudyId" element={<CaseStudyPage parentService="Cloud Solutions"/>} />
            <Route path="/services/ai-services" element={<AIServices />} />
            <Route path="/services/ai-services/case-study/:caseStudyId" element={<CaseStudyPage parentService="AI Services"/>} />
            
            <Route path="/products" element={<Products />} />
            <Route path="/products/ride-booking-app" element={<RideBookingApp />} />
            <Route path="/products/ecommerce-platform" element={<EcommercePlatform />} />
            <Route path="/products/hotel-management" element={<HotelManagement />} />
            <Route path="/products/task-management" element={<TaskManagement />} />

            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/travel-logistics" element={<TravelLogistics />} />
            <Route path="/industries/financial-services" element={<FinancialServices />} />
            <Route path="/industries/life-sciences-healthcare" element={<LifeSciencesHealthcare />} />
            <Route path="/industries/industry-automation" element={<IndustryAutomation />} />
            <Route path="/industries/energy-utilities" element={<EnergyUtilities />} />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/gaming-entertainment" element={<GamingEntertainment />} />

            <Route path="/career" element={<Career />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<AboutHistory />} />
            <Route path="/about/leadership" element={<AboutLeadership />} />
            <Route path="/about/why-choose-us" element={<AboutWhyChooseUs />} />
            <Route path="/about/our-partners" element={<AboutOurPartners />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/generic-page" element={<GenericPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;