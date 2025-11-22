import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const AssignForm = () => {
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const employees = ["Amit Sharma", "Riya Patel", "Deepak Verma", "Kunal Singh"];

  const requests = [
    {
      id: "REQ-2024-0012",
      formName: "Government ID Verification",
      type: "Government",
      status: "Pending",
      requestDate: "12 Aug 2024, 1:20 PM",
      assignedTo: "",
      assignedOn: "",
    },
    {
      id: "REQ-2024-0015",
      formName: "Private Company Background Check",
      type: "Private",
      status: "In Review",
      requestDate: "12 Aug 2024, 11:45 AM",
      assignedTo: "Amit Sharma",
      assignedOn: "12 Aug 2024, 12:00 PM",
    },
    {
      id: "REQ-2024-0021",
      formName: "UPSC Document Validation",
      type: "UPSC",
      status: "Completed",
      requestDate: "11 Aug 2024, 5:50 PM",
      assignedTo: "Riya Patel",
      assignedOn: "11 Aug 2024, 6:00 PM",
    },
  ];

  // Status colors
  const statusColors = {
    Pending: "text-yellow-400",
    Assigned: "text-blue-400",
    "In Review": "text-purple-400",
    Completed: "text-green-400",
    Rejected: "text-red-400",
  };

  // Filter requests
  const filtered = requests.filter((r) =>
    r.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#0b0b0d] text-gray-300 p-6">
      <h2 className="text-2xl font-semibold mb-6">Assign Form To Employee</h2>

      {/* Search */}
      <div className="max-w-md mb-6 bg-[#121216] px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(128,0,255,0.15)] flex items-center gap-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search request by ID..."
          className="bg-transparent outline-none w-full text-sm text-gray-300 placeholder-gray-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Request Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((req, index) => (
          <div
            key={index}
            className="bg-[#121216] p-5 rounded-2xl border border-[#1e1e24] shadow-[0_0_25px_rgba(128,0,255,0.2)] relative"
          >
            {/* Request ID */}
            <h3 className="text-lg font-semibold">{req.id}</h3>
            <p className="text-sm text-gray-400">
              {req.formName} •{" "}
              <span className="text-gray-300">{req.type}</span>
            </p>

            {/* Request Date */}
            <p className="mt-2 text-sm text-gray-400">
              Requested On:{" "}
              <span className="text-gray-300">{req.requestDate}</span>
            </p>

            {/* Status */}
            <p className="mt-1 text-sm">
              Status:{" "}
              <span className={`font-medium ${statusColors[req.status]}`}>
                {req.status}
              </span>
            </p>

            {/* Assignment Section */}
            <div className="mt-4">
              {/* Assigned To */}
              {req.assignedTo ? (
                <p className="text-sm text-gray-300">
                  Assigned To: <span className="text-purple-400">{req.assignedTo}</span>
                </p>
              ) : (
                <p className="text-sm text-gray-500">Not Assigned</p>
              )}

              {/* Assigned Date */}
              {req.assignedOn && (
                <p className="text-sm text-gray-400">
                  Assigned On:{" "}
                  <span className="text-gray-300">{req.assignedOn}</span>
                </p>
              )}

              {/* Assign Dropdown */}
              <div className="relative mt-4">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="w-full bg-[#1e1e24] text-gray-300 px-4 py-2 rounded-xl flex items-center justify-between hover:bg-[#2a2a32] transition"
                >
                  {req.assignedTo || "Assign Employee"}
                  <ChevronDown size={18} />
                </button>

                {/* Dropdown List */}
                {openDropdown === index && (
                  <div className="absolute z-10 mt-2 w-full bg-[#1a1a1f] border border-[#2a2a32] rounded-xl shadow-[0_0_15px_rgba(128,0,255,0.2)] p-2">
                    {employees.map((emp, i) => (
                      <button
                        key={i}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#2a2a32] text-sm"
                      >
                        {emp}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssignForm;
