import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import npllogo from "../../assets/npllogo.png";

const Footer = () => {
  return (
    <footer className="relative bg-red-700 text-white pt-16 pb-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        <div className="sm:col-span-1 lg:col-span-2">
          <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
            <img
              src={npllogo}
              alt="NLP Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-white/80 text-sm mb-6 leading-relaxed">
            Simplifying the hiring process by connecting job seekers and
            companies directly. Your career starts here with NLP Global Tech.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white transition"
                >
                  <Icon className="text-white hover:text-red-500 transition" />
                </a>
              )
            )}
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-5 relative text-red-500">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-red-500 rounded"></span>
          </h3>
          <ul className="space-y-3 text-white/80">
            <li><a href="/" className="hover:text-red-500">Home</a></li>
            <li><a href="/about-us" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Blog</a></li>
            <li><a href="/contact-us" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-5 relative text-red-500">
            Services
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-red-500 rounded"></span>
          </h3>
          <ul className="space-y-3 text-white/80">
            <li><a href="/app-development" className="hover:text-red-500">App Development</a></li>
            <li><a href="/web-development" className="hover:text-red-500">Web Development</a></li>
            <li><a href="/wordpress-development" className="hover:text-red-500">WordPress Development</a></li>
          </ul>
        </div>
      </div>

      
      <div className="relative border-t border-white/30 mt-12 pt-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-white/80 mb-2 md:mb-0 flex items-center space-x-2 text-center md:text-left">
          <span>© {new Date().getFullYear()} NLP Global Tech. All rights reserved. | Made with</span>
          <FaHeart className="text-red-500 text-lg" /> 
          <span>by <span className="text-red-500 font-semibold">NLP Team</span></span>
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-white/80 mt-2 md:mt-0">
          <a href="/privacy-policy" className="hover:text-red-500">Privacy Policy</a>
          <span>|</span>
          <a href="/term-and-condition" className="hover:text-red-500">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
