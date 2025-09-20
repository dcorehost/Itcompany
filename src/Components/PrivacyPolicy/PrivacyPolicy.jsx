import React, { useState } from "react";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaWordpress, 
  FaShieldAlt, 
  FaChartLine, 
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';

export default function ServicesAudit() {
  const [activeCategory, setActiveCategory] = useState(0);

  const services = [
    {
      title: "Web Development Services",
      icon: <FaLaptopCode className="text-2xl" />,
      issue: "It may not be clear what specific web technologies or frameworks you specialize in (e.g., React, Angular, Node.js).",
      recommendation: "Create a section detailing your tech stack. Highlight your expertise in both front-end and back-end development. Showcase successful projects with case studies that include the technologies used."
    },
    {
      title: "App Development Services",
      icon: <FaMobileAlt className="text-2xl" />,
      issue: "Potential clients won't know if you build native (iOS/Android) or cross-platform apps (React Native, Flutter).",
      recommendation: "Explicitly state the platforms you develop for and the frameworks you use. Provide a portfolio of your mobile apps, with links to the App Store and Google Play, if applicable."
    },
    {
      title: "WordPress Development",
      icon: <FaWordpress className="text-2xl" />,
      issue: "Your WordPress services might be too generic. It's unclear if you focus on custom theme development, plugin creation, or e-commerce sites.",
      recommendation: "Break down your WordPress offerings into specific categories like 'Custom Theme Development,' 'Plugin Integration & Customization,' and 'WooCommerce Solutions.' Highlight your ability to create bespoke, high-performance sites."
    },
    {
      title: "Trust & Security",
      icon: <FaShieldAlt className="text-2xl" />,
      issue: "Clients need assurance that their project's data and security are a top priority.",
      recommendation: "Feature a section on your commitment to security. Explain your processes for secure coding practices, data protection, and post-launch maintenance. Mention if you perform security audits or penetration testing."
    },
    {
      title: "Performance & UX",
      icon: <FaChartLine className="text-2xl" />,
      issue: "Your own website's performance and design may not reflect the quality of your work.",
      recommendation: "Your website is your best portfolio. Ensure it loads quickly and has an intuitive, modern user experience. Showcase metrics like page speed and a high UX score as part of your marketing."
    },
    {
      title: "SEO & Discoverability",
      icon: <FaSearch className="text-2xl" />,
      issue: "If you're a web development company, your own SEO should be top-notch to attract new clients.",
      recommendation: "Optimize every page with keywords clients are searching for, such as 'ReactJS development company' or 'custom WordPress themes.' Create content that proves your expertise, like 'How to improve your website's core web vitals.'"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Website & App Development Audit
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive analysis and actionable insights to enhance your development services and boost client engagement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
        
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Audit Categories</h2>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveCategory(index)}
                      className={`w-full text-left py-3 px-4 rounded-md flex items-center transition-colors ${
                        activeCategory === index
                          ? "bg-red-100 text-red-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-3 text-red-500">{service.icon}</span>
                      <span>{service.title}</span>
                      {activeCategory === index && (
                        <FaArrowRight className="ml-auto text-red-500" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  {services[activeCategory].icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {services[activeCategory].title}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Issue Identified
                  </h3>
                  <p className="text-gray-600 pl-4 border-l-2 border-red-200">
                    {services[activeCategory].issue}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-red-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Recommendation
                  </h3>
                  <p className="text-gray-600 pl-4 border-l-2 border-red-200">
                    {services[activeCategory].recommendation}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-between">
                  <button
                    onClick={() => setActiveCategory(activeCategory > 0 ? activeCategory - 1 : services.length - 1)}
                    className="text-red-600 font-medium flex items-center"
                  >
                    Previous Category
                  </button>
                  <span className="text-gray-500">
                    {activeCategory + 1} of {services.length}
                  </span>
                  <button
                    onClick={() => setActiveCategory(activeCategory < services.length - 1 ? activeCategory + 1 : 0)}
                    className="text-red-600 font-medium flex items-center"
                  >
                    Next Category
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-600 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Development Services?</h2>
              <p className="mb-6">Implement these recommendations to showcase your expertise and attract more clients.</p>
              <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Get Professional Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}