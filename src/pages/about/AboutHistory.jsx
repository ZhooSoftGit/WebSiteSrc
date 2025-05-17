import React from "react";
import { motion } from "framer-motion";
import { Building, CalendarDays, Users, TrendingUp, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TimelineEvent = ({ year, title, description, icon, alignLeft = false }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: alignLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };
  return (
    <motion.div 
      className={`flex ${alignLeft ? "md:flex-row-reverse" : "md:flex-row"} justify-between items-center w-full mb-8 md:mb-0`}
      variants={itemVariants}
    >
      <div className="hidden md:flex w-5/12"></div>
      <div className="hidden md:flex justify-center w-1/12">
        <div className="w-1 h-full bg-blue-300 rounded-t-full rounded-b-full"></div>
      </div>
      <div className="w-full md:w-5/12">
        <div className={`bg-white p-6 rounded-xl shadow-xl border border-gray-200 ${alignLeft ? "md:text-right" : "md:text-left"}`}>
          <div className={`flex items-center ${alignLeft ? "md:flex-row-reverse" : ""} mb-2`}>
            <div className={`p-2 bg-blue-100 text-blue-600 rounded-full ${alignLeft ? "md:ml-3" : "md:mr-3"}`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-blue-700">{year}</h3>
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};


const AboutHistory = () => {
  const historyEvents = [
    { year: 2010, title: "Zhoosoft Founded", description: "A small team of passionate developers started Zhoosoft with a vision to create impactful software solutions.", icon: <Building className="h-5 w-5"/> },
    { year: 2012, title: "First Major Client", description: "Landed our first significant project, laying the foundation for future growth and establishing our reputation for quality.", icon: <Users className="h-5 w-5"/>, alignLeft: true },
    { year: 2015, title: "Expansion into Mobile", description: "Recognizing the mobile-first trend, we expanded our services to include native and cross-platform mobile app development.", icon: <TrendingUp className="h-5 w-5"/> },
    { year: 2018, title: "Cloud Services Launch", description: "Introduced comprehensive cloud solutions, helping businesses migrate and optimize their operations on AWS and Azure.", icon: <TrendingUp className="h-5 w-5"/>, alignLeft: true },
    { year: 2020, title: "Global Reach", description: "Celebrated serving clients in over 10 countries, marking a significant milestone in our international expansion.", icon: <MapPin className="h-5 w-5"/> },
    { year: 2023, title: "AI & ML Integration", description: "Began integrating AI and Machine Learning into our core offerings, pushing the boundaries of innovation.", icon: <TrendingUp className="h-5 w-5"/>, alignLeft: true },
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-gray-50">
      <header className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <CalendarDays className="h-16 w-16 mx-auto mb-4 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Journey: The Zhoosoft Story</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From humble beginnings to a global technology partner, trace the milestones that have shaped Zhoosoft.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
          <div className="hidden md:block border-2-2 absolute border-opacity-20 border-blue-700 h-full border" style={{left: "50%"}}></div>
          <motion.div initial="hidden" animate="visible" variants={{visible: {transition: {staggerChildren: 0.3}}}}>
            {historyEvents.map((event, index) => (
              <TimelineEvent key={index} {...event} alignLeft={event.alignLeft || (index % 2 !== 0 && window.innerWidth >= 768)} />
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay: historyEvents.length * 0.1}}
        >
          <p className="text-lg text-gray-700 mb-6">
            Our journey continues, driven by innovation and our commitment to client success.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Partner with Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHistory;