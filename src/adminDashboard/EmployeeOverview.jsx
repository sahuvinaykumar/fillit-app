import { useState } from "react";
import { Search, Pencil, Trash2, PlusCircle } from "lucide-react";

const EmployeeOverview = () => {
  const [search, setSearch] = useState("");

  // Dummy Today’s Tasks Count
  const todaysTaskCount = 32;

  // Updated Employee Data with performance %
  const employees = [
    {
      id: 1,
      name: "Karan Patel",
      email: "karan@mail.com",
      phone: "9876543210",
      todayTaskAssigned: 5,
      todayCompleted: 3,
      todayPending: 2,
      performance: 92,
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Gupta",
      email: "sneha@mail.com",
      phone: "9123456780",
      todayTaskAssigned: 7,
      todayCompleted: 4,
      todayPending: 3,
      performance: 78,
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      email: "rahul@mail.com",
      phone: "9988776655",
      todayTaskAssigned: 6,
      todayCompleted: 0,
      todayPending: 6,
      performance: 45,
      status: "On Leave",
    },
    {
      id: 4,
      name: "Priya Soni",
      email: "priya@mail.com",
      phone: "9090909090",
      todayTaskAssigned: 4,
      todayCompleted: 4,
      todayPending: 0,
      performance: 96,
      status: "Active",
    },
  ];

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  // FUNCTION TO GET PERFORMANCE CLASS
  const getPerformanceClass = (score) => {
    if (score < 60)
      return "bg-red-600/20 text-red-400";
    if (score >= 60 && score <= 90)
      return "bg-yellow-600/20 text-yellow-400";
    return "bg-green-600/20 text-green-400";
  };

  return (
    <section className="p-6 space-y-8 text-gray-200">

      {/* HEADER SECTION */}
      <div className="flex justify-between w-full items-center flex-wrap gap-4">

        <div className="flex flex-col items-start w-full gap-6">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Employee Management
          </h1>

          <div className="flex justify-between w-full items-center flex-wrap gap-4">

            {/* Today's Tasks Count */}
            <div
              className="px-5 py-2 rounded-xl 
                bg-[#1e1e24] border border-purple-600/30
                shadow-[0_0_15px_rgba(128,0,255,0.2)]
              "
            >
              <p className="text-sm text-gray-400">Today's Request</p>
              <h3 className="text-lg font-semibold text-purple-400">
                {todaysTaskCount}
              </h3>
            </div>

            {/* SEARCH */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search Employee..."
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

      </div>

      {/* TABLE */}
      <div
        className="
          bg-[#121216]/70 p-6 rounded-2xl 
          border border-purple-700/30 backdrop-blur-xl
          shadow-[0_0_25px_rgba(128,0,255,0.25)]
        "
      >
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-xl font-semibold">Employee Overview</h2>

          {/* CREATE BUTTON */}
          <button
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl
              bg-purple-600/30 border border-purple-700/40
              hover:bg-purple-600/40 transition
              text-purple-300
            "
          >
            <PlusCircle size={18} />
            Create Employee
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-300">
            <thead className="bg-[#1d1d22] text-gray-400">
              <tr>
                <th className="py-3 px-3 text-left">ID</th>
                <th className="py-3 px-3 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Assigned Today</th>
                <th className="py-3 px-4 text-left">Completed</th>
                <th className="py-3 px-4 text-left">Pending</th>

                {/* ⭐ NEW PERFORMANCE COLUMN */}
                <th className="py-3 px-4 text-left">Performance</th>

                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((emp) => (
                <tr
                  key={emp.id}
                  className="
                    border-t border-[#2a2a2f] 
                    hover:bg-[#1b1b20] transition
                  "
                >
                  <td className="py-3 px-4">{emp.id}</td>
                  <td className="py-3 px-4 font-medium">{emp.name}</td>
                  <td className="py-3 px-4">{emp.email}</td>
                  <td className="py-3 px-4">{emp.phone}</td>

                  <td className="py-3 px-4">{emp.todayTaskAssigned}</td>
                  <td className="py-3 px-4 text-green-400">{emp.todayCompleted}</td>
                  <td className="py-3 px-4 text-yellow-400">{emp.todayPending}</td>

                  {/* ⭐ PERFORMANCE BADGE */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs ${getPerformanceClass(
                        emp.performance
                      )}`}
                    >
                      {emp.performance}%
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="py-3 px-4">
                    <span
                      className={`
                        px-3 py-1 rounded-lg text-xs whitespace-nowrap
                        ${emp.status === "Active"
                          ? "bg-blue-600/20 text-blue-400"
                          : emp.status === "On Leave"
                            ? "bg-yellow-600/20 text-yellow-400"
                            : "bg-red-600/20 text-red-400"
                        }
                      `}
                    >
                      {emp.status}
                    </span>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td className="py-3 px-4 flex gap-3">
                    <button
                      className="
                        p-2 rounded-lg bg-green-700/20 text-green-400 
                        hover:bg-green-700/30 transition
                      "
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="
                        p-2 rounded-lg bg-red-700/20 text-red-400 
                        hover:bg-red-700/30 transition
                      "
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>

                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="10"
                    className="py-4 text-center text-gray-500 italic"
                  >
                    No employee found
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

export default EmployeeOverview;
