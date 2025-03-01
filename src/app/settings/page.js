"use client";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import ToggleSwitch from "../components/ToggleSwitch";
import { useEffect, useState } from "react";

export default function Settings() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar - Hidden on mobile unless toggled */}
      {/* {!isMobile && <Slider />} */}
     <Slider/>
      <div className="flex-1 p-4 md:p-6 min-h-screen">
        <Navbar />

        <h3 className="text-2xl font-semibold  pt-5 px-2">
          Settings
        </h3>

        {/* Profile Settings */}
        <div className="p-6 md:p-8  shadow rounded-lg mt-4">
          <h1 className="text-black text-lg md:text-xl">Profile Settings</h1>
          <p className="text-gray-500 text-sm pb-5">
            Manage your profile information
          </p>

          <label htmlFor="name" className=" text-sm block">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <label htmlFor="email" className=" text-sm block">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Notifications */}
        <div className="p-6 md:p-8 shadow rounded-lg mt-4">
          <h1 className=" text-lg md:text-xl">Notifications</h1>
          <p className="text-gray-500 text-sm pb-5">
            Manage your notification preferences
          </p>

          {/* Notification Items */}
          <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
            <div className="w-full">
              <h1 className=" text-sm">Email Notifications</h1>
              <p className="text-gray-500 text-sm">
                Receive email notifications about account activity
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0 mt-4">
            <div className="w-full">
              <h1 className=" text-sm">Marketing Emails</h1>
              <p className="text-gray-500 text-sm">
                Receive emails about new features and updates
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end mt-4 gap-2">
          <button className="bg-white text-gray-600 px-4 py-2 rounded w-full sm:w-auto border border-gray-300 hover:bg-gray-200">
            Cancel
          </button>
          <button className="bg-black hover:bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
