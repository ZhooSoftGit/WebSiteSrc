import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, DollarSign, MapPin, User, ShieldCheck, Settings2 } from "lucide-react";

const RideBookingApp = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-teal-500" />,
      title: "Booking & Live Tracking",
      description: "Seamless ride booking process with real-time GPS tracking of vehicles."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Payment Integration",
      description: "Secure and multiple payment options integrated for hassle-free transactions."
    },
    {
      icon: <User className="h-8 w-8 text-purple-500" />,
      title: "User Profiles",
      description: "Comprehensive profiles for vendors, drivers, and passengers for better management."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
      title: "Safety Features",
      description: "In-app SOS, ride sharing, and emergency contacts for enhanced passenger safety."
    },
    {
      icon: <Settings2 className="h-8 w-8 text-yellow-500" />,
      title: "Additional Services",
      description: "Integration options for services like loans, insurance, car servicing, etc."
    },
    {
      icon: <User className="h-8 w-8 text-teal-500" />,
      title: "Driver Management",
      description: "Tools for driver onboarding, document verification, and performance tracking."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-teal-700">Ride Booking App (like Uber)</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive solution for on-demand transportation services, packed with features for passengers, drivers, and operators.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <img  alt="Ride booking app interface mockup" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554260570-83dc2f46ef79" />
        </div>

        <div className="mt-16 bg-teal-50 p-8 rounded-lg shadow-md border border-teal-100">
          <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Why Choose Our Ride Booking Solution?</h2>
          <ul className="space-y-3 max-w-xl mx-auto">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Scalable architecture to support growing user base and operations.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Customizable to fit specific business models and regional requirements.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">User-friendly interfaces for all user types (passenger, driver, admin).</span>
            </li>
             <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Robust admin panel for comprehensive control and analytics.</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
export default RideBookingApp;