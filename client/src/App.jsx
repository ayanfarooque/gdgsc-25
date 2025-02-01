import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AssignmentReview from './components/AssignmentReview';
import StudentPage from './pages/StudentPage';
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/student-dashborad" element={<StudentPage />} />
        <Route path="/assignments" element={<AssignmentReview />} />
      </Routes>
    </div>
  )
}

export default App
