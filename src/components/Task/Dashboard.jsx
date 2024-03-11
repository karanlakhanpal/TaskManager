import React, { useState } from "react";
import image from "../../assets/karan.jpg";
import ReactModal from "react-modal";
import Task from "../../Services/Task";
import TaskForm from "./TaskForm";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#2980B9]">
      <div className="bg-white h-20 p-5 flex flex-row gap-x-3 justify-between">
        <div className="flex  items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-row gap-x-3">
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
      </div>

      {/* Tabs */}
      <div className="flex p-2">
        <button className="flex-[1] border border-white h-12 text-white hover:bg-white hover:text-black">
          All Tasks
        </button>
        <button className="flex-[1] border border-white h-12 text-white hover:bg-white hover:text-black">
          Active Tasks
        </button>
        <button className="flex-[1] border border-white h-12 text-white hover:bg-white hover:text-black">
          Completed Tasks
        </button>
        <button className="flex-[1] border border-white h-12 text-white hover:bg-white hover:text-black">
          Due Tasks
        </button>
      </div>

      <button
        onClick={() => setShow(true)}
        className="bg-white border border-white absolute bottom-6 right-6 text-lg text-black px-6 py-2 rounded-xl hover:text-white hover:bg-transparent hover:border"
      >
        Add Task +
      </button>
      <ReactModal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        contentLabel="Example Modal"
      >
        <button className="bg-blue-500 text-white p-3 rounded-2xl" onClick={() => setShow(false)}>Close</button>
        <TaskForm />
      </ReactModal>
    </div>
  );
};

export default Dashboard;
