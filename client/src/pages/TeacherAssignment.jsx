import React from 'react'
import Sidebar from '../components/TeacherHome/Sidebar'
import ActiveAssignment from '../components/TecherAssignment/ActiveAssignment'
import ReviewSection from '../components/TecherAssignment/ReviewSection'
import PreviousAssignment from '../components/TecherAssignment/PreviousAssignment'

const TeacherAssignment = () => {
  return (
    <div className="flex h-screen w-full bg-[#eae0c8]">
      <Sidebar />
      <div className="flex flex-1 p-6 gap-6">
        
        {/* Main Review Section */}
        <div className="flex flex-col items-center w-[70%] bg-[#f5f0dc] p-6 rounded-lg shadow-md">
          <ReviewSection />
        </div>

        {/* Right Section (Assignments) */}
        <div className="flex flex-col w-[30%] gap-6">
          <div className="bg-[#E195AB] p-4 rounded-lg shadow-md">
            <ActiveAssignment />
          </div>
          <div className="bg-[#E195AB] p-4 rounded-lg shadow-md">
            <PreviousAssignment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherAssignment
