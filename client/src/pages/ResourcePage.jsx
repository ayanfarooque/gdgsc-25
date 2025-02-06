import React from 'react'
import SearchBar from '../components/NewsResourcesComponent/SearchBar'
import Sidebar from '../components/studentpage/Sidebar';
import Card from '../components/NewsResourcesComponent/Card'
import ResourceSection from '../components/NewsResourcesComponent/ResourceSection'
import TogelSection from '../components/NewsResourcesComponent/TogelSection'
const ResourcePage = () => {
  return (
    <div className="flex h-screen bg-[#F5F5DD]">
      <Sidebar />
      <div className="flex-1 p-6">
        <TogelSection />
        <SearchBar />
        <div className="flex mt-4">
          {/* Main Content */}
          <div className="grid grid-cols-2  gap-4 w-3/4">
            {[...Array(6)].map((_, index) => (
              <Card key={index} />
            ))}
          </div>
          {/* Right Sidebar */}
          <ResourceSection />
        </div>
      </div>
    </div>
  )
}

export default ResourcePage
