import React from "react";
import homebanner1 from "../../assets/homebanner1.jpg"; 

const AboutSection = () => {
  return (
    <section className="relative bg-[#f9fafb] py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 overflow-hidden">
      
      <div className="flex-1 max-w-xl text-center md:text-left animate-fadeInLeft z-20">
      <h2 className="text-6xl font-extrabold mb-8 tracking-wide">
  <span className="text-black">
    About
  </span>{" "}
  <span className="text-[#e53935]">Us</span>
</h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          NLP Global Tech is a cutting-edge IT solutions provider specializing in app development, web development, and WordPress development. We empower businesses to leverage technology for growth and innovation.
        </p>
        <p className="text-gray-600 text-base italic border-l-4 border-[#e53935] pl-6">
          Our mission is to deliver tailored, scalable, and high-quality solutions that drive business success and digital transformation.
        </p>
      </div>

  
      <div className="flex-1 animate-fadeInRight z-10">
        <img
          src={homebanner1}
          alt="About NLP Global Tech"
          className="rounded-3xl shadow-2xl object-cover w-full max-w-3xl mx-auto"
        />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-b from-[#e5393550] to-transparent pointer-events-none -z-10 rounded-3xl" />

      <style jsx>{`
        .animate-fadeInLeft {
          opacity: 0;
          transform: translateX(-30px);
          animation: fadeInLeft 1.2s ease forwards;
          animation-delay: 0.2s;
        }
        .animate-fadeInRight {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeInRight 1.2s ease forwards;
          animation-delay: 0.5s;
        }
        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
