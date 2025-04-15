import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {Wallet, Bell, Settings, Send , Download, Plus, User, BarChart2, ShoppingCart, LifeBuoy, LogOut, Upload, ArrowRight, Sidebar, QrCode, Check, ArrowLeft} from 'lucide-react';
import Barcode from 'react-barcode';

export default function RequestPayment() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [expirationTime, setExpirationTime] = useState("1hr");
  const [message, setMessage] = useState("");
  const [currentScreen, setCurrentScreen] = useState('request'); 
  const [formData, setFormData] = useState({
    amount: '2,150.54',
    username: 'ashante.suipay',
    narration: '',
    expirationTime: '1hr'
  });
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment request logic here
    if (!formData.amount || !formData.username || !formData.expirationTime || !formData.narration) {
      setMessage("All fields are required.");
      return;
    }
    setMessage(
      `Payment request generated for ${amount} to ${recipient} with expiration ${expiration}.`
    );
  };
  console.log("Payment Request:", { amount, recipient, expirationTime });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleGenerateRequest = () => {
    setCurrentScreen('qrCode');
  };

  const handleAccept = () => {
    setCurrentScreen('confirmation');
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard')
    ;
   
  };
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
                  <Link to='/request'><SidebarItem icon={<LifeBuoy size={20} />} label="Requests" active/></Link>
                  <Link to='/profile'><SidebarItem icon={<User size={20} />} label="Profile"  /></Link>
                  <Link to='/settings'><SidebarItem icon={<Settings size={20} />} label="Settings"  /></Link>
                </nav>
              </div>
              
                <div className="mt-auto p-4">
                  <a href='/'><SidebarItem icon={<LogOut size={20} />} label="Logout" /></a>
                </div>
      </div>
      
      {/* Main Section */}
      <div className="flex-1 flex items-center justify-center">
       
          {currentScreen === 'request' && (
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-center">
                          Request Payment
                    </h2>
                <form
                
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-lg shadow-md w-96">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                       className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                       className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Narration</label>
                    <input
                      type="text"
                      name="narration"
                      value={formData.narration}
                      onChange={handleInputChange}
                       className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required/>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Expiration Time</label>
                    <input
                      type="text"
                      name="expirationTime"
                      value={formData.expirationTime}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                     required/>
                  </div>
                  {message && <p className="text-red-600 mb-4">{message}</p>}
                  <button
                  
                    onClick={handleGenerateRequest}
                    
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  >
                    Generate Request
                  </button>
                </form>
                </div>
                
              )}
              
              {currentScreen === 'qrCode' && (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col items-center p-6 bg-white rounded-md">
                    <div className="bg-gray-50 p-4 rounded-full mb-4">
                      <QrCode className="text-blue-500" size={24} />
                     
                    </div>
                    <h3 className="text-lg font-medium mb-2">Send QR code</h3>
                    <p className="text-sm text-gray-500 mb-6 text-center">Scan QR code below to complete payment</p>
                    
                    <div className="border-2 border-gray-300 rounded-md p-4 mb-6">
                       <Barcode 
                          value="6C4UFMDG" 
                           width={1.5}
                          height={50}
                          format="CODE128"
                          displayValue={false}
                          fontSize={16}
                          margin={10}
                      />
                    </div>
                    
                    <input
                      type="text"
                      value="6C4UFMDG"
                      readOnly
                      className="w-full border rounded-md p-2 mb-4 text-center"
                    />
                    
                    <button
                      onClick={handleAccept}
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              )}
              
              {currentScreen === 'confirmation' && (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col items-center p-6 bg-white rounded-md">
                    <div className="bg-blue-500 p-3 rounded-full mb-4">
                      <Check className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-medium mb-6">Request Sent!</h3>
                    
                    <button
                      onClick={handleBackToDashboard}
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                       Dashboard
                    </button>
                  </div>
                </div>
              )}
            
          
      </div>

      <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <span className="text-xs">{expirationTime}</span>
      </div>
    </div>
  );

  function SidebarItem({ icon, label, active = false }) {
    return (
      <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
        {icon}
        <span>{label}</span>
      </div>
    );
  }
}

