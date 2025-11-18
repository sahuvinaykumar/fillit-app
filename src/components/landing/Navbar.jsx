import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Header from "./Header";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />

      <nav
        className="
          bg-[#0b0b0d] 
          border-b border-gray-800 
          shadow-[0_2px_10px_rgba(0,0,0,0.4)]
          px-4 sm:px-8 py-3
          flex items-center justify-between
          relative
        "
      >
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-105">
          <NavLink
            to="/"
            className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
            onClick={() => setIsOpen(false)}
          >
            Fill<span className="text-white">It</span>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
          {["/", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Contact"];
            return (
              <li
                key={path}
                className="relative cursor-pointer group hover:text-white transition"
              >
                <NavLink to={path}>{labels[i]}</NavLink>

                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/login">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium shadow-md hover:scale-105 hover:shadow-purple-500/40 transition">
              Login
            </button>
          </NavLink>

          <NavLink to="/signup">
            <button className="px-5 py-2 rounded-full border border-purple-500 text-purple-400 font-medium hover:bg-purple-700/20 hover:scale-105 transition">
              Sign Up
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-300 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              absolute top-full left-0 w-full
              bg-[#0b0b0d]/95
              border-t border-gray-800
              md:hidden z-40
              animate-slideDown
            "
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-300 font-medium">
              {["Home", "About", "Contact"].map((item, index) => (
                <li
                  key={item}
                  className="relative cursor-pointer group hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  <NavLink
                    to={["/", "/about", "/contact"][index]}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>

                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 pb-6">
              <NavLink to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-40 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium shadow-md hover:scale-105 transition">
                  Login
                </button>
              </NavLink>

              <NavLink to="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-40 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-700/20 hover:scale-105 transition">
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
