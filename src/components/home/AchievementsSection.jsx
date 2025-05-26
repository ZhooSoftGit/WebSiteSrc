import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Users, Zap } from "lucide-react";

const AchievementsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const achievements = [
    { number: "12+", text: "Years of Experience", icon: <Award className="h-10 w-10 text-yellow-400"/> },
    { number: "250+", text: "Projects Delivered", icon: <CheckCircle className="h-10 w-10 text-green-400"/> },
    { number: "100+", text: "Satisfied Clients", icon: <Users className="h-10 w-10 text-blue-400"/> },
    { number: "15+", text: "Countries Served", icon: <Zap className="h-10 w-10 text-purple-400"/> },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Numbers that speak of our dedication, expertise, and client trust.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.text}
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center flex flex-col items-center"
            >
              <div className="mb-4">{achievement.icon}</div>
              <p className="text-4xl font-bold text-white mb-2">{achievement.number}</p>
              <p className="text-lg text-gray-300">{achievement.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;