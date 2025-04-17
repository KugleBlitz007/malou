import React from 'react'
import NavBar from '../components/navBar.jsx';
import ContactUs from '../components/contactUs.jsx';
import Background from '../assets/Logo-Officielle-EN.png';
import {events} from '../components/data.jsx';
import EventCard from '../components/eventCard.jsx';




export default function Events() {
  return (
    <div>
        <NavBar />


        <h2 className="text-3xl font-bold text-center text-green-900 p-8">Upcoming Events</h2>
      {events.filter(e => e.coming).map(event => (
        <div key={event.id} className="px-4">
        <EventCard key={event.id} event={event} />
        </div>
      ))}

      <h2 className="text-3xl font-bold text-center text-green-900 p-8">Past Events</h2>
      {events.filter(e => !e.coming).map(event => (
        <div key={event.id} className="px-4 pb-4">
        <EventCard key={event.id} event={event} />
        </div>
      ))}


        <ContactUs />
    </div>
  )
}
