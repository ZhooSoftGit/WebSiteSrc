import React from "react";
import { motion } from "framer-motion";
import { ListChecks, PlusSquare, History, BarChartHorizontalBig, Users2, Bell } from "lucide-react";

const TaskManagement = () => {
  const features = [
    {
      icon: <ListChecks className="h-8 w-8 text-blue-500" />,
      title: "Task Lists & Boards",
      description: "Organize tasks in customizable lists, Kanban boards, or calendar views."
    },
    {
      icon: <PlusSquare className="h-8 w-8 text-green-500" />,
      title: "New Task Creation",
      description: "Intuitive forms to create tasks with details like assignee, due date, priority, and attachments."
    },
    {
      icon: <History className="h-8 w-8 text-purple-500" />,
      title: "Activity History & Audit Trails",
      description: "Track all changes and updates to tasks for complete transparency and accountability."
    },
    {
      icon: <BarChartHorizontalBig className="h-8 w-8 text-red-500" />,
      title: "Progress Reports & Analytics",
      description: "Visualize team progress and project status with customizable reports and dashboards."
    },
    {
      icon: <Users2 className="h-8 w-8 text-yellow-500" />,
      title: "Collaboration Tools",
      description: "Comments, file sharing, and mentions to facilitate seamless team communication."
    },
    {
      icon: <Bell className="h-8 w-8 text-teal-500" />,
      title: "Notifications & Reminders",
      description: "Stay updated with real-time notifications and automated reminders for deadlines."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">Task Management System</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A powerful and flexible platform to help teams organize, track, and manage their work efficiently.
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
          <img  alt="Task management system interface mockup" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
        </div>
      </motion.div>
    </div>
  );
};
export default TaskManagement;