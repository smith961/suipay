import React, { useState } from "react";
import { Link } from "react-router-dom";
import Barcode from "react-barcode";

export default function QrPayments() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    qrCode: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Request Payment
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Add description"
              />
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Generate QR
            </button>
          </div>
        );
      case 2:
        return (
          <div className="p-6 flex flex-col items-center space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Scan QR Code
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Barcode
                value={formData.description}
                width={1.5}
                height={50}
                format="CODE128"
                displayValue={true}
                fontSize={16}
                margin={10}
              />
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Confirm Payment
            </button>
          </div>
        );
      case 3:
        return (
          <div className="p-6 flex flex-col items-center space-y-4">
            <div className="bg-green-100 p-4 rounded-full">✓</div>
            <h2 className="text-xl font-semibold text-gray-800">
              Payment Sent
            </h2>
            <p className="text-gray-600 text-center">
              Your payment request has been successfully processed.
            </p>
            <Link
              to="/dashboard"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Go back to Dashboard
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {renderStep()}
    </div>
  );
}
