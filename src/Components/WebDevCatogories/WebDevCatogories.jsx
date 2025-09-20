import React from "react";
import serviceImage from "../../assets/webservices.png";
import { FaLaptopCode, FaGlobe, FaServer, FaPaintBrush, FaTools } from "react-icons/fa";

export default function ServicesWeOffer() {
  const services = [
    { 
      icon: <FaLaptopCode />, 
      title: "Custom Website Development", 
      desc: "We build responsive, high-performance websites tailored to your business needs." 
    },
    { 
      icon: <FaGlobe />, 
      title: "Web Design & UI/UX", 
      desc: "Modern and user-friendly designs that provide a seamless user experience." 
    },
    { 
      icon: <FaServer />, 
      title: "Backend & API Development", 
      desc: "Secure and scalable backend solutions to power your website and apps." 
    },
    { 
      icon: <FaPaintBrush />, 
      title: "SEO & Digital Marketing", 
      desc: "Optimized websites to rank higher on search engines and reach your audience effectively." 
    },
    { 
      icon: <FaTools />, 
      title: "Maintenance & Support", 
      desc: "Ongoing updates, bug fixes, and technical support to keep your website running smoothly." 
    },
  ];

  return (
    <section className="pb-32 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Services List */}
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

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={serviceImage} 
            alt="Our Services" 
            className="rounded-2xl max-w-full h-[90%] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
