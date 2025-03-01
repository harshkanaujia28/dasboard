import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  { name: "Feb", users: 400 },
  { name: "Mar", users: 1700 },
  { name: "Apr", users: 100 },
  { name: "May", users: 1800 },
  { name: "Jun", users: 100 },
  { name: "Jul", users: 1900 },
];

const Chart = () => {
  return (
    <div className="p-4  shadow rounded-lg border">
      <h3 className="text-lg font-semibold ">User Growth Overview</h3>
      <p className="text-sm text-gray-500">Monthly active users over time</p>
      <ResponsiveContainer width="100%" height={330}>
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
