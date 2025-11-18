import React from "react";
import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Student, Delhi University",
      review:
        "FillIt made my college admission process so smooth! I uploaded my documents once, and within hours my filled forms were ready to download.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Neha Patel",
      role: "Government Job Applicant",
      review:
        "The best part about FillIt is how easy it is to upload documents and track status. I didn’t have to stand in queues or fill repetitive details again and again.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohan Mehta",
      role: "Freelancer",
      review:
        "I love how fast and secure the platform is. The interface is clean, mobile-friendly, and the support team actually responds quickly!",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Priya Das",
      role: "MBA Aspirant",
      review:
        "FillIt’s AI assistant is a lifesaver. It helped me identify missing details before submission. Highly recommend for students and job seekers.",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 
          bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          What Our Users Say
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-14 text-sm sm:text-lg">
          Real experiences from people who made form-filling stress-free with{" "}
          <span className="font-semibold text-white">FillIt</span>.
        </p>

        {/* Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="relative bg-white/10 border border-white/10 rounded-2xl 
                p-6 sm:p-8 text-left backdrop-blur-md 
                hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 
                transition-all duration-500"
            >
              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent 
                opacity-0 hover:opacity-20 transition-opacity duration-500"></div>

              {/* User Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover 
                    border-2 border-white/20 shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                    from-blue-500 to-purple-500 opacity-40 blur-md -z-10"></div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-200 italic text-sm sm:text-base mb-6 leading-relaxed">
                “{user.review}”
              </p>

              {/* User Name + Role */}
              <div className="text-center">
                <h4 className="font-semibold text-white text-base sm:text-lg">{user.name}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Glow Circles */}
      <div className="absolute -top-24 -left-20 w-60 sm:w-80 h-60 sm:h-80 
        bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-24 -right-20 w-60 sm:w-80 h-60 sm:h-80 
        bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Reviews;
