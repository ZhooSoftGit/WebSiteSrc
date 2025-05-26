import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { UploadCloud, FileText, X } from 'lucide-react';

const RegistrationFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", position: "", coverLetter: "" });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
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
    if(fileInput) fileInput.value = ''; // Reset file input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      toast({ title: "Resume Required", description: "Please upload your resume.", variant: "destructive" });
      return;
    }

    const subject = `Job Application: ${formData.position || 'General Interest'} - ${formData.fullName}`;
    let body = `Full Name: ${formData.fullName}\n`;
    body += `Email: ${formData.email}\n`;
    if (formData.phone) body += `Phone: ${formData.phone}\n`;
    if (formData.position) body += `Desired Position: ${formData.position}\n`;
    body += `\nCover Letter/Message:\n${formData.coverLetter}\n`;
    body += `\n--- Resume Attached: ${resumeFile.name} ---`;

    const mailtoLink = `mailto:careers@zhoosoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    toast({ title: "Application Ready", description: "Your email client should open. Please attach your resume and send the email." });
    
    setFormData({ fullName: "", email: "", phone: "", position: "", coverLetter: "" });
    removeResume();
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
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
          <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">Prepare Email Application</Button>
        </form>
      </div>
    </motion.section>
  );
};

export default RegistrationFormSection;