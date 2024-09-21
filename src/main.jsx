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
import Loginpge from './pages/Loginpge.jsx';
import Infopage from './pages/Infopage.jsx';
import Homepage from './pages/homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/RepairTU01",
    element: <Loginpge/>
  },
  {
    path: "/Upload",
    element: <Uploadpage/>
  },
  {
    path: "/Infomation",
    element: <Infopage/>
  },
  {
    path: "/Home",
    element: <Homepage/>
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
