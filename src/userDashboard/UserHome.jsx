import React, { useState } from "react";
import { 
  ClipboardList, CheckCircle, Clock, FileWarning, Calendar, User 
} from "lucide-react";

const UserHome = () => {
  const [selectedSlot, setSelectedSlot] = useState("");

  const recentRequests = [
    {
      id: "REQ-2001",
      form: "Aadhar Update",
      date: "20 Nov 2025",
      status: "Completed",
    },
    {
      id: "REQ-2008",
      form: "PAN Correction",
      date: "19 Nov 2025",
      status: "Pending",
    },
    {
      id: "REQ-2012",
      form: "Bank KYC",
      date: "18 Nov 2025",
      status: "Docs Needed",
    },
  ];

  const statusBadge = (status) => {
    if (status === "Completed")
      return (
        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs flex items-center gap-1">
          <CheckCircle size={12} /> Completed
        </span>
      );
    if (status === "Pending")
      return (
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs flex items-center gap-1">
          <Clock size={12} /> Pending
        </span>
      );
    return (
      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs flex items-center gap-1">
        <FileWarning size={12} /> Docs Needed
      </span>
    );
  };

  const bookSlot = () => {
    alert(`Slot booked for ${selectedSlot}`);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-7xl space-y-10">

        {/* TOP CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Total Requests */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-900 p-5 rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.3)] hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-80">Total Requests</p>
              <ClipboardList size={22} className="opacity-90" />
            </div>
            <h1 className="text-3xl font-bold mt-3">24</h1>
            <p className="text-xs opacity-70 mt-1">Updated just now</p>
          </div>

          {/* Completed */}
          <div className="bg-[#121216] p-5 rounded-2xl border border-green-500/20 shadow hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Completed</p>
              <CheckCircle size={22} className="text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-green-400 mt-3">18</h1>
            <p className="text-xs text-gray-500 mt-1">All-time</p>
          </div>

          {/* Pending */}
          <div className="bg-[#121216] p-5 rounded-2xl border border-yellow-500/20 shadow hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Pending</p>
              <Clock size={22} className="text-yellow-400" />
            </div>
            <h1 className="text-3xl font-bold text-yellow-400 mt-3">5</h1>
            <p className="text-xs text-gray-500 mt-1">Awaiting action</p>
          </div>

          {/* Docs Needed */}
          <div className="bg-gradient-to-br from-red-500 to-red-700 p-5 rounded-2xl shadow-[0_0_25px_rgba(255,0,0,0.3)] hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-80">Document Needed</p>
              <FileWarning size={22} className="opacity-90" />
            </div>
            <h1 className="text-3xl font-bold mt-3">1</h1>
            <p className="text-xs opacity-80 mt-1">Needs attention</p>
          </div>
        </div>

        {/* MAIN BODY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SIDE - RECENT REQUESTS */}
          <div className="lg:col-span-9 space-y-4">
            <h2 className="text-xl font-semibold text-purple-400">Recent Requests</h2>

            {recentRequests.map((req, idx) => (
              <div 
                key={idx} 
                className="bg-[#121216] p-5 rounded-2xl border border-purple-800/20 shadow hover:bg-[#18181c] transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{req.form}</h3>
                    <p className="text-xs text-gray-400 mt-1">{req.date}</p>
                  </div>
                  {statusBadge(req.status)}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 space-y-6">

            {/* PROFILE BOX */}
            <div className="bg-[#121216] p-6 rounded-2xl border border-purple-600/20 shadow-lg text-center">
              <User size={40} className="mx-auto text-purple-400" />
              <h3 className="mt-3 font-semibold text-lg">Welcome, Vinay</h3>
              <p className="text-xs text-gray-500 mt-1">User Dashboard</p>
            </div>

            {/* SLOT BOOKING */}
            <div className="bg-[#121216] p-6 rounded-2xl border border-purple-700/20 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-purple-400" />
                <h3 className="font-semibold">Book a Slot</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400">Select Date</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-2 bg-transparent border border-purple-600/20 rounded-lg outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Select Time Slot</label>
                  <select
                    className="w-full mt-1 p-2 bg-transparent border border-purple-600/20 rounded-lg outline-none"
                    onChange={(e) => setSelectedSlot(e.target.value)}
                  >
                    <option value="">Choose slot</option>
                    <option value="9AM - 10AM">9AM - 10AM</option>
                    <option value="10AM - 11AM">10AM - 11AM</option>
                    <option value="2PM - 3PM">2PM - 3PM</option>
                  </select>
                </div>

                <button
                  disabled={!selectedSlot}
                  onClick={bookSlot}
                  className="w-full bg-purple-600 hover:bg-purple-700 transition p-2 rounded-lg font-semibold disabled:bg-gray-500"
                >
                  Book Slot
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default UserHome;
