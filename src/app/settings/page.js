import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import ToggleSwitch from "../components/ToggleSwitch";

export default function settings() {
  return (
    <div className="flex">
      <Slider />
      <div className="flex-1 p-6 bg-gray-100 ">
        <Navbar />
        <h3 className="text-2xl font-semibold text-black  pt-7 px-2 py-3">
          {" "}
          Settings
        </h3>
        <div className="p-8  bg-white shadow rounded-lg">
          <h1 className="text-black">Profile Settings</h1>
          <p className="text-gray-500 text-sm pb-5">
            Manage your profile information
          </p>
          <label htmlFor="name" className="text-black text-sm">
            {" "}
            Name
          </label>
          <input
            type="text"
            placeholder="name"
            className="border border-gray-300 rounded-md p-2 w-full mt-2 mb-4"
          />
          <label htmlFor="email" className="text-black text-sm">
            {" "}
            Email
          </label>
          <input
            type="text"
            placeholder="eamil"
            className="border border-gray-300 rounded-md p-2 w-full mt-2"
          />
        </div>
        <div className="p-8 mt-4  bg-white shadow rounded-lg">
          <h1 className="text-black">Notifications</h1>
          <p className="text-gray-500 text-sm pb-5">
            Manage your notification preferences
          </p>
          <div className="flex justify-between">
            <div>
              <h1 className="text-black text-sm ">Email Notifications</h1>
              <p className="text-gray-500 text-sm pb-5">
                Receive email notifications about account activity
              </p>
            </div>
            <div>
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-black text-sm ">Marketing Emails</h1>
              <p className="text-gray-500 text-sm pb-5">
                Receive emails about new features and updates
              </p>
            </div>
            <div>
              <ToggleSwitch />
            </div>
          </div>
         
        </div>
        <div className="flex justify-end mt-4 gap-2">
            <button className="bg-white text-gray-600 px-4 py-2 rounded ml-2">Cancel</button>
            <button className="bg-black hover:bg-gray-500 text-white px-4 py-2 rounded">Save changes</button>
          </div>
      </div>
    </div>
  );
}
