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
    <div className="flex flex-col bg-white">
      {/* Tabs */}
      <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap p-2 gap-2">
        <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
          <MdTask color="white" size={25} />
          <p className="text-white mt-1">All Tasks</p>
          <p className="text-white sm:text-xl">0</p>
        </div>
        <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
          <MdList color="white" size={25} />
          <p className="text-white mt-1">Active Tasks</p>
          <p className="text-white sm:text-xl">0</p>
        </div>
        <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
          <MdCheckCircle color="white" size={25} />
          <p className="text-white mt-1">Completed Tasks</p>
          <p className="text-white sm:text-xl">0</p>
        </div>
        <div className="w-full sm:w-[49.4%] bg-[#2980B9] p-3 h-auto rounded-md">
          <MdPending color="white" size={25} />
          <p className="text-white mt-1">Due Tasks</p>
          <p className="text-white sm:text-xl">0</p>
        </div>
      </div>
      <button
        onClick={() => setShow(true)}
        className="bg-[#2980B9] absolute bottom-3 right-3 text-lg text-white px-6 py-2 rounded-xl"
      >
        +
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
