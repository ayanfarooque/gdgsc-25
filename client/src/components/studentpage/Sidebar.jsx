import { Home, Globe, BookOpen, Calendar, Settings,MessageCircle } from "react-feather"
import { useNavigate } from "react-router-dom"

function Sidebar() {
  const navigate = useNavigate()
  return (
    <aside className="hidden md:flex flex-col gap-4 bg-teal-700 p-4  w-20">
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <Home onClick={() => navigate('/')}  className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <MessageCircle onClick={() => navigate('/chat-page')} className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <BookOpen onClick={() => navigate('/Assignment')} className="w-6 h-6" />
      </button>
      <button className="p-4 hover:bg-[#1ea39e] rounded-lg">
        <Calendar onClick={() => navigate('/Resources')} className="w-6 h-6" />
      </button>
    </aside>
  )
}

export default Sidebar

