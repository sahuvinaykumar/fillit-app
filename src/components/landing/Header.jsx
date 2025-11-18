import React, { useState } from "react";
import { Globe } from "lucide-react";

const Header = () => {
  const [language, setLanguage] = useState("English");

  return (
    <header
      className="
        w-full bg-[#0b0b0d] px-4 sm:px-6 py-3 
        flex items-center justify-end
      "
    >
      {/* Language Selector */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Globe size={18} className="text-purple-400" />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="
            bg-[#121216] text-gray-300 text-xs sm:text-sm 
            px-2 sm:px-3 py-1 rounded-md sm:rounded-lg
            border border-gray-700 outline-none 
            hover:border-purple-500 transition
          "
        >
          <option value="English">English</option>
          <option value="Hindi">हिंदी</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
