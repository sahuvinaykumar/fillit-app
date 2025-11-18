import React from "react";
import {
  ShieldCheck,
  Smartphone,
  FileText,
  Upload,
  CreditCard,
  Receipt,
} from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "AI Assistant",
      desc: "Smart guidance at every step, helping you fill forms correctly and efficiently.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-pink-500" />,
      title: "Mobile Friendly",
      desc: "Access and fill your forms anytime, anywhere with a seamless mobile experience.",
    },
    {
      icon: <FileText className="w-10 h-10 text-purple-500" />,
      title: "Fill College & Govt Forms",
      desc: "From college admissions to government documents — all handled in one place.",
    },
    {
      icon: <Upload className="w-10 h-10 text-indigo-500" />,
      title: "Easy Document Upload",
      desc: "Upload your required files instantly with a secure and smooth upload system.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-green-500" />,
      title: "Secure Payment",
      desc: "Your transactions are encrypted and protected with top-tier security standards.",
    },
    {
      icon: <Receipt className="w-10 h-10 text-yellow-500" />,
      title: "Track Status & Get Receipt",
      desc: "Stay updated — track your form status and download receipts instantly.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 
        bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Why Choose <span className="text-white">FillIt?</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-14 px-2">
          We make the process of form filling faster, smarter, and stress-free — 
          powered by technology, designed for everyone.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 
              flex flex-col items-center text-center 
              hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20 
              transition-all duration-300"
            >
              <div className="mb-4 sm:mb-5">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
