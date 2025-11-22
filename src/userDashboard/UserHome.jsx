import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Clock, CreditCard, ClipboardList, Calendar, DollarSign } from "lucide-react";

export default function UserHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSlotBook = () => {
    alert(`Slot booked for ${selectedSlot}`);
  };
  return (
    <div className="min-h-screen bg-[#A69EC0] flex justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 space-y-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
          <div className="group bg-gradient-to-br from-[#4B3FA6] to-[#7A6FE3] text-white p-4 md:p-5 rounded-2xl shadow-lg hover:scale-[1.03] transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-xs md:text-sm opacity-80">Total Bookings</p>
              <ClipboardList className="w-5 h-5 md:w-6 md:h-6 opacity-90" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">1,248</h2>
            <p className="text-xs mt-2 opacity-80">Updated just now</p>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100 hover:scale-[1.03] transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-xs md:text-sm text-gray-500">Completed</p>
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mt-2">1,032</h2>
            <p className="text-xs mt-2 text-gray-400">All-time</p>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100 hover:scale-[1.03] transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-xs md:text-sm text-gray-500">Processing</p>
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mt-2">142</h2>
            <p className="text-xs mt-2 text-gray-400">Awaiting confirmation</p>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 md:p-5 rounded-2xl shadow-lg hover:scale-[1.03] transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-xs md:text-sm opacity-80">Total Payment</p>
              <CreditCard className="w-5 h-5 md:w-6 md:h-6 opacity-90" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">$58,420</h2>
            <p className="text-xs mt-2 opacity-90">USD received</p>
          </div>
        </div>
        {/* MAIN BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 px-4 md:px-6 pb-6 md:pb-10">
          {/* LEFT FLIGHT LIST */}
          <div className="lg:col-span-9 space-y-4">
            {/* <p className="text-sm text-gray-500">183 results</p> */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-4 md:p-5 flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
                <div className="sm:w-40">
                  <p className="font-semibold text-sm md:text-base">10:30 AM</p>
                  <p className="text-xs text-gray-500">Barcelona (BCN)</p>
                  <p className="text-xs text-gray-400">Tue, Apr 21, 2020</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="relative h-1 bg-gray-200 flex-1 rounded-full">
                      <span className="absolute -left-1 -top-1 w-3 h-3 bg-[#4B3FA6] rounded-full"></span>
                      <span className="absolute -right-1 -top-1 w-3 h-3 bg-[#4B3FA6] rounded-full"></span>
                    </div>
                    <p className="text-xs text-gray-400 w-20 md:w-24 text-right">1h 50m</p>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Non-stop</p>
                </div>
                <div className="sm:w-40 text-right">
                  <p className="text-base md:text-lg font-bold">$56 <span className="text-xs text-gray-400">USD</span></p>
                  <button className="mt-3 bg-orange-400 text-white px-4 md:px-5 py-2 rounded-lg shadow text-sm md:text-base">Select</button>
                </div>
              </div>
            ))}
          </div>
          {/* RIGHT FILTER SIDEBAR */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow">
              <button className="w-full bg-[#EEF0FF] text-[#3F2AA3] py-2 rounded-lg font-semibold text-sm md:text-base">Get slots alerts</button>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow text-sm space-y-4 md:space-y-6">
            {/* BOOK A SLOT SECTION */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#4B3FA6]" />
                <h3 className="font-semibold text-base md:text-lg">Book a Slot</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B3FA6] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Time Slot</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B3FA6] focus:border-transparent"
                    onChange={(e) => setSelectedSlot(e.target.value)}
                  >
                    <option value="">Choose a slot</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                  </select>
                </div>
                <button
                  onClick={handleSlotBook}
                  disabled={!selectedSlot}
                  className="w-full bg-[#4B3FA6] text-white py-3 rounded-lg font-semibold hover:bg-[#3F2AA3] transition disabled:bg-gray-400 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  Book Slot
                </button>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}