import React, { useState } from "react";
import { Search, Clock, FileWarning } from "lucide-react";

const PendingRequests = () => {
  const [query, setQuery] = useState("");

  const pendingData = [
    {
      id: "REQ-1001",
      form: "Aadhar Update",
      user: "Amit Sharma",
      status: "Pending",
      date: "10 Nov 2024",
    },
    {
      id: "REQ-1004",
      form: "PAN Correction",
      user: "Riya Patel",
      status: "Pending",
      date: "11 Nov 2024",
    },
    {
      id: "REQ-1011",
      form: "Bank KYC",
      user: "Mahesh Yadav",
      status: "Pending",
      date: "13 Nov 2024",
    },
  ];

  return (
    <div className="p-6 md:p-8 text-gray-200">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
          <FileWarning className="text-purple-400" /> Pending Requests
        </h1>
        <p className="text-gray-400 mt-1">All requests assigned to you but not completed yet</p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center bg-[#121216] border border-purple-800/40 rounded-xl p-3 shadow-[0_0_20px_rgba(128,0,255,0.25)]">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search pending requests..."
            className="bg-transparent outline-none text-gray-300 ml-3 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* PENDING REQUEST TABLE */}
      <div className="bg-[#0f0f13]/70 rounded-2xl border border-purple-700/30 
      backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)] overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-[#1a1a1f] text-gray-400 text-sm">
            <tr>
              <th className="p-4">Request ID</th>
              <th className="p-4">Form Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Status</th>
              <th className="p-4">Assigned Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {pendingData
              .filter(
                (req) =>
                  req.id.toLowerCase().includes(query.toLowerCase()) ||
                  req.form.toLowerCase().includes(query.toLowerCase()) ||
                  req.user.toLowerCase().includes(query.toLowerCase())
              )
              .map((req, index) => (
                <tr
                  key={index}
                  className="border-b border-purple-800/10 hover:bg-[#1a1a1f] transition-all"
                >
                  <td className="p-4 font-medium">{req.id}</td>
                  <td className="p-4">{req.form}</td>
                  <td className="p-4">{req.user}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400 flex items-center gap-1 w-fit">
                      <Clock size={14} /> Pending
                    </span>
                  </td>
                  <td className="p-4">{req.date}</td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default PendingRequests;
