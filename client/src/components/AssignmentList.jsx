import React, { useEffect, useState } from "react";

const AssignmentList = ({ onSelect }) => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/assignments/previous/12345");
      const data = await response.json();
      if (data.success) {
        setAssignments(data.assignments);
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  return (
    <div className="w-1/3 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold">Previous Assignments</h2>
      {assignments.length === 0 ? (
        <p>No assignments found.</p>
      ) : (
        assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="p-2 bg-white my-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelect(assignment._id)}
          >
            {assignment.subject}
          </div>
        ))
      )}
    </div>
  );
};

export default AssignmentList;
