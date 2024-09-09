import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from "./components/Nav.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Nav/>
      
      <i class="fa-solid fa-screwdriver-wrench"></i>
    
  </StrictMode>,
)