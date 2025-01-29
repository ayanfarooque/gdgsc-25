import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AssignmentReview from './components/AssignmentReview';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/assignments" element={<AssignmentReview />} />
      </Routes>
    </div>
  )
}

export default App
