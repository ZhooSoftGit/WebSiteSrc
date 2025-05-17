import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Construction, Lightbulb } from "lucide-react";

const GenericPage = () => {
  const location = useLocation();
  const pageName = location.state?.pageName || (location.pathname.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
  
  const pageIcons = {
    "Digital Transformation": <Zap className="h-16 w-16 text-blue-500" />,
    "Custom Software Solutions": <Construction className="h-16 w-16 text-green-500" />,
    "It Consulting": <Lightbulb className="h-16 w-16 text-yellow-500" />,
    "default": <Construction className="h-16 w-16 text-gray-500" />
  };
  const icon = pageIcons[pageName] || pageIcons["default"];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <div className="mb-8 inline-block p-4 bg-gray-100 rounded-full shadow-md">
          {icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{pageName}</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Welcome to the {pageName.toLowerCase()} page. We're currently crafting something amazing for this section. 
          Our team is working hard to bring you detailed information and valuable insights.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">What to Expect Here Soon:</h2>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mb-8">
            <li>Detailed overview of our {pageName.toLowerCase()} offerings.</li>
            <li>Key benefits and how we can help your business.</li>
            <li>Case studies and success stories (if applicable).</li>
            <li>Insights into our approach and methodology.</li>
          </ul>
          <p className="text-gray-600 mb-8">
            Thank you for your patience. Please check back soon for updates!
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default GenericPage;