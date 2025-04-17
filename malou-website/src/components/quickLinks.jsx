import React from 'react';
import Logo from '../assets/logo.jpg';

const quickLinks = [
  {
    id: 1,
    title: 'MALOU : Un bout de Madagascar à l’Université d’Ottawa',
    videoUrl: 'https://www.larotonde.ca/malou-un-bout-de-madagascar-a-luniversite-dottawa/#',
    thumbnail: 'https://www.larotonde.ca/wp-content/uploads/2025/03/club-malgache-2048-x-2048-px-768x768.jpg.webp'
  },
  {
    id: 2,
    title: 'Join MALOU',
    videoUrl: 'https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses',
    thumbnail: Logo
  },
];

const QuickLinks = () => {
  const isOne = quickLinks.length === 1;
  const isTwo = quickLinks.length === 2;

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-900">
        Quick links
      </h2>

      {/* Responsive Layout */}
      <div
        className={`
          hidden md:grid gap-6
          ${isOne ? 'grid-cols-1 place-items-center' : ''}
          ${isTwo ? 'grid-cols-2 justify-center' : ''}
          ${!isOne && !isTwo ? 'grid-cols-3 place-items-center' : ''}
        `}
      >
        {quickLinks.map(link => (
          <a
            key={link.id}
            href={link.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-xs"
          >
            <img src={link.thumbnail} alt={link.title} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{link.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile View: Single Column */}
      <div className="md:hidden space-y-6">
        {quickLinks.map(link => (
          <a
            key={link.id}
            href={link.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 block"
          >
            <img src={link.thumbnail} alt={link.title} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{link.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
