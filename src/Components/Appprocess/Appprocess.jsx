import React from "react";
import { FaClipboardList, FaPenNib, FaCode, FaBug, FaRocket, FaSyncAlt } from "react-icons/fa";

export default function AppDevelopmentProcess() {
  const steps = [
    { icon: <FaClipboardList />, title: "Requirement Analysis", desc: "Understand client requirements, define project scope, and plan milestones." },
    { icon: <FaPenNib />, title: "UI/UX Design", desc: "Design intuitive and engaging user interfaces with seamless user experience." },
    { icon: <FaCode />, title: "Development", desc: "Write clean, scalable, and maintainable code for iOS, Android, or cross-platform apps." },
    { icon: <FaBug />, title: "Testing & QA", desc: "Conduct rigorous testing to ensure app quality, performance, and security." },
    { icon: <FaRocket />, title: "Deployment", desc: "Launch the app to app stores with proper optimization and support." },
    { icon: <FaSyncAlt />, title: "Support & Updates", desc: "Provide ongoing maintenance, updates, and technical support for smooth operation." },
  ];

  return (
    <section className="py-24 relative bg-black/70">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-white">
          Our <span className="text-red-600">App Development Process</span>
        </h2>

        <div className="relative flex flex-col md:flex-row md:items-center justify-between">
          {/* Gradient connecting line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-red-600 hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative flex flex-col items-center md:items-center z-10">
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl shadow-lg transform transition-transform duration-500 hover:scale-110 mb-4">
                {step.icon}
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-200 max-w-xs">{step.desc}</p>

              {/* Mobile vertical connector */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-red-400 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
