import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const branches = [
    {
      name: "Headquarters",
      address: "No 3/187, Sri Senthurgarden, Kondayapalayam, Coimbatore North, Coimbatore - 641 110, Tamilnadu",
      phone: "+91-8344273152",
      email: "contact@zhoosoft.com"
    },
    {
      name: "Branch Location",
      address: "194 Sicily Hills Ct, Henderson, Nevada 89012, USA",
      phone: "+1 (775) 389-9670",
      email: "contact@zhoosoft.com"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <motion.div 
        className="container mx-auto px-4 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Zhoosoft
            </span>
            <p className="text-gray-300 mt-4 max-w-xs">
              Innovative technology solutions for businesses of all sizes. Transforming ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/zhoosoft-private-limited-3b0277372/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg font-semibold text-white">Quick Links</p>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/career" className="text-gray-300 hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {branches.map((branch, index) => (
            <motion.div variants={itemVariants} key={index} className="space-y-4">
              <p className="text-lg font-semibold text-white">{branch.name}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{branch.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300">{branch.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300">{branch.email}</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} Zhoosoft Private Limited. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;