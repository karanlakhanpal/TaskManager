import React, { useState } from "react";
import image from "../../assets/karan.jpg";
import ReactModal from "react-modal";
import Task from "../../Services/Task";
import TaskForm from "./TaskForm";
import {
  MdLogout,
  MdTask,
  MdList,
  MdCheckCircle,
  MdPending,
} from "react-icons/md";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    // <div className="flex flex-col bg-white">
    //   <div class="bg-[#2980b9] text-white text-4xl py-8 px-12 m-1">
    //     Dashboard
    //   </div>
    //   {/* Tabs */}
    //   <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap p-2 gap-2">
    //     <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
    //       <MdTask color="white" size={25} />
    //       <p className="text-white mt-1">All Tasks</p>
    //       <p className="text-white sm:text-xl">0</p>
    //     </div>
    //     <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
    //       <MdList color="white" size={25} />
    //       <p className="text-white mt-1">Active Tasks</p>
    //       <p className="text-white sm:text-xl">0</p>
    //     </div>
    //     <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
    //       <MdCheckCircle color="white" size={25} />
    //       <p className="text-white mt-1">Completed Tasks</p>
    //       <p className="text-white sm:text-xl">0</p>
    //     </div>
    //     <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
    //       <MdPending color="white" size={25} />
    //       <p className="text-white mt-1">Due Tasks</p>
    //       <p className="text-white sm:text-xl">0</p>
    //     </div>
    //   </div>
    //   <button
    //     onClick={() => setShow(true)}
    //     className="bg-[#2980B9] absolute bottom-3 right-3 text-lg text-white px-6 py-2 rounded-xl"
    //   >
    //     +
    //   </button>
    //   <ReactModal
    //     isOpen={show}
    //     onRequestClose={() => setShow(false)}
    //     contentLabel="Example Modal"
    //   >
    //     <button
    //       className="bg-blue-500 text-white p-3 rounded-2xl"
    //       onClick={() => setShow(false)}
    //     >
    //       Close
    //     </button>
    //     <TaskForm />
    //   </ReactModal>
    // </div>
    <div class="container mx-auto p-4">
      {/* Header Section */}
      <div class="text-2xl font-bold mb-4">Dashboard</div>

      {/* Welcome Message */}
      <div class="mb-4">Welcome, <span class="font-bold">[Username]</span>!</div>

      {/* Task Overview */}
      <div class="flex flex-wrap mb-4">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <div class="bg-gray-200 p-4 rounded">
            Total Tasks: <span class="font-bold">[Number]</span>
          </div>
        </div>
        {/* Add more task overview boxes for Completed, Active, and Pending tasks */}
      </div>

      {/* Quick Actions  */}
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Add New Task
          </button>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
            View All Tasks
          </button>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
            Filter Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
