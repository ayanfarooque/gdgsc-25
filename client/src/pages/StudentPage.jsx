import React from 'react';
import Sidebar from '../components/studentpage/Sidebar';
import CalendarComponent from '../components/studentpage/calendar';
import Analytics from '../components/studentpage/Analytics';
import TestScores from '../components/studentpage/TestScores';
import PendingAssignments from '../components/studentpage/PendingAssignment';
import ProfileCard from '../components/studentpage/ProfileCard';

function StudentPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] font-sans flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row gap-6 p-6 w-full max-w-7xl mx-auto">
        
        {/* Center Content */}
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Analytics />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              
              <TestScores />
            </div>
          </div>
        </main>

        {/* Profile Card */}
        <div className="hidden lg:block w-72">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
