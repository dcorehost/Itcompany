import React from "react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-200 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-red-600">Build Your Next App</span>?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let’s turn your idea into a high-performing, scalable, and beautiful mobile application. Connect with our expert team today and start your journey.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/contact-us"
            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          >
            Get a Free Quote
          </a>
          <a
            href="/about-us"
            className="px-8 py-4 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition duration-300"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
