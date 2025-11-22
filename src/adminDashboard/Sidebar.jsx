import { useState, useEffect } from "react";
import { Menu, User, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect Screen Size */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsOpen(false); // Auto collapse on mobile
      } else {
        setIsMobile(false);
        setIsOpen(true); // Expanded on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 bg-[#121216] p-3 rounded-xl border border-purple-700/40 shadow-lg md:hidden"
        >
          <Menu className="text-purple-300" />
        </button>
      )}

      {/* Overlay when sidebar is open (Mobile Only) */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen p-5 flex flex-col justify-between
          bg-[#0e0e12]/80 backdrop-blur-xl 
          shadow-[0_0_35px_rgba(147,51,234,0.30)]
          border-r border-purple-900/20
          transition-all duration-300

          ${isOpen ? "w-64" : "w-20"}
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
        `}
      >
        {/* Top Section */}
        <div>
          {/* Logo + Toggle */}
          <div
            className={`flex items-center ${
              isOpen ? "justify-between" : "justify-center"
            } mb-10`}
          >
            {isOpen && (
              <h1
                className="
          text-3xl font-extrabold tracking-wide 
          bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent
          transition-all duration-300
        "
              >
                Fillit
              </h1>
            )}

            {/* Close on Mobile */}
            <Menu
              className="cursor-pointer text-gray-300 hover:text-purple-400 transition"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Main Options */}
          <div className="space-y-2 mt-6 pb-10 border-b border-gray-700/40">
            {props.options.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={`
                group w-full flex items-center gap-3
                px-3 py-3 rounded-xl
                text-gray-300 hover:text-white
                transition relative
                hover:bg-purple-600/20
              `}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <span className="text-purple-300 group-hover:text-purple-400">
                  {item.icon}
                </span>

                {isOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Secondary Options */}
          <div className="space-y-3 mt-10">
            <NavLink
              to={"/profile"}
              onClick={() => isMobile && setIsOpen(false)}
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition px-2 py-2"
            >
              <User size={18} className="text-purple-300" />
              {isOpen && <span className="text-sm">Profile</span>}
            </NavLink>

            <NavLink
              to={"/settings"}
              onClick={() => isMobile && setIsOpen(false)}
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition px-2 py-2"
            >
              <Settings size={18} className="text-purple-300" />
              {isOpen && <span className="text-sm">Settings</span>}
            </NavLink>

            <button
              className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition px-2 py-2"
              onClick={() => isMobile && setIsOpen(false)}
            >
              <LogOut size={18} className="text-red-400" />
              {isOpen && <span className="text-sm">Logout</span>}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`
          text-center text-gray-600 text-xs
          transition-all duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        >
          © 2025 Fillit
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
