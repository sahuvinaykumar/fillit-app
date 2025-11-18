import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import appImg from "../../assets/mobile-app.jpg";

const MobileAppSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#302b63] via-[#24243e] to-[#0f0c29] text-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 
            bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            FillIt on the Go
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Access all your forms, upload documents, and track your progress —
            anytime, anywhere. The FillIt mobile app gives you full control over
            your form-filling process with one tap.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-full text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <FaGooglePlay className="text-xl" /> Get it on Play Store
            </button>

            <button className="flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-900 px-5 py-3 rounded-full text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
              <FaApple className="text-xl" /> Download on App Store
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-56 sm:w-72 md:w-80 lg:w-96 hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-400/30 blur-3xl rounded-3xl"></div>

            <img
              src={appImg}
              alt="FillIt Mobile App"
              className="relative rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>

      {/* Decorative background lights */}
      <div className="absolute -bottom-24 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MobileAppSection;
