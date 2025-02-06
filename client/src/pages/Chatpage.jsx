import React from "react";
import Sidebar from '../components/studentpage/Sidebar';
import PreviousChats from "../components/chatcompnent/PreviousChats";
import ChatBox from "../components/chatcompnent/ChatBox";

const ChatPage = () => {
  return (
    <div className="flex h-screen bg-[#ece3c9]">
      {/* Sidebar */}
      
        <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        {/* Chat Box */}
        <div className="flex justify-center items-center p-4">
          <ChatBox />
        </div>
      </div>

      {/* Previous Chats */}
      <div className="w-64 mr-10 background: #31C4CA;
 p-4 rounded-l-2xl ">
        <PreviousChats />
      </div>
    </div>
  );
};

export default ChatPage;


