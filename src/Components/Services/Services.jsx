// components/Services.jsx
import React from 'react'

const Services = () => {
  const services = [
    {
      icon: "laptop-code",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      icon: "mobile-alt",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      icon: "cloud",
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment services for scalable applications"
    },
    {
      icon: "shield-alt",
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets"
    },
    {
      icon: "chart-bar",
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics"
    },
    {
      icon: "robot",
      title: "AI & ML",
      description: "Intelligent solutions powered by artificial intelligence and machine learning"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We offer a wide range of IT services to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-red-100 hover:border-red-200">
              <div className="text-red-600 text-4xl mb-4">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services