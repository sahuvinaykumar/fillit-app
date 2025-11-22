import React, { useState } from "react";
import {
  User,
  Mail,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Search,
  Phone,
  Edit,
  Slash,
} from "lucide-react";

const AllUsers = () => {
  const [query, setQuery] = useState("");

  const users = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      phone: "9876543210",
      joined: "12 Aug 2024",
      totalRequests: 12,
      completed: 9,
      pending: 3,
      bookings: 4,
      isBlocked: false,
    },
    {
      id: 2,
      name: "Riya Patel",
      email: "riya@gmail.com",
      phone: "9090909090",
      joined: "01 Sept 2024",
      totalRequests: 8,
      completed: 8,
      pending: 0,
      bookings: 2,
      isBlocked: false,
    },
    {
      id: 3,
      name: "Deepak Verma",
      email: "deepak@gmail.com",
      phone: "9123456789",
      joined: "23 July 2024",
      totalRequests: 15,
      completed: 12,
      pending: 3,
      bookings: 5,
      isBlocked: true,
    },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()) ||
      u.phone.includes(query)
  );

  return (
    <div className="p-6 text-gray-200 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          All Users
        </h1>

        {/* SEARCH */}
        <div className="relative w-full md:w-72">
          <Search
            size={18}
            className="absolute left-3 top-3 text-purple-400"
          />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#1a1a1f] text-gray-300 border border-purple-800/40 rounded-xl pl-10 pr-4 py-2 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-700 transition"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#121216]/80 backdrop-blur-xl p-6 rounded-2xl border border-purple-900/30 shadow-[0_0_25px_rgba(128,0,255,0.2)] overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse">
          <thead>
            <tr className="text-gray-400 text-left border-b border-purple-800/20 text-sm">
              <th className="py-3 px-5">User</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Joined</th>
              <th className="p-3">Requests</th>
              <th className="p-3">Completed</th>
              <th className="p-3">Pending</th>
              <th className="p-3">Bookings</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Block</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center p-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-800/30 hover:bg-[#1a1a1f] transition"
                >
                  {/* USER */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-500/20 w-10 h-10 flex items-center justify-center text-purple-300 rounded-xl text-sm font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="p-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Mail size={16} /> {user.email}
                    </div>
                  </td>

                  {/* PHONE */}
                  <td className="p-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Phone size={16} /> {user.phone}
                    </div>
                  </td>

                  {/* JOINED */}
                  <td className="p-4 text-gray-400">
                    <div className="flex items-center gap-2 text-nowrap">
                      <Calendar size={16} /> {user.joined}
                    </div>
                  </td>

                  {/* TOTAL REQUESTS */}
                  <td className="p-4 text-purple-300 font-medium">
                    <div className="flex items-center gap-2">
                      <FileText size={16} /> {user.totalRequests}
                    </div>
                  </td>

                  {/* COMPLETED */}
                  <td className="p-4 text-green-400 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} /> {user.completed}
                    </div>
                  </td>

                  {/* PENDING */}
                  <td className="p-4 text-yellow-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {user.pending}
                    </div>
                  </td>

                  {/* BOOKINGS */}
                  <td className="p-4 text-pink-400 font-medium">
                    {user.bookings}
                  </td>

                  {/* EDIT BUTTON */}
                  <td className="p-4">
                    <button className="p-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition">
                      <Edit size={16} />
                    </button>
                  </td>

                  {/* BLOCK BUTTON */}
                  <td className="p-4">
                    <button
                      className={`p-2 rounded-lg transition flex items-center justify-center ${
                        user.isBlocked
                          ? "bg-red-600/20 text-red-400 hover:bg-red-600/30"
                          : "bg-gray-700/40 text-gray-300 hover:bg-red-500/20 hover:text-red-400"
                      }`}
                    >
                      <Slash size={16} />
                    </button>
                  </td>
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
