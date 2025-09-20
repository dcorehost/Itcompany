// components/About.jsx
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
            About TechNova
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are a team of passionate IT professionals dedicated to delivering innovative solutions that drive business growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our team" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, TechNova has been at the forefront of digital transformation for businesses across various industries. 
              Our journey began with a simple vision: to make advanced technology accessible to all businesses, regardless of their size.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we're proud to have helped over 500 companies streamline their operations, enhance their digital presence, 
              and achieve their business goals through our tailored IT solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-700">Clients Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">13+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                <div className="text-gray-700">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-700">IT Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-red-700 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-red-100">
              <div className="text-red-600 text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h4>
              <p className="text-gray-700">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-red-100">
              <div className="text-red-600 text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Integrity</h4>
              <p className="text-gray-700">
                We build trust through transparency, honesty, and ethical business practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-red-100">
              <div className="text-red-600 text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Collaboration</h4>
              <p className="text-gray-700">
                We work closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About