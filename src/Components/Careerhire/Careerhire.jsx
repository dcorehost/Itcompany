import React from "react";
import {
  FaClipboardList,
  FaUserCheck,
  FaUsers,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

export default function HiringProcess() {
  const steps = [
    {
      icon: <FaClipboardList />,
      title: "Application Review",
      desc: "We carefully review every application to ensure skills and experience match the role.",
    },
    {
      icon: <FaUsers />,
      title: "HR Screening",
      desc: "Shortlisted candidates have a friendly discussion with HR to understand expectations.",
    },
    {
      icon: <FaUserCheck />,
      title: "Technical Interview",
      desc: "Showcase your skills through technical rounds, coding challenges, or case studies.",
    },
    {
      icon: <FaHandshake />,
      title: "Final Interview",
      desc: "A leadership conversation to evaluate culture fit and align vision with the company.",
    },
    {
      icon: <FaRocket />,
      title: "Offer & Onboarding",
      desc: "Successful candidates receive their offer and begin their journey with us.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-red-600">Hiring Process</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            A transparent, step-by-step process to ensure the best candidate
            experience and the right team fit.
          </p>
        </div>

       
        <div className="relative">
        
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-red-200 h-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  index % 2 === 0
                    ? "md:justify-start md:pr-12"
                    : "md:justify-end md:pl-12"
                }`}
              >
                
                <div className="absolute md:static left-1/2 -translate-x-1/2 md:translate-x-0 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-red-500 flex items-center justify-center text-red-600 text-2xl shadow-lg z-10">
                  {step.icon}
                </div>

                
                <div
                  className={`mt-20 md:mt-0 w-full md:w-[80%] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
