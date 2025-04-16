import { StrictMode } from 'react'
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
)
