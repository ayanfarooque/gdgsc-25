import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import TestPage from './pages/TestPage';
import Sidebar from './components/Dashboardcomponents/Sidebar';
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
import OverviewPage from './pages/Dashboardpages/OverviewPage';
import Chatbot from './pages/Chatbot';
import TeachersOverview from './pages/TeacherPages/TeachersOverview';
import Header from './pages/Dashboardpages/Header';
import Notification from './pages/Notification';
const App = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [role, setRole] = useState(""); 
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setRole(role)
  }

  const token = false;
  return token ? (
    <div className="flex h-screen w-full bg-gray-900 text-gray-100">
      
      <Sidebar role={role} />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path='/Stu-Dash' element={<OverviewPage role={role} />} />
          <Route path="/student-home" element={<StudentPage />} />
          <Route path='/chat-page' element={<Chatbot />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/Assignment' element={<AssignmentPage />} />
          <Route path='/Resources' element={<ResourcePage />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path='/teacher-Assignment' element={<TeacherAssignment />} />
          <Route path='/status-page' element={<StatusPage />} />
          <Route path='/teachers-Community' element={<TeachersCommunityPage />} />
          <Route path='/teacher-home' element={<TeachersOverview role={role} />} />
          <Route path='/prev' element={<TeacherHomePage />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
      </div>



    </div>
  ) : (
    <>
      {selectedRole === "" && <LoginSelection onSelect={handleRoleSelection} />}
      {selectedRole === "teacher" && <TeacherLogin />}
      {selectedRole === "student" && <StudentLogin />}
    </>
  )
}

export default App;
