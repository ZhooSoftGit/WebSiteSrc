import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { UploadCloud, FileText, X, ChevronDown, MapPin, Briefcase, Clock, ArrowRight, UserPlus, Briefcase as BriefcaseBusiness } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";

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
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "5+ years of experience in software development.",
      "Proficiency in JavaScript (React, Node.js) and Python.",
      "Experience with cloud platforms (AWS, Azure).",
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
    ],
    qualifications: [
      "Proven experience as a UX/UI Designer or similar role.",
      "Strong portfolio showcasing your design skills.",
      "Proficiency in design tools (Figma, Sketch, Adobe XD).",
    ]
  },
];

const Career = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", position: "", coverLetter: "" });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "File too large", description: "Please upload a resume smaller than 5MB.", variant: "destructive" });
        return;
      }
      if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
        toast({ title: "Invalid file type", description: "Please upload a PDF or Word document.", variant: "destructive" });
        return;
      }
      setResumeFile(file);
      setResumePreview(file.name);
    }
  };

  const removeResume = () => {
    setResumeFile(null);
    setResumePreview(null);
    const fileInput = document.getElementById('resume-upload');
    if(fileInput) fileInput.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      toast({ title: "Resume Required", description: "Please upload your resume.", variant: "destructive" });
      return;
    }
    console.log("Form Data:", formData, "Resume File:", resumeFile);
    toast({ title: "Application Submitted!", description: "Thank you! We'll review your application." });
    setFormData({ fullName: "", email: "", phone: "", position: "", coverLetter: "" });
    removeResume();
  };

  const toggleJobDetails = (jobId) => setExpandedJobId(expandedJobId === jobId ? null : jobId);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <header className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Innovative Team</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            At Zhoosoft, we're passionate about technology and believe our people are our greatest asset. Explore exciting career opportunities and grow with us.
          </p>
          <div className="mt-8 space-x-4">
            <ScrollLink to="open-positions" smooth={true} duration={500} offset={-100}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <BriefcaseBusiness className="mr-2 h-5 w-5" /> View Openings
              </Button>
            </ScrollLink>
            <ScrollLink to="register-interest" smooth={true} duration={500} offset={-100}>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-pink-50">
                <UserPlus className="mr-2 h-5 w-5" /> Apply Now
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
      </header>

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

      <motion.section 
        id="register-interest" 
        className="py-16 md:py-20 bg-gray-50 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">Register Your Interest</h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Don't see a suitable role? Submit your resume, and we'll contact you if a matching opportunity arises.
          </p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6 border border-purple-100">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="e.g. Priya Sharma" required className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. priya.sharma@example.com" required className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. +91 98765 43210" className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="position">Desired Position (Optional)</Label>
              <Input type="text" name="position" id="position" value={formData.position} onChange={handleInputChange} placeholder="e.g. Frontend Developer, Project Manager" className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="coverLetter">Cover Letter / Message (Optional)</Label>
              <Textarea name="coverLetter" id="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Briefly tell us about your skills and aspirations..." rows={4} className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="resume-upload">Upload Resume (PDF or Word, max 5MB)</Label>
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-purple-400 transition-colors">
                <div className="space-y-1 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="resume-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                      <span>Upload a file</span>
                      <input id="resume-upload" name="resume-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                </div>
              </div>
              {resumePreview && (
                <div className="mt-3 flex items-center justify-between p-3 bg-purple-50 rounded-md text-sm">
                  <div className="flex items-center text-purple-700"><FileText className="h-5 w-5 mr-2" />{resumePreview}</div>
                  <Button variant="ghost" size="icon" onClick={removeResume} aria-label="Remove resume" className="text-red-500 hover:bg-red-100 h-7 w-7">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">Submit Application</Button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Career;