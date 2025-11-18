import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import MobileAppSection from "./MobileAppSection";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section className="bg-[#0b0b0d] text-gray-300 py-14 px-5 sm:px-10 md:px-16 lg:px-24">
        
        {/* Heading Section */}
        <div className="max-w-6xl mx-auto text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 
            bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 
            bg-clip-text text-transparent">
            Contact <span className="text-white">FillIt</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have any questions, feedback, or need help with your form filling?
            We’re here to assist you — just drop us a message or connect directly!
          </p>
        </div>

        {/* Main Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center gap-6 px-2">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-2xl" />
              <p className="text-gray-300 text-base sm:text-lg break-words">support@fillit.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-400 text-2xl" />
              <p className="text-gray-300 text-base sm:text-lg">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <p className="text-gray-300 text-base sm:text-lg">
                FillIt HQ, Mumbai, Maharashtra, India
              </p>
            </div>

            <p className="text-gray-400 mt-2 sm:mt-4 leading-relaxed text-sm sm:text-base">
              Our team is available <span className="text-purple-400 font-semibold">24/7</span> 
              to ensure you never face a delay or confusion with your form filling process.
            </p>
          </div>

          {/* Right - Form */}
          <form
            className="bg-[#121216] p-6 sm:p-8 rounded-2xl 
            shadow-[0_0_20px_rgba(128,0,255,0.2)] backdrop-blur-md mx-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
              Send Us a Message
            </h3>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#1b1b1f] text-gray-300 p-3 rounded-md 
                border border-gray-700 focus:border-purple-500 
                focus:outline-none transition-all duration-300"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#1b1b1f] text-gray-300 p-3 rounded-md 
                border border-gray-700 focus:border-purple-500 
                focus:outline-none transition-all duration-300"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="bg-[#1b1b1f] text-gray-300 p-3 rounded-md 
                border border-gray-700 focus:border-purple-500 
                focus:outline-none transition-all duration-300"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-2 sm:mt-4 px-6 py-3 rounded-full 
                bg-gradient-to-r from-purple-500 to-blue-500 
                text-white font-semibold shadow-md 
                hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Line */}
        <div className="w-full h-[2px] mt-14 bg-gradient-to-r 
          from-blue-500 via-pink-500 to-purple-500 opacity-40"></div>
      </section>

      <MobileAppSection />
      <Footer />
    </>
  );
};

export default Contact;
