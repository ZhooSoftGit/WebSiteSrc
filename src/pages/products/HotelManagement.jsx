import React from "react";
import { motion } from "framer-motion";
import { Users, Utensils, ClipboardList, CalendarClock, BarChart3, CheckSquare } from "lucide-react";

const HotelManagement = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: "Staff Management",
      description: "Efficiently manage staff schedules, roles, permissions, and performance."
    },
    {
      icon: <Utensils className="h-8 w-8 text-green-500" />,
      title: "Table Management",
      description: "Optimize table layouts, track occupancy, and manage table status in real-time."
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-purple-500" />,
      title: "Order Management (KOT)",
      description: "Streamline order taking, kitchen order tickets (KOT), and billing processes."
    },
    {
      icon: <CalendarClock className="h-8 w-8 text-red-500" />,
      title: "WaitList and Reservation",
      description: "Manage guest waitlists and reservations effectively to reduce wait times."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
      title: "Comprehensive Reports",
      description: "Generate detailed reports on sales, inventory, staff performance, and customer feedback."
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-teal-500" />,
      title: "Inventory Management",
      description: "Track stock levels, manage recipes, and reduce wastage with smart inventory tools."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-teal-700">Hotel & Restaurant Management System</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          An all-in-one solution to streamline operations, enhance guest experience, and boost profitability for hotels and restaurants.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg card-hover border-l-4 border-teal-500"
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
          <img  alt="Hotel management system dashboard mockup" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1666697821630-07d7bd46f75a" />
        </div>

      </motion.div>
    </div>
  );
};
export default HotelManagement;