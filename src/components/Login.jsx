import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Login.css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ConnectButton, ConnectModal, useAccounts, useCurrentAccount } from "@mysten/dapp-kit";
import { useContext } from "react";
import CustomConnectButton from "./CustomConnectButton";
import Signup from "./SignUp";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import RequestPayment from "./RequestPayment";







const Login = () => {
  const { login } = useAuth();
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  
  const slides = [
    {
      image: "/images/man1.jpeg",
      text: "Secure & Fast Transactions",
      text1:
        "Send and receive payments instantly with advanced security protocols.Enjoy a frictionless payment experience without delays or hidden fees.",
    },
    {
      image: "/images/dread.jpeg",
      text: "Effortless Sign-in",
      text1:
        "Use passkey or magic links for a seamless and secure login experience. No more passwords to remember, just quick and easy access to your account  ",
    },
    {
      image: "/images/woman.jpeg",
      text: "Stay in Control",
      text1:
        "Keep track of your spending, monitor transactions and manage your funds effortlessly, all from a single, intuitive dashboard.",
    },
  ];
  return (
    <>
    
      { currentAccount ?(
       <Dashboard />
      ):(<div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-lg">
          {/* Left Section */}
          <div className="w-1/2 p-8 ">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">↗Suipay</h2>
            </div>
            
            <h1 className="text-2xl font-semibold text-gray-900">
              Sign in to Suipay
            </h1>
            
            
            <p className="mt-2 text-sm text-gray-500">
              Send, spend, and manage USDC on Sui effortlessly.
            </p>
  
            <button className="mt-6 flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-blue-600 transition hover:bg-gray-100">
              <span className="mr-2">🔗</span> Sign In With Magic Link
            </button>
  
            <div className="my-4 text-center text-sm text-gray-500">
              Or with passkey
            </div>
  
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-lg border p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <button
            onClick={login}
            className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              Sign In
            </button>
            <p>or</p>
            <ConnectModal
            trigger={
              <button 
              disabled={!!currentAccount}
              className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                {currentAccount ? "/dashboard" : "Connect Wallet"}
              </button>
            } />
            
           
  
            <p className="mt-4 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600">
                Sign Up
              </a>
            </p>
  
            <div className="mt-6 text-center text-xs text-gray-400">
              <a href="#" className="mr-4">
                Privacy Policy
              </a>
              &copy; 2025
            </div>
          </div>
  
          {/* Right Section */}
          <div className="relative w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-container">
                    <img src={slide.image} alt={`Slide ${index}`} />
  
                    <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-40 p-6 text-center text-white top-80">
                      <h2 className="text-xl font-bold">{slide.text}</h2>
                      <p className="mt-2 text-sm">{slide.text1}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>)
      }   
    
   
    </>
  );
};

export default Login;
