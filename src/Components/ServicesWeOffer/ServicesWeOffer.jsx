import React from "react";
import serviceImage from "../../assets/wordpress.png"; 

import { FaWordpressSimple, FaPaintBrush, FaServer, FaSearch, FaTools } from "react-icons/fa";

export default function ServicesWeOffer() {
  const services = [
    { 
      icon: <FaWordpressSimple />, 
      title: "Custom WordPress Development", 
      desc: "We build fully customized WordPress websites tailored to your business needs, ensuring flexibility, scalability, and performance." 
    },
    { 
      icon: <FaPaintBrush />, 
      title: "WordPress Design & UI/UX", 
      desc: "Modern and user-friendly WordPress designs that provide an intuitive experience and engage your audience effectively." 
    },
    { 
      icon: <FaServer />, 
      title: "Plugin & Backend Development", 
      desc: "Custom plugins and backend solutions to extend WordPress functionality and integrate with third-party systems." 
    },
    { 
      icon: <FaSearch />, 
      title: "SEO Optimization", 
      desc: "Optimized WordPress sites to rank higher on search engines and improve visibility for your business." 
    },
    { 
      icon: <FaTools />, 
      title: "Maintenance & Support", 
      desc: "Ongoing updates, security monitoring, bug fixes, and technical support to keep your WordPress site running smoothly." 
    },
  ];

  return (
    <section className="pb-32 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Services <span className="text-red-600">We Offer</span>
          </h2>
          <div className="flex flex-col space-y-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-3xl mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img 
            src={serviceImage} 
            alt="Our Services" 
            className="rounded-2xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
