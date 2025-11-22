import React, { useState } from "react";
import { Home, ClipboardList, Users, Shield, Badge, Receipt, User, Settings, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AdminHome from "./AdminHome";
import AllUsers from "./AllUsers";
import { Outlet } from "react-router-dom";


const AdminDashboard = () => {
    const options = [
        {
            label: "Dashboard",
            icon: <Home size={18} />,
            path:"/admin"
        },
        {
            label: "Users",
            icon: <Users size={18} />,
            path:"/admin/users"
        },
        {
            label: "Sub Admin",
            icon: <Shield size={18} />,
            path:"/admin/subAdmin"
        },
        {
            label: "Employee",
            icon: <Badge size={18} />,
            path: "/admin/employee"
        },
        {
            label: "Form Management",
            icon: <ClipboardList size={18} />,
            path: "/admin/formManagement"
        },
        {
            label: "Billing",
            icon: <Receipt size={18} />,
            path: "/admin/billing"
        },
    ];
    return (
        <section className="min-h-screen bg-[#0b0b0d] text-gray-200 flex">
            <Sidebar options={options} />
            <div className="flex-1 flex-col p-5">
                <Header />
                <Outlet/>
            </div>
        </section>
    );
};


export default AdminDashboard;