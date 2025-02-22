"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, Users, BarChart3, Settings } from "lucide-react";
import { useSidebar } from "@/Context/SliderContext";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const { isOpen } = useSidebar();

    const menuItems = [
        { name: "Dashboard", icon: <Home size={16} />, path: "/" },
        { name: "Users", icon: <Users size={16} />, path: "/users" },
        { name: "Analytics", icon: <BarChart3 size={16} />, path: "/analytics" },
        { name: "Settings", icon: <Settings size={16} />, path: "/settings" },
    ];

    return (
        <div
            className={`${
                isOpen ? "w-64" : "w-0"
            } h-screen bg-white border-r transition-all duration-300 overflow-hidden`}
        >
            <h2 className="text-xl font-semibold mb-6 text-black mt-3 px-3">
                Admin Panel
            </h2>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.name} onClick={() => setActive(item.name)}>
                        <Link href={item.path} className={`flex items-center gap-2 p-3 mr-2 rounded-lg cursor-pointer text-sm text-black px-5 ${
                            active === item.name
                                ? "bg-gray-100 text-gray-900 font-medium"
                                : "hover:bg-gray-100"
                        }`}>
                            {item.icon}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
