import React from "react";
import { motion } from "framer-motion";

export default function WebDevCategories() {
  const categories = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "CMS Development",
    "Web App Security",
    "UI/UX Design",
    "API Integration",
    "SEO Optimization",
    "Performance & Scalability",
  ];

  return (
    <section className="relative py-20 bg-[#1a1a1a] text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] opacity-95"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore <span className="text-red-600">Web Development Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover our expertise in building modern, responsive, and high-performance websites and applications.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.07, y: -6 }}
              className="relative group bg-white/5 backdrop-blur-sm border border-gray-700 
                         text-white py-4 px-6 rounded-xl shadow-md cursor-pointer 
                         text-sm md:text-base font-medium transition-all duration-500"
            >
              {category}

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
