import React from "react";
import CareerHeader from "@/components/career/CareerHeader";
import JobOpeningsSection from "@/components/career/JobOpeningsSection";
import RegistrationFormSection from "@/components/career/RegistrationFormSection";

const jobOpeningsData = [
  {
    id: 1,
    title: "Senior .NET Full Stack Developer",
    department: "Engineering",
    location: "Remote / Onsite (Coimbatore, India)",
    type: "Full-time",
    description: "We are seeking a highly skilled Senior .NET Full Stack Developer to design, develop, and maintain our web applications. You will work with both front-end and back-end technologies to deliver high-quality, scalable software solutions.",
    responsibilities: [
      "Develop and maintain web applications using .NET Framework and .NET Core.",
      "Design and implement microservices architecture.",
      "Build responsive front-end interfaces with modern JavaScript frameworks.",
      "Write complex SQL queries and manage database schemas.",
      "Collaborate with cross-functional teams to define and ship new features."
    ],
    qualifications: [
      "Extensive experience with .NET Framework, .NET Core, and C#.",
      "Proven experience with microservices architecture.",
      "Strong proficiency in front-end technologies (e.g., React, Angular, or Vue.js).",
      "Expertise in SQL Server or other relational databases.",
      "Excellent problem-solving and communication skills."
    ]
  },
  {
    id: 2,
    title: "Senior Cross-Platform Developer",
    department: "Mobile Development",
    location: "Remote / Onsite (Coimbatore, India)",
    type: "Full-time",
    description: "Join our mobile team to build next-generation cross-platform applications. You will be responsible for creating high-performance, user-friendly mobile apps for both iOS and Android.",
    responsibilities: [
      "Develop cross-platform mobile applications using .NET MAUI.",
      "Integrate with backend services and RESTful APIs.",
      "Deploy applications to cloud platforms (Azure, AWS).",
      "Ensure the performance, quality, and responsiveness of applications.",
      "Work with the design team to implement pixel-perfect UIs."
    ],
    qualifications: [
      "Strong experience in .NET and C#.",
      "Hands-on experience with .NET MAUI or Xamarin.Forms.",
      "Experience with RESTful APIs and cloud services.",
      "A solid understanding of the full mobile development life cycle.",
      "Passion for creating great user experiences."
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Onsite (Coimbatore, India)",
    type: "Full-time",
    description: "We are looking for a creative UI/UX Designer to shape the user experience of our products. You will be responsible for creating intuitive, engaging, and visually stunning designs for our web and mobile applications.",
    responsibilities: [
      "Create wireframes, storyboards, user flows, and sitemaps.",
      "Design high-fidelity mockups and prototypes in Figma.",
      "Leverage advanced AI tools to accelerate the design process.",
      "Conduct user research and evaluate user feedback.",
      "Collaborate with developers to ensure accurate implementation of designs."
    ],
    qualifications: [
      "Proven UI/UX design experience with a strong portfolio.",
      "Expertise in Figma and other visual design tools.",
      "Experience with AI-powered design tools is a major plus.",
      "Excellent visual design skills with a sensitivity to user-system interaction.",
      "Ability to solve problems creatively and effectively."
    ]
  }
];

const Career = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <CareerHeader />
      <JobOpeningsSection jobOpeningsData={jobOpeningsData} />
      <RegistrationFormSection />
    </div>
  );
};

export default Career;