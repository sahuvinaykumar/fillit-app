import React from "react";
import aboutImg from "../../assets/mobile-app.jpg";
import MobileAppSection from "./MobileAppSection";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <section className="bg-[#0b0b0d] text-gray-300 py-14 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={aboutImg}
              alt="About FillIt"
              className="rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.3)] 
              w-full max-w-md md:max-w-full object-cover 
              hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 
              bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              About <span className="text-white">FillIt</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              <span className="text-purple-400 font-semibold">FillIt</span> is a
              modern solution built to simplify the tedious process of form filling.
              Whether it’s college forms, government documents, or official registrations —
              FillIt lets you upload, fill, and submit forms effortlessly from home.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              With a secure document system, AI-powered assistance, and real-time
              tracking, FillIt ensures your forms are handled quickly, accurately, and safely —
              all through a clean, user-friendly interface.
            </p>

            <button className="mt-4 px-6 py-3 rounded-full 
            bg-gradient-to-r from-purple-500 to-blue-500 text-white 
            font-semibold shadow-md hover:shadow-lg hover:scale-105 
            transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div className="w-full h-[2px] mt-16 
          bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 opacity-40">
        </div>
      </section>

      <MobileAppSection />
      <Footer />
    </>
  );
};

export default About;
