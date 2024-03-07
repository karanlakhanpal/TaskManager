import React from "react";
import image from "../../assets/Person.png";

const Dashboard = () => {
  return (
    <div className="p-4 h-screen bg-[#2980B9]">
      {/* Welcome Message */}
      <div className=" bg-white h-20 rounded-md mb-4 p-4 flex flex-row gap-x-3 justify-end">
        <div className="flex  items-center">
          <h1 className="text-xl font-bold">Welcome, {"Karan kumar"}</h1>
        </div>
        <div className="flex items-center border border-darkgray rounded-md">
          <img src={image} alt="user logo" height={70} width={70} />
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Task Overview</h2>
        {/* Example Statistics */}
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600">Total Tasks</p>
            <p className="text-2xl font-bold">25</p>
          </div>
          <div>
            <p className="text-gray-600">Completed Tasks</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div>
            <p className="text-gray-600">Pending Tasks</p>
            <p className="text-2xl font-bold">13</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <button className="bg-white absolute bottom-5 right-5 text-black px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Add New Task +
        </button>
        <a
          href="/task-list"
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300"
        >
          View Task List
        </a>
      </div>
      {/* Recent Tasks */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Tasks</h2>
        <ul>
          <li className="flex items-center space-x-2">
            <span className="text-gray-600">{/* <HiOutlineCalendar /> */}</span>
            <span className="text-gray-600">Feb 15, 2024</span>
            <span className="text-gray-800">Task 1</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gray-600">{/* <HiOutlineCalendar /> */}</span>
            <span className="text-gray-600">Feb 14, 2024</span>
            <span className="text-gray-800">Task 2</span>
          </li>
          {/* Add more recent tasks as needed */}
        </ul>
      </div>

      {/* Mini Calendar */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Mini Calendar</h2>
        {/* Mini calendar component or representation */}
      </div>
    </div>
  );
};

export default Dashboard;
