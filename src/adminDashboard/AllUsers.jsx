import React, { useState } from "react";
import { User, Mail, Calendar, CheckCircle, Clock, FileText, Search } from "lucide-react";

const AllUsers = () => {
  const [query, setQuery] = useState("");

  const users = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com", joined: "12 Aug 2024", totalRequests: 12, completed: 9, pending: 3, bookings: 4 },
    { id: 2, name: "Riya Patel", email: "riya@gmail.com", joined: "01 Sept 2024", totalRequests: 8, completed: 8, pending: 0, bookings: 2 },
    { id: 3, name: "Deepak Verma", email: "deepak@gmail.com", joined: "23 July 2024", totalRequests: 15, completed: 12, pending: 3, bookings: 5 },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 text-gray-200">
      {/* Title + Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          All Users
        </h1>

        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-3 text-purple-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#1b1b1f] text-gray-300 border border-purple-800/40 rounded-xl pl-10 pr-4 py-2 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-600 transition"
          />
        </div>
      </div>

      {/* Table container */}
      <div className="bg-[#121216] p-4 md:p-6 rounded-2xl border border-purple-900/20 shadow-[0_0_25px_rgba(128,0,255,0.15)] overflow-x-auto">
        <table className="w-full border-collapse table-auto min-w-[600px] md:min-w-[900px]">
          <thead>
            <tr className="text-gray-400 text-left border-b border-purple-800/20 text-sm md:text-base">
              <th className="p-2 md:p-3 w-[150px] md:w-[200px]">User</th>
              <th className="p-2 md:p-3 w-[150px] md:w-[200px]">Email</th>
              <th className="p-2 md:p-3 w-[120px] md:w-[150px]">Joined</th>
              <th className="p-2 md:p-3 w-[120px] md:w-[150px]">Total Requests</th>
              <th className="p-2 md:p-3 w-[120px] md:w-[150px]">Completed</th>
              <th className="p-2 md:p-3 w-[120px] md:w-[150px]">Pending</th>
              <th className="p-2 md:p-3 w-[100px] md:w-[120px]">Bookings</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center p-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-800/30 hover:bg-[#1b1b1f] transition text-sm md:text-base">
                  <td className="p-2 md:p-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="bg-purple-500/20 p-1 md:p-2 rounded-xl">
                        <User className="text-purple-400" size={16} md={20} />
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>

                  <td className="p-2 md:p-4 text-gray-400">
                    <div className="flex items-center gap-1 md:gap-2">
                      <Mail size={14} md={16} /> {user.email}
                    </div>
                  </td>

                  <td className="p-2 md:p-4 text-gray-400">
                    <div className="flex items-center gap-1 md:gap-2">
                      <Calendar size={14} md={16} /> {user.joined}
                    </div>
                  </td>

                  <td className="p-2 md:p-4 text-purple-300 font-medium flex items-center gap-1 md:gap-2">
                    <FileText size={14} md={16} /> {user.totalRequests}
                  </td>

                  <td className="p-2 md:p-4 text-green-400 font-medium flex items-center gap-1 md:gap-2">
                    <CheckCircle size={14} md={16} /> {user.completed}
                  </td>

                  <td className="p-2 md:p-4 text-yellow-400 font-medium flex items-center gap-1 md:gap-2">
                    <Clock size={14} md={16} /> {user.pending}
                  </td>

                  <td className="p-2 md:p-4 text-pink-400 font-medium">{user.bookings}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
