import React, { useState } from 'react';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaInfoCircle, 
  FaUsers, 
  FaShieldAlt, 
  FaRocket,
  FaHandshake,
  FaAward
} from 'react-icons/fa';

const AboutFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, DevOps solutions, and digital marketing. Our team specializes in creating custom solutions tailored to your business needs.",
      icon: <FaRocket className="text-red-500 text-xl" />
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines after our initial consultation and project scoping.",
      icon: <FaAward className="text-red-500 text-xl" />
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages. Our support includes regular updates, security monitoring, bug fixes, and performance optimization to ensure your digital products remain secure and up-to-date.",
      icon: <FaShieldAlt className="text-red-500 text-xl" />
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, WordPress, iOS Swift, Android Kotlin, AWS, Azure, and many more. We choose the best technology stack for each project's specific requirements.",
      icon: <FaInfoCircle className="text-red-500 text-xl" />
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and thorough QA processes. Our agile methodology ensures regular feedback and iterations throughout the development process.",
      icon: <FaHandshake className="text-red-500 text-xl" />
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We often collaborate with in-house teams, providing specialized expertise where needed. We're flexible and can adapt to your workflow, tools, and communication preferences.",
      icon: <FaUsers className="text-red-500 text-xl" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {faqData.slice(0, 3).map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 transition-all duration-300 hover:shadow-lg"
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-red-500">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                
                {activeIndex === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {faqData.slice(3).map((faq, index) => (
              <div 
                key={index + 3} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 transition-all duration-300 hover:shadow-lg"
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleFAQ(index + 3)}
                >
                  <div className="flex items-center">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-red-500">
                    {activeIndex === index + 3 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                
                {activeIndex === index + 3 && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-red-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto">We're here to help! Contact our team for more information about our services and how we can assist with your project.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Contact Us
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFAQ;