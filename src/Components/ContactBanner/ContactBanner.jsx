import React from "react";
import { motion } from "framer-motion";
import ContactBannerImg from "../../assets/images/ContactBannerImg.jpg"; // Replace with a relevant image for your IT company

const ContactBanner = () => (
  <section className="relative h-[420px] md:h-[500px] overflow-hidden">
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 8, ease: "easeOut" }}
    >
      <img
        src={ContactBannerImg}
        alt="IT Solutions"
        className="w-full h-full object-cover object-center"
      />
      {/* Red and white gradient overlay for a modern, high-contrast look */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/60 via-red-500/40 to-white/70"></div>
    </motion.div>

    {/* Red and white animated blobs for a dynamic effect */}
    <motion.div
      className="absolute top-10 left-10 w-36 h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    ></motion.div>
    <motion.div
      className="absolute bottom-10 right-10 w-44 h-44 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
    ></motion.div>

    <div className="relative h-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-red-600 to-white rounded-full mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      ></motion.div>

      <motion.p
        className="text-lg md:text-2xl text-white font-medium max-w-2xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Ready to build your next big idea? Contact us to discuss your project and discover how our expertise in IT solutions can drive your success.
      </motion.p>
    </div>
  </section>
);

export default ContactBanner;