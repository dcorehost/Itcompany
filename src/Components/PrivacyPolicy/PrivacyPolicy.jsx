import React from "react";
import { FaLaptopCode, FaMobileAlt, FaWordpress, FaShieldAlt, FaChartLine, FaSearch, FaUniversalAccess } from 'react-icons/fa';

export default function ServicesAudit() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-red-600 text-center mb-4">
          Website & App Development Audit
        </h1>
        <p className="text-xl text-gray-800 text-center mb-12">
          Comprehensive analysis and actionable insights for your development services.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Web Development */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-4xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-white">
                Web Development Services
              </h2>
            </div>
            <ul className="list-none pl-0 text-gray-200 space-y-4">
              <li>
                <strong className="text-white font-semibold block mb-1">Issue:</strong> It may not be clear what specific web technologies or frameworks you specialize in (e.g., React, Angular, Node.js).
              </li>
              <li>
                <strong className="text-red-400 font-semibold block mb-1">Recommendation:</strong> Create a section detailing your tech stack. Highlight your expertise in both front-end and back-end development. Showcase successful projects with case studies that include the technologies used.
              </li>
            </ul>
          </div>

          {/* App Development */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-4xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-white">
                App Development Services
              </h2>
            </div>
            <ul className="list-none pl-0 text-gray-200 space-y-4">
              <li>
                <strong className="text-white font-semibold block mb-1">Issue:</strong> Potential clients won't know if you build native (iOS/Android) or cross-platform apps (React Native, Flutter).
              </li>
              <li>
                <strong className="text-red-400 font-semibold block mb-1">Recommendation:</strong> Explicitly state the platforms you develop for and the frameworks you use. Provide a portfolio of your mobile apps, with links to the App Store and Google Play, if applicable.
              </li>
            </ul>
          </div>

          {/* WordPress Development */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaWordpress className="text-4xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-white">
                WordPress Development
              </h2>
            </div>
            <ul className="list-none pl-0 text-gray-200 space-y-4">
              <li>
                <strong className="text-white font-semibold block mb-1">Issue:</strong> Your WordPress services might be too generic. It's unclear if you focus on custom theme development, plugin creation, or e-commerce sites.
              </li>
              <li>
                <strong className="text-red-400 font-semibold block mb-1">Recommendation:</strong> Break down your WordPress offerings into specific categories like "Custom Theme Development," "Plugin Integration & Customization," and "WooCommerce Solutions." Highlight your ability to create bespoke, high-performance sites.
              </li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-4xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-white">
                Trust & Security
              </h2>
            </div>
            <ul className="list-none pl-0 text-gray-200 space-y-4">
              <li>
                <strong className="text-white font-semibold block mb-1">Issue:</strong> Clients need assurance that their project's data and security are a top priority.
              </li>
              <li>
                <strong className="text-red-400 font-semibold block mb-1">Recommendation:</strong> Feature a section on your commitment to security. Explain your processes for **secure coding practices**, data protection, and post-launch maintenance. Mention if you perform security audits or penetration testing.
              </li>
            </ul>
          </div>

          {/* Performance & UX */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-4xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-white">
                Performance & UX
              </h2>
            </div>
            <ul className="list-none pl-0 text-gray-200 space-y-4">
              <li>
                <strong className="text-white font-semibold block mb-1">Issue:</strong> Your own website's performance and design may not reflect the quality of your work.
              </li>
              <li>
                <strong className="text-red-400 font-semibold block mb-1">Recommendation:</strong> Your website is your best portfolio. Ensure it loads quickly and has an intuitive, modern user experience. Showcase metrics like page speed and a high UX score as part of your marketing.
              </li>
            </ul>
          </div>

          {/* SEO & Discoverability */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-red-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaSearch className="text-4xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-white">
                SEO & Discoverability
              </h2>
            </div>
            <ul className="list-none pl-0 text-gray-200 space-y-4">
              <li>
                <strong className="text-white font-semibold block mb-1">Issue:</strong> If you're a web development company, your own SEO should be top-notch to attract new clients.
              </li>
              <li>
                <strong className="text-red-400 font-semibold block mb-1">Recommendation:</strong> Optimize every page with keywords clients are searching for, such as "ReactJS development company" or "custom WordPress themes." Create content that proves your expertise, like "How to improve your website's core web vitals."
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}