import { Home, Globe, BookOpen, Calendar, Settings } from "react-feather"

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-4 bg-[#26c6c0] p-4 rounded-xl w-20">
      <button className="p-4 bg-[#1ea39e] rounded-lg">
        <Home className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <Globe className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <BookOpen className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <Calendar className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <Settings className="w-6 h-6" />
      </button>
    </aside>
  )
}

export default Sidebar

