import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Loginpge.jsx';
import Upload from './components/Upload.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/login.jsx';
import Uploadpage from './pages/Uploadpage.jsx';
import Loginpge from './pages/Loginpge.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Uploadpage />
  </StrictMode>,
)