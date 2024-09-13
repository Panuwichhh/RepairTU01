import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import Upload from './components/Upload.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Login/>
  </StrictMode>,
)