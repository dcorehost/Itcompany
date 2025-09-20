import React from "react";
import { FaMobileAlt, FaServer, FaPalette, FaTasks, FaLock, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    { 
      icon: <FaMobileAlt />, 
      title: "Cross-Platform Development", 
      desc: "We build apps for iOS & Android using React Native & Flutter, ensuring faster delivery and consistent performance across all devices." 
    },
    { 
      icon: <FaServer />, 
      title: "Scalable Architecture", 
      desc: "Our solutions are built to scale seamlessly as your business grows, with robust backend architecture and cloud-ready infrastructure." 
    },
    { 
      icon: <FaPalette />, 
      title: "UI/UX Centric Design", 
      desc: "We prioritize user experience with clean, modern, and intuitive designs that engage and retain your audience." 
    },
    { 
      icon: <FaTasks />, 
      title: "Agile Development Process", 
      desc: "Our team follows agile methodology for faster iterations, transparency, and timely delivery of your project milestones." 
    },
    { 
      icon: <FaLock />, 
      title: "Security & Compliance", 
      desc: "We ensure your app meets top industry standards with end-to-end security and compliance for data safety." 
    },
    { 
      icon: <FaHeadset />, 
      title: "24/7 Support", 
      desc: "Our dedicated support team is always available to assist you with updates, troubleshooting, and guidance." 
    },
  ];

  return (
    <section className="py-30 bg-gray-50"> 
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Why <span className="text-red-600">Choose Us</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          At <span className="font-semibold text-gray-900">[Your Company Name]</span>, we combine technology expertise with creativity to deliver innovative, reliable, and secure mobile solutions. 
          Our team is committed to helping your business grow faster with high-quality apps tailored to your needs.
        </p>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3"> 
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative py-12 px-8 bg-white rounded-3xl shadow-lg overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              
              <div className="absolute -top-10 -right-10 text-red-600 text-7xl opacity-10 transform rotate-12">
                {feature.icon}
              </div>

              
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>

              
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
