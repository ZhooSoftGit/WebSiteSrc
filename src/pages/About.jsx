import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, TrendingUp, Clock, Building, Users2, HeartHandshake as Handshake, CheckSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SectionCard = ({ id, title, description, icon, imageSrc, children, pageLink }) => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 }
    }
  };

  return (
    <motion.section
      id={id}
      className="py-16 md:py-20 scroll-mt-20"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {imageSrc && (
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: id === "history" || id === "why-choose-us" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur-lg opacity-60 animate-pulse-slow"></div>
                <img  alt={title} className="relative w-full h-auto max-h-[400px] object-cover rounded-xl shadow-2xl" src={imageSrc} />
              </div>
            </motion.div>
          )}
          <motion.div 
            className={`md:w-1/2 ${imageSrc && (id === "history" || id === "why-choose-us") ? "md:order-last" : ""}`}
            initial={{ opacity: 0, x: imageSrc && (id === "history" || id === "why-choose-us") ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay:0.1 }}
          >
            <div className="flex items-center mb-4 text-blue-600">
              {icon}
              <h2 className="text-3xl md:text-4xl font-bold ml-3 text-gray-800">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            {children}
            {pageLink && (
              <Button asChild variant="outline" className="mt-6 text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700">
                <RouterLink to={pageLink}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></RouterLink>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


const About = () => {
  const teamData = [
    { name: "Aarav Sharma", position: "CEO & Visionary", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" },
    { name: "Priya Singh", position: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80" },
    { name: "Rohan Mehta", position: "VP of Product Innovation", image: "https://images.unsplash.com/photo-1557862921-37829c7ef0f1?auto=format&fit=crop&w=200&q=80" },
    { name: "Sneha Patel", position: "Head of Client Solutions", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" }
  ];

  const whyChooseUsData = [
    "Expert team with diverse technology skills and industry experience.",
    "Proven track record of successful projects across various industries.",
    "Client-focused approach, ensuring solutions meet specific needs.",
    "Commitment to innovation and staying ahead of technology trends.",
    "Transparent communication and collaborative project management.",
    "Dedicated ongoing support and maintenance for long-term success."
  ];

  const partnersData = [
    { name: "Innovatech Global", logo: "https://images.unsplash.com/photo-1599305445671-ac28a540aaa9?auto=format&fit=crop&w=100&q=60", description: "A leading provider of cloud infrastructure." },
    { name: "DataDriven Inc.", logo: "https://images.unsplash.com/photo-1611095562057-2e70a9bf061d?auto=format&fit=crop&w=100&q=60", description: "Experts in data analytics and AI solutions." },
    { name: "CyberSecure Solutions", logo: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=100&q=60", description: "Specialists in cybersecurity services." },
    { name: "ConnectSphere Comms", logo: "https://images.unsplash.com/photo-1616530940355-351b9d6a6ce4?auto=format&fit=crop&w=100&q=60", description: "Pioneers in communication technologies." },
  ];


  return (
    <div className="pt-20 md:pt-24 pb-16">
      <header className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Zhoosoft</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our journey, values, the team behind our success, and why businesses choose us.
          </p>
        </motion.div>
      </header>
      
      <nav className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex justify-around py-3 text-sm md:text-base font-medium">
            {["History", "Leadership", "Why Choose Us", "Our Partners"].map((item) => (
              <li key={item}>
                <ScrollLink 
                  to={item.toLowerCase().replace(/\s+/g, '-')} 
                  smooth={true} 
                  duration={500} 
                  offset={-80} 
                  className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer py-2"
                  activeClass="text-blue-600 border-b-2 border-blue-600"
                  spy={true}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <SectionCard 
        id="history" 
        title="Our History" 
        description="Founded in 2010, Zhoosoft began with a mission to empower businesses through cutting-edge technology. From a small team of passionate innovators, we've grown into a trusted partner for companies worldwide, delivering impactful digital solutions."
        icon={<Building className="h-10 w-10" />}
        imageSrc="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=600&q=80"
        pageLink="/about/history"
      >
        <p className="text-gray-600 mb-4">Over the past decade, we've consistently adapted to the evolving tech landscape, pioneering new approaches and expanding our expertise. Our journey is marked by milestones of innovation, client success, and a relentless pursuit of excellence.</p>
      </SectionCard>
      
      <SectionCard 
        id="leadership" 
        title="Our Leadership" 
        description="Meet the visionary leaders guiding Zhoosoft. Our diverse team brings a wealth of experience, strategic insight, and a shared commitment to driving innovation and delivering exceptional value to our clients."
        icon={<Users2 className="h-10 w-10" />}
        pageLink="/about/leadership"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6">
          {teamData.map(member => (
            <div key={member.name} className="text-center p-3 bg-gray-50 rounded-lg shadow-sm">
              <img  alt={member.name} src={member.image} className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
              <h4 className="font-semibold text-gray-700">{member.name}</h4>
              <p className="text-xs text-blue-600">{member.position}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard 
        id="why-choose-us" 
        title="Why Choose Us" 
        description="Choosing Zhoosoft means partnering with a team dedicated to your success. We blend technical expertise with a deep understanding of business challenges to deliver solutions that are not just innovative, but also practical and impactful."
        icon={<CheckSquare className="h-10 w-10" />}
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c7DA?auto=format&fit=crop&w=600&q=80"
        pageLink="/about/why-choose-us"
      >
        <ul className="space-y-2">
          {whyChooseUsData.slice(0,3).map((reason, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard 
        id="our-partners" 
        title="Our Partners" 
        description="We collaborate with leading technology providers and strategic allies to enhance our capabilities and deliver comprehensive solutions. Our strong partner ecosystem ensures access to the latest innovations and a wider range of expertise."
        icon={<Handshake className="h-10 w-10" />}
        pageLink="/about/our-partners"
      >
        <div className="grid grid-cols-2 gap-6 mt-6">
          {partnersData.slice(0,2).map(partner => (
            <div key={partner.name} className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm">
              <img  alt={partner.name} src={partner.logo} className="w-12 h-12 rounded-md mr-3 object-contain" />
              <div>
                <h4 className="font-semibold text-gray-700 text-sm">{partner.name}</h4>
                <p className="text-xs text-gray-500">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

    </div>
  );
};

export default About;