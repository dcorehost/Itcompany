import React from "react";
import serviceImage from "../../assets/appservice.png"; 

import { FaApple, FaAndroid, FaMobileAlt, FaBuilding, FaTools } from "react-icons/fa";

export default function ServicesWeOffer() {
  const services = [
    { 
      icon: <FaApple />, 
      title: "iOS App Development", 
      desc: "Custom iOS applications optimized for performance and user experience." 
    },
    { 
      icon: <FaAndroid />, 
      title: "Android App Development", 
      desc: "Native Android apps with seamless functionality and smooth UI." 
    },
    { 
      icon: <FaMobileAlt />, 
      title: "Hybrid / Cross-Platform Apps", 
      desc: "React Native & Flutter apps that run on multiple platforms efficiently." 
    },
    { 
      icon: <FaBuilding />, 
      title: "Enterprise App Development", 
      desc: "Robust enterprise solutions tailored for your organization." 
    },
    { 
      icon: <FaTools />, 
      title: "Maintenance & Support", 
      desc: "Ongoing updates, bug fixes, and support to keep your app running smoothly." 
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
            className="rounded-2xl  max-w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}
