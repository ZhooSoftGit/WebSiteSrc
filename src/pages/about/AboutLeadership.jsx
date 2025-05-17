import React from "react";
import { motion } from "framer-motion";
import { Users2, Zap, Lightbulb, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Aarav Sharma",
    position: "CEO & Visionary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    bio: "Aarav leads Zhoosoft with a passion for innovation and a strategic vision for the future of technology. With over 15 years in the industry, he inspires the team to push boundaries and deliver excellence.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Priya Singh",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
    bio: "Priya is the technical mastermind behind Zhoosoft's solutions. She ensures our products are built on robust, scalable, and cutting-edge technologies, always prioritizing quality and performance.",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Rohan Mehta",
    position: "VP of Product Innovation",
    image: "https://images.unsplash.com/photo-1557862921-37829c7ef0f1?auto=format&fit=crop&w=300&q=80",
    bio: "Rohan drives product strategy and development, translating market needs into impactful digital solutions. His focus on user experience ensures our products are intuitive and valuable.",
    social: { linkedin: "#", medium: "#" }
  },
  {
    name: "Sneha Patel",
    position: "Head of Client Solutions",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    bio: "Sneha champions our clients' success, ensuring their needs are met and expectations exceeded. She fosters strong relationships and guides clients through their digital transformation journey.",
    social: { linkedin: "#", email: "#" }
  }
];

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
      <header className="py-12 md:py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Users2 className="h-16 w-16 mx-auto mb-4 text-purple-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
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
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row card-hover-subtle"
              variants={fadeIn}
            >
              <div className="md:w-1/3">
                <img  alt={member.name} src={member.image} className="w-full h-48 md:h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-indigo-700 mb-1">{member.name}</h3>
                <p className="text-md font-semibold text-purple-600 mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{member.bio}</p>
                <div className="flex space-x-3 mt-auto">
                  {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600"><Zap size={20}/></a>}
                  {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600"><Lightbulb size={20}/></a>}
                  {member.social.github && <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600"><MessageSquare size={20}/></a>}
                   {member.social.medium && <a href={member.social.medium} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600"><MessageSquare size={20}/></a>}
                  {member.social.email && <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-indigo-600"><MessageSquare size={20}/></a>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay: teamMembers.length * 0.1 + 0.2}}
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