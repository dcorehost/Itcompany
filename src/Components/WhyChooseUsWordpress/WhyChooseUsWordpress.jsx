import React from "react";
import { FaWordpressSimple, FaServer, FaPalette, FaTasks, FaLock, FaHeadset } from "react-icons/fa";

export default function WhyChooseUsWordpress() {
  const features = [
    { 
      icon: <FaWordpressSimple />, 
      title: "Custom WordPress Development", 
      desc: "We build fully customized WordPress websites tailored to your business needs, ensuring functionality, flexibility, and scalability." 
    },
    { 
      icon: <FaServer />, 
      title: "Reliable Hosting & Performance", 
      desc: "Our WordPress solutions are optimized for fast loading, high uptime, and smooth performance with scalable hosting options." 
    },
    { 
      icon: <FaPalette />, 
      title: "UI/UX Centric Design", 
      desc: "We design visually appealing, responsive, and user-friendly WordPress websites that engage your audience effectively." 
    },
    { 
      icon: <FaTasks />, 
      title: "SEO & Optimization", 
      desc: "Our team implements SEO best practices, page speed optimizations, and performance enhancements for better visibility online." 
    },
    { 
      icon: <FaLock />, 
      title: "Security & Maintenance", 
      desc: "We ensure your WordPress site is secure, regularly updated, and compliant with the latest web standards." 
    },
    { 
      icon: <FaHeadset />, 
      title: "24/7 Support", 
      desc: "Our support team is always available to help with updates, troubleshooting, and guidance to keep your website running smoothly." 
    },
  ];

  return (
    <section className="py-36 bg-gray-50"> 
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Why <span className="text-red-600">Choose Us</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          At <span className="font-semibold text-gray-900">[Your Company Name]</span>, we specialize in creating powerful, secure, and high-performing WordPress websites. 
          Our team combines design expertise and technical know-how to help your business grow online.
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
