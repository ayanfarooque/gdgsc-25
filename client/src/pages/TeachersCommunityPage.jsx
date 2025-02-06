import React from 'react'
import Sidebar from '../components/Status/Sidebar'
import Solution from '../components/TeachersComunity/Solution'
import Navigation from '../components/TeachersComunity/Navigation'
import Tccomp from '../components/TeachersComunity/Tccomp'

const TeachersCommunityPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#eae0c8]">
      <Sidebar />
      <div className="flex flex-1 p-6 gap-6">
        
        {/* Main Review Section */}
        <div >
          <Tccomp />
        </div>

        {/* Right Section  */}
        <div className="flex flex-col w-[30%] gap-6">
          <div className="bg-[#E195AB] p-4 rounded-lg shadow-md">
            <Solution />
          </div>
          <div className="bg-[#E195AB] p-4 rounded-lg shadow-md">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersCommunityPage
