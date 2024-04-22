import React from 'react'

const Profile = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 px-4 py-6 text-center text-white">
                        <h1 className="text-3xl font-semibold">John Doe</h1>
                        <p className="text-lg">Software Engineer</p>
                    </div>

                    {/* Profile Content */}
                    <div className="p-4">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            <img className="h-40 w-40 rounded-full object-cover border-4 border-white shadow-lg" src="https://via.placeholder.com/150" alt="Profile Picture" />
                        </div>

                        {/* Profile Details */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                            <p className="text-gray-600"><i className="fas fa-envelope mr-2"></i> johndoe@example.com</p>
                            <p className="text-gray-600"><i className="fas fa-phone-alt mr-2"></i> +1234567890</p>
                        </div>

                        {/* Profile Bio */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Bio</h2>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non lectus vel turpis faucibus suscipit. Aliquam erat volutpat. Integer eget feugiat magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile