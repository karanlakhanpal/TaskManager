import React from 'react'

const Settings = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Settings Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-6 text-center text-white">
                        <h1 className="text-3xl font-semibold">Settings</h1>
                    </div>

                    {/* Settings Content */}
                    <div className="p-4">
                        {/* Account Settings */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
                            <div className="border border-gray-200 rounded p-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" />
                                {/* Add more account settings fields as needed */}
                            </div>
                        </div>

                        {/* Appearance Settings */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Appearance Settings</h2>
                            <div className="border border-gray-200 rounded p-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">Theme</label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="theme">
                                    <option>Light</option>
                                    <option>Dark</option>
                                    <option>Auto</option>
                                </select>
                                {/* Add more appearance settings options as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings