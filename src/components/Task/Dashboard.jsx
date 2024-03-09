import React, { useState } from "react";
import image from "../../assets/karan.jpg";
import Task from "../../Services/Task";
import TaskForm from "./TaskForm";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-4 min-h-screen bg-[#2980B9]">
      {/* Welcome Message */}
      <div className=" bg-white h-20 rounded-md mb-4 p-5 flex flex-row gap-x-3 justify-end">
        <div className="flex  items-center">
          <h1 className="text-xl font-bold">Welcome, {"Karan kumar"}</h1>
        </div>
        <div className="flex items-center">
          <img
            src={image}
            alt="user logo"
            height={60}
            width={60}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex border border-white">
        <div className="flex-[1] border border-white">
          <div className="flex-[1]">
            <button className="bg-white flex-[1] text-black px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              All Tasks
            </button>
          </div>
          <div className="flex-[1]">
            <button className="bg-white flex-[1] text-black px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Active Tasks
            </button>
          </div>
          <div className="flex-[1]">
            <button className="bg-white flex-[1] text-black px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Completed Tasks
            </button>
          </div>
        </div>
        <div className="flex-[3] border border-white">
          {/* Overview Section */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md mb-3">
            <h2 className="text-xl font-bold mb-2">Task Overview</h2>
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
          </div> */}
          {/* Quick Actions */}
          <div className="flex gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Add Task +
            </button>
            <button
              onClick={() => setShow(!show)}
              className="bg-white rounded-xl text-black p-2 px-8 text-lg hover:bg-blue-600 hover:text-white border border-white focus:outline-none focus:ring focus:border-blue-300"
            >
              View Task List
            </button>
          </div>
          {showForm && <TaskForm />}
          {show && (
            <>
              <Task
                task={{
                  title: "Add logo in jaewoo app",
                  dueDate: "20-03-2024",
                  priority: "high",
                  status: "Completed",
                  assignee: "Karan Sharma",
                  description: "Most important task.",
                }}
              />
              <Task
                task={{
                  title: "Add Login page in KSW app",
                  dueDate: "24-03-2024",
                  priority: "low",
                  status: "Completed",
                  assignee: "Mohit Sharma",
                  description: "Important task.",
                }}
              />
              <Task
                task={{
                  title: "Add Customer app",
                  dueDate: "20-03-2024",
                  priority: "high",
                  status: "Completed",
                  assignee: "Karan Sharma",
                  description: "Most important task.",
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
