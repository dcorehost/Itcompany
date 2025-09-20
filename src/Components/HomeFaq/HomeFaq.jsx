import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in app development, web development, and WordPress development tailored to your business needs.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can contact us via our contact form or email. We will discuss your requirements and provide a detailed quote.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow agile methodologies ensuring iterative delivery, quality, and timely communication.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes, we offer ongoing maintenance and support packages tailored to your needs.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 py-6 px-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex justify-between w-full text-left font-semibold text-xl text-[#e53935] focus:outline-none"
      >
        <span>{faq.question}</span>
        <span className="text-3xl select-none">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-500 ease-in-out text-gray-700 mt-4"
        style={{ maxHeight: 0 }}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const HomeFaq = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg">
        <h2 className="text-5xl font-extrabold text-center mb-10 pt-10">
          <span className="text-black">Frequently Asked</span> <span className="text-[#e53935]">Questions</span>
        </h2>
        <div>
          {faqData.map((faq, idx) => (
            <FaqItem key={idx} faq={faq} />
          ))}
        </div>
        <div className="h-10" /> {/* Padding bottom */}
      </div>
    </section>
  );
};

export default HomeFaq;
