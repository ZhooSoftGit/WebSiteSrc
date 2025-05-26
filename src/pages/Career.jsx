import React from "react";
import CareerHeader from "@/components/career/CareerHeader";
import JobOpeningsSection from "@/components/career/JobOpeningsSection";
import RegistrationFormSection from "@/components/career/RegistrationFormSection";

const jobOpeningsData = [
  {
    id: 1,
    title: "Senior Software Developer",
    department: "Engineering",
    location: "Remote / Onsite (Chennai, India)",
    type: "Full-time",
    description: "We are looking for an experienced Senior Software Developer to join our dynamic team. You will be responsible for developing high-quality software solutions, collaborating with cross-functional teams, and mentoring junior developers.",
    responsibilities: [
      "Design, develop, and maintain scalable software applications.",
      "Collaborate with product managers, designers, and other engineers.",
      "Write clean, efficient, and well-documented code.",
      "Participate in code reviews and provide constructive feedback.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "5+ years of experience in software development.",
      "Proficiency in JavaScript (React, Node.js) and Python.",
      "Experience with cloud platforms (AWS, Azure).",
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Onsite (Chennai, India)",
    type: "Full-time",
    description: "Join our creative team as a UX/UI Designer. You will be responsible for creating intuitive and visually appealing user experiences for our web and mobile applications.",
    responsibilities: [
      "Conduct user research and usability testing.",
      "Create wireframes, prototypes, and high-fidelity mockups.",
      "Collaborate with product managers and developers.",
    ],
    qualifications: [
      "Proven experience as a UX/UI Designer or similar role.",
      "Strong portfolio showcasing your design skills.",
      "Proficiency in design tools (Figma, Sketch, Adobe XD).",
    ]
  },
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