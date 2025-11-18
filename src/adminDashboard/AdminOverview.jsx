import { useState } from "react";

const AdminOverview = () => {
  const [search, setSearch] = useState("");

  // Dummy Data — Replace with your API later
  const subAdmins = [
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@mail.com",
      assigned: 15,
      completed: 10,
      pending: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@mail.com",
      assigned: 20,
      completed: 15,
      pending: 5,
      status: "On Leave",
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@mail.com",
      assigned: 8,
      completed: 5,
      pending: 3,
      status: "Active",
    },
  ];

  const filteredAdmins = subAdmins.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8">

      {/* HEADER + SEARCH BAR */}
      <div className="flex justify-between items-center">

        <input
          type="text"
          placeholder="Search Sub Admin..."
          className="bg-[#1a1a1f] text-gray-300 px-4 py-2 rounded-xl outline-none w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* SUB ADMIN TABLE */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Sub Admins</h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse bg-[#121216] text-gray-300">
            <thead className="bg-[#1d1d22] text-gray-400">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Assigned</th>
                <th className="py-3 px-4 text-left">Completed</th>
                <th className="py-3 px-4 text-left">Pending</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredAdmins.map((admin) => (
                <tr
                  key={admin.id}
                  className="border-t border-[#2a2a2f] hover:bg-[#1b1b20] transition"
                >
                  <td className="py-3 px-4">{admin.name}</td>
                  <td className="py-3 px-4">{admin.email}</td>
                  <td className="py-3 px-4">{admin.assigned}</td>
                  <td className="py-3 px-4 text-green-400">{admin.completed}</td>
                  <td className="py-3 px-4 text-yellow-400">{admin.pending}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs ${
                        admin.status === "Active"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {admin.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredAdmins.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="py-4 text-center text-gray-500 italic"
                  >
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

export default AdminOverview;
