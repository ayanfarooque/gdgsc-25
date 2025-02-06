import React from 'react'
import Sidebar from '../components/studentpage/Sidebar';
import Navbar from '../components/Navbar'
import AssignmentBot from '../components/AssignmentComponent/AssignmentBot'
import ReviewSection from '../components/AssignmentComponent/ReviewSection'
import SubmittedAssignments from '../components/AssignmentComponent/SubmittedAssignments'
import PendingAssignment from '../components/AssignmentComponent/PendingAssignments'
const AssignmentPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#eae0c8]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        
        <div className="p-6 flex flex-col gap-6">
          <AssignmentBot />
          <ReviewSection />
          <div className="flex gap-6">
            <SubmittedAssignments />
            <PendingAssignment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignmentPage
