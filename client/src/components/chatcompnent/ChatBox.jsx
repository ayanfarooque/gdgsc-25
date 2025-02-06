import React, { useState } from 'react';
import { Send, Camera } from 'lucide-react';

const ChatBox = () => {
  const [selectedSubject, setSelectedSubject] = useState("Select Subject");
  const [showSubjects, setShowSubjects] = useState(false);
  const subjects = ["Select Subject","Physics", "Chemistry", "Maths", "English"];

  return (
    <div className="flex-1 p-8">
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">What can I help you with?</h1>
        <div className="flex items-center border rounded-md p-2 mb-4">
          <input type="text" placeholder="Message or Ask Doubt" className="flex-1 p-2 outline-none" />
          <Camera className="w-5 h-5 text-gray-500" />
          <Send className="w-5 h-5 text-teal-500 cursor-pointer ml-2" />
        </div>
        <div className="relative">
          <button 
            className="px-4 py-2 bg-teal-700 text-white rounded-md shadow w-[20%]"
            onClick={() => setShowSubjects(!showSubjects)}
          >
            {selectedSubject}
          </button>
          {showSubjects && (
            <div className="absolute left-0 right-0 mt-2 bg-white shadow-md rounded-md">
              {subjects.map((subject) => (
                <button 
                  key={subject} 
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                  onClick={() => {
                    setSelectedSubject(subject);
                    setShowSubjects(false);
                  }}
                >
                  {subject}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-yellow-300 px-4 py-1 rounded-md">Concepts</button>
          <button className="bg-blue-300 px-4 py-1 rounded-md">Solve Numericals</button>
          <button className="bg-green-300 px-4 py-1 rounded-md">Code</button>
          <button className="bg-red-300 px-4 py-1 rounded-md">Summarize</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
