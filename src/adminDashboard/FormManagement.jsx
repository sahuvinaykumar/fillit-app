import React, { useState } from "react";
import { Search, PlusCircle, Pencil, Trash2, FileText } from "lucide-react";

const FormManagement = () => {
  const [search, setSearch] = useState("");

  // Dummy Form Data
  const forms = [
    {
      id: 1,
      title: "Employee Registration Form",
      startDate: "05 Jan 2025",
      endDate: "25 Jan 2025",
      documents: ["Aadhar", "Resume", "Photo"],
    },
    {
      id: 2,
      title: "Leave Application Form",
      startDate: "01 Feb 2025",
      endDate: "28 Feb 2025",
      documents: ["Attendance Report"],
    },
    {
      id: 3,
      title: "Asset Allocation Form",
      startDate: "10 Mar 2025",
      endDate: "20 Mar 2025",
      documents: ["ID Card", "Confirmation Letter"],
    },
  ];

  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 text-gray-200 min-h-screen">

      {/* HEADER SECTION */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Form Management
        </h1>

        {/* SEARCH BAR */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search form..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
                bg-[#1b1b1f] text-gray-300 pl-10 pr-4 py-2 rounded-xl 
                outline-none w-64 border border-purple-700/30
                focus:ring-2 focus:ring-purple-500 transition-all
              "
          />
        </div>

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
          Create New Form
        </button>
      </div>

      {/* TABLE SECTION */}
      <div
        className="
          bg-[#121216]/70 p-6 rounded-2xl 
          border border-purple-700/30 backdrop-blur-xl
          shadow-[0_0_25px_rgba(128,0,255,0.25)]
        "
      >
        <h2 className="text-xl font-semibold mb-5">Forms Overview</h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-300">
            <thead className="bg-[#1d1d22] text-gray-400">
              <tr>
                <th className="py-3 px-4 text-left">Form Title</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Required Documents</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredForms.map((form) => (
                <tr
                  key={form.id}
                  className="
                    border-t border-[#2a2a2f] 
                    hover:bg-[#1b1b20] transition
                  "
                >
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <FileText size={18} className="text-purple-400" />
                    {form.title}
                  </td>

                  <td className="py-3 px-4 text-gray-400">{form.startDate}</td>

                  <td className="py-3 px-4 text-gray-400">{form.endDate}</td>

                  {/* REQUIRED DOCUMENTS */}
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {form.documents.map((doc, index) => (
                        <span
                          key={index}
                          className="
                            text-xs px-3 py-1 rounded-lg bg-purple-600/20 
                            text-purple-300 border border-purple-700/30
                          "
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
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

              {filteredForms.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-center text-gray-500 italic"
                  >
                    No forms found
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

export default FormManagement;
