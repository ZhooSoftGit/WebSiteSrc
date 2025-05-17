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
      { name: "Digital Transformation", path: "/services/digital-transformation", description: "Drive innovation and efficiency." },
      { name: "Custom Software Solutions", path: "/services/custom-software-solutions", description: "Tailored software for your needs." },
      { name: "IT Consulting", path: "/services/it-consulting", description: "Expert IT guidance & strategy." },
      { name: "Web Application Development", path: "/services/web-application-development", description: "Modern web apps that perform." },
      { name: "Mobile Application Development", path: "/services/mobile-application-development", description: "Engaging iOS & Android apps." },
      { name: "Cloud Solutions (Azure, AWS)", path: "/services/cloud-solutions", description: "Scalable cloud infrastructure." },
      { name: "AI – Services and Agents", path: "/services/ai-services", description: "Intelligent AI-powered solutions." },
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