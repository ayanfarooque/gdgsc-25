<<<<<<< HEAD
import { Home, BookOpen, Calendar, MessageCircle } from "react-feather";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col gap-4 bg-teal-700 p-4 w-20">
      <button 
        className={`p-4 rounded-lg ${location.pathname === '/' ? 'bg-[#1ea39e]' : 'hover:bg-[#1ea39e]'}`}
        onClick={() => navigate('/')}
      >
        <Home className="w-6 h-6" />
      </button>

      <button 
        className={`p-4 rounded-lg ${location.pathname === '/chat-page' ? 'bg-[#1ea39e]' : 'hover:bg-[#1ea39e]'}`}
        onClick={() => navigate('/chat-page')}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <button 
        className={`p-4 rounded-lg ${location.pathname === '/Assignment' ? 'bg-[#1ea39e]' : 'hover:bg-[#1ea39e]'}`}
        onClick={() => navigate('/Assignment')}
      >
        <BookOpen className="w-6 h-6" />
      </button>

      <button 
        className={`p-4 rounded-lg ${location.pathname === '/Resources' ? 'bg-[#1ea39e]' : 'hover:bg-[#1ea39e]'}`}
        onClick={() => navigate('/Resources')}
      >
        <Calendar className="w-6 h-6" />
      </button>
    </aside>
  );
}

export default Sidebar;
=======
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

>>>>>>> 29e5612a686e3cdef61b07d9f9f12a906accdcf9
