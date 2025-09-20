import React, { useState } from "react";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaWordpress, 
  FaShieldAlt, 
  FaChartLine, 
  FaSearch, 
  FaChevronDown,
  FaChevronUp 
} from 'react-icons/fa';

export default function ServicesAudit() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      title: "Web Development Services",
      icon: <FaLaptopCode className="text-2xl text-red-500" />,
      issue: "It may not be clear what specific web technologies or frameworks you specialize in (e.g., React, Angular, Node.js).",
      recommendation: "Create a section detailing your tech stack. Highlight your expertise in both front-end and back-end development. Showcase successful projects with case studies that include the technologies used."
    },
    {
      title: "App Development Services",
      icon: <FaMobileAlt className="text-2xl text-red-500" />,
      issue: "Potential clients won't know if you build native (iOS/Android) or cross-platform apps (React Native, Flutter).",
      recommendation: "Explicitly state the platforms you develop for and the frameworks you use. Provide a portfolio of your mobile apps, with links to the App Store and Google Play, if applicable."
    },
    {
      title: "WordPress Development",
      icon: <FaWordpress className="text-2xl text-red-500" />,
      issue: "Your WordPress services might be too generic. It's unclear if you focus on custom theme development, plugin creation, or e-commerce sites.",
      recommendation: "Break down your WordPress offerings into specific categories like 'Custom Theme Development,' 'Plugin Integration & Customization,' and 'WooCommerce Solutions.' Highlight your ability to create bespoke, high-performance sites."
    },
    {
      title: "Trust & Security",
      icon: <FaShieldAlt className="text-2xl text-red-500" />,
      issue: "Clients need assurance that their project's data and security are a top priority.",
      recommendation: "Feature a section on your commitment to security. Explain your processes for secure coding practices, data protection, and post-launch maintenance. Mention if you perform security audits or penetration testing."
    },
    {
      title: "Performance & UX",
      icon: <FaChartLine className="text-2xl text-red-500" />,
      issue: "Your own website's performance and design may not reflect the quality of your work.",
      recommendation: "Your website is your best portfolio. Ensure it loads quickly and has an intuitive, modern user experience. Showcase metrics like page speed and a high UX score as part of your marketing."
    },
    {
      title: "SEO & Discoverability",
      icon: <FaSearch className="text-2xl text-red-500" />,
      issue: "If you're a web development company, your own SEO should be top-notch to attract new clients.",
      recommendation: "Optimize every page with keywords clients are searching for, such as 'ReactJS development company' or 'custom WordPress themes.' Create content that proves your expertise, like 'How to improve your website's core web vitals.'"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Website & App Development Audit
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive analysis and actionable insights to enhance your development services and boost client engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center">
                  <div className="mr-4 bg-red-100 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <button className="text-red-500 focus:outline-none">
                  {expandedSections[index] ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {expandedSections[index] && (
                <div className="mt-4 pl-2 border-t border-gray-100 pt-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">ISSUE</h4>
                    <p className="text-gray-700">{service.issue}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-red-600 mb-1">RECOMMENDATION</h4>
                    <p className="text-gray-700">{service.recommendation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Development Services?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Let's work together to implement these recommendations and transform your development offerings.</p>
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}