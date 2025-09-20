
import React from "react";
import { FaMicrosoft, FaApple, FaGoogle, FaLinkedin, FaTv } from "react-icons/fa";

const clientIcons = [
  { id: 1, icon: FaTv, color: "#000000" },           
  { id: 2, icon: FaMicrosoft, color: "#737373" },
  { id: 3, icon: FaApple, color: "#000000" },
  { id: 4, icon: FaGoogle, color: "#4285F4" },
  { id: 5, icon: FaLinkedin, color: "#0A66C2" },
];

const OurClients = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#e53935]">
        Our Trusted Clients & Partners
      </h2>

      <div className="overflow-hidden relative max-w-7xl mx-auto">
        <div className="flex animate-scroll space-x-20 justify-center items-center">
          {clientIcons.concat(clientIcons).map(({ id, icon: Icon, color }, index) => (
            <div key={`${id}-${index}`} className="flex-shrink-0 w-36 h-20 flex items-center justify-center">
              <Icon size={72} color={color} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scrollLeft 30s linear infinite;
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;
