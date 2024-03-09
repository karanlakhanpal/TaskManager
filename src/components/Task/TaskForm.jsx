import React from 'react'

const TaskForm = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>

      {/* Task Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">Task Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter task title"
        />
      </div>

      {/* Due Date */}
      <div className="mb-4">
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-600">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-600">Priority</label>
        <select
          id="priority"
          name="priority"
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter task description"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Task
        </button>
      </div>
    </div>
  )
}

export default TaskForm