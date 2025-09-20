
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
