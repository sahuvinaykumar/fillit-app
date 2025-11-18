import { 
  Users, FileText, CheckCircle, Clock, Calendar, 
  UserPlus, Activity 
} from "lucide-react";

const AdminHome = () => {
  const recentUsers = [
    { name: "Amit Sharma", email: "amit@gmail.com" },
    { name: "Riya Patel", email: "riya@gmail.com" },
    { name: "Deepak Verma", email: "deepak@gmail.com" },
  ];

  const recentEmployees = [
    { name: "Karan Mehta", joined: "2 days ago" },
    { name: "Neha Singh", joined: "4 days ago" },
  ];

  const activeEmployees = [
    { name: "Harsh Gupta", role: "Form Handler" },
    { name: "Sneha Rao", role: "Verification" },
  ];

  const cardStyles = 
    "p-5 rounded-2xl bg-[#121216] border border-purple-800/20 shadow-[0_0_25px_rgba(128,0,255,0.15)] flex items-center gap-4";

  return (
    <div className="p-4 md:p-6 text-gray-200">

      {/* ---------- TOP CARDS ---------- */}
      <div className="
        grid
        grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-5
        gap-4 md:gap-6 mb-10
      ">
        
        {/* Total Users */}
        <div className={cardStyles}>
          <Users size={34} className="text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">Total Users</p>
            <h2 className="text-xl font-semibold">1,240</h2>
          </div>
        </div>

        {/* Form Requests */}
        <div className={cardStyles}>
          <FileText size={34} className="text-indigo-400" />
          <div>
            <p className="text-sm text-gray-400">Form Requests</p>
            <h2 className="text-xl font-semibold">890</h2>
          </div>
        </div>

        {/* Completed */}
        <div className={cardStyles}>
          <CheckCircle size={34} className="text-green-400" />
          <div>
            <p className="text-sm text-gray-400">Completed</p>
            <h2 className="text-xl font-semibold">750</h2>
          </div>
        </div>

        {/* Pending */}
        <div className={cardStyles}>
          <Clock size={34} className="text-yellow-400" />
          <div>
            <p className="text-sm text-gray-400">Pending</p>
            <h2 className="text-xl font-semibold">140</h2>
          </div>
        </div>

        {/* Today's Requests */}
        <div className={cardStyles}>
          <Calendar size={34} className="text-pink-400" />
          <div>
            <p className="text-sm text-gray-400">Today’s Requests</p>
            <h2 className="text-xl font-semibold">26</h2>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM SECTIONS ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Users */}
        <div className="
          bg-[#121216] p-6 rounded-2xl 
          border border-purple-900/20 
          shadow-[0_0_25px_rgba(128,0,255,0.15)]
        ">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="text-purple-400" /> Recent Users
          </h3>

          <div className="space-y-4">
            {recentUsers.map((user, index) => (
              <div 
                key={index}
                className="
                  p-3 bg-[#1b1b1f] rounded-xl 
                  border border-purple-800/20
                "
              >
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Joined Employees */}
        <div className="
          bg-[#121216] p-6 rounded-2xl 
          border border-purple-900/20 
          shadow-[0_0_25px_rgba(128,0,255,0.15)]
        ">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <UserPlus className="text-green-400" /> Recently Joined Employees
          </h3>

          <div className="space-y-4">
            {recentEmployees.map((emp, index) => (
              <div 
                key={index}
                className="
                  p-3 bg-[#1b1b1f] rounded-xl 
                  border border-purple-800/20
                "
              >
                <p className="font-medium">{emp.name}</p>
                <p className="text-sm text-gray-400">{emp.joined}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Employees */}
        <div className="
          bg-[#121216] p-6 rounded-2xl 
          border border-purple-900/20 
          shadow-[0_0_25px_rgba(128,0,255,0.15)]
        ">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Activity className="text-indigo-400" /> Active Employees
          </h3>

          <div className="space-y-4">
            {activeEmployees.map((emp, index) => (
              <div 
                key={index}
                className="
                  p-3 bg-[#1b1b1f] rounded-xl 
                  border border-purple-800/20
                "
              >
                <p className="font-medium">{emp.name}</p>
                <p className="text-sm text-gray-400">{emp.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
