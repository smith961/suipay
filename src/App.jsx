import { useState } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import RequestPayment from './components/RequestPayment'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import SignupPage from './pages/SignupPage'
import QrPayments from './components/QrPayments'
import ProfilePage from './components/Profile'
import { Settings } from 'lucide-react'
import Setti from './components/Setti'
import Home from './pages/Home'
import Logout from './components/Logout'







function App() {
 

  return (
   
   <Router>
    <AuthProvider>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/request" element={<RequestPayment />} />
      <Route path='/qr-payments' element={<QrPayments />} />
      <Route path='profile' element={<ProfilePage />} />
      <Route path='settings' element={<Setti />} />
      <Route path='/dashboard' element={<Dashboard />}/> 
      <Route path='/logout' element={<Logout />}/> 
     

   
     {/* Protected Routes */}
     
     
     
      

   
    

   </Routes>
   </AuthProvider>
   </Router>
   
  )
}

export default App
