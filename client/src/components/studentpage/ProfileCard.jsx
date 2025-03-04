function ProfileCard() {
<<<<<<< HEAD
  return (
    <div className="w-80 h-96 mx-auto">
      <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-4">
            <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-xs bg-red-500 text-white rounded-full px-3 py-1 mb-4">
            myfriend@gmail.com
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div><span className="font-semibold text-gray-300">Name: </span>Ali</div>
          <div><span className="font-semibold text-gray-300">Student ID: </span>50</div>
          <div><span className="font-semibold text-gray-300">Address: </span>402, Sprayday Canga, Bhanunogor</div>
          <div><span className="font-semibold text-gray-300">DOB: </span>02-05-2005</div>
          <div><span className="font-semibold text-gray-300">Guardian: </span>Usman Suleman</div>
          <div><span className="font-semibold text-gray-300">Class: </span>9th</div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2 text-lg">Your Badges</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm shadow-sm">🎯 15</span>
            <span className="px-3 py-1 bg-yellow-500 text-black font-semibold rounded-full text-sm shadow-sm">🏆 Gold</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm shadow-sm">⭐ 10</span>
          </div>
        </div>

        <button className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold py-2 px-4 rounded-lg mt-6 w-full shadow-md">
          Download Result
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
=======
    return (
      <div className="w-80">
        <div className="bg-[#26c6c0] text-white rounded-xl p-6">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-white overflow-hidden mb-4">
              <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm bg-red-500 rounded-full px-3 py-1 mb-4">myfriend@gmail.com</div>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">Name: </span>Admin
            </div>
            <div>
              <span className="font-semibold">Student ID: </span>50
            </div>
            <div>
              <span className="font-semibold">Address: </span>402, Sprayday Canga, Bhanunogor
            </div>
            <div>
              <span className="font-semibold">DOB: </span>02-05-2005
            </div>
            <div>
              <span className="font-semibold">Guardian: </span>Usman Suleman
            </div>
            <div>
              <span className="font-semibold">Class: </span>9th
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Your Badges</h3>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white/20 rounded-full text-sm">🎯 15</span>
              <span className="px-2 py-1 bg-white/20 rounded-full text-sm">🏆 Gold</span>
              <span className="px-2 py-1 bg-white/20 rounded-full text-sm">⭐ 10</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProfileCard
  
  
>>>>>>> 29e5612a686e3cdef61b07d9f9f12a906accdcf9
