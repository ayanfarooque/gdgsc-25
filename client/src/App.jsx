import React from 'react'
import { Route, Routes } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import ChatPage from './pages/Chatpage';
import TestPage from './pages/TestPage';
import Navbar from './components/Navbar';
import AssignmentPage from './pages/AssignmentPage';
import ResourcePage from './pages/ResourcePage';
import NewsDetail from './components/NewsResourcesComponent/NewsDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/student-dashborad" element={<StudentPage />} />
      <Route path='/chat-page' element={<ChatPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/Assignment' element={<AssignmentPage />} />
      <Route path='/Resources' element={<ResourcePage />} />
      <Route path="/news/:newsId" element={<NewsDetail />} />
      </Routes>
    </div>
  )
}

export default App