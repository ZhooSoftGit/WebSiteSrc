import React from "react";
import { motion } from "framer-motion";
import { Presentation, PenSquare, Calendar, Lightbulb } from "lucide-react";

const voices = [
  {
    title: "Webinars",
    icon: <Presentation className="h-8 w-8 text-teal-500" />,
    description: "Engage with our experts through live and recorded sessions on emerging technologies, legacy modernization, AI integration, and software best practices. Gain practical knowledge, directly from practitioners.",
  },
  {
    title: "Blogs",
    icon: <PenSquare className="h-8 w-8 text-teal-500" />,
    description: "Read in-depth articles, technical guides, and thought pieces from our team. We share insights on solving real-world challenges, from cloud strategy to mobile migration and everything in between.",
  },
  {
    title: "Events",
    icon: <Calendar className="h-8 w-8 text-teal-500" />,
    description: "Stay updated with tech meetups, workshops, and community events hosted or attended by Zhoosoft. Connect, learn, and collaborate with innovators and industry leaders.",
  },
  {
    title: "Innovative Ideas",
    icon: <Lightbulb className="h-8 w-8 text-teal-500" />,
    description: "Explore experimental projects, product concepts, and forward-thinking approaches born inside Zhoosoft. From AI-driven tools to smarter legacy app upgrades, this is where ideas take shape.",
  },
];

const ZhoosoftVoices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Zhoosoft Voices</h2>
          <p className="text-lg text-gray-600">
            Discover insights, ideas, and innovations from our team. From deep tech blogs to interactive webinars and events — explore how we think, learn, and lead in a world driven by technology.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {voices.map((voice) => (
            <motion.div
              key={voice.title}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-md card-hover flex flex-col"
            >
              <div className="mb-4">{voice.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{voice.title}</h3>
              <p className="text-gray-600 flex-grow">{voice.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ZhoosoftVoices;