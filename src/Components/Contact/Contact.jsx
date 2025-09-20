import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    if (!name || !email || !phone || !service || !message) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      
      const response = await fetch(
        "https://your-it-company.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl border-t-8 border-red-600"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's Start Your Project
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Tell us about your needs for web, app, or WordPress development.
        </motion.p>

        <motion.form
          className="space-y-5"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
        
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">I'm interested in...</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-white text-gray-800"
            >
              <option value="" disabled>Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="WordPress Development">WordPress Development</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, your goals, and any specific requirements you have in mind."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          
          {status.message && (
            <p className={`text-center ${status.type === "success" ? "text-red-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}

        
          <motion.button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

   
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-500">Prefer a direct chat?</p>
          <a href="mailto:contact@your-it-company.com" className="block text-red-600 hover:underline">
            contact@your-it-company.com
          </a>
          <a href="tel:+15551234567" className="block text-red-600 hover:underline">
            +1 (555) 123-4567
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;