import React, { useState } from "react";
import image from "../../assets/karan.jpg";
import ReactModal from "react-modal";
import Task from "../../Services/Task";
import TaskForm from "./TaskForm";
import { MdLogout } from "react-icons/md";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Tabs */}
      <div className="sm:flex sm:flex-row sm:flex-wrap p-2 gap-2">
        <div className="w-full sm:w-[49.5%] bg-[#2980B9] h-14 p-2 rounded">
          <p className="text-white">All Tasks</p>
          <p className="text-white">0</p>
        </div>
        <div className="w-full sm:w-[49.5%] bg-[#2980B9] h-14 p-2 rounded">
          <p className="text-white">Active Tasks</p>
          <p className="text-white">0</p>
        </div>
        <div className="w-full sm:w-[49.5%] bg-[#2980B9] h-14 p-2 rounded">
          <p className="text-white">Completed Tasks</p>
          <p className="text-white">0</p>
        </div>
        <div className="w-full sm:w-[49.5%] bg-[#2980B9] h-14 p-2 rounded">
          <p className="text-white">Due Tasks</p>
          <p className="text-white">0</p>
        </div>
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
        <button
          className="bg-blue-500 text-white p-3 rounded-2xl"
          onClick={() => setShow(false)}
        >
          Close
        </button>
        <TaskForm />
      </ReactModal>
    </div>
  );
};

export default Dashboard;
