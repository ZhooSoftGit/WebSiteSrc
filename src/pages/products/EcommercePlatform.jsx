import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  Wrench, 
  Car, 
  Coins as HandCoins, 
  Bell, 
  Star, 
  MessageSquare, 
  LifeBuoy, 
  FileText, 
  Wallet, 
  LayoutGrid, 
  Map, 
  Siren as Sos, 
  Eye, 
  PhoneOff, 
  Phone, 
  Banknote, 
  AlertTriangle,
  ShoppingCart,
  Video,
  Search,
  Heart,
  Truck,
  BarChart2,
  Store
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


const EcommercePlatform = () => {

  const buyerFeatures = [
    { icon: <Search size={24} />, title: "Product Browsing & Search", description: "Discover trending items with easy filters" },
    { icon: <Video size={24} />, title: "Video-Based Product Showcase", description: "See authentic product videos before buying" },
    { icon: <ShieldCheck size={24} />, title: "Secure Checkout & Payments", description: "Cards, UPI, wallet options supported" },
    { icon: <Truck size={24} />, title: "Track Orders in Real-Time", description: "Instant notifications on shipment & delivery" },
    { icon: <Heart size={24} />, title: "Wishlist & Favorites", description: "Save products for later" },
    { icon: <Star size={24} />, title: "Ratings & Reviews", description: "Shop from trusted, verified sellers" },
    { icon: <LifeBuoy size={24} />, title: "24/7 Support", description: "Integrated help desk and chat" },
  ];

  const sellerFeatures = [
    { icon: <Users size={24} />, title: "Quick Seller Registration", description: "Authenticate and start selling instantly" },
    { icon: <Video size={24} />, title: "Upload Products with Videos", description: "Showcase products with engaging video clips" },
    { icon: <Store size={24} />, title: "Manage Inventory & Orders", description: "Real-time stock updates and order handling" },
    { icon: <MessageSquare size={24} />, title: "Buyer Engagement", description: "Message buyers directly or via in-app chat" },
    { icon: <BarChart2 size={24} />, title: "Analytics Dashboard", description: "Track sales performance & insights" },
    { icon: <Wallet size={24} />, title: "Secure Payouts", description: "Automated settlements and payment tracking" },
  ];

  const specialFeatures = [
    { icon: <Video size={24} />, title: "Video-based Product Discovery", description: "Engage buyers with product videos" },
    { icon: <ShoppingCart size={24} />, title: "All Essential Ecommerce Features", description: "Cart, checkout, returns, shipping, and discounts" },
    { icon: <ShieldCheck size={24} />, title: "Verified Sellers Only", description: "Strong authentication for trust and safety" },
    { icon: <LayoutGrid size={24} />, title: "Scalable & Flexible", description: "Designed for both individual sellers and large storefronts" },
  ];

  const whyChooseUs = [
    "Combines engaging video content with full ecommerce functionality",
    "Helps sellers connect authentically with buyers and increase conversions",
    "Built for trust: verified sellers, secure payments, and reliable tracking",
    "Scalable platform for single sellers or marketplace operators"
  ];


  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>ZCart – The Smarter Way to Buy & Sell Online</title>
        <meta name="description" content="ZCart by Zhoosoft is a video-driven e-commerce platform to shop your favorite products, connect with sellers, and sell faster." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                ZCart – The Smarter Way to Buy & Sell Online
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Shop your favorite products, connect with sellers, and sell faster with engaging video-based selling features.
              </p>
              <Button asChild size="lg" className="bg-teal-500 text-white hover:bg-teal-600 transition-transform hover:scale-105">
                <Link to="/contact">
                  Explore Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative h-96 flex justify-center items-center gap-4">
               <div className="w-1/2 h-full transform -rotate-6 translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="E-commerce product browsing feed on a smartphone" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
               </div>
               <div className="w-1/2 h-full transform rotate-6 -translate-x-4">
                  <img  class="absolute inset-0 w-full h-full object-contain" alt="Seller uploading a product video on a smartphone" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buyer App Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Everything You Need to Shop Confidently</h2>
            <p className="mt-4 text-lg text-gray-600">ZCart empowers buyers to browse and purchase products easily from verified sellers, with full order tracking and secure payments.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {buyerFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seller App Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tools for Sellers to Scale Faster</h2>
            <p className="mt-4 text-lg text-gray-600">Sellers can onboard easily, showcase their products creatively, and manage orders with ease.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellerFeatures.map((module, index) => (
              <FeatureCard key={index} {...module} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

       {/* What Makes ZCart Special? */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Sell & Buy Faster with Video-Driven Commerce</h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {specialFeatures.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
                        <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full mb-4">{service.icon}</div>
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose ZCart?</h2>
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
export default EcommercePlatform;