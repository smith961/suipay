import React, { useState} from 'react'
import {Wallet, Bell, Settings, Send , Download, Plus, User, BarChart2, ShoppingCart, LifeBuoy, LogOut, Upload, ArrowRight, Sidebar} from 'lucide-react';
import { LineChart, BarChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useAccounts, useCurrentAccount, useCurrentWallet } from '@mysten/dapp-kit';

import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';



function Dashboard() {
  const { logout } = useAuth();
  const accounts = useAccounts();
  const [balance, setBalance] = useState(5000);
  
  const autoReleaseRequests = [
        { 
          amount: 40, 
          from: '@Sarah', 
          status: 'Pending',
          statusColor: 'text-yellow-500'
        },
        { 
          amount: 2000, 
          from: '@Alex', 
          status: 'Completed',
          statusColor: 'text-green-500'
        },
        { 
          amount: 500, 
          from: '@James', 
          status: 'Expired',
          statusColor: 'text-red-500'
        },
        // { 
        //   amount: 4205, 
        //   from: '@Quinn', 
        //   status: 'Completed',
        //   statusColor: 'text-green-500'
        // }
      ];

     

     

      
      const handleSend = () => {
        setBalance((prev) => prev - 100);
      };
    
      const handleRequest = () => {
       
      };
    
      const handleAddFunds = () => {
        setBalance((prev) => prev + 500);
      };

      const [selectedRange, setSelectedRange] = useState("1D");

      const chartData = [
        { name: "1D", value: 20000 },
        { name: "1W", value: 35000 },
        { name: "1M", value: 50000 },
        { name: "6M", value: 60000 },
        { name: "1Y", value: 80000 },
      ];
      
      
      
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     <div className="w-64 bg-white shadow-md h-full">
      <div className='p-4'>
      <div className="flex items-center gap-2 mb-8">
            <span className="text-blue-500 font-bold">↗ Suipay</span>
          </div>
          <nav className="space-y-4">
                    <Link to='/dashboard'> <SidebarItem icon={<BarChart2 size={20} />} label="Dashboard" active/></Link>
                    <Link to='/qr-payments'><SidebarItem icon={<User size={20} />} label="Qr Payments" /></Link> 
                     <Link to='/transactions'><SidebarItem icon={<ShoppingCart size={20} />} label="Transactions" /></Link>
                     <Link to='/request'><SidebarItem icon={<LifeBuoy size={20} />} label="Requests" /></Link>
                     <Link to='/profile'><SidebarItem icon={<User size={20} />} label="Profile"  /></Link>
                     <Link to='/settings'><SidebarItem icon={<Settings size={20} />} label="Settings"/></Link>
                     
            </nav>
      </div>
     

         
          <div className="mt-auto p-4">
          <a href='/'><SidebarItem icon={<LogOut size={20} />} label="Logout" /></a>
        </div>
     </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome back, Gm Temiloluwa</h1>
          <div className="bg-blue-500 text-white rounded-full p-2">
            <Bell size={20} />
          </div>
        </div>
        
        {/* Balance Card */}
        <div className="bg-blue-500 text-white p-6 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">SUIPAY Balance</span>
            <span className="text-xs">
          <ul>
         {accounts.map((account) => (
           <li key={account.address}> {account.address}</li>
         ))}
       </ul>
     
  
            </span>
          </div>
          <div className="text-3xl font-bold mb-4">{balance.toLocaleString()} SUI</div>
          
          <div className="flex space-x-4">
           
            <button onClick={handleSend} className="">
              <Send size={16} className='ml-3' /> Send
            </button>
           
             <Link to='/request'>
             <button className="p-2 ">
              <Download size={16} className='ml-6' /> Request
            </button>
             </Link>
            
            <button onClick={handleAddFunds} className="">
              <Plus size={16} className='ml-8' /> Add Funds
            </button>
          </div>
          <div className="text-xs mt-2">ashante.suipay</div>
        </div>
        
        {/* Smart Payment Section */}
        <div className="bg-white rounded-lg p-6  ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">Smart Payment</h2>
            <span className="text-blue-500 cursor-pointer">Auto-Release Requests </span>
          </div>
          
          <div className="space-y-4">
            {autoReleaseRequests.map((request, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
              >
                <div className="flex items-center">
                  
                  <div>
                    <div className="font-semibold">{request.amount} SUI</div>
                    <div className="text-gray-500 text-sm">from {request.from}</div>
                  </div>
                </div>
                {/* <span className={`font-medium ${request.statusColor}`}>
                  {request.status}
                </span> */}
                 <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      request.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : request.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {request.status}
                  </span>
              </div>
            ))}
          </div>
        </div>
        
       
      </div>
       {/* Graph Section */}
      {/* <div className='flex-2 p-8'>
      <div className="mt-6">
                 <card className="p-6">
                   <h3 className="text-lg font-semibold">Auto-Released: 20,000 SUI</h3>
                   <div className="mt-4 flex justify-end space-x-2">
                     {["1D", "1W", "1M", "6M", "1Y"].map((range) => (
                       <button
                         key={range}
                         onClick={() => setSelectedRange(range)}
                         className={selectedRange === range ? "bg-blue-500 text-white" : "bg-gray-200"}
                       >
                         {range}
                       </button>
                     ))}
                   </div>
                   <ResponsiveContainer width="100%" height={200}>
                     <BarChart data={chartData.filter((d) => d.name === selectedRange)}>
                       <XAxis dataKey="name" />
                       <YAxis />
                       <Tooltip />
                       <Line type="monotone" dataKey="value" stroke="#2563eb" />
                     </BarChart>
                   </ResponsiveContainer>
                 </card>
               </div>
      </div> */}
    </div>
  );
};

function SidebarItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default Dashboard