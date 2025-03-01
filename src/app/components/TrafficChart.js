"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", users: 1500, visits: 5000 },
  { month: "Feb", users: 1700, visits: 5300 },
  { month: "Mar", users: 1800, visits: 6000 },
  { month: "Apr", users: 2000, visits: 6500 },
  { month: "May", users: 2100, visits: 7000 },
  { month: "Jun", users: 2200, visits: 7500 },
];

const TrafficChart = () => {
  return (
    <div className="p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold ">Traffic Overview</h2>
      <p className="text-sm text-gray-500">Monthly website traffic</p>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#0F172A" name="Users" />
          <Bar dataKey="visits" fill="#9CA3AF" name="Visits" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;
