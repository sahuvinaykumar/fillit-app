import React, { useState } from "react";
import bgGif from "../../assets/fillit_background.gif";
import WhyChoose from "./WhyChoose";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import DemoSection from "./DemoSection";
import MobileAppSection from "./MobileAppSection";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const[open,setOpen]=useState(false)

  return (
    <>
      <section
        className="relative flex items-center justify-center min-h-[85vh] 
        text-center text-white overflow-hidden px-4 sm:px-6"
        style={{
          backgroundImage: `url(${bgGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r 
        from-[#0f0c29]/90 via-[#302b63]/80 to-[#24243e]/90 
        backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full">
          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-extrabold mb-6 leading-tight 
            bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 
            bg-clip-text text-transparent"
          >
            Simplify your form filling process with{" "}
            <span className="text-white">FillIt</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 leading-relaxed px-2">
            No more queues, no more confusion. Book, upload, pay, and get your
            official forms filled from home — fast, secure, and hassle-free.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <NavLink to={'/login'}
              className="px-6 py-3 rounded-full bg-gradient-to-r 
              from-blue-500 to-purple-600 text-white font-semibold 
              shadow-md hover:shadow-lg hover:scale-105 
              transition-all duration-300 w-full sm:w-auto"
            >
              Get Started
            </NavLink>
            <button
            onClick={()=>(setOpen(true))}
              className="px-6 py-3 rounded-full border border-purple-400 
              text-purple-300 font-semibold hover:bg-purple-600/20 
              hover:shadow-md hover:scale-105 transition-all duration-300 
              w-full sm:w-auto"
            >
              Get Demo
            </button>
          </div>
        </div>

        {/* Demo Modal */}
        {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur flex justify-center items-center z-50"
        >
          {/* TRANSPARENT POPUP WITHOUT BACKGROUND BOX */}
          <div className="relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            {/* VIDEO */}
            <iframe
              className="w-[90vw] md:w-[60vw] h-[55vw] md:h-[30vw] rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/t0Q2otsqC4I?autoplay=1"
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
      </section>

      {/* Sections */}
      <WhyChoose />
      <HowItWorks />
      <Reviews />
      <DemoSection />
      <MobileAppSection />
      <Footer />
    </>
  );
};

export default HeroSection;
