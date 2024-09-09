import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from "./components/Nav.jsx";
import './index.css'
import Login from './components/login.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Nav/>
      <Login/>
      <Footer/>
    
  </StrictMode>,
)