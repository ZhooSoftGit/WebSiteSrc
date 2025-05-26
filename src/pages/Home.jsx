import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductsHighlight from "@/components/home/ProductsHighlight";
import IndustriesServed from "@/components/home/IndustriesServed";
import AchievementsSection from "@/components/home/AchievementsSection";
import AboutZhoosoftSection from "@/components/home/AboutZhoosoftSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ProductsHighlight />
      <IndustriesServed />
      <AchievementsSection />
      <AboutZhoosoftSection />
      <HomeCtaSection />
    </div>
  );
};

export default Home;