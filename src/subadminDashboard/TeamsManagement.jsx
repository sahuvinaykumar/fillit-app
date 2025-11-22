import React, { useState } from "react";
import {
  Search,
  Users,
  UserPlus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  PauseCircle
} from "lucide-react";

const TeamsManagement = () => {
  const [query, setQuery] = useState("");

  const teams = [
    {
      name: "Verification Team",
      members: [
        { name: "Amit Sharma", status: "Active" },
        { name: "Riya Patel", status: "Busy" },
        { name: "Deepak Verma", status: "On Leave" },
      ],
    },
    {
      name: "Document Team",
      members: [
        { name: "Neha Singh", status: "Active" },
        { name: "Karan Mehta", status: "Active" },
      ],
    },
    {
      name: "Support Team",
      members: [
        { name: "Harsh Gupta", status: "Busy" },
        { name: "Sneha Rao", status: "Active" },
      ],
    },
  ];

  // Badge Color Logic
  const statusStyles = {
    Active: "text-green-400 bg-green-400/15 border-green-500/30",
    Busy: "text-yellow-400 bg-yellow-400/15 border-yellow-500/30",
    "On Leave": "text-red-400 bg-red-400/15 border-red-500/30",
  };

  // Filter Teams
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 text-gray-200">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Teams Management
          </h1>
          <p className="text-gray-400 mt-1">Create and manage your teams</p>
        </div>

        <button
          className="
            flex items-center gap-2 
            px-5 py-3 rounded-xl
            bg-purple-600/30 border border-purple-700/40
            hover:bg-purple-700/40
            shadow-[0_0_20px_rgba(128,0,255,0.3)]
            transition-all
          "
        >
          <UserPlus size={20} className="text-purple-300" />
          Create Team
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-8">
        <div
          className="
            flex items-center gap-3 
            bg-[#0f0f13]/70 border border-purple-700/30 
            backdrop-blur-xl rounded-xl p-4 
            shadow-[0_0_20px_rgba(128,0,255,0.25)]
          "
        >
          <Search className="text-purple-400" size={20} />
          <input
            type="text"
            placeholder="Search teams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-300"
          />
        </div>
      </div>

      {/* TEAMS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredTeams.map((team, index) => (
          <div
            key={index}
            className="
              p-6 rounded-2xl bg-[#0f0f13]/70 
              border border-purple-700/30 backdrop-blur-xl 
              shadow-[0_0_25px_rgba(128,0,255,0.25)]
              hover:shadow-[0_0_35px_rgba(128,0,255,0.45)]
              transition-all duration-300
              relative
            "
          >

            {/* EDIT / DELETE BUTTONS */}
            <div className="absolute top-4 right-4 flex gap-3">
              <button
                className="
                  p-2 rounded-lg bg-[#1a1a1f] border border-purple-800/30
                  hover:bg-[#22222a] transition-all
                "
              >
                <Edit size={16} className="text-blue-400" />
              </button>

              <button
                className="
                  p-2 rounded-lg bg-[#1a1a1f] border border-purple-800/30
                  hover:bg-[#22222a] transition-all
                "
              >
                <Trash2 size={16} className="text-red-400" />
              </button>
            </div>

            {/* TEAM HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <Users size={28} className="text-purple-400" />
              <h2 className="text-xl font-semibold">{team.name}</h2>
            </div>

            {/* TEAM MEMBERS */}
            <p className="text-gray-400 text-sm mb-3">Team Members</p>

            <div className="space-y-4">

              {team.members.map((member, i) => (
                <div
                  key={i}
                  className="
                    p-3 rounded-xl 
                    bg-[#1a1a1f] border border-purple-800/20 
                    flex items-center justify-between
                    hover:bg-[#22222a] transition-all
                  "
                >
                  <p className="font-medium">{member.name}</p>

                  <span
                    className={`
                      px-3 py-1 rounded-lg border text-xs font-medium
                      ${statusStyles[member.status]}
                    `}
                  >
                    {member.status}
                  </span>
                </div>
              ))}

            </div>

            {/* TEAM SIZE */}
            <p className="mt-6 text-sm text-gray-400">
              Total Members:{" "}
              <span className="text-gray-200 font-medium">
                {team.members.length}
              </span>
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TeamsManagement;
