import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { User, Bell, ArrowRight, Upload, BarChart2, ShoppingCart, LifeBuoy, LogOut, Settings } from 'lucide-react';

export default function ProfilePage() {
  const { logout } = useAuth();
  const [profileData, setProfileData] = useState({
    username: 'johndoe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Software Developer',
    location: 'San Francisco, CA'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
<div className="flex h-screen bg-gray-100">
{/* Sidebar */}
<div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-blue-500 font-bold">↗ Suipay</span>
          </div>
          
          <nav className="space-y-4">
           <Link to='/dashboard'> <SidebarItem icon={<BarChart2 size={20} />} label="Dashboard" /></Link>
           <Link to='/qr-payments'><SidebarItem icon={<User size={20} />} label="Qr Payments" /></Link> 
            <Link to='/transactions'><SidebarItem icon={<ShoppingCart size={20} />} label="Transactions" /></Link>
            <Link to='/request'><SidebarItem icon={<LifeBuoy size={20} />} label="Requests" /></Link>
            <Link to='/profile'><SidebarItem icon={<User size={20} />} label="Profile"  active/></Link>
            <Link to='/settings'><SidebarItem icon={<Settings size={20} />} label="Settings"  /></Link>
          </nav>
        </div>
        
        <div className="mt-auto p-4">
            <Link to='/'><SidebarItem icon={<LogOut size={20} />} label="Logout" /></Link>
          </div>
      </div>

{/* Main Content */}
<div className="flex-1 p-8">
  
<div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
        
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-200 overflow-hidden">
            <img 
              src="images/image.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Upload Photo
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input 
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input 
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <input 
              type="text"
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input 
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  
  
 
  
  
</div>
</div>
  )

  // Sidebar Item Component
function SidebarItem({ icon, label, active = false }) {
    return (
      <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
        {icon}
        <span>{label}</span>
      </div>
    );
}
}




