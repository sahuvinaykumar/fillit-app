import React from "react";
import { UploadCloud, FileCheck, FileText, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <UploadCloud className="w-12 sm:w-14 h-12 sm:h-14 text-blue-400 drop-shadow-lg" />,
      title: "Upload Documents on DigiLocker",
      desc: "Securely upload your essential documents directly from DigiLocker for instant access.",
      gradient: "from-blue-500/20 to-blue-700/10",
      glow: "hover:shadow-blue-500/40",
    },
    {
      id: 2,
      icon: <FileCheck className="w-12 sm:w-14 h-12 sm:h-14 text-pink-400 drop-shadow-lg" />,
      title: "Request for Form Filling",
      desc: "Select your desired form type — college, government, or custom — and submit your request.",
      gradient: "from-pink-500/20 to-pink-700/10",
      glow: "hover:shadow-pink-500/40",
    },
    {
      id: 3,
      icon: <FileText className="w-12 sm:w-14 h-12 sm:h-14 text-purple-400 drop-shadow-lg" />,
      title: "Employee Fills the Form",
      desc: "Our verified team accurately fills your form using your uploaded details — fast and error-free.",
      gradient: "from-purple-500/20 to-purple-700/10",
      glow: "hover:shadow-purple-500/40",
    },
    {
      id: 4,
      icon: <Download className="w-12 sm:w-14 h-12 sm:h-14 text-green-400 drop-shadow-lg" />,
      title: "Download the Filled PDF",
      desc: "Get your completed form in PDF format, ready to print or submit — all from your dashboard.",
      gradient: "from-green-500/20 to-green-700/10",
      glow: "hover:shadow-green-500/40",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Soft animated glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 
          bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          How FillIt Works
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base md:text-lg">
          Experience a smarter way to fill forms — fast, simple, and completely secure.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative bg-gradient-to-b ${step.gradient} border border-white/10 rounded-2xl 
                p-6 sm:p-8 flex flex-col items-center text-center 
                transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] 
                hover:bg-white/10 ${step.glow} hover:shadow-xl backdrop-blur-md`}
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-500"></div>

              <div className="mb-4 sm:mb-5">{step.icon}</div>

              <h3 className="text-lg sm:text-xl font-semibold text-white">{`Step ${step.id}`}</h3>

              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">
                {step.title}
              </h4>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred rings */}
      <div className="absolute -bottom-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-0 -right-20 w-60 sm:w-72 h-60 sm:h-72 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
