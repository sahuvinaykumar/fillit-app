import React, { useState, useEffect } from "react";
import { Bell, MoreVertical, User, Settings, LogOut } from "lucide-react";

const Header = ({ username = "Vinay" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        w-full bg-[#0e0e12]/80 backdrop-blur-xl
        shadow-[0_0_25px_rgba(128,0,255,0.25)]
        px-4 md:px-6 py-3 
        flex items-center justify-between
        sticky top-0 z-50
      "
    >
      {/* Left Section */}
      <div className="flex flex-col">
        <h2 className="text-lg md:text-xl font-semibold text-purple-400">
          Welcome, {username}
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6 relative">

        {/* Notification */}
        <Bell
          className="cursor-pointer text-gray-300 hover:text-purple-400 transition"
          size={22}
        />

        {/* Logo */}
        <h1
          className="
            text-xl md:text-2xl font-bold 
            text-purple-400 tracking-wide hidden sm:block
          "
        >
          Fillit
        </h1>

        {/* 3 Dots Menu */}
        <MoreVertical
          className="cursor-pointer text-gray-300 hover:text-purple-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          size={22}
        />

        {/* Dropdown */}
        {menuOpen && (
          <div
            className="
              absolute right-0 top-12 
              bg-[#1b1b1f] p-4 rounded-xl shadow-lg
              w-40 sm:w-48
              animate-fadeIn space-y-3
              border border-purple-800/20
            "
          >
            <button className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition">
              <User size={18} /> Profile
            </button>

            <button className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition">
              <Settings size={18} /> Settings
            </button>

            <button className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
