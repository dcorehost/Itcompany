import React from "react";
import { FaMobileAlt, FaCode, FaRocket } from "react-icons/fa";
import appDevImg from "../../assets/appdev.png"; 

export default function WhatIsAppDevelopment() {
  const highlights = [
    {
      icon: <FaMobileAlt className="text-red-600 text-3xl" />,
      title: "Mobile-First Design",
      desc: "We focus on intuitive, responsive, and user-friendly mobile experiences for all devices.",
    },
    {
      icon: <FaCode className="text-red-600 text-3xl" />,
      title: "Clean & Scalable Code",
      desc: "Our development ensures maintainable and scalable code for future growth.",
    },
    {
      icon: <FaRocket className="text-red-600 text-3xl" />,
      title: "Fast Deployment",
      desc: "We follow agile methodologies for quick iterations and timely delivery.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            What is <span className="text-red-600">App Development?</span>
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            App development is the process of designing, coding, and deploying mobile applications that are intuitive, secure, and scalable. We specialize in creating apps that delight users while fulfilling business goals.
          </p>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex-1 flex justify-center">
          <img
            src={appDevImg}
            alt="App Development Illustration"
            className="w-5xl h-auto rounded-2xl "
          />
        </div>

      </div>
    </section>
  );
}
