import React from "react";

function LoginSelection({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f1f1f1] text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Select Your Role below</h1>
      <p className="text-lg text-gray-600 mb-6">Login to handle your role</p>
      <div className="flex gap-6">
        <div
          className="w-64 p-6 bg-white rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => onSelect("teacher")}
        >
          <h3 className="text-xl font-semibold text-blue-600">Teacher</h3>
        </div>
        <div
          className="w-64 p-6 bg-white rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => onSelect("student")}
        >
          <h3 className="text-xl font-semibold text-green-600">Student</h3>
        </div>
      </div>
    </div>
  );
}

export default LoginSelection;
