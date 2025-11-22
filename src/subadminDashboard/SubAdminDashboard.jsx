import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import {
    Home,
    Users,
    Shield,
    Badge,
    ClipboardList,
    Receipt,
    Inbox,
    Users2,
    BarChart3,
    FileCheck,
    ListTree,
    MessageSquare
} from "lucide-react";

function SubAdminDashboard() {

    const options = [
        {
            label: "Dashboard",
            icon: <Home size={18} />,    
            path: "/subAdmin"
        },
        {
            label: "Requests",
            icon: <Inbox size={18} />,       // Incoming requests → Inbox is best
            path: "/subAdmin/requests"
        },
        {
            label: "Teams",
            icon: <Users2 size={18} />,      // Multiple users → team icon
            path: "/subAdmin/teams"
        },
        {
            label: "Employee Workload",
            icon: <BarChart3 size={18} />,   // Workload analytics
            path: "/subAdmin/workload"
        },
        {
            label: "Assign Form",
            icon: <FileCheck size={18} />,   // Form + assigning → FileCheck
            path: "/subAdmin/assign-form"
        },
        {
            label: "Request Tracking",
            icon: <ListTree size={18} />,    // Stage-wise tracking → tree/flow icon
            path: "/subAdmin/request-tracking"
        },
        {
            label: "Communication",
            icon: <MessageSquare size={18} />, // Message/chat icon for communication
            path: "/subAdmin/communication"
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

export default SubAdminDashboard
