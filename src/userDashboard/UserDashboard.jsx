import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import {
  Home,
  ClipboardList,
  Clock,
  History,
  MessageCircle
} from "lucide-react";

function UserDashboard() {
const options = [
  {
    label: "Dashboard",
    icon: <Home size={18} />,
    path: "/user",
  },
  {
    label: "Form",
    icon: <ClipboardList size={18} />,  // Form section
    path: "/user/form",
  },
  {
    label: "Pending",
    icon: <Clock size={18} />,          // Pending tasks
    path: "/user/pending",
  },
  {
    label: "History",
    icon: <History size={18} />,        // Completed/history
    path: "/user/history",
  },
  {
    label: "Communication",
    icon: <MessageCircle size={18} />,  // Messages
    path: "/user/communication",
  },
];


  return (
    <>
      <section className="min-h-screen bg-[#0b0b0d] text-gray-200 flex">
        <Sidebar options={options} />
        <div className="flex-1 flex-col p-5">
          <Header />
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default UserDashboard
