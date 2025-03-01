"use client";
import { useSidebar } from "@/Context/SliderContext";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { Sun, Moon } from "lucide-react";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const { setIsOpen } = useSidebar();
  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 border-b ">
      {/* Left: Menu Icon */}
      <button  onClick={() => setIsOpen(prev => !prev)} className="text-gray-600 ">
        <FiMenu size={20} />
      </button>

      {/* Middle: Empty Space (for alignment) */}
      <div className="flex-1"></div>

      {/* Right: Settings Icon */}
      <button  onClick={() => setIsDarkMode(prev => !prev)} className="text-gray-600 hover:text-gray-900">
       {isDarkMode ? <Sun size={20} /> : <Moon size={20} />} 
      </button>
    </nav>
  );
};

export default Navbar;
