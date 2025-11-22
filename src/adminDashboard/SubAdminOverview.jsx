import { useState } from "react";
import { Search, Eye, Pencil, Trash2, PlusCircle } from "lucide-react";

const SubAdminOverview = () => {
  const [search, setSearch] = useState("");

  // Dummy Today’s Requests
  const todaysRequests = 18;

  // Dummy Data
  const subAdmins = [
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@mail.com",
      phone: "9876543210",
      assigned: 15,
      completed: 5,
      pending: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@mail.com",
      phone: "9123456780",
      assigned: 20,
      completed: 15,
      pending: 5,
      status: "On Leave",
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@mail.com",
      phone: "9988776655",
      assigned: 8,
      completed: 5,
      pending: 3,
      status: "Resigned",
    },
  ];

  const filteredAdmins = subAdmins.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 text-gray-200">

      {/* HEADER SECTION */}
      <div className="flex justify-between w-full items-center flex-wrap gap-4">

        {/* LEFT: HEADING + TODAY'S REQUEST */}
        <div className="flex flex-col items-start w-full gap-6 flex-wrap">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Sub Admin Management
          </h1>

          <div className="flex justify-between items-center w-full">
            <div
              className="
              px-5 py-2 rounded-xl 
              bg-[#1e1e24] border border-purple-600/30
              shadow-[0_0_15px_rgba(128,0,255,0.2)]
            "
            >
              <p className="text-sm text-gray-400">Today's Requests</p>
              <h3 className="text-lg font-semibold text-purple-400">
                {todaysRequests}
              </h3>
            </div>

            {/* INPUT SEARCH BAR */}
            <div className="flex justify-end">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search Sub Admin..."
                  className="
              bg-[#1a1a1f] text-gray-300 pl-10 pr-4 py-2 rounded-xl 
              outline-none w-64 border border-purple-700/30
              focus:ring-2 focus:ring-purple-500 transition-all
            "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* <div
            className="
              px-5 py-2 rounded-xl 
              bg-[#1e1e24] border border-purple-600/30
              shadow-[0_0_15px_rgba(128,0,255,0.2)]
            "
          >
            <p className="text-sm text-gray-400">Today's Requests</p>
            <h3 className="text-lg font-semibold text-purple-400">
              {todaysRequests}
            </h3>
          </div> */}
        </div>


      </div>

      {/* TABLE CARD */}
      <div
        className="
          bg-[#121216]/70 p-6 rounded-2xl 
          border border-purple-700/30 backdrop-blur-xl
          shadow-[0_0_25px_rgba(128,0,255,0.25)]
        "
      >
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-xl font-semibold mb-5">Sub Admin Overview</h2>

          {/* RIGHT: CREATE BUTTON */}
          <button
            className="
            flex items-center gap-2 px-4 py-2 rounded-xl
            bg-purple-600/30 border border-purple-700/40
            hover:bg-purple-600/40 transition
            text-purple-300
          "
          >
            <PlusCircle size={18} />
            Create Sub Admin
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-300">
            <thead className="bg-[#1d1d22] text-gray-400">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Assigned</th>
                <th className="py-3 px-4 text-left">Completed</th>
                <th className="py-3 px-4 text-left">Pending</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Performance</th>   {/* NEW */}
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAdmins.map((admin) => {
                const performance = Math.round((admin.completed / admin.assigned) * 100); // %

                const performanceColor =
                  performance < 60
                    ? "bg-red-600/20 text-red-400"
                    : performance <= 90
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "bg-green-600/20 text-green-400";

                return (
                  <tr
                    key={admin.id}
                    className="border-t border-[#2a2a2f] hover:bg-[#1b1b20] transition"
                  >
                    <td className="py-3 px-4">{admin.id}</td>
                    <td className="py-3 px-4 font-medium">{admin.name}</td>
                    <td className="py-3 px-4">{admin.email}</td>
                    <td className="py-3 px-4">{admin.phone}</td>

                    <td className="py-3 px-4">{admin.assigned}</td>
                    <td className="py-3 px-4 text-green-400">{admin.completed}</td>
                    <td className="py-3 px-4 text-yellow-400">{admin.pending}</td>

                    {/* STATUS FIXED (no line break) */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap
              ${admin.status === "Active"
                            ? "bg-green-600/20 text-green-400"
                            : admin.status === "On Leave"
                              ? "bg-yellow-600/20 text-yellow-400"
                              : "bg-red-600/20 text-red-400"
                          }
            `}
                      >
                        {admin.status}
                      </span>
                    </td>

                    {/* PERFORMANCE BADGE */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${performanceColor}`}
                      >
                        {performance}%
                      </span>
                    </td>

                    {/* ACTION BUTTONS */}
                    <td className="py-3 px-4 flex gap-3">
                      <button
                        className="p-2 rounded-lg bg-green-700/20 text-green-400 hover:bg-green-700/30 transition"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="p-2 rounded-lg bg-red-700/20 text-red-400 hover:bg-red-700/30 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filteredAdmins.length === 0 && (
                <tr>
                  <td colSpan="10" className="py-4 text-center text-gray-500 italic">
                    No sub-admin found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

    </section>
  );
};

export default SubAdminOverview;
