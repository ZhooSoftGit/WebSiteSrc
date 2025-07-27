import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductsHighlight from "@/components/home/ProductsHighlight";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ZhoosoftVoices from "@/components/home/ZhoosoftVoices";
import HomeCtaSection from "@/components/home/HomeCtaSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ProductsHighlight />
      <TestimonialsSection />
      <ZhoosoftVoices />
      <HomeCtaSection />
    </div>
  );
};

export default Home;