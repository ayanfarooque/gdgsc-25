import React from 'react'
import Sidebar from '../components/studentpage/Sidebar'
import AssignmentBot from '../components/AssignmentComponent/AssignmentBot'
import ReviewSection from '../components/AssignmentComponent/ReviewSection'
import SubmittedAssignments from '../components/AssignmentComponent/SubmittedAssignments'
import PendingAssignment from '../components/AssignmentComponent/PendingAssignments'

const AssignmentPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#eae0c8]">
      <Sidebar />
      <div className="flex flex-1 p-6 gap-6">
        
        <AssignmentBot />
        {/* Main Review Section */}
        <div className="flex flex-col items-center w-[70%] bg-[#f5f0dc] p-6 rounded-lg shadow-md">
          <ReviewSection />
        </div>

        {/* Right Section (Assignments) */}
        <div className="flex flex-col w-[30%] gap-6">
          <div className="bg-[#29b6c6] transition-transform transform hover:scale-105 p-4 rounded-lg shadow-md">
            <SubmittedAssignments />
          </div>
          <div className="bg-[#ff6b6b] transition-transform transform hover:scale-105 p-4 rounded-lg shadow-md">
            <PendingAssignment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignmentPage
