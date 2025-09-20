
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import npllogo from "../../assets/npllogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-[#fff] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center flex-shrink-0">
          <img
            src={npllogo}
            alt="NLP Global Tech Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="text-[#e53935] hover:text-[#fff] hover:bg-[#e53935] px-2 py-1 rounded transition">Home</Link>
          <Link to="/about-us" className="text-[#e53935] hover:text-[#fff] hover:bg-[#e53935] px-2 py-1 rounded transition">About Us</Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-[#e53935] hover:text-[#fff] hover:bg-[#e53935] flex items-center gap-1 px-2 py-1 rounded transition"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 top-12 bg-white shadow-xl rounded-lg w-48 py-2 animate-fadeIn border border-[#e53935]">
                <a href="/app-development" className="block px-4 py-2 hover:bg-[#fce4ec] text-[#e53935]">App Development</a>
                <a href="/web-development" className="block px-4 py-2 hover:bg-[#fce4ec] text-[#e53935]">Web Development</a>
                <a href="/wordpress-development" className="block px-4 py-2 hover:bg-[#fce4ec] text-[#e53935]">WordPress Development</a>
              </div>
            )}
          </div>

          
        

          <Link to="/blog" className="text-[#214486] hover:text-[#77c230] transition">Blog</Link>
          <Link to="/contact-us" className="text-[#214486] hover:text-[#77c230] transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/Login-Page"
            className="px-4 py-2 font-medium border border-[#e53935] text-[#e53935] rounded-lg hover:bg-[#e53935] hover:text-[#fff] transition shadow-md"
          >
            Login
          </Link>
        </div>

        <button
          className="md:hidden text-3xl text-[#e53935]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#fff] shadow-md px-6 py-4 space-y-4 font-medium">
          <Link to="/" className="block text-[#e53935] hover:text-[#fff] hover:bg-[#e53935] px-2 py-1 rounded transition">Home</Link>
          <Link to="/about-us" className="block text-[#e53935] hover:text-[#fff] hover:bg-[#e53935] px-2 py-1 rounded transition">About Us</Link>
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer text-[#e53935] hover:text-[#fff] hover:bg-[#e53935] px-2 py-1 rounded transition">
              Services <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <a href="/app-development" className="block text-[#e53935] hover:bg-[#fce4ec] px-2 py-1 rounded">App Development</a>
              <a href="/web-development" className="block text-[#e53935] hover:bg-[#fce4ec] px-2 py-1 rounded">Web Development</a>
              <a href="/wordpress-development" className="block text-[#e53935] hover:bg-[#fce4ec] px-2 py-1 rounded">WordPress Development</a>
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
          <Link to="/contatc-us" className="block text-[#214486] hover:text-[#77c230]">Contact</Link>

          <div className="flex flex-col space-y-2">
            <Link
              to="/Login-Page"
              className="px-4 py-2 text-center font-medium border border-[#e53935] text-[#e53935] rounded-lg hover:bg-[#e53935] hover:text-[#fff] transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
