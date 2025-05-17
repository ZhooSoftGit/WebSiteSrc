import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const jobOpeningsData = [
  {
    id: 1,
    title: "Senior Software Developer",
    department: "Engineering",
    location: "Remote / Onsite (Chennai, India)",
    type: "Full-time",
    description: "We are looking for an experienced Senior Software Developer to join our dynamic team. You will be responsible for developing high-quality software solutions, collaborating with cross-functional teams, and mentoring junior developers.",
    responsibilities: [
      "Design, develop, and maintain scalable software applications.",
      "Collaborate with product managers, designers, and other engineers.",
      "Write clean, efficient, and well-documented code.",
      "Participate in code reviews and provide constructive feedback.",
      "Troubleshoot and debug complex issues."
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "5+ years of experience in software development.",
      "Proficiency in JavaScript (React, Node.js) and Python.",
      "Experience with cloud platforms (AWS, Azure).",
      "Strong problem-solving and communication skills."
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Onsite (Chennai, India)",
    type: "Full-time",
    description: "Join our creative team as a UX/UI Designer. You will be responsible for creating intuitive and visually appealing user experiences for our web and mobile applications.",
    responsibilities: [
      "Conduct user research and usability testing.",
      "Create wireframes, prototypes, and high-fidelity mockups.",
      "Collaborate with product managers and developers.",
      "Maintain and evolve our design system.",
      "Stay up-to-date with aTest design trends and best practices."
    ],
    qualifications: [
      "Proven experience as a UX/UI Designer or similar role.",
      "Strong portfolio showcasing your design skills.",
      "Proficiency in design tools (Figma, Sketch, Adobe XD).",
      "Understanding of user-centered design principles.",
      "Excellent communication and collaboration skills."
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We are seeking a skilled DevOps Engineer to manage our cloud infrastructure and automate our development pipelines. You will play a key role in ensuring the scalability, reliability, and security of our systems.",
    responsibilities: [
      "Design, implement, and manage CI/CD pipelines.",
      "Automate infrastructure provisioning and configuration management.",
      "Monitor system performance and troubleshoot issues.",
      "Implement and maintain security best practices.",
      "Collaborate with development teams to improve operational efficiency."
    ],
    qualifications: [
      "Experience with cloud platforms (AWS, Azure, GCP).",
      "Proficiency in scripting languages (Python, Bash).",
      "Experience with containerization technologies (Docker, Kubernetes).",
      "Knowledge of IaC tools (Terraform, Ansible).",
      "Strong understanding of networking and security concepts."
    ]
  }
];

const CareerOpportunities = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleJobDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Current Openings</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find your next career opportunity at Zhoosoft. We are passionate about building innovative solutions and fostering a collaborative work environment.
        </p>

        {jobOpeningsData.length === 0 ? (
          <div className="text-center py-12">
            <img  alt="No job openings illustration" className="w-64 h-64 mx-auto mb-6" src="https://images.unsplash.com/photo-1559780529-cd8d39cd23c1" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Openings Currently</h2>
            <p className="text-gray-500">
              We don't have any open positions at the moment, but we're always looking for great talent. 
              Feel free to <Link to="/career/register" className="text-blue-600 hover:underline">register your interest</Link>!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {jobOpeningsData.map((job) => (
              <motion.div
                key={job.id}
                layout
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                  onClick={() => toggleJobDetails(job.id)}
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-1">{job.title}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
                      <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" />{job.department}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{job.location}</span>
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{job.type}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="mt-2 md:mt-0">
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedJobId === job.id ? "rotate-180" : ""}`} />
                  </Button>
                </div>

                <AnimatePresence>
                  {expandedJobId === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                        {job.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
                      </ul>

                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualifications:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
                        {job.qualifications.map((qual, index) => <li key={index}>{qual}</li>)}
                      </ul>
                      
                      <Link to="/career/register">
                        <Button size="lg">Apply Now</Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CareerOpportunities;