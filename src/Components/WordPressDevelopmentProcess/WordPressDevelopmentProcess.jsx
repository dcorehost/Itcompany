import React from "react";
import { FaClipboardList, FaPenNib, FaCode, FaBug, FaRocket, FaSyncAlt } from "react-icons/fa";

export default function WordPressDevelopmentProcess() {
  const steps = [
    { 
      icon: <FaClipboardList />, 
      title: "Requirement Analysis", 
      desc: "Understand client goals, define WordPress website scope, and plan project milestones." 
    },
    { 
      icon: <FaPenNib />, 
      title: "UI/UX Design", 
      desc: "Design intuitive, engaging, and responsive WordPress interfaces with a focus on user experience." 
    },
    { 
      icon: <FaCode />, 
      title: "Development", 
      desc: "Develop custom WordPress themes, plugins, and features with clean and maintainable code." 
    },
    { 
      icon: <FaBug />, 
      title: "Testing & QA", 
      desc: "Perform rigorous testing to ensure your WordPress site functions correctly and is secure." 
    },
    { 
      icon: <FaRocket />, 
      title: "Deployment", 
      desc: "Launch the WordPress website with proper optimization and configure hosting and domains." 
    },
    { 
      icon: <FaSyncAlt />, 
      title: "Maintenance & Updates", 
      desc: "Provide ongoing maintenance, updates, backups, and support to keep your WordPress site running smoothly." 
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full filter blur-3xl opacity-30 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-200 rounded-full filter blur-3xl opacity-20 translate-x-32 translate-y-32"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">
          Our <span className="text-red-600">WordPress Development Process</span>
        </h2>

        <div className="relative flex flex-col md:flex-row md:items-center justify-between">
          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-400 hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative flex flex-col items-center md:items-center z-10">
              
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl shadow-lg transform transition-transform duration-500 hover:scale-110 mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-700 max-w-xs">{step.desc}</p>

              {index !== steps.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-red-300 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
