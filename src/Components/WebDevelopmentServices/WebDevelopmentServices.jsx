import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function WebDevelopmentServices() {
  const services = [
    { title: "Frontend Development" },
    { title: "Backend Development" },
    { title: "Fullstack Development" },
    { title: "Web App Optimization" },
    { title: "API Integration & Management" },
  ];

  return (
    <section className="relative py-20 bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-black opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="max-w-7xl mx-auto h-[2px] bg-gray-300/30 mb-10"></div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-red-600">Web Development Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Providing professional web development solutions, building responsive websites, optimizing performance, and integrating robust backend systems for businesses.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center group transition overflow-hidden"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-red-600 group-hover:bg-white transition">
                <FileText size={36} className="text-white group-hover:text-red-600" />
              </div>

              <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-red-600 transition">
                {service.title}
              </h3>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
