
    import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ScrollToTop from "@/components/ScrollToTop";

import Services from "@/pages/Services";
import CustomSoftwareSolutions from "@/pages/services/CustomSoftwareSolutions";
import ITConsulting from "@/pages/services/ITConsulting";
import MobileApplicationDevelopment from "@/pages/services/MobileApplicationDevelopment";
import CloudSolutions from "@/pages/services/CloudSolutions";
import LegacySystemSupport from "@/pages/services/LegacySystemSupport";
import ApplicationModernization from "@/pages/services/ApplicationModernization";
import ServiceCaseStudyPage from "@/pages/services/CaseStudyPage"; 

import Products from "@/pages/Products";
import RideBookingApp from "@/pages/products/RideBookingApp";
import EcommercePlatform from "@/pages/products/EcommercePlatform";
import HotelManagement from "@/pages/products/HotelManagement";
import TaskManagement from "@/pages/products/TaskManagement";

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
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/custom-app-development" element={<CustomSoftwareSolutions />} />
            <Route path="/services/cross-platform-mobile-solutions" element={<MobileApplicationDevelopment />} />
            <Route path="/services/cloud-architecture-deployment" element={<CloudSolutions />} />
            <Route path="/services/technology-consulting" element={<ITConsulting />} />
            <Route path="/services/legacy-system-support" element={<LegacySystemSupport />} />
            <Route path="/services/application-modernization-migration" element={<ApplicationModernization />} />

            <Route path="/services/custom-software-solutions/case-study/:caseStudyId" element={<ServiceCaseStudyPage parentService="Custom Software Solutions"/>} />
            <Route path="/services/it-consulting/case-study/:caseStudyId" element={<ServiceCaseStudyPage parentService="IT Consulting"/>} />
            <Route path="/services/mobile-application-development/case-study/:caseStudyId" element={<ServiceCaseStudyPage parentService="Mobile Application Development"/>} />
            <Route path="/services/cloud-solutions/case-study/:caseStudyId" element={<ServiceCaseStudyPage parentService="Cloud Solutions"/>} />
            
            <Route path="/products" element={<Products />} />
            <Route path="/products/ride-booking-app" element={<RideBookingApp />} />
            <Route path="/products/ecommerce-platform" element={<EcommercePlatform />} />
            <Route path="/products/hotel-management" element={<HotelManagement />} />
            <Route path="/products/task-management" element={<TaskManagement />} />

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
  