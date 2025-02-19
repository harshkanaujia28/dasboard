import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  { name: "Feb", users: 400 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 1200 },
  { name: "May", users: 1500 },
  { name: "Jun", users: 1700 },
  { name: "Jul", users: 1900 },
];

const Chart = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold">User Growth Overview</h3>
      <p className="text-sm text-gray-500">Monthly active users over time</p>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#1E3A8A" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
