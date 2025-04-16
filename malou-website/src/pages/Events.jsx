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


        <h2 className="text-3xl font-bold text-center text-green-900">Upcoming Events</h2>
      {events.filter(e => e.coming).map(event => (
        <EventCard key={event.id} event={event} />
      ))}

      <h2 className="text-3xl font-bold text-center text-green-900 mt-16">Past Events</h2>
      {events.filter(e => !e.coming).map(event => (
        <EventCard key={event.id} event={event} />
      ))}


        <ContactUs />
    </div>
  )
}
