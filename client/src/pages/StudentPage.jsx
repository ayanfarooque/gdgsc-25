import React from 'react';
import Sidebar from '../components/studentpage/Sidebar';
import CalendarComponent from '../components/studentpage/calendar';
import Analytics from '../components/studentpage/Analytics';
import TestScores from '../components/studentpage/TestScores';
import PendingAssignments from '../components/studentpage/PendingAssignment';
import ProfileCard from '../components/studentpage/ProfileCard';
<<<<<<< HEAD
import GrowthRate from '../components/Dashboardcomponents/overview/GrowthRate';
import { useNavigate } from 'react-router-dom';
function StudentPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen text-black bg-[#f4f1ea] font-sans flex">

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row gap-6 p-6 w-full max-w-7xl mx-auto">
        
        {/* Center Content */}
        <main className="flex-1 space-y-6">
          <div className="grid md:grid-cols-2 cursor-pointer gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold mb-4">Calendar</h2>
              <CalendarComponent />
            </div>
            <div className="bg-white rounded-xl cursor-pointer p-6 shadow-md transition-transform transform hover:scale-105">
              <PendingAssignments />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 cursor-pointer  transition-transform transform hover:scale-105">
              <GrowthRate bgColor="white"/>
            </div>
            <div onClick={() => navigate('/test')} className="bg-white rounded-xl p-6 cursor-pointer  transition-transform transform hover:scale-105">
              <TestScores />
            </div>
          </div>
        </main>

        {/* Profile Card */}
        <div className="hidden h-96 cursor-pointer lg:block w-72 transition-transform transform hover:scale-105">
          <ProfileCard />
          
        </div>
=======

function StudentPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] font-sans">
      {/* Header */}
      <header className="bg-[#26c6c0] text-white p-4 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold tracking-wide">E-LEARNING</h1>
          <div className="flex items-center gap-4 text-lg">
            <button className="p-2 hover:bg-[#1fada4] rounded transition">🔔</button>
            <button className="p-2 hover:bg-[#1fada4] rounded transition">⚙️</button>
            <button className="p-2 hover:bg-[#1fada4] rounded transition">📹</button>
            <button className="p-2 hover:bg-[#1fada4] rounded transition">🎮</button>
            <button className="p-2 hover:bg-[#1fada4] rounded transition">👤</button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex left-0 gap-6 p-6 max-w-7xl mx-auto">
        <Sidebar />
        
        <main className="flex-1 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Calendar</h2>
              <CalendarComponent />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Pending Assignments</h2>
              <PendingAssignments />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <Analytics />
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Test Scores</h2>
            <TestScores />
          </div>
        </main>
        
        <ProfileCard />
>>>>>>> 29e5612a686e3cdef61b07d9f9f12a906accdcf9
      </div>
    </div>
  );
}

export default StudentPage;
<<<<<<< HEAD

=======
>>>>>>> 29e5612a686e3cdef61b07d9f9f12a906accdcf9
