import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function WebDevelopmentFAQ() {
  const faqs = [
    {
      q: "What web development services do you offer?",
      a: "We provide frontend, backend, fullstack development, API integration, and performance optimization for web applications and websites.",
    },
    {
      q: "Can you build responsive websites?",
      a: "Absolutely. We ensure all websites are fully responsive and look great on desktops, tablets, and mobile devices.",
    },
    {
      q: "Do you offer e-commerce development?",
      a: "Yes. We specialize in creating secure, scalable, and user-friendly e-commerce platforms with payment integration.",
    },
    {
      q: "Can you optimize website performance?",
      a: "We improve loading speed, enhance SEO, and implement best practices to ensure your website performs efficiently.",
    },
    {
      q: "Do you provide API integration services?",
      a: "Yes. We integrate third-party APIs, develop custom APIs, and ensure seamless communication between frontend and backend systems.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-red-100 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-100 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-50/20 opacity-30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <span className="text-red-600">Web Development Questions</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Everything you need to know about our web development services.
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => toggleFAQ(index)}
              className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer shadow-md hover:border-red-600 transition-all duration-500"
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-medium transition-colors ${
                    openIndex === index ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-3 text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
