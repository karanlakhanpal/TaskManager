import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4 h-screen bg-blue-500">
      {/* Welcome Message */}
      <div className=" bg-white h-16 rounded-md mb-4 p-4">
        <h1 className="text-2xl font-bold">Welcome, {"Karan Sharma"}!</h1>
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
    </div>
  );
};

export default Dashboard;
