import React from 'react';
import latest1 from '../assets/latest1.jpg';
import latest2 from '../assets/latest2.jpg';
import latest3 from '../assets/latest3.jpg';

// Placeholder data for reels
const reels = [
  {
    id: 1,
    title: 'Celebrating Madagascar Culture',
    videoUrl: 'https://www.instagram.com/p/DIB591ls23o/',
    thumbnail: latest1
  },
  {
    id: 2,
    title: 'GA is arround the corner!',
    videoUrl: 'https://www.instagram.com/p/DH_oBMFvMGs/',
    thumbnail: latest2
  },
  {
    id: 3,
    title: 'GA is coming!',
    videoUrl: 'https://www.instagram.com/malou_uottawa/reel/DH6LPR8MWSK/',
    thumbnail: latest3
  }
];

const InstagramReels = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-900">
        Our latest Instagram Reels
      </h2>

      {/* Desktop View: 3 Reels */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {reels.map(reel => (
          <a key={reel.id} href={reel.videoUrl} target="_blank" rel="noopener noreferrer" className="bg-green-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={reel.thumbnail} alt={reel.title} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{reel.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile View: Only the latest reel */}
      <div className="md:hidden">
        <a href={reels[0].videoUrl} target="_blank" rel="noopener noreferrer" className="bg-green-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 block">
          <img src={reels[0].thumbnail} alt={reels[0].title} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{reels[0].title}</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default InstagramReels;
