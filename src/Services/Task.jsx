import React from "react";

const Task = ({ task }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-md mt-2 mb-4">
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <div className="flex justify-between">
        <p className="text-gray-700">
          <strong>Assigned To:</strong> {task.assignee}
        </p>
        <p className="text-gray-700">
          <strong>Due Date:</strong> {task.dueDate}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">
          <strong>Priority:</strong> {task.priority}
        </p>
        <p
          className={`text-${
            task.status === "completed" ? "green" : "red"
          }-700`}
        >
          <strong>Status:</strong> {task.status}
        </p>
      </div>
      <p className="text-gray-700">
        <strong>Description:</strong> {task.description}
      </p>

      {/* Add buttons or icons for task actions (e.g., edit, complete, delete) */}
      <div className="flex space-x-2 mt-4">
        {/* Example: Edit button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit
        </button>
        {/* Example: Mark as Complete button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Mark as Complete
        </button>
        {/* Example: Delete button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
