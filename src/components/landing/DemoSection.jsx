import React from "react";

const DemoSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-4 sm:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 
          bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Watch FillIt in Action
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-14 text-base sm:text-lg">
          See how FillIt simplifies your form-filling process — from uploading documents 
          to downloading your completed forms — fast, secure, and effortless.
        </p>

        {/* Demo Container */}
        <div className="relative flex justify-center mx-auto">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden 
            border border-white/10 hover:shadow-2xl hover:shadow-purple-500/30 
            transition-all duration-500 transform hover:scale-[1.02] w-full max-w-4xl">

            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r 
              from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50 blur-2xl -z-10"></div>

            <iframe
              className="w-full h-56 sm:h-72 md:h-96 lg:h-[420px] rounded-2xl sm:rounded-3xl"
              src="https://www.youtube.com/embed/61EGpAy4Ids?si=IuvziIdiTzBrHv5j"
              title="FillIt Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* OR use your local mp4 (optional) */}
            {/* 
            <video
              src="/assets/fillit_demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto sm:h-[400px] object-cover rounded-3xl"
            />
            */}
          </div>
        </div>
      </div>

      {/* Decorative blurred rings */}
      <div className="absolute -bottom-24 -left-20 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-20 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default DemoSection;
