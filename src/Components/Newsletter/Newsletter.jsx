import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="mt-20 bg-gray-900 py-10 px-8 rounded-xl shadow-2xl max-w-4xl mx-auto grid md:grid-cols-2 gap-8 border border-red-500">
      
      {/* Left Section with Address + Newsletter */}
      <div>
        {/* Company Address with Animation */}
        <motion.div
          className="mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white">Our Office</h3>
          <p className="text-gray-400 mt-2 leading-relaxed">
            Tech Solutions Pvt. Ltd. 
            Level 2, Eros Corporate Tower, Nehru Place, 
            New Delhi, Delhi, India - 110019
          </p>
        </motion.div>

        {/* Newsletter Section */}
        <h3 className="text-xl font-semibold text-white text-center md:text-left">
          Stay Updated with Our Newsletter
        </h3>
        <form className="mt-4 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border border-red-600 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none w-full bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto md:w-full lg:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Map Section */}
      <motion.div
        className="rounded-xl overflow-hidden shadow-lg h-64 md:h-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.383416207919!2d77.21950917455638!3d28.614179184685207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3a44512c87%3A0xdee73356d7c49a8!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1691245678901!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Newsletter;