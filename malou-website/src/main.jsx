///////////////// Production version ///////////////////////

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import './index.css';
import App from './App.jsx';
import AboutUs from './pages/AboutUs.jsx';
import NotFound from './pages/NotFound.jsx';
import Events from './pages/Events.jsx';

import AppFR from './fr/AppFR.jsx';
import AboutUsFR from './fr/pages/AboutUsFR.jsx';
import NotFoundFR from './fr/pages/NotFoundFR.jsx';
import EventsFR from './fr/pages/EventsFR.jsx';



import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppFR />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/en" element={<App />} />
        <Route path="/fr/AboutUs" element={<AboutUsFR />} />
        <Route path="/fr/Events" element={<EventsFR />} />
        <Route path="/fr/*" element={<NotFoundFR />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

////////////////// Developement version ///////////////////////

/* import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client'
 import './App.css'
 import './index.css'
 import App from './App.jsx'
 import {createBrowserRouter, RouterProvider} from 'react-router-dom';
 import AboutUs from './pages/AboutUs.jsx'
 import NotFound from './pages/NotFound.jsx'
 import Events from './pages/Events.jsx'
 
 
 const router = createBrowserRouter([{
   path: '/malou/',
   element: <App />,
 },
 {
   path: '/malou/AboutUs',
   element: <AboutUs />,
 },
 {
   path: '/malou/Events',
   element: <Events />,
 },
 {
   path: '*', // This will reroute any weird route to not found
   element: <NotFound />,
 },
 
 ]);

 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) */