import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  AbortedDeferredError,
} from "react-router-dom";

import './index.css'

import Home from './pages/Loginpge.jsx';
import Upload from './components/Upload.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/login.jsx';
import Uploadpage from './pages/Uploadpage.jsx';
import Info from './components/infomation.jsx';
import Fix from './components/fix.jsx';
import Loginpge from './pages/Loginpge.jsx';
import Infopage from './pages/Infopage.jsx';

const router = createBrowserRouter([
  {
   path: "RepairTU01/",
   element: <Infopage/>
  },
  {
  path: "/Upload",
  element: <Uploadpage/>
   },
   {
   path: "/Infomation",
   element: <Infopage/>
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
