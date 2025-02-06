import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import ChatPage from "./pages/Chatpage";
import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar";


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<ChatPage/>}/>
        <Route path="/student-dashboard" element={<StudentPage />} />
        <Route path="/chat-page" element={<ChatPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App;
