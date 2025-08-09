import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { 
  ArrowRight, 
  CheckCircle, 
  Edit, 
  CheckSquare, 
  Bell, 
  LayoutDashboard,
  Layers,
  FilePlus,
  Calendar,
  Repeat,
  Paperclip,
  Smartphone,
  Briefcase,
  Store,
  HeartPulse,
  Factory,
  Users
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1, duration: 0.6, ease: "easeInOut" },
  }),
};

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start card-hover"
    variants={fadeIn}
    custom={delay}
  >
    <div className="p-3 bg-teal-100 text-teal-600 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const TaskManagement = () => {

  const formBuilderFeatures = [
    { icon: <Edit size={24} />, title: "Drag & Drop Form Creation", description: "Add text, dropdowns, date pickers, checkboxes, and more" },
    { icon: <Layers size={24} />, title: "Unlimited Custom Modules", description: "Build task categories that match your operations" },
    { icon: <LayoutDashboard size={24} />, title: "Industry-Specific Templates", description: "Start with ready-made workflows for different sectors" },
    { icon: <Smartphone size={24} />, title: "Mobile-First Interface", description: "Design and manage everything from your phone" },
  ];

  const taskFeatures = [
    { icon: <FilePlus size={24} />, title: "Task Creation & Assignment", description: "Add tasks and delegate to team members" },
    { icon: <Calendar size={24} />, title: "Set Priorities & Deadlines", description: "Keep tasks aligned with goals" },
    { icon: <Bell size={24} />, title: "Real-Time Notifications", description: "Instant alerts for status changes or delays" },
    { icon: <Repeat size={24} />, title: "Recurring Task Scheduling", description: "Automate repeated activities" },
    { icon: <Paperclip size={24} />, title: "Attach Files & Images", description: "Keep all task information in one place" },
  ];

  const alertFeatures = [
    { icon: <Bell size={24} />, title: "Push Notifications & Reminders", description: "Get notified before deadlines" },
    { icon: <CheckSquare size={24} />, title: "Status Updates", description: "Track progress: Pending, In-Progress, Completed" },
    { icon: <Layers size={24} />, title: "Custom Alerts", description: "Define alerts based on task types or priorities" },
    { icon: <LayoutDashboard size={24} />, title: "Dashboard View", description: "Monitor all tasks and bottlenecks at a glance" },
  ];

  const industries = [
    { icon: <Briefcase size={24} />, name: "Field Service Management" },
    { icon: <Store size={24} />, name: "Retail Store Operations" },
    { icon: <Users size={24} />, name: "HR & Recruitment Workflows" },
    { icon: <HeartPulse size={24} />, name: "Healthcare & Patient Tracking" },
    { icon: <Factory size={24} />, name: "Manufacturing & Quality Checks" },
  ];

  const whyChooseUs = [
    "Build custom workflows without any coding",
    "Manage daily tasks with real-time alerts and notifications",
    "Flexible enough to work for any industry or business size",
    "Mobile-first design for on-the-go teams"
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>ZTask – Build Your Own Workflows & Manage Tasks Smarter</title>
        <meta name="description" content="ZTask by Zhoosoft allows you to create industry-specific modules, forms, and alerts — all from your mobile device." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                ZTask – Build Your Own Workflows & Manage Tasks Smarter
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Create industry-specific modules, forms, and alerts — all from your mobile device.
              </p>
              <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-transform hover:scale-105">
                <Link to="/contact">
                  Explore Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative h-96 flex justify-center items-center gap-4">
               <div className="w-1/2 h-full transform -rotate-6 translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Task management dashboard on a smartphone" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546" />
               </div>
               <div className="w-1/2 h-full transform rotate-6 -translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Custom form creation screen on a smartphone" src="https://images.unsplash.com/photo-1559028006-44a3a2f20975" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Module & Form Builder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Design Your Own Workflows in Minutes</h2>
            <p className="mt-4 text-lg text-gray-600">ZTask allows businesses to create custom modules and forms tailored to their industry, directly from a mobile app.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {formBuilderFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Task Management Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Stay On Top of Daily Activities</h2>
            <p className="mt-4 text-lg text-gray-600">Manage daily tasks with clear visibility, alerts, and real-time updates.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {taskFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alerts & Status Tracking */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Never Miss a Deadline</h2>
            <p className="mt-4 text-lg text-gray-600">ZTask’s alert system ensures you always stay ahead of your timelines.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {alertFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Use Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800">One Platform, Many Industries</h2>
                <p className="mt-4 text-lg text-gray-600">ZTask is designed to fit industries of all sizes — customize forms and workflows to your sector.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {industries.map((industry, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
                        <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full mb-4">{industry.icon}</div>
                        <h3 className="font-semibold text-gray-800 text-md text-center">{industry.name}</h3>
                    </div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose ZTask?</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start text-left">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};
export default TaskManagement;