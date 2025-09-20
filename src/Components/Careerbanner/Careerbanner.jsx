import React from "react";
import careerBanner from "../../assets/career.jfif"; 
export default function CareerHeroBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${careerBanner})` }}
    >
     
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
          Join Our <span className="text-red-500">Team</span> & Build
          Innovative Solutions
        </h1>
        <p className="text-lg text-white-900 mb-8 max-w-2xl drop-shadow-md">
          Explore exciting career opportunities at [Your Company Name]. Be part of a collaborative and dynamic team where innovation meets impact.
        </p>
          <div className="flex flex-wrap justify-center gap-4">
  <a href="/contact-us" className="inline-block">
    <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
      Get a Free Quote
    </button>
  </a>
  <a href="/about-us" className="inline-block">
    <button className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white/10 transition">
      Our Portfolio
    </button>
  </a>
</div>
      </div>
    </section>
  );
}
