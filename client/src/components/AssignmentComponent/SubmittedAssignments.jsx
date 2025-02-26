import React from "react";

const SubmittedAssignments = () => {
  return (
    <div className="bg-gray-400 p-6 rounded-lg text-white w-full max-w-md mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 text-center tracking-wide">📚 Submitted Assignments</h2>

      <div className="grid grid-cols-2 gap-4">
        {["Maths", "Science", "English", "SST"].map((subject, index) => (
          <button
            key={index}
            className="bg-gradient-to-r from-green-400 to-green-600 text-black font-medium py-3 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
