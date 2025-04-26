import React, { useState } from 'react';
import EventPopup from './eventPopupFR.jsx';

export default function EventCard({ event }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden border border-green-700 backdrop-blur-sm w-full max-w-3xl mx-auto bg-cover bg-center text-white p-4" style={{ backgroundImage: `url(${event.image})` }}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="bg-black/50 rounded-lg px-6 py-4 text-center backdrop-blur-sm">
          <p className="text-lg font-semibold">{event.date}</p>
        </div>

        <div className="bg-black/50 rounded-lg p-4 w-full md:w-2/3 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-sm mb-1">{event.organizers}</p>
          <p className="text-sm mb-1">Emplacement: {event.location}</p>
          <p className="text-sm mb-4">L'heure: {event.time}</p>

          <div className="flex gap-4">
            {event.coming && event.registerLink && (
              <a
                href={event.registerLink}
                target="_blank"
                rel="noreferrer"
                className="border text-white text-sm px-4 py-2 rounded hover:bg-green-900"
              >
                S'INSCRIRE
              </a>
            )}
            <button
              onClick={() => setOpen(true)}
              className="border border-white/50 text-white text-sm px-4 py-2 rounded hover:bg-gray-300"
            >
              EN SAVOIR PLUS
            </button>
          </div>
        </div>

      </div>

      {open && <EventPopup event={event} onClose={() => setOpen(false)} />}
    </div>
  );
}
