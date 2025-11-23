import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  // STEP LABELS
  const stepLabels = ["Role", "Location", "Account"];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0b0d] text-gray-300 px-4 sm:px-6">
      <div className="bg-[#121216] rounded-xl shadow-[0_0_25px_rgba(128,0,255,0.25)] p-6 sm:p-8 w-full max-w-lg border border-gray-800">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-1 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Create Account
        </h2>

        <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm">
          Let's get you started with FillIt
        </p>

        {/* ------------ STEP INDICATORS ------------- */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">

          {[1, 2, 3].map((num, index) => {
            const isCompleted = step > num;
            const isCurrent = step === num;

            return (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                    text-white font-semibold transition-all duration-300
                    ${isCurrent 
                      ? "bg-purple-600 shadow-[0_0_10px_rgba(128,0,255,0.6)]" 
                      : isCompleted 
                      ? "bg-blue-600 border border-blue-400" 
                      : "bg-[#1b1b1f] border border-gray-600"
                    }
                  `}
                >
                  {num}
                </div>

                <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
                  {stepLabels[index]}
                </p>
              </div>
            );
          })}
        </div>

        {/* ------------ STEP 1 ------------ */}
        {step === 1 && (
          <div className="space-y-4 sm:space-y-5">
            <label className="block text-gray-400 text-sm">Select Role *</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2.5 sm:p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500 focus:outline-none"
            >
              <option value="">Choose your role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
        )}

        {/* ------------ STEP 2 ------------ */}
        {step === 2 && (
          <div className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Country *</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="w-full p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">State *</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">City *</label>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full p-3 rounded-md bg-[#1b1b1f] border border-gray-700 text-gray-300 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Gender *</label>

              <div className="flex items-center gap-6 text-gray-300 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" className="accent-purple-500" />
                  Male
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" className="accent-purple-500" />
                  Female
                </label>
              </div>
            </div>
          </div>
        )}

        {/* ------------ STEP 3 ------------ */}
        {step === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            <div>
              <label className="text-gray-300 text-sm">First Name *</label>
              <input
                type="text"
                placeholder="John"
                className="w-full mt-2 bg-[#111] border border-[#2A2A2A] text-gray-200 px-3 py-2 rounded-lg focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Last Name *</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full mt-2 bg-[#111] border border-[#2A2A2A] text-gray-200 px-3 py-2 rounded-lg focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email *</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full mt-2 bg-[#111] border border-[#2A2A2A] text-gray-200 px-3 py-2 rounded-lg focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Mobile No *</label>
              <input
                type="text"
                placeholder="9876543210"
                className="w-full mt-2 bg-[#111] border border-[#2A2A2A] text-gray-200 px-3 py-2 rounded-lg focus:border-purple-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-gray-300 text-sm">Password *</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full mt-2 bg-[#111] border border-[#2A2A2A] text-gray-200 px-3 py-2 rounded-lg focus:border-purple-500"
                />

                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-purple-400" />
                  ) : (
                    <Eye size={20} className="text-purple-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="sm:col-span-2 flex items-center gap-2 mt-2">
              <input type="checkbox" className="accent-purple-600" />
              <p className="text-gray-400 text-sm">
                I agree to the <span className="text-purple-400">Terms</span> &{" "}
                <span className="text-purple-400">Privacy Policy</span>
              </p>
            </div>

          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-5 py-2 rounded-full bg-[#1b1b1f] border border-gray-700 text-gray-300 hover:bg-[#1f1f23] transition"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={nextStep}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400">Login</Link>
        </p>

      </div>
    </section>
  );
};

export default Signup;
