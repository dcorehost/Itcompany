import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What types of apps do you develop?",
    answer:
      "We develop native iOS and Android apps, cross-platform apps using React Native & Flutter, as well as enterprise-level applications tailored to your business needs.",
  },
  {
    question: "How long does it take to develop an app?",
    answer:
      "The timeline depends on the complexity of the app. Simple apps may take 6-8 weeks, while feature-rich or enterprise-level apps can take 3-6 months or more.",
  },
  {
    question: "Do you provide app maintenance and updates?",
    answer:
      "Yes! We offer ongoing maintenance, updates, and technical support to ensure your app stays secure, compatible, and up-to-date.",
  },
  {
    question: "Can you integrate third-party services into our app?",
    answer:
      "Absolutely. We can integrate APIs, payment gateways, social logins, analytics tools, and other third-party services to enhance your app’s functionality.",
  },
  {
    question: "Do you follow a specific development process?",
    answer:
      "Yes, we follow a structured app development process: Requirement Analysis, UI/UX Design, Development, Testing & QA, Deployment, and ongoing Support & Updates.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement industry-standard security practices, including data encryption, secure APIs, authentication protocols, and regular vulnerability testing.",
  },
  {
    question: "Do you provide design and prototyping before development?",
    answer:
      "Yes, our UI/UX designers create interactive prototypes and mockups so you can visualize the app before development begins.",
  },
  {
    question: "Can you help with app launch and marketing?",
    answer:
      "Yes, we assist with app store submissions, optimization, and basic marketing strategies to help your app reach your target audience effectively.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-4 text-left w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition duration-300 w-full"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span className="text-red-600">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
