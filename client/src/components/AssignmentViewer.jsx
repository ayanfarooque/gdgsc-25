import React, { useEffect, useState } from "react";

const AssignmentViewer = ({ assignmentId }) => {
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    if (assignmentId) {
      fetchAssignment();
    }
  }, [assignmentId]);

  const fetchAssignment = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/assignments/single/${assignmentId}`);
      const data = await response.json();
      if (data.success) {
        setAssignment(data.assignment);
      }
    } catch (error) {
      console.error("Error fetching assignment:", error);
    }
  };

  if (!assignment) {
    return <p className="p-4">Select an assignment to view details.</p>;
  }

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-lg font-semibold">{assignment.subject}</h2>
      <p>Grade: {assignment.grade || "Not graded yet"}</p>
      <a href={`http://localhost:5000/uploads/${assignment.file}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Open Assignment
      </a>
    </div>
  );
};

export default AssignmentViewer;
