import React from 'react'
import { Route, Routes } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import ChatPage from './pages/Chatpage';
import TestPage from './pages/TestPage';
import Navbar from './components/Navbar';
import AssignmentPage from './pages/AssignmentPage';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/student-dashborad" element={<StudentPage />} />
      <Route path='/chat-page' element={<ChatPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/Assignment' element={<AssignmentPage />} />

      </Routes>
    </div>
  )
}

export default App
