import React from 'react'
import IgReels from '../components/igReels.jsx';
import NavBar from '../components/navBar.jsx';
import ContactUs from '../components/contactUs.jsx';


export default function AboutUs () {
  return (
    <div>
      <NavBar />

      <div id="News" className="scroll-mt-24 w-full flex justify-center bg-white/70 shadow-lg backdrop-blur-sm p-4"> 
        <IgReels  />      
      </div>

      <ContactUs />
    </div>
  )
}


