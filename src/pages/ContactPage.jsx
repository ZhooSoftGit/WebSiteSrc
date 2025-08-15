import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const apiURL = "https://zhoosoftcommon-ebe3d9efa3gfhvd4.canadacentral-01.azurewebsites.net";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      fetch(apiURL + "/Contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        toast({
          title: "Message sent successfully",
          description: "Your email sent successfully",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      }).catch((error) => {
        setIsSubmitting(false);
        throw new Error("Failed to send message");
      });
    }
    catch(Exception) {
      setIsSubmitting(false);
      console.log(Exception);
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-gray-50 min-h-screen">
      <header className="py-12 md:py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Mail className="h-16 w-16 mx-auto mb-4 text-cyan-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-200"
            initial="hidden" 
            animate="visible" 
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { ...fadeIn.visible.transition, delay: 0.2 }}}}
          >
            {/* Progress Bar */}
            {isSubmitting && (
              <div className="w-full h-1 mb-6 bg-gray-200 rounded overflow-hidden relative">
                <div
                  className="h-full bg-teal-500 animate-progress"
                  style={{ width: "100%" }}
                />
                <style>
                  {`
                    @keyframes progress {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                    .animate-progress {
                      animation: progress 1.5s linear infinite;
                    }
                  `}
                </style>
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} placeholder="Reason for contacting" required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" id="message" value={formData.message} onChange={handleInputChange} placeholder="Your message here..." rows={5} required className="mt-1"/>
              </div>
              <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                <Send className="mr-2 h-5 w-5" /> Send Email
              </Button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial="hidden" 
            animate="visible" 
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { ...fadeIn.visible.transition, delay: 0.4 }}}}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-start space-x-4">
              <div className="p-3 bg-teal-100 text-teal-600 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Our Office</h3>
                <p className="text-gray-600">194 Sicily Hills Ct, Henderson, Nevada 89012, USA</p>
                <a href="https://maps.google.com/?q=194+Sicily+Hills+Ct,+Henderson,+Nevada+89012,+USA" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline">Get Directions</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-start space-x-4">
              <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email Us</h3>
                <p className="text-gray-600">contact@zhoosoft.com</p>
              </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-start space-x-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Call Us</h3>
                <p className="text-gray-600">Sales : +1 (775) 389-9670</p>
                <p className="text-gray-600">Support: +1 (775) 389-9670</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;