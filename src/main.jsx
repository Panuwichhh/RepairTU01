import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import '@fontsource/inter';
import './index.css';

import Uploadpage from './pages/Uploadpage.jsx';
import Loginpge from './pages/Loginpage.jsx';
import Infopage from './pages/Infopage.jsx';
import Homepage from './pages/homepage.jsx';
import Statuspage from './pages/Statuspage.jsx';

const router = createBrowserRouter([
  {
    path: "/RepairTU01",
    element: <Loginpge/>
  },
  {
    path: "Upload",
    element: <Uploadpage/>
  },
  {
    path: "Infomation",
    element: <Infopage/>
  },
  {
    path: "Home",
    element: <Homepage/>
  },
  {
    path: "Status",
    element: <Statuspage/>
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
