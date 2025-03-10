import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TeacherContextProvider from './context/TeacherContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TeacherContextProvider>
    <App />
  </TeacherContextProvider>
  </BrowserRouter>
  
)
