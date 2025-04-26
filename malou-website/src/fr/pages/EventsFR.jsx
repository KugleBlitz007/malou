import React from 'react'
import NavBar from '../components/navBarFR.jsx';
import ContactUs from '../components/contactUsFR.jsx';
import {events} from '../components/dataFR.jsx';
import EventCard from '../components/eventCardFR.jsx';




export default function Events() {
  return (
    <div>
        <NavBar />


        <h2 className="text-3xl font-bold text-center text-green-900 p-8">Événements à venir</h2>
      {events.filter(e => e.coming).map(event => (
        <div key={event.id} className="px-4">
        <EventCard key={event.id} event={event} />
        </div>
      ))}

      <h2 className="text-3xl font-bold text-center text-green-900 p-8">Événements passés</h2>
      {events.filter(e => !e.coming).map(event => (
        <div key={event.id} className="px-4 pb-4">
        <EventCard key={event.id} event={event} />
        </div>
      ))}


        <ContactUs />
    </div>
  )
}
