"use client";
import Sidebar from "./components/Slider";
import StatsCard from "./components/StatsCard";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";

export default function Home( ) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  useEffect(() => {
     if(localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       setIsDarkMode(true)
     }
  
    return () => {
      setIsDarkMode(false)
    }
  },[])
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]); 
  
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-6 ">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className="grid grid-cols-4 gap-4 mt-8 max-lg:grid-cols-2 max-xl:grid-cols-3 -">
          <StatsCard title="Total Users" value="12,345" />
          <StatsCard title="Active Users" value="8,234" />
          <StatsCard title="Revenue" value="$45,678" />
          <StatsCard title="Growth" value="+12.3%" />
        </div>
        <div className="mt-6 md:mt-10">
          <Chart />
        </div>
      </div>
    </div>
  );
}

