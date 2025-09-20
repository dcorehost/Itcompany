
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBriefcase,
  FaBuilding,
  FaUserGraduate,
  FaBell,
  FaHeart,
} from "react-icons/fa";
import npllogo from "../../assets/npllogo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#214486] text-white pt-16 pb-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
       
        <div>
          <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
            <img
              src={npllogo}
              alt="NLP Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Simplifying the hiring process by connecting job seekers and
            companies directly. Your career starts here with NLP Global Tech.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#77c230] transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-5 relative text-[#77c230]">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-[#77c230] rounded"></span>
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li><a href="/" className="hover:text-[#77c230]">Home</a></li>
            <li><a href="/about-us" className="hover:text-[#77c230]">About Us</a></li>
            
            <li><a href="#" className="hover:text-[#77c230]">Blog</a></li>
            <li><a href="/contact-us" className="hover:text-[#77c230]">Contact</a></li>
            <li><a href="/about-us" className="hover:text-[#77c230]">About us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-5 relative text-[#77c230]">
            Services
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-[#77c230] rounded"></span>
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li><a href="/app-development" className="hover:text-[#77c230]">App Development</a></li>
            <li><a href="/web-development" className="hover:text-[#77c230]">Web Development</a></li>
            <li><a href="/us-staffing" className="hover:text-[#77c230]">US Staffing</a></li>
              <li><a href="/human-resources" className="hover:text-[#77c230]">Human Resource</a></li>
                <li><a href="/leadership-hiring" className="hover:text-[#77c230]">Leadership Hiring</a></li>
                  <li><a href="/contractual-staffing" className="hover:text-[#77c230]">Contractual Staffing</a></li>
                 

          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-5 relative text-[#77c230]">
            Categories
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-[#77c230] rounded"></span>
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li><a href="/automotive" className="hover:text-[#77c230]">Automotive</a></li>
            <li><a href="/telecommunications" className="hover:text-[#77c230]">Telecommunications</a></li>
            <li><a href="/banking" className="hover:text-[#77c230]">Banking</a></li>
            <li><a href="/logistics" className="hover:text-[#77c230]">Logistics</a></li>
              <li><a href="/healthcareIt" className="hover:text-[#77c230]">HealthcareIT</a></li>
                <li><a href="/technology" className="hover:text-[#77c230]">Technology</a></li>
                <li><a href="/energy-utilities" className="hover:text-[#77c230]">EnergyUtilities</a></li>
                  <li><a href="/retail" className="hover:text-[#77c230]">Retail</a></li>
                  <li><a href="/oil-and-gas" className="hover:text-[#77c230]">Oil & Gas </a></li>
                    <li><a href="/marketing" className="hover:text-[#77c230]">Marketing </a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-5 relative text-[#77c230]">
            For Job Seekers
            <span className="absolute left-0 -bottom-1 w-12 h-1 bg-[#77c230] rounded"></span>
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center space-x-2">
              <FaBriefcase className="text-[#77c230]" />
              <a href="/job-portal" className="hover:text-[#77c230]">Browse Jobs</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaUserGraduate className="text-[#77c230]" />
              <a href="/career-advices" className="hover:text-[#77c230]">Career Advice</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBuilding className="text-[#77c230]" />
              <a href="/upload-resume" className="hover:text-[#77c230]">Upload Resume</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaBell className="text-[#77c230]" />
              <a href="/job-alerts" className="hover:text-[#77c230]">Job Alerts</a>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="relative border-t border-white/20 mt-12 pt-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-gray-300 mb-2 md:mb-0 flex items-center space-x-2">
          <span>© {new Date().getFullYear()} NLP Global Tech. All rights reserved. | Made with</span>
          <FaHeart className="text-red-500 text-lg" /> 
          <span>by <span className="text-[#77c230] font-semibold">NLP Team</span></span>
        </p>
        <div className="flex space-x-4 text-gray-300">
          <a href="/privacy-policy" className="hover:text-[#77c230]">Privacy Policy</a>
          <span>|</span>
          <a href="/term-and-condition" className="hover:text-[#77c230]">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


