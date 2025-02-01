import React from 'react';
import Sidebar from '../components/chatcompnent/Sidebar';
import PreviousChats from '../components/chatcompnent/PreviousChats';
import Header from '../components/chatcompnent/Header';
import ChatBox from '../components/chatcompnent/ChatBox';

const ChatPage = () => {
  return (
    <div className="flex h-screen bg-[#ece3c9]">
      {/* Sidebar */}
      <div className="w-20 bg-[#28c9d9] flex flex-col items-center py-4 shadow-lg rounded-r-2xl">
        <Sidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        {/* Header */}
        <div className="bg-[#28c9d9] text-black p-4 flex justify-between items-center rounded-2xl shadow-md">
          <h1 className="text-xl font-bold">E-LEARNING</h1>
          <Header />
        </div>

        

        {/* Chat Box */}
        <div className="flex justify-center items-center p-4">
          <ChatBox />
        </div>
      </div>

      {/* Previous Chats */}
      <div className="w-64 bg-[#28c9d9] p-4 rounded-l-2xl shadow-lg">
        <h2 className="text-lg font-bold text-center mb-4">PREVIOUS CHATS</h2>
        <PreviousChats />
      </div>
    </div>
  );
};

export default ChatPage;
