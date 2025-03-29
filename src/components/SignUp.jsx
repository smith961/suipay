import { ConnectButton, ConnectModal, useAccounts, useCurrentAccount } from "@mysten/dapp-kit";
import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "../pages/Dashboard";
import { Link } from "react-router-dom";


const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [username, setUsername] = useState("");

  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const requestOtp = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" },
        auth
      );

      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      alert(`OTP Verified! User ID: ${result.user.uid}`);
      // Proceed with Web3 Authentication
    } catch (error) {
      console.error("Invalid OTP:", error);
    }
  };

  const setp = () => {
    requestOtp();
    handleNext();
  }

  const setq = () => {
    verifyOtp();
    handleNext();
  }



  return (
    <>
    
  {currentAccount ? (
    <Dashboard />
  ):(<div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        {/* Logo and Support */}
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">↗Suipay</h2>
          <span className="text-gray-500">🎧 Support</span>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center space-x-4 mb-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex h-8 w-8 items-center justify-center rounded-full 
                ${step === num ? "bg-blue-500 text-white font-semibold" : "border border-gray-300 text-gray-500"}`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Step 1: Create an Account */}
        {step === 1 && (
          <>
            <h1 className="mb-4 text-center text-2xl font-semibold text-gray-900">Create an account</h1>
            
            <ConnectModal
            trigger = {
              <button disabled={!!currentAccount} className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              {currentAccount ? <Dashboard /> : "Connect Wallet"}
            </button>
            } />
            <p className="">or</p>
            <div className="flex items-center border rounded-lg p-3">
             
             
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full border-none focus:outline-none text-gray-900 text-center"
                value={email}
                onChange={(e) => setPhone(e.target.value)}
                
              />
            </div>
            <button onClick={setp} className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              Create account
            </button>
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/" className="text-blue-600">
                Sign in
              </a>
            </p>
            
            
           <div  >
           
           </div>
            
            <p className="mt-4 text-center text-xs text-gray-500">
              By creating an account, you agree to Suipay’s{" "}
              <a href="#" className="text-blue-600">Terms of Service</a> &{" "}
              <a href="#" className="text-blue-600">Privacy Policy</a>.
            </p>
          </>
        )}

        {/* Step 2: Enter Verification Code */}
        {step === 2 && (
          <>
            <h1 className="mb-4 text-center text-2xl font-semibold text-gray-900">Enter verification code</h1>
            <p className="text-center text-sm text-gray-500">We sent a code to {email}</p>
            <div className="mt-4 flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 border rounded-lg text-center text-lg"
                  value={digit}
                  onChange={(e) => {
                    let newOtp = [...otp];
                    newOtp[index] = e.target.value;
                    setOtp(newOtp);
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-center text-sm text-blue-600 cursor-pointer">Didn't get a code? Click to resend.</p>
            <div className="flex justify-between mt-4">
              <button onClick={handleBack} className="px-4 py-2 border rounded-lg">Cancel</button>
              <button onClick={setq} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Verify</button>
            </div>
          </>
        )}

        {/* Step 3: Create a Username */}
        {step === 3 && (
          <>
            <h1 className="mb-4 text-center text-2xl font-semibold text-gray-900">Create a Username</h1>
            <p className="text-center text-sm text-gray-500">This will be your unique username.</p>
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-4 border rounded-lg p-3 text-gray-900 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Link to='/dashboard'>
            <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              Welcome
            </button>
            </Link>
           
          </>
        )}
      </div>
    </div>)}
    </>
  );
};

export default Signup;
