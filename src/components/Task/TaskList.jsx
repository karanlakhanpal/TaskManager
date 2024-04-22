import React from 'react'

const TaskList = () => {
    return (
        <div class="container mx-auto p-4">
            {/* Task List  */}
            <div class="mb-4">
                <h2 class="text-xl font-bold mb-2">Task List</h2>
                {/* Task items go here  */}
                <div class="border border-gray-300 rounded p-4">
                    {/* Example task item  */}
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex-1">
                            <h3 class="font-bold">Task Name</h3>
                            <p class="text-gray-600">Due Date: [Due Date]</p>
                            <p class="text-gray-600">Priority: [Priority]</p>
                            {/* Additional task details  */}
                        </div>
                        <div class="flex-shrink-0 ml-4">
                            {/* Task actions buttons/icons  */}
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                        </div>
                    </div>
                    {/* Add more task items as needed  */}
                </div>
            </div>

            {/* Task Creation Form  */}
            <div class="mb-4">
                <h2 class="text-xl font-bold mb-2">Create New Task</h2>
                <form>
                    {/* Task form fields  */}
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="taskName">Task Name</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskName" type="text" placeholder="Enter task name" />
                    </div>
                    {/* Additional form fields (due date, priority, etc.)  */}
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default TaskList