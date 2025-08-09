import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  CalendarCheck, 
  Bell, 
  LogIn,
  UserPlus,
  ClipboardList,
  LayoutGrid,
  Printer,
  GitMerge,
  Clock,
  FileText,
  CreditCard,
  Split,
  Mail,
  Tablet,
  Smartphone
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

const HotelManagement = () => {

  const reservationFeatures = [
    { icon: <UserPlus size={24} />, title: "Digital Waiting List", description: "Track guests in real-time with estimated wait times" },
    { icon: <CalendarCheck size={24} />, title: "Online Reservations", description: "Accept bookings through app or website" },
    { icon: <Bell size={24} />, title: "Smart Alerts", description: "Automatic SMS/push notifications for confirmations & reminders" },
    { icon: <LogIn size={24} />, title: "Seamless Guest Check-In", description: "Move guests from waitlist to table quickly" },
  ];

  const staffFeatures = [
    { icon: <CalendarCheck size={24} />, title: "Shift Scheduling", description: "Assign and manage shifts easily" },
    { icon: <Users size={24} />, title: "Role Management", description: "Define roles for front-of-house and kitchen staff" },
    { icon: <Clock size={24} />, title: "Staff Availability Tracking", description: "Track attendance and update shifts instantly" },
    { icon: <LayoutGrid size={24} />, title: "Performance Insights", description: "Optional reports for productivity" },
  ];

  const tableFeatures = [
    { icon: <LayoutGrid size={24} />, title: "Table Layout View", description: "Visualize available, occupied, and reserved tables" },
    { icon: <Printer size={24} />, title: "KOT Integration", description: "Send orders directly to kitchen screens/printers" },
    { icon: <GitMerge size={24} />, title: "Merge/Split Tables", description: "Flexibility for larger groups" },
    { icon: <Clock size={24} />, title: "Order Status Updates", description: "Kitchen-to-service communication" },
  ];

  const billingFeatures = [
    { icon: <FileText size={24} />, title: "One-Click Invoicing", description: "Auto-generate invoices linked to orders" },
    { icon: <CreditCard size={24} />, title: "Multiple Payment Gateways", description: "Card, UPI, wallet integrations" },
    { icon: <Split size={24} />, title: "Split Bills", description: "Let customers pay separately or partially" },
    { icon: <Mail size={24} />, title: "Digital Receipts", description: "Email or SMS invoices automatically" },
  ];

  const whyChooseUs = [
    "All-in-one solution for reservations, staff, tables, and billing",
    "Easy to use for restaurants, cafés, and hospitality businesses",
    "Reduces operational errors with real-time alerts and digital KOT",
    "Improves customer experience with faster service and smart notifications"
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>ZHost – Smarter Hospitality & Restaurant Management</title>
        <meta name="description" content="ZHost by Zhoosoft helps you manage reservations, staff, tables, and billing in one simple, intuitive platform for restaurants and hospitality businesses." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                ZHost – Smarter Hospitality & Restaurant Management
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Manage reservations, staff, tables, and billing in one simple, intuitive platform.
              </p>
              <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-transform hover:scale-105">
                <Link to="/contact">
                  Explore Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative h-96 flex justify-center items-center gap-4">
               <div className="w-2/3 h-full transform -rotate-6 translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Restaurant table layout on a tablet" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" />
               </div>
               <div className="w-1/3 h-full transform rotate-12 -translate-x-4 self-end mb-8">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Reservation alerts on a smartphone" src="https://images.unsplash.com/photo-1604881991720-f91add269bed" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Handle Bookings with Ease</h2>
            <p className="mt-4 text-lg text-gray-600">ZHost makes it easy to manage walk-ins, waiting lists, and reservations efficiently.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reservationFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Staff Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Organize Your Team Effortlessly</h2>
            <p className="mt-4 text-lg text-gray-600">Plan staff shifts and manage availability with a single dashboard.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Table & KOT Management */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Smooth Table Operations</h2>
            <p className="mt-4 text-lg text-gray-600">Track table occupancy, send kitchen orders digitally, and ensure faster service.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tableFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Billing & Invoicing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Simplified Billing with Integrated Payments</h2>
            <p className="mt-4 text-lg text-gray-600">Generate invoices instantly and offer multiple payment options.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {billingFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose ZHost?</h2>
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
export default HotelManagement;