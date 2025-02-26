import React from "react";

const PendingAssignment = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-6 rounded-lg text-white w-full max-w-md mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 text-center tracking-wide">⏳ Pending Assignments</h2>

      <div className="grid grid-cols-1 gap-3">
        {["Hindi", "German"].map((subject, index) => (
          <p
            key={index}
            className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-medium py-3 px-4 rounded-lg shadow-md text-center transition-all transform hover:scale-105 hover:shadow-xl"
          >
            {subject}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PendingAssignment;
