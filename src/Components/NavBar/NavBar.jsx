import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import npllogo from "../../assets/npllogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-[#f8fafc] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
       
        <div className="flex items-center flex-shrink-0">
          <img
            src={npllogo}
            alt="NLP Global Tech Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

      
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="text-[#214486] hover:text-[#77c230] transition">Home</Link>
          <Link to="/about-us" className="text-[#214486] hover:text-[#77c230] transition">About Us</Link>

          
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-[#214486] hover:text-[#77c230] flex items-center gap-1"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 top-12 bg-white shadow-xl rounded-lg w-48 py-2 animate-fadeIn">
                <a href="/app-development" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">App Development</a>
                <a href="/web-development" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Web Development</a>
                <a href="/us-staffing" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">US Staffing</a>
                <a href="/human-resources" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Human Resources</a>
                <a href="/leadership-hiring" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Leadership Hiring</a>
                <a href="/contractual-staffing" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Contractual Staffing</a>
              </div>
            )}
          </div>

          
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="text-[#214486] hover:text-[#77c230] flex items-center gap-1"
            >
              Categories
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 top-12 bg-white shadow-xl rounded-lg w-48 py-2 animate-fadeIn">
                <a href="/automotive" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Automotive</a>
                <a href="/telecommunications" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Telecommunications</a>
                <a href="/banking" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Banking</a>
                <a href="/healthcareIt" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">HealthcareIT</a>
                <a href="/logistics" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Logistics</a>
                <a href="/technology" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Technology</a>
                <a href="/energy-utilities" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Energy & Utilities</a>
                <a href="/retail" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Retail</a>
                <a href="/oil-and-gas" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Oil & Gas</a>
                   <a href="/marketing" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Marketing</a>
              </div>
            )}
          </div>

          <Link to="/blog" className="text-[#214486] hover:text-[#77c230] transition">Blog</Link>
          <Link to="/contact-us" className="text-[#214486] hover:text-[#77c230] transition">Contact</Link>
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 font-medium border border-[#214486] text-[#214486] rounded-lg hover:bg-[#214486] hover:text-white transition shadow-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 font-medium bg-[#77c230] text-white rounded-lg hover:bg-[#65a32a] transition shadow-md"
          >
            Sign Up
          </Link>
        </div>

        
        <button
          className="md:hidden text-3xl text-[#214486]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium">
          <Link to="/" className="block text-[#214486] hover:text-[#77c230]">Home</Link>
          <Link to="/about-us" className="block text-[#214486] hover:text-[#77c230]">About Us</Link>

          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer text-[#214486] hover:text-[#77c230]">
              Services <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <a href="/app-development" className="block text-gray-700">App Development</a>
              <a href="/web-development" className="block text-gray-700">Web Development</a>
              <a href="/us-staffing" className="block text-gray-700">US Staffing</a>
              <a href="/human-resources" className="block text-gray-700">Human Resources</a>
              <a href="/leadership-hiring" className="block text-gray-700">Leadership Hiring</a>
              <a href="/contractual-staffing" className="block text-gray-700">Contractual Staffing</a>
            </div>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer text-[#214486] hover:text-[#77c230]">
              Categories <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <a href="/automotive" className="block text-gray-700">Automotive</a>
              <a href="/telecommunications" className="block text-gray-700">Telecommunications</a>
              <a href="/banking" className="block text-gray-700">Banking</a>
              <a href="/healthcareIt" className="block text-gray-700">HealthcareIT</a>
              <a href="/logistics" className="block text-gray-700">Logistics</a>
              <a href="/technology" className="block text-gray-700">Technology</a>
              <a href="/energy-utilities" className="block text-gray-700">Energy & Utilities</a>
              <a href="/retail" className="block text-gray-700">Retail</a>
              <a href="/oil-and-gas" className="block text-gray-700">Oil & Gas</a>
              <a href="/marketing" className="block text-gray-700">Marketing</a>
            </div>
          </details>

          <Link to="/blog" className="block text-[#214486] hover:text-[#77c230]">Blog</Link>
          <Link to="/contact-us" className="block text-[#214486] hover:text-[#77c230]">Contact</Link>

          <div className="flex flex-col space-y-2">
            <Link
              to="/login"
              className="px-4 py-2 text-center font-medium border border-[#214486] text-[#214486] rounded-lg hover:bg-[#214486] hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-center font-medium bg-[#77c230] text-white rounded-lg hover:bg-[#65a32a] transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
