"use client";
import Sidebar from "./components/Slider";
import StatsCard from "./components/StatsCard";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";

export default function Home( ) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 ">
      <Navbar />
        <div className="grid grid-cols-4 gap-4 mt-8 max-lg:grid-cols-2 max-xl:grid-cols-3">
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

