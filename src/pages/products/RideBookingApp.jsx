import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle, ShieldCheck, Users, Wrench, Car, Coins as HandCoins, Bell, Star, MessageSquare, LifeBuoy, FileText, Wallet, LayoutGrid, Map, Siren as Sos, Eye, PhoneOff, Phone, Banknote, AlertTriangle } from 'lucide-react';

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


const RideBookingApp = () => {

  const endUserFeatures = [
    { icon: <Car size={24} />, title: "Book a Taxi", description: "Instant or scheduled rides" },
    { icon: <Users size={24} />, title: "Request Acting Driver", description: "Temporary drivers on demand" },
    { icon: <Wrench size={24} />, title: "Service Requests", description: "Repair, maintenance, and garage support" },
    { icon: <HandCoins size={24} />, title: "Buy & Sell Vehicles", description: "Marketplace for vehicle trading" },
    { icon: <Wrench size={24} />, title: "Spare Parts Requests", description: "Find and order parts directly" },
    { icon: <FileText size={24} />, title: "Trip History", description: "View past ride and service logs" },
    { icon: <Wallet size={24} />, title: "Wallet & Payments", description: "Pay securely via UPI, wallet, or card" },
    { icon: <Bell size={24} />, title: "Live Notifications", description: "Booking status and driver updates" },
    { icon: <Star size={24} />, title: "Ratings & Feedback", description: "Two-way review system" },
    { icon: <LifeBuoy size={24} />, title: "24/7 Support", description: "In-app helpdesk with live chat or call" },
  ];

  const driverVendorModules = [
    { icon: <Car size={24} />, title: "Ride Requests for Drivers", description: "Real-time job notifications" },
    { icon: <Users size={24} />, title: "Vehicle Assignment Manager", description: "For drivers & fleet operators" },
    { icon: <Wrench size={24} />, title: "Service Requests for Mechanics", description: "Manage repair jobs" },
    { icon: <Wrench size={24} />, title: "Spare Parts Orders for Vendors", description: "Direct order pipeline" },
    { icon: <HandCoins size={24} />, title: "Buy & Sell Vehicle Listings", description: "Post or respond to vehicle offers" },
    { icon: <FileText size={24} />, title: "Trip & Job History", description: "Access full service and ride logs" },
    { icon: <LayoutGrid size={24} />, title: "Earnings Dashboard", description: "Daily, weekly & monthly summaries" },
    { icon: <Wallet size={24} />, title: "Driver Wallet & Payouts", description: "Track earnings, withdraw securely" },
    { icon: <MessageSquare size={24} />, title: "In-App Chat & Alerts", description: "Communicate with customers easily" },
  ];

  const extendedServices = [
    { icon: <ShieldCheck size={24} />, title: "Insurance Assistant", description: "Get insured through app-connected providers" },
    { icon: <Banknote size={24} />, title: "Loan & EMI Support", description: "Apply for vehicle or personal loans" },
    { icon: <AlertTriangle size={24} />, title: "Crash Emergency Alerts", description: "Notify nearby help with a single tap" },
    { icon: <Users size={24} />, title: "Emergency Contacts", description: "Add trusted people for alerts" },
    { icon: <Wrench size={24} />, title: "Roadside Assistance", description: "Coming soon" },
  ];
  
  const safetyFeatures = [
    { icon: <Eye size={24} />, title: "Live Ride Tracking", description: "Share location in real-time" },
    { icon: <Sos size={24} />, title: "SOS Button", description: "Instant emergency assistance" },
    { icon: <Users size={24} />, title: "Driver Verification", description: "KYC and license check for all drivers" },
    { icon: <PhoneOff size={24} />, title: "Mask Phone Numbers", description: "Privacy-first communication" },
    { icon: <Phone size={24} />, title: "24x7 Helpline", description: "Human support team on standby" },
  ];

  const whyChooseUs = [
    "Covers ride booking, acting drivers, vehicle repairs, and trade",
    "Single dashboard for users, drivers, vendors, and admins",
    "Realtime lead generation and service assignment",
    "Payment wallet + support for Razorpay/UPI integrations",
    "Supports scalable taxi fleets and standalone mechanics",
    "Strong safety + privacy features for all stakeholders"
  ];


  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>ZFleet - Complete Ride & Vehicle Support Platform</title>
        <meta name="description" content="ZFleet by Zhoosoft is an all-in-one platform empowering riders, drivers, vendors, and service providers with tools for ride booking, vehicle management, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                ZFleet - Complete Ride & Vehicle Support Platform
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Empowering Riders, Drivers, Vendors & Service Providers — All in One App
              </p>
              <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-transform hover:scale-105">
                <Link to="/contact">
                  Explore Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative h-96 flex justify-center items-center gap-4">
               <div className="w-1/2 h-full transform -rotate-6 translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Ride booking interface on a smartphone" src="https://images.unsplash.com/photo-1528033978085-52f315289665" />
               </div>
               <div className="w-1/2 h-full transform rotate-6 -translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Driver tracking dashboard on a smartphone" src="https://images.unsplash.com/photo-1504507533977-0a4b3f61ff36" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* End User Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Smart Services for Vehicle Owners & Commuters</h2>
            <p className="mt-4 text-lg text-gray-600">ZFleet allows users to book rides, request services, and manage vehicles with advanced convenience, all in one app.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {endUserFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Driver & Vendor Modules */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lead Management for Drivers, Mechanics & Vendors</h2>
            <p className="mt-4 text-lg text-gray-600">From accepting ride leads to managing service tasks, our app supports professionals across the mobility and vehicle service ecosystem.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {driverVendorModules.map((module, index) => (
              <FeatureCard key={index} {...module} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

       {/* Extended Services & Safety */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16">
            <div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Beyond Booking — Complete Automotive Support</h2>
                    <p className="mt-4 text-lg text-gray-600">ZFleet doesn’t stop at booking. We offer additional services to protect, finance, and support your vehicles and journeys.</p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="space-y-4">
                    {extendedServices.map((service, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
                            <div className="p-2 bg-cyan-100 text-cyan-600 rounded-full mr-4">{service.icon}</div>
                            <span className="font-semibold text-gray-700">{service.title}:</span>
                            <span className="text-gray-600 ml-2">{service.description}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
             <div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">We Prioritize Your Safety</h2>
                     <p className="mt-4 text-lg text-gray-600">Your security is our top priority. We've built in multiple layers of protection.</p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="space-y-4">
                    {safetyFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
                             <div className="p-2 bg-red-100 text-red-600 rounded-full mr-4">{feature.icon}</div>
                            <span className="font-semibold text-gray-700">{feature.title}:</span>
                            <span className="text-gray-600 ml-2">{feature.description}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose ZFleet?</h2>
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
export default RideBookingApp;