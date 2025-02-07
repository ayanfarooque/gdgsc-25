import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import ChatPage from './pages/Chatpage';
import TestPage from './pages/TestPage';
import Navbar from './components/Navbar';
import AssignmentPage from './pages/AssignmentPage';
import ResourcePage from './pages/ResourcePage';
import NewsDetail from './components/NewsResourcesComponent/NewsDetail'
import TeacherAssignment from './pages/TeacherAssignment';
import StatusPage from './pages/StatusPage';
import TeachersCommunityPage from './pages/TeachersCommunityPage';
import LoginSelection from './pages/LoginSelection';
import TeacherLogin from './pages/TeacherLogin';
import StudentLogin from './pages/StudentLogin';
import TeacherHomePage from './pages/TeacherHomePage';

const App = () => {

  const[selectedRole, setSelectedRole] = useState("");

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  }
  const token = true;
  return token ?(
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<StudentPage />} />
      <Route path='/chat-page' element={<ChatPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/Assignment' element={<AssignmentPage />} />
      <Route path='/Resources' element={<ResourcePage />} />
      <Route path="/news/:newsId" element={<NewsDetail />} />
      <Route path='/teacher-Assignment' element={<TeacherAssignment/>} />
      <Route  path='/status-page' element={<StatusPage />} />
      <Route path='/teachers-Community' element={<TeachersCommunityPage />} />
      <Route path='/teacher-home' element={<TeacherHomePage />} />
      </Routes>
    </div>
  ): (
    <>
    {selectedRole === "" && <LoginSelection onSelect={handleRoleSelection} />}
    {selectedRole === "teacher" && <TeacherLogin />}
    {selectedRole === "student" && <StudentLogin />}
    </>
  )
}

export default App