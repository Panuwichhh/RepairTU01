import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import Upload from './components/Upload.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Upload/>
  </StrictMode>,
)