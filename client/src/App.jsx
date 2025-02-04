import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AssignmentReview from './components/AssignmentReview';
import StudentPage from './pages/StudentPage';
import ChatPage from './pages/Chatpage';
import TestPage from './pages/TestPage';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/student-dashborad" element={<StudentPage />} />
      <Route path='/chat-page' element={<ChatPage />} />
      <Route path='/test' element={<TestPage />} />
        <Route path="/assignments" element={<AssignmentReview />} />
      </Routes>
    </div>
  )
}

export default App
