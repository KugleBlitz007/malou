import React from 'react'
import NavBar from '../components/navBar.jsx';
import ProfileCard from '../components/profileCard.jsx';
import {profiles} from '../components/data.jsx';
import ContactUs from '../components/contactUs.jsx';
import Background from '../assets/Logo-Officielle-EN.png';


export default function AboutUs () {
  return (
    <div>
      <NavBar />

      <div className="h-[25vh] sm:w-screen w-auto flex justify-center bg-[#01642f]">
          <img src={Background} alt="Malou Background" className="w-max h-auto" />
      </div>

      <h2 className="text-2xl md:text-4xl font-bold text-center pt-8 text-green-700">
        Meet our team!
      </h2>

      <div className="scroll-mt-24 w-full bg-white/70 shadow-lg backdrop-blur-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center p-8 gap-8"> 
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
    
      </div>

      <ContactUs />
    </div>
  )
}


