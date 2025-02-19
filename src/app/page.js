"use client";
import { useState } from "react";
import { Home, Users, BarChart3, Settings, Menu } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r p-4">
      <h2 className="text-xl font-semibold mb-6 text-black">Admin Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer text-1xl text-black ${
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
