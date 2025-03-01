"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, BarChart3, Settings, X } from "lucide-react";
import { useSidebar } from "@/Context/SliderContext";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const { isOpen, setIsOpen } = useSidebar();
    const [isMobile, setIsMobile] = useState(false);

    // Detect Mobile View
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        { name: "Dashboard", icon: <Home size={16} />, path: "/" },
        { name: "Users", icon: <Users size={16} />, path: "/users" },
        { name: "Analytics", icon: <BarChart3 size={16} />, path: "/analytics" },
        { name: "Settings", icon: <Settings size={16} />, path: "/settings" },
    ];

    return (
        <div
            className={`h-screen  border-r transition-all duration-300 overflow-hidden
            ${isMobile ? (isOpen ? "w-64" : "w-0") : "w-64"} 
            fixed md:relative`}
        >
            <div className="flex justify-between items-center px-3 py-3">
                <h2 className="text-xl font-semibold text-black">Admin Panel</h2>
                {/* Show close icon only on mobile */}
                {isMobile && isOpen && (
                    <button onClick={() => setIsOpen(false)} className="text-gray-600">
                        <X size={20} />
                    </button>
                )}
            </div>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.name} onClick={() => setActive(item.name)}>
                        <Link
                            href={item.path}
                            className={`flex items-center gap-2 p-3 mr-2 rounded-lg cursor-pointer text-sm  px-5 ${
                                active === item.name
                                    ? "bg-gray-100 text-gray-900 font-medium"
                                    : "hover:bg-gray-100 mt-1 "
                            }`}
                        >
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
