import React from "react";
import { FaUsers, FaChartLine, FaLaptopHouse, FaHeart } from "react-icons/fa";

export default function AboutWorkingWithUs() {
  const benefits = [
    {
      icon: <FaUsers className="text-red-600 text-4xl mb-4" />,
      title: "Collaborative Culture",
      desc: "We believe in teamwork, open communication, and building strong relationships with our colleagues.",
    },
    {
      icon: <FaChartLine className="text-red-600 text-4xl mb-4" />,
      title: "Career Growth",
      desc: "Get mentorship, training, and opportunities to expand your skills and grow your career.",
    },
    {
      icon: <FaLaptopHouse className="text-red-600 text-4xl mb-4" />,
      title: "Work-Life Balance",
      desc: "We value flexibility, ensuring you balance personal and professional life effectively.",
    },
    {
      icon: <FaHeart className="text-red-600 text-4xl mb-4" />,
      title: "Positive Environment",
      desc: "Enjoy a supportive and inclusive workplace where your contributions truly matter.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 text-center">
       
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          About <span className="text-red-600">Working With Us</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
          At our company, we go beyond just work — we create an environment
          where innovation, collaboration, and growth come together. We’re
          passionate about building careers, not just jobs.
        </p>

        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
