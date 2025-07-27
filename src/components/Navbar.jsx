
import React from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import DesktopNavbar from "@/components/navbar/DesktopNavbar";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import NavbarLogo from "@/components/navbar/NavbarLogo";
import useNavbarScroll from "@/hooks/useNavbarScroll";

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/services",
    subsections: [
      { name: "Custom App Development", path: "/services/custom-app-development", description: "Tailored software for your business goals." },
      { name: "Cross-Platform Mobile Solutions", path: "/services/cross-platform-mobile-solutions", description: "High-performance apps for all devices." },
      { name: "Cloud Architecture & Deployment", path: "/services/cloud-architecture-deployment", description: "Secure, scalable cloud applications." },
      { name: "Technology Consulting", path: "/services/technology-consulting", description: "Strategic guidance to modernize systems." },
      { name: "Legacy System Support", path: "/services/legacy-system-support", description: "Extend the life of older platforms." },
      { name: "Application Modernization & Migration", path: "/services/application-modernization-migration", description: "Rebuild or migrate outdated apps." },
    ],
  },
  {
    name: "Products",
    path: "/products",
    subsections: [
      { name: "Ride Booking App", path: "/products/ride-booking-app", description: "Uber-like app solution." },
      { name: "E-commerce Platform", path: "/products/ecommerce-platform", description: "Feature-rich online stores." },
      { name: "Hotel-Management", path: "/products/hotel-management", description: "Streamline hotel operations." },
      { name: "Task Management", path: "/products/task-management", description: "Organize and track work." },
    ],
  },
  {
    name: "Industries",
    path: "/industries",
    subsections: [
      { name: "Travel & Logistics", path: "/industries/travel-logistics", description: "Solutions for modern travel." },
      { name: "Banking & Finance", path: "/industries/financial-services", description: "Secure financial tech." },
      { name: "Healthcare", path: "/industries/life-sciences-healthcare", description: "Innovative health solutions." },
      { name: "Automation", path: "/industries/industry-automation", description: "Automate industrial processes." },
      { name: "Energy & Utilities", path: "/industries/energy-utilities", description: "Tech for energy sector." },
      { name: "Automotive", path: "/industries/automotive", description: "Connected car & auto tech." },
      { name: "Gaming & Entertainment", path: "/industries/gaming-entertainment", description: "Engaging gaming experiences." },
    ],
  },
  { name: "Career", path: "/career" },
  { name: "AboutUs", path: "/about" },
  { name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const scrolled = useNavbarScroll();
  const location = useLocation();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <DesktopNavbar navLinks={navLinks} location={location} />
          <MobileNavbar navLinks={navLinks} location={location} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;