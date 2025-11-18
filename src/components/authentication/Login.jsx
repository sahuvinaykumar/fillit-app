import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0b0d] text-gray-300 px-4 sm:px-6 md:px-8">
      <div
        className="
          bg-[#121216] rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.25)]
          p-6 sm:p-8 w-full max-w-sm sm:max-w-md
          backdrop-blur-md border border-gray-800
        "
      >
        {/* Logo */}
        <h2
          className="
            text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8
            bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500
            bg-clip-text text-transparent
          "
        >
          Welcome to <span className="text-white">FillIt</span>
        </h2>

        {/* Login Form */}
        <form className="flex flex-col gap-4 sm:gap-5">
          {/* Email */}
          <div>
            <label className="block text-gray-400 text-sm mb-1 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full p-2.5 sm:p-3 rounded-md
                bg-[#1b1b1f] border border-gray-700 text-gray-300
                focus:border-purple-500 focus:outline-none
                transition-all duration-300
              "
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-400 text-sm mb-1 sm:mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="
                  w-full p-2.5 sm:p-3 rounded-md
                  bg-[#1b1b1f] border border-gray-700 text-gray-300
                  focus:border-purple-500 focus:outline-none
                  transition-all duration-300
                "
                required
              />

              {/* Eye Icon Button */}
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-500" /> Remember me
            </label>
            <Link
              to="/forgot"
              className="text-purple-400 hover:text-purple-300 transition-all duration-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              mt-2 sm:mt-4 w-full py-2.5 sm:py-3 rounded-full
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white font-semibold shadow-md
              hover:shadow-lg hover:scale-105
              transition-all duration-300
            "
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 sm:gap-4 my-5 sm:my-6">
          <div className="flex-1 h-[1px] bg-gray-700"></div>
          <span className="text-gray-500 text-xs sm:text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        {/* Sign Up */}
        <p className="text-center text-gray-400 text-xs sm:text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-400 hover:text-purple-300 font-semibold transition-all duration-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
