import React from "react";

const ReviewSection = () => {
    return(
        <div className="bg-[#f7f1e3] w-full p-6 rounded-lg text-center min-h-[200px]">
          <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center  max-w-lg">
      <input type="text" placeholder="Search......." className="flex-1 p-2 border-none rounded-md outline-none text-gray-600" />
      <button className="ml-2 p-2 bg-white text-gray-600 rounded-md shadow-md">🔍</button>
      </div>
      
      <h2 className="text-xl mt-5 font-bold">SELECT ASSIGNMENT TO CHECK STATUS</h2>
    </div>
    )
}
export default ReviewSection