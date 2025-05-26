import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown, MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

const JobOpeningsSection = ({ jobOpeningsData }) => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const toggleJobDetails = (jobId) => setExpandedJobId(expandedJobId === jobId ? null : jobId);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };
  
  return (
    <motion.section 
      id="open-positions" 
      className="py-16 md:py-20 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Current Openings</h2>
        {jobOpeningsData.length === 0 ? (
          <div className="text-center py-12">
            <img  alt="No job openings illustration" className="w-56 h-56 mx-auto mb-6" src="https://images.unsplash.com/photo-1607305387299-a3d961a3a52f?auto=format&fit=crop&w=400&q=80" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Openings Currently</h3>
            <p className="text-gray-500">We don't have any open positions now, but check back soon or register your interest below!</p>
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl mx-auto">
            {jobOpeningsData.map((job) => (
              <motion.div
                key={job.id} layout
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                  onClick={() => toggleJobDetails(job.id)}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-600 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
                      <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" />{job.department}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{job.location}</span>
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{job.type}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="mt-2 md:mt-0 text-purple-600 hover:bg-purple-50">
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedJobId === job.id ? "rotate-180" : ""}`} />
                  </Button>
                </div>
                <AnimatePresence>
                  {expandedJobId === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <h4 className="text-md font-semibold text-gray-800 mb-1">Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3 text-sm">
                        {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                      <h4 className="text-md font-semibold text-gray-800 mb-1">Qualifications:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4 text-sm">
                        {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                      </ul>
                      <ScrollLink to="register-interest" smooth={true} duration={500} offset={-100}>
                         <Button size="md" className="bg-purple-600 hover:bg-purple-700">Apply for this role <ArrowRight className="ml-2 h-4 w-4"/></Button>
                      </ScrollLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default JobOpeningsSection;