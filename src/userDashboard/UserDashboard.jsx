import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import {
  Home,
  ClipboardList,
  CheckCircle,
  Clock,
  Inbox,
  FileText,
  MessageCircle,
  BarChart3,
  UserCheck
} from "lucide-react";

function UserDashboard() {
    const options = [
    {
      label: "Dashboard",
      icon: <Home size={18} />,
      path: "/emp",
    },
    {
      label: "Request Inbox",
      icon: <Inbox size={18} />,
      path: "/emp/requests",
    },
    {
      label: "Pending",
      icon: <Clock size={18} />,
      path: "/emp/pending",
    },
    {
      label: "Completed Work",
      icon: <CheckCircle size={18} />,
      path: "/emp/completed",
    },
    {
      label: "Communication",
      icon: <MessageCircle size={18} />,
      path: "/emp/communication",
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
