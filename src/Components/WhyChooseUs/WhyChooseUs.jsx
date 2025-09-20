<<<<<<< HEAD
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
=======

import React from "react";
import { FaRocket, FaShieldAlt, FaUsersCog, FaHeadset } from "react-icons/fa";
import bgimghome from "../../assets/bgimghome.jpg";

const reasons = [
  {
    id: 1,
    icon: FaRocket,
    title: "Fast & Agile",
    description:
      "We deliver rapid development cycles without compromising quality to keep your projects ahead.",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "Secure Solutions",
    description:
      "Security is our priority with best practices and robust infrastructure protecting your assets.",
  },
  {
    id: 3,
    icon: FaUsersCog,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience in developing innovative IT solutions.",
  },
  {
    id: 4,
    icon: FaHeadset,
    title: "24/7 Support",
    description:
      "Dedicated support team available around the clock to assist and resolve all your needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative w-full py-20 px-6"
      style={{
        backgroundImage: `url(${bgimghome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
   
      <div className="relative max-w-7xl mx-auto text-white">
        <h2 className="text-5xl font-extrabold text-center mb-16 z-10 relative">
          <span className="text-[#e53935]">Why</span> Choose Us
        </h2>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center p-6 bg-black/30 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${id * 0.2}s` }}
            >
              <Icon className="text-[#e53935] w-14 h-14 mb-6 animate-bounce-slow" />
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-300 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fadeInUp:nth-child(1) {
          animation-delay: 0.2s;
        }
        .animate-fadeInUp:nth-child(2) {
          animation-delay: 0.4s;
        }
        .animate-fadeInUp:nth-child(3) {
          animation-delay: 0.6s;
        }
        .animate-fadeInUp:nth-child(4) {
          animation-delay: 0.8s;
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15%);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
>>>>>>> 72340757e2db0f5cb84cbaacd13da5a5b249a5a5
