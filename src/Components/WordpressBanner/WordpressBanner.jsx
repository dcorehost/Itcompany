import React from "react";
import appbanner from "../../assets/webservice.png";

export default function WordpressBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${appbanner})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-35 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
          Build <span className="text-red-500">Professional WordPress Websites</span> for Your Business
        </h1>
        <p className="text-lg text-white-200 mb-8 max-w-2xl drop-shadow-md">
          We develop responsive, SEO-friendly, and customizable WordPress websites that help you engage users and grow your online presence efficiently.
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
