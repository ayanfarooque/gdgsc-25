import React, { useState } from "react";

const AssignmentBot = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="bg-[#f7f1e3] p-6 rounded-lg text-center border-2 border-dashed border-gray-400"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="text-xl font-bold mb-4">AI ASSIGNMENT BOT</h2>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        id="fileInput"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-[#29b6c6] text-white px-4 py-2 rounded inline-block"
      >
        SELECT FILE
      </label>
      <p className="mt-2">Drop your file here (PDF, JPG, JPEG, PNG)</p>
      {file && <p className="mt-2 text-sm text-gray-700">Selected: {file.name}</p>}
    </div>
  );
};

export default AssignmentBot;
