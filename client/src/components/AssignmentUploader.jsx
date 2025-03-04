import React, { useState } from "react";

const AssignmentUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("studentid", "12345");
    formData.append("subjectid", "Math");
    formData.append("teacherid", "56789");

    try {
      const response = await fetch("http://localhost:5000/api/assignments/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Assignment uploaded successfully!");
        onUpload();
      } else {
        alert("Upload failed!");
      }
    } catch (error) {
      console.error("Error uploading assignment:", error);
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Upload Assignment
      </button>
    </div>
  );
};

export default AssignmentUploader;
