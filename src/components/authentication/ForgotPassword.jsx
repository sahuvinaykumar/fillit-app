import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setstep] = useState(1);

  let content;

  /* ---------------------- STEP 1 ------------------------- */
  if (step == 1) {
    content = (
      <section className="min-h-screen flex items-center justify-center bg-[#0b0b0d] px-4 sm:px-6 text-gray-300">
        <div className="bg-[#121216] w-full max-w-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_25px_rgba(128,0,255,0.25)] border border-gray-800 backdrop-blur-md">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
            Reset your password in 3 easy steps
          </p>

          {/* Steps Indicator */}
          <div className="flex items-center mt-10">

            {/* Step 1 */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold shadow-lg">
                1
              </div>
              <p className="text-gray-300 w-20 text-center text-xs sm:text-sm mt-2">Send OTP</p>
            </div>

            <div className="flex-1 border-t border-gray-700 mx-2 sm:mx-3"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center opacity-60">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e1e22] border border-gray-700 text-gray-400 flex items-center justify-center font-semibold">
                2
              </div>
              <p className="text-gray-500 w-20 text-center text-xs sm:text-sm mt-2">OTP Verification</p>
            </div>

            <div className="flex-1 border-t border-gray-700 mx-2 sm:mx-3"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center opacity-60">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e1e22] border border-gray-700 text-gray-400 flex items-center justify-center font-semibold">
                3
              </div>
              <p className="text-gray-500 text-xs sm:text-sm text-center w-20 mt-2">Generate Password</p>
            </div>
          </div>

          {/* Email Input */}
          <div className="mt-10">
            <label className="block text-gray-400 text-sm mb-2">Email Address</label>
            <input
              type="text"
              placeholder="Enter your registered email"
              className="w-full p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 placeholder-gray-500 focus:border-purple-500 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={() => setstep(2)}
            className="w-full mt-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-all"
          >
            Send OTP
          </button>

          <hr className="border-gray-700 my-8" />

          {/* Bottom Text */}
          <p className="text-center text-gray-400 text-sm">
            Remembered your password?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    );
  }

  /* ---------------------- STEP 2 ------------------------- */
  else if (step == 2) {
    content = (
      <section className="min-h-screen flex items-center justify-center bg-[#0b0b0d] px-4 sm:px-6 text-gray-300">
        <div className="bg-[#121216] w-full max-w-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_25px_rgba(128,0,255,0.25)] border border-gray-800 backdrop-blur-md">

          {/* Success Message */}
          <div className="bg-green-900/20 text-green-400 border border-green-700 p-3 rounded-md text-center text-xs sm:text-sm">
            We have e-mailed your password reset code!
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mt-5 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
            Reset your password in 3 easy steps
          </p>

          {/* Steps Indicator */}
          <div className="flex items-center justify-between mt-10">

            {/* Step 1 */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                1
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">Send OTP</p>
            </div>

            <div className="flex-1 border-t border-gray-700 mx-2"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">OTP Verification</p>
            </div>

            <div className="flex-1 border-t border-gray-700 mx-2"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center opacity-60">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e1e22] border border-gray-700 text-gray-400 flex items-center justify-center font-semibold">
                3
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">Generate Password</p>
            </div>
          </div>

          {/* OTP Inputs */}
          <p className="text-center text-gray-400 mt-10 text-sm">Enter 5-Digit OTP</p>

          <div className="flex justify-center gap-2 sm:gap-3 mt-6">
            {["8", "0", "1", "4", "3"].map((n, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                defaultValue={n}
                className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-semibold rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500"
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-4 px-1">
            <span>Didn't get the OTP?</span>
            <span>Resend in 42s</span>
          </div>

          {/* Button */}
          <button
            onClick={() => setstep(3)}
            className="w-full mt-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-all"
          >
            Verify OTP
          </button>

          <hr className="border-gray-700 my-8" />

          <p className="text-center text-gray-400 text-sm">
            Remembered your password?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    );
  }

  /* ---------------------- STEP 3 ------------------------- */
  else if (step == 3) {
    content = (
      <section className="min-h-screen flex items-center justify-center bg-[#0b0b0d] px-4 sm:px-6 text-gray-300">
        <div className="bg-[#121216] w-full max-w-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_25px_rgba(128,0,255,0.25)] border border-gray-800 backdrop-blur-md">

          {/* Success Msg */}
          <div className="bg-green-900/20 text-green-400 border border-green-700 p-3 rounded-md text-center text-xs sm:text-sm">
            This password reset token is valid.
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mt-5 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
            Reset your password in 3 easy steps
          </p>

          {/* Steps */}
          <div className="flex items-center justify-between mt-10">

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                1
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">Send OTP</p>
            </div>

            <div className="flex-1 border-t border-gray-700 mx-2"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">OTP Verification</p>
            </div>

            <div className="flex-1 border-t border-gray-700 mx-2"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold shadow-lg">
                3
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">Generate Password</p>
            </div>
          </div>

          {/* New Password */}
          <div className="mt-10">
            <label className="block text-gray-400 text-sm mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-6">
            <label className="block text-gray-400 text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              className="w-full p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={() => setstep(2)}
              className="px-6 sm:px-8 py-3 rounded-md border border-gray-700 text-gray-300 hover:bg-[#1b1b1f]"
            >
              Back
            </button>

            <button className="px-6 sm:px-8 py-3 rounded-md bg-green-600 text-white font-semibold hover:scale-105">
              Reset Password
            </button>
          </div>

          <hr className="border-gray-700 my-8" />

          <p className="text-center text-gray-400 text-sm">
            Remembered your password?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return <>{content}</>;
};

export default ForgotPassword;
