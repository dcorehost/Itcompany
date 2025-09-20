import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Server, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Code className="w-8 h-8 text-red-600" />,
      title: "Expert Development Team",
      desc: "Our developers specialize in modern web technologies to build responsive, high-performance websites tailored to your business needs.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-600" />,
      title: "Mobile-First Design",
      desc: "We ensure your website looks and performs flawlessly on all devices, prioritizing user experience and accessibility.",
    },
    {
      icon: <Server className="w-8 h-8 text-red-600" />,
      title: "Reliable Hosting & Security",
      desc: "We provide secure and scalable hosting solutions, protecting your site from threats while ensuring optimal uptime and performance.",
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "SEO & Global Reach",
      desc: "Our websites are optimized for search engines and performance, helping you reach your target audience worldwide.",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
    
        <div className="max-w-7xl mx-auto h-[2px] bg-gray-200 mb-10"></div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
        >
          Why <span className="text-red-600">Choose Us</span> for Web Development?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Building a website is more than code. Here’s why clients trust our expertise for creating fast, secure, and scalable web solutions that grow their business.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative bg-white rounded-2xl shadow-lg p-8 group transition overflow-hidden hover:shadow-2xl"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-red-100 group-hover:bg-red-50 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
