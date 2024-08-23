import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './Pages/app/index.jsx'
import Navbar from './Components/layout/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

