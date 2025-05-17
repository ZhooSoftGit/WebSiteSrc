import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { UploadCloud, FileText, X } from "lucide-react";

const CareerRegister = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
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
        toast({
          title: "File too large",
          description: "Please upload a resume smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive",
        });
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
    if (fileInput) {
        fileInput.value = ''; 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume to submit your application.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Form Data:", formData);
    console.log("Resume File:", resumeFile);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will review your application and get back to you soon.",
    });
    
    setFormData({ fullName: "", email: "", phone: "", position: "", coverLetter: "" });
    removeResume();
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Register Your Interest</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Excited about a career at Zhoosoft? Fill out the form below and upload your resume. We are always looking for talented individuals.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="e.g. John Doe" required />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. john.doe@example.com" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. +1 123 456 7890" />
          </div>
          <div>
            <Label htmlFor="position">Position Applied For (Optional)</Label>
            <Input type="text" name="position" id="position" value={formData.position} onChange={handleInputChange} placeholder="e.g. Senior Software Engineer" />
          </div>
          <div>
            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
            <Textarea name="coverLetter" id="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Tell us a bit about yourself and why you're a good fit..." rows={5} />
          </div>
          
          <div>
            <Label htmlFor="resume-upload">Upload Resume (PDF or Word, max 5MB)</Label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="resume-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input id="resume-upload" name="resume-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
              </div>
            </div>
            {resumePreview && (
              <div className="mt-4 flex items-center justify-between p-3 bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-700">{resumePreview}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={removeResume} aria-label="Remove resume">
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full">Submit Application</Button>
        </form>
      </motion.div>
    </div>
  );
};

export default CareerRegister;