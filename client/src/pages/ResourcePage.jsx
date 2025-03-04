import React from 'react'
<<<<<<< HEAD
import SearchBar from '../components/NewsResourcesComponent/SearchBar'
import Sidebar from '../components/studentpage/Sidebar';
import Card from '../components/NewsResourcesComponent/Card'
import ResourceSection from '../components/NewsResourcesComponent/ResourceSection'
import TogelSection from '../components/NewsResourcesComponent/TogelSection'
const ResourcePage = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
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
=======

const ResourcePage = () => {
  return (
    <div>
      
>>>>>>> 29e5612a686e3cdef61b07d9f9f12a906accdcf9
    </div>
  )
}

export default ResourcePage
