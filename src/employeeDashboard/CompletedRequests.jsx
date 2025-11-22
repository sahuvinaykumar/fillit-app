import React, { useState } from "react";
import { Search, CheckCircle } from "lucide-react";

const CompletedRequests = () => {
  const [query, setQuery] = useState("");

  const completedData = [
    {
      id: "REQ-1101",
      form: "Aadhar Update",
      user: "Amit Sharma",
      status: "Completed",
      date: "18 Nov 2024",
    },
    {
      id: "REQ-1104",
      form: "PAN Correction",
      user: "Riya Patel",
      status: "Completed",
      date: "19 Nov 2024",
    },
    {
      id: "REQ-1110",
      form: "Income Certificate",
      user: "Deepak Verma",
      status: "Completed",
      date: "20 Nov 2024",
    },
  ];

  return (
    <div className="p-6 md:p-8 text-gray-200">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-3">
          <CheckCircle className="text-green-400" /> Completed Work
        </h1>
        <p className="text-gray-400 mt-1">All tasks successfully completed by you</p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center bg-[#121216] border border-green-800/40 rounded-xl p-3 shadow-[0_0_20px_rgba(0,255,128,0.25)]">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search completed work..."
            className="bg-transparent outline-none text-gray-300 ml-3 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* COMPLETED WORK TABLE */}
      <div
        className="bg-[#0f0f13]/70 rounded-2xl border border-green-700/30 
      backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,128,0.25)] overflow-hidden"
      >

        <table className="w-full text-left">
          <thead className="bg-[#1a1a1f] text-gray-400 text-sm">
            <tr>
              <th className="p-4">Request ID</th>
              <th className="p-4">Form Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Status</th>
              <th className="p-4">Completed Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {completedData
              .filter(
                (req) =>
                  req.id.toLowerCase().includes(query.toLowerCase()) ||
                  req.form.toLowerCase().includes(query.toLowerCase()) ||
                  req.user.toLowerCase().includes(query.toLowerCase())
              )
              .map((req, index) => (
                <tr
                  key={index}
                  className="border-b border-green-800/10 hover:bg-[#1a1a1f] transition-all"
                >
                  <td className="p-4 font-medium">{req.id}</td>
                  <td className="p-4">{req.form}</td>
                  <td className="p-4">{req.user}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 flex items-center gap-1 w-fit">
                      <CheckCircle size={14} /> Completed
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

export default CompletedRequests;
