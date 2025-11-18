import { useState } from "react";

const EmployeeOverview = () => {
  const [search, setSearch] = useState("");

  // Dummy employee data (replace with API later)
  const employees = [
    {
      id: 1,
      name: "Karan Patel",
      email: "karan@mail.com",
      todayTask: "Form Verification",
      completed: true,
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Gupta",
      email: "sneha@mail.com",
      todayTask: "Document Upload",
      completed: false,
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      email: "rahul@mail.com",
      todayTask: "Form Review",
      completed: false,
      status: "On Leave",
    },
    {
      id: 4,
      name: "Priya Soni",
      email: "priya@mail.com",
      todayTask: "Data Entry",
      completed: true,
      status: "Active",
    },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8">

      {/* HEADER + SEARCH */}
      <div className="flex justify-between items-center">

        <input
          type="text"
          placeholder="Search Employee..."
          className="bg-[#1a1a1f] text-gray-300 px-4 py-2 rounded-xl outline-none w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* EMPLOYEE TABLE */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Employee List</h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse bg-[#121216] text-gray-300">
            <thead className="bg-[#1d1d22] text-gray-400">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Today's Task</th>
                <th className="py-3 px-4 text-left">Task Completed?</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-t border-[#2a2a2f] hover:bg-[#1b1b20] transition"
                >
                  <td className="py-3 px-4">{emp.name}</td>
                  <td className="py-3 px-4">{emp.email}</td>
                  <td className="py-3 px-4">{emp.todayTask}</td>
                  <td className="py-3 px-4">
                    {emp.completed ? (
                      <span className="px-3 py-1 rounded-lg text-xs bg-green-600/20 text-green-400">
                        Completed
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-lg text-xs bg-yellow-600/20 text-yellow-400">
                        Pending
                      </span>
                    )}
                  </td>

                  {/* Employee Status */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs ${
                        emp.status === "Active"
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredEmployees.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
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
