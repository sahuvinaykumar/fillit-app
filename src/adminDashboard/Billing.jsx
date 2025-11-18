import { useState } from "react";
import { Download, IndianRupee, Search } from "lucide-react";

const Billing = () => {
  const [search, setSearch] = useState("");

  // Dummy billing data — replace with API results later
  const invoices = [
    {
      id: "INV-1001",
      user: "Amit Sharma",
      amount: 499,
      date: "12 Jan 2025",
      method: "UPI",
      status: "Paid",
    },
    {
      id: "INV-1002",
      user: "Riya Patel",
      amount: 299,
      date: "14 Jan 2025",
      method: "Credit Card",
      status: "Pending",
    },
    {
      id: "INV-1003",
      user: "Deepak Verma",
      amount: 799,
      date: "10 Jan 2025",
      method: "Wallet",
      status: "Failed",
    },
    {
      id: "INV-1004",
      user: "Karan Patel",
      amount: 1499,
      date: "20 Jan 2025",
      method: "Debit Card",
      status: "Paid",
    },
  ];

  const filtered = invoices.filter((inv) =>
    inv.user.toLowerCase().includes(search.toLowerCase()) ||
    inv.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8">

      {/* HEADER + SEARCH */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Billing & Invoices</h1>

        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search invoice or user..."
            className="bg-[#1a1a1f] text-gray-300 pl-10 pr-4 py-2 rounded-xl outline-none w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* INVOICE TABLE */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Invoice Records</h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse bg-[#121216] text-gray-300">
            <thead className="bg-[#1d1d22] text-gray-400">
              <tr>
                <th className="py-3 px-4 text-left">Invoice ID</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Payment Method</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Download</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-t border-[#2a2a2f] hover:bg-[#1b1b20] transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-200">{inv.id}</td>
                  <td className="py-3 px-4">{inv.user}</td>
                  <td className="py-3 px-4">{inv.date}</td>

                  {/* Amount */}
                  <td className="py-3 px-4 flex items-center gap-1 text-purple-300">
                    <IndianRupee size={14} />
                    {inv.amount}
                  </td>

                  {/* Method */}
                  <td className="py-3 px-4 text-gray-400">{inv.method}</td>

                  {/* Status Badge */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs ${
                        inv.status === "Paid"
                          ? "bg-green-600/20 text-green-400"
                          : inv.status === "Pending"
                          ? "bg-yellow-600/20 text-yellow-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>

                  {/* Download Button */}
                  <td className="py-3 px-4">
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
                      <Download size={18} />
                      <span className="text-sm">Invoice</span>
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="py-4 text-center text-gray-500 italic"
                  >
                    No invoices found
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

export default Billing;
