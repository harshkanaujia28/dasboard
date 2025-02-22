import Navbar from "../components/Navbar"
import Sidebar from "../components/Slider"

export default function users () {
   const userdata=[
    {username: "John Doe", email:"john@example.com", role:"admin", status:"active"},
    {username: "Jane Smith", email:"jane@example.com", role:"User", status:"active"},
    {username: "Mike Johnson", email:"Mike Johnson@example.com", role:"User", status:"active"},
    {username: "Harsh Kumar", email:"harsh@example.com", role:"admin", status:"active"}
   ]    
    return (
        <div className="flex">
          <Sidebar/>
          <div className="flex-1 p-6 bg-gray-100 ">
          <Navbar/>
          <h3 className="text-2xl font-semibold text-black pt-9 px-2"> Users</h3>
          <table className="min-w-full border border-gray-200 rounded-lg shadow-md text-sm" >
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-700">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user, index) => (
            <tr key={index} className="border-t text-gray-500">
              <td className="px-6 py-4 font-semibold text-gray-500 ">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>

        </div>
    )
}
