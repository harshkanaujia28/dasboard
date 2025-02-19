import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex  min-h-screen bg-gray-100">
      <nav className=" font-bold max-h-140 w-60 border-2 border-gray-600 px-3 py-3.5 border-r  ">
        <h2 className="text-black text-2xl pb-3 " >Admin Panel</h2>
        <ul>
          <li className="text-black text-1xl flex gap-2  py-2 px-3"><FaHome className="text-1xl text-black-500 hover:text-blue-700" /> Dasboard</li>
          <li className="text-black text-1xl flex gap-2 py-2 px-3"><HiUserGroup className="text-1xl text-black-500" />Users</li>
          <li className="text-black text-1xl flex gap-2 py-2 px-3"> <FaChartBar className="text-1xl hover:text-black-400" />Analytics</li>
          <li className="text-black text-1xl flex gap-2 py-2 px-3"><MdSettings className="text-1xl hover:text-black-400" />Settings</li>
        </ul>
      </nav>
    </main>
  );
}
