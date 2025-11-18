import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 sm:px-10 py-14 border-t border-gray-800 shadow-[0_-2px_10px_rgba(0,0,0,0.4)]">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold 
            bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 
            bg-clip-text text-transparent">
            Fill<span className="text-white">It</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
            Empowering students with AI-driven form filling, instant uploads, and real-time progress tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3 border-l-4 pl-2 border-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/how-it-works" className="hover:text-white">How It Works</NavLink></li>
            <li><NavLink to="/why-choose-us" className="hover:text-white">Why Choose Us</NavLink></li>
            <li><NavLink to="/demo" className="hover:text-white">Demo</NavLink></li>
            <li><NavLink to="/reviews" className="hover:text-white">Reviews</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3 border-l-4 pl-2 border-yellow-400">
            Support
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li><NavLink to="/help" className="hover:text-white">Help Center</NavLink></li>
            <li><NavLink to="/faqs" className="hover:text-white">FAQs</NavLink></li>
            <li><NavLink to="/privacy-policy" className="hover:text-white">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-white">Terms of Service</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Email Subscription Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3 border-l-4 pl-2 border-yellow-400">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Subscribe to stay informed about the latest exams and college form updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-lg 
                         w-full text-gray-200 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />

            <button className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg 
              hover:bg-yellow-400 transition text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 mt-10 opacity-50"></div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs sm:text-sm text-center mt-5">
        © {new Date().getFullYear()} 
        <span className="font-semibold text-purple-400"> FillIt</span>. 
        All rights reserved. | Designed with 💡 & passion by the FillIt Team.
      </p>
    </footer>
  );
};

export default Footer;
