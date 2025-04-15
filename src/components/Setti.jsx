import { useState } from 'react';
import { User, Bell, ArrowRight, Upload, BarChart2, ShoppingCart, LifeBuoy, LogOut, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Setti() {
  const [profileName, setProfileName] = useState('CryptoWiz');
  const [profileRole, setProfileRole] = useState('User');
  const [socialLink, setSocialLink] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);

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
            <Link to='/request'><SidebarItem icon={<LifeBuoy size={20} />} label="Support" /></Link>
            <Link to='/profile'><SidebarItem icon={<User size={20} />} label="Profile"  /></Link>
            <Link to='/settings'><SidebarItem icon={<Settings size={20} />} label="Settings" active /></Link>
          </nav>
        </div>
        
       
        <div className="mt-auto p-4">
          <a href='/'><SidebarItem icon={<LogOut size={20} />} label="Logout" /></a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-end gap-4 mb-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-500 rounded-full">
            <User size={16} />
            <span>@CryptoWiz</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
            <Bell size={16} />
          </button>
        </div>
        
        {/* Profile Content */}
        <div>
          <h1 className="text-2xl font-semibold mb-6">Profile</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex gap-8">
              {/* Profile Picture */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 rounded-lg overflow-hidden bg-blue-500">
                  <img 
                    src="/images/image.png" 
                    alt="Profile avatar - anime character with white hair and sunglasses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center gap-2 w-full py-3 border border-gray-300 text-gray-500 rounded-lg">
                  <Upload size={16} className="mx-3" />
                  <span>Upload Avatar</span>
                </button>
              </div>
              
              {/* Profile Form */}
              <div className="flex-1 space-y-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-500 mb-2">Role</label>
                  <input
                    type="text"
                    value={profileRole}
                    onChange={(e) => setProfileRole(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-500 mb-2">Social Link</label>
                  <input
                    type="text"
                    value={socialLink}
                    onChange={(e) => setSocialLink(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-500">Private Profile</label>
                    <button 
                      className={`w-12 h-6 rounded-full flex items-center ${isPrivate ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'}`}
                      onClick={() => setIsPrivate(!isPrivate)}
                    >
                      <span className="w-4 h-4 bg-white rounded-full mx-1"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2 bg-blue-500 text-white rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

