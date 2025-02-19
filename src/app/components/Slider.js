"use client";
import { useState } from "react";
import { Home, Users, BarChart3, Settings, Menu } from "lucide-react";
import { useSidebar } from "@/Context/SliderContext";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const { isOpen } = useSidebar();

  const menuItems = [
    { name: "Dashboard", icon: <Home size={16} /> },
    { name: "Users", icon: <Users size={16} /> },
    { name: "Analytics", icon: <BarChart3 size={16} /> },
    { name: "Settings", icon: <Settings size={16} /> },
  ];

  return (
    <div  className={`${
        isOpen ? "w-64" : "w-0"
      } h-screen bg-white border-r transition-all duration-300 overflow-hidden`}
    >
      <h2 className="text-xl font-semibold mb-6 text-black mt-3 px-3">Admin Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-2 p-3 mr-2 rounded-lg cursor-point text-sm
                 text-black px-5 ${
              active === item.name ? "bg-gray-100 text-gray-900 font-medium" : "hover:bg-gray-100"
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
