import React from "react";

const ResourceSection = () => {
    return(
        <div className="w-1/4 h-100 bg-teal-400 p-4 rounded-md shadow-md ml-4 h-full">
      <h2 className="text-lg font-bold text-black">TEACHER RECOMMENDED</h2>
      <div className="mt-2 space-y-2 flex flex-col h-full">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="p-3 bg-teal-500 rounded-md shadow-md h-20"></div>
        ))}
      </div>
    </div>
    )
}
export default ResourceSection