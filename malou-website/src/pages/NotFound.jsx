///////////////// Production version ///////////////////////

import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/navBar.jsx';
import ContactUs from '../components/contactUs.jsx';



export default function NotFound() {
  return (
    <div>
       <NavBar />
        
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <h1 className="text-4xl font-bold text-green-900 mb-4">404 - Page Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800">
            Go to Home
          </Link>
        </div>
        <ContactUs />
    </div>
  )
}


////////////////// Developement version ///////////////////////

/* import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/navBar.jsx';
import ContactUs from '../components/contactUs.jsx';



export default function NotFound() {
  return (
    <div>
       <NavBar />
        
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <h1 className="text-4xl font-bold text-green-900 mb-4">404 - Page Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">Sorry, the page you are looking for does not exist.</p>
          <Link to="/malou/" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800">
            Go to Home
          </Link>
        </div>
        <ContactUs />
    </div>
  )
}
 */