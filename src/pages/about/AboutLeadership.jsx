import React from "react";
import { motion } from "framer-motion";
import { Users2, Zap, Lightbulb, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

const AboutLeadership = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-gray-50">
      <header className="py-12 md:py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Users2 className="h-16 w-16 mx-auto mb-4 text-teal-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            The driving force behind Zhoosoft's innovation and success. Our leaders combine experience, vision, and a commitment to excellence.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row card-hover-subtle"
            variants={fadeIn}
          >
            <div className="md:w-1/3">
              <img  alt="Aarav Sharma" className="w-full h-48 md:h-full object-cover" src="https://images.unsplash.com/photo-1613186267015-46dc938f2b8f" />
            </div>
            <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-teal-700 mb-1">Aarav Sharma</h3>
              <p className="text-md font-semibold text-cyan-600 mb-3">CEO & Visionary</p>
              <p className="text-gray-600 text-sm mb-4 flex-grow">Aarav leads Zhoosoft with a passion for innovation and a strategic vision for the future of technology. With over 15 years in the industry, he inspires the team to push boundaries and deliver excellence.</p>
              <div className="flex space-x-3 mt-auto">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><Zap size={20}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><Lightbulb size={20}/></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row card-hover-subtle"
            variants={fadeIn}
          >
            <div className="md:w-1/3">
              <img  alt="Priya Singh" className="w-full h-48 md:h-full object-cover" src="https://images.unsplash.com/photo-1573164713988-8665fc963095" />
            </div>
            <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-teal-700 mb-1">Priya Singh</h3>
              <p className="text-md font-semibold text-cyan-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm mb-4 flex-grow">Priya is the technical mastermind behind Zhoosoft's solutions. She ensures our products are built on robust, scalable, and cutting-edge technologies, always prioritizing quality and performance.</p>
              <div className="flex space-x-3 mt-auto">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><Zap size={20}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><MessageSquare size={20}/></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row card-hover-subtle"
            variants={fadeIn}
          >
            <div className="md:w-1/3">
              <img  alt="Rohan Mehta" className="w-full h-48 md:h-full object-cover" src="https://images.unsplash.com/photo-1530303263041-b5ca33678f04" />
            </div>
            <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-teal-700 mb-1">Rohan Mehta</h3>
              <p className="text-md font-semibold text-cyan-600 mb-3">VP of Product Innovation</p>
              <p className="text-gray-600 text-sm mb-4 flex-grow">Rohan drives product strategy and development, translating market needs into impactful digital solutions. His focus on user experience ensures our products are intuitive and valuable.</p>
              <div className="flex space-x-3 mt-auto">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><Zap size={20}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><MessageSquare size={20}/></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row card-hover-subtle"
            variants={fadeIn}
          >
            <div className="md:w-1/3">
              <img  alt="Sneha Patel" className="w-full h-48 md:h-full object-cover" src="https://images.unsplash.com/photo-1698047681820-f26b00b6c639" />
            </div>
            <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-teal-700 mb-1">Sneha Patel</h3>
              <p className="text-md font-semibold text-cyan-600 mb-3">Head of Client Solutions</p>
              <p className="text-gray-600 text-sm mb-4 flex-grow">Sneha champions our clients' success, ensuring their needs are met and expectations exceeded. She fosters strong relationships and guides clients through their digital transformation journey.</p>
              <div className="flex space-x-3 mt-auto">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600"><Zap size={20}/></a>
                <a href="mailto:#" className="text-gray-500 hover:text-teal-600"><MessageSquare size={20}/></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay: 0.8}}
        >
          <p className="text-lg text-gray-700 mb-6">
            Our leadership team is dedicated to fostering a culture of collaboration and growth.
          </p>
          <Button asChild size="lg">
            <Link to="/career">Join Our Team</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLeadership;