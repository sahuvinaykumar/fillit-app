import React, { useState } from "react";
import { Globe } from "lucide-react";

const Header = () => {
  const [language, setLanguage] = useState("English");

  return (
    <header
      className="
        w-full bg-[#05055dc4] px-4 sm:px-8 py-0.5 
        flex items-center justify-end
      "
    >
      {/* Language Selector */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Globe size={16} className="text-purple-400" />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="
            bg-[#121216] text-gray-300 text-xs sm:text-sm 
            px-1 sm:px-2 py-0.5 rounded-md sm:rounded-lg
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
