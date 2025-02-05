import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AssignmentReview from './components/AssignmentReview';
import StudentPage from './pages/StudentPage';
import ChatPage from './pages/Chatpage';
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/student-dashborad" element={<StudentPage />} />
      <Route path='/chat-page' element={<ChatPage />} />
        <Route path="/" element={<AssignmentReview />} />
      </Routes>
    </div>
  )
}

export default App
