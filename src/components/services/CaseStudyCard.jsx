
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ title, client, challenge, solution, result, imageSrc, alt, link, tags, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
  };

  // If the link is to a non-existent /projects page, disable the button or show a placeholder
  const isLinkBroken = link === "/projects";

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col card-hover-subtle"
      variants={cardVariants}
    >
      <img  src={imageSrc} alt={alt || title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-teal-700 mb-2">{title}</h3>
        {client && <p className="text-sm text-gray-500 mb-1"><strong>Client:</strong> {client}</p>}
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map(tag => <span key={tag} className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">{tag}</span>)}
          </div>
        )}
        <p className="text-sm text-gray-600 mb-1"><strong>Challenge:</strong> {challenge}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Solution:</strong> {solution}</p>
        <p className="text-sm text-gray-600 mb-3"><strong>Result:</strong> {result}</p>
        <div className="mt-auto">
          {isLinkBroken ? (
            <Button 
              variant="outline" 
              className="w-full text-gray-400 border-gray-300 cursor-not-allowed"
              onClick={() => { /* No-op or toast message for unimplemented feature */ }}
            >
              Details Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button asChild variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-50">
              <Link to={link}>View Full Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
