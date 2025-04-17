// EventPopup.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

export default function EventPopup({ event, onClose }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg overflow-hidden max-w-xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Image */}
        <img src={event.image} alt={event.title} className="w-full h-60 object-cover" />

        {/* Content */}
        <div className="p-6 text-black">
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          <p className="text-sm mb-4">{event.description}</p>

          {/* Gallery if not coming */}
          {!event.coming && event.gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {event.gallery.map((img, index) => (
                <img 
                key={index} 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-32 object-cover rounded" 
                loading="lazy"
                />
              ))}
            </div>
          )}

          {/* Register button only if coming */}
          {event.coming && (
            <a
              href={event.registerLink}
              target="_blank"
              rel="noreferrer"
              className="border border-black text-black px-4 py-2 rounded hover:bg-green-700"
            >
              REGISTER
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}