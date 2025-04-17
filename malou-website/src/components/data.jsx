// Profile photos
import rilah from '../assets/profiles/rilah.jpg';
import kanto_g from '../assets/profiles/kanto_g.jpg';
import anja from '../assets/profiles/anja.jpg'; 
import christian from '../assets/profiles/christian.jpg';
import coco from '../assets/profiles/coco.jpg';
import enzo from '../assets/profiles/enzo.jpg';
import kanto_s from '../assets/profiles/kanto_s.jpg'; 
import leo from '../assets/profiles/leo.jpg';
import nyantsa from '../assets/profiles/nyantsa.jpg';
import tojo from '../assets/profiles/tojo.jpg';

// Event photos
import amu from '../assets/amu.png';
import photoAG1 from '../assets/events/AG/1.png';
import photoAG2 from '../assets/events/AG/2.jpg';
import photoAG3 from '../assets/events/AG/3.jpg';
import photoAG4 from '../assets/events/AG/4.jpg';       
import photoAG5 from '../assets/events/AG/5.jpg';
import photoAG6 from '../assets/events/AG/6.jpg';
import photoAG7 from '../assets/events/AG/7.jpg';
import photoAG8 from '../assets/events/AG/8.jpg';
import photoAG9 from '../assets/events/AG/9.jpg';
import photoAG10 from '../assets/events/AG/10.jpg';
import photoAG11 from '../assets/events/AG/11.jpg'; 
import photoAG12 from '../assets/events/AG/12.jpg';
import photoAG13 from '../assets/events/AG/13.jpg';
import photoAG14 from '../assets/events/AG/14.jpg';
import photoAG15 from '../assets/events/AG/15.jpg';
import photoAG16 from '../assets/events/AG/16.jpg';
import photoAG17 from '../assets/events/AG/17.jpg';
import photoAG18 from '../assets/events/AG/18.jpg';
import photoAG19 from '../assets/events/AG/19.jpg';
import photoAG20 from '../assets/events/AG/20.jpg';

import photoEm1 from '../assets/events/MadaEmbassy/1.jpg';
import photoEm2 from '../assets/events/MadaEmbassy/2.jpg';
import photoEm3 from '../assets/events/MadaEmbassy/3.jpg';

import photoTre1 from '../assets/events/Trefonds/1.jpg'; 
import photoTre2 from '../assets/events/Trefonds/2.jpg';
import photoTre3 from '../assets/events/Trefonds/3.jpg';
import photoTre4 from '../assets/events/Trefonds/4.jpg';
import photoTre5 from '../assets/events/Trefonds/5.jpg';
import photoTre6 from '../assets/events/Trefonds/6.jpg';
import photoTre7 from '../assets/events/Trefonds/7.jpg';



/* This could allow dynamic import for any image in folders but
** it is too slow for the user
** TODO: find a way to import images dynamically
const AG_images = import.meta.glob('../assets/events/AG/*.{png,jpeg}', {
    eager: true,
    query: 'path',
  });

const AG_imageKeys = Object.keys(AG_images); 
*/

const profiles = [
    {
      id:1,  
      name: 'Rilah',
      role: 'The President',
      description:
        'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.',
      image: rilah,
      email: 'https://email.com/bob.brown',
      linkedin: 'https://linkedin.com/bob_brown',
      instagram: 'https://instagram.com/bob.brown',
    },
    {
      id:2,
      name: 'Kanto',
      role: 'VP marketing & Communication',
      description:
        'Dui sed arcu fermentum viverra a eros dapibus. Duis eget sapien ut libero hendrerit dapibus.',
      image: kanto_g,
      email: 'mailto:name@email.com',
      linkedin: 'https://linkedin.com/sarah_jk',
      instagram: 'https://instagram.com/sarahjenkins',
    },
    {
      id:3,
      name: 'Anjatiana',
      role: 'VP Internal',
      description:
        'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
      image: anja,
      email: 'mailto:name@email.com',
      linkedin: 'https://linkedin.com/marcuxdesign',
      instagram: 'https://instagram.com/marcus.ux',
    },
    {
        id:4,
        name: 'Leo',
        role: 'VP External',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: leo,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
      {
        id:5,
        name: 'Christian',
        role: 'VP Events',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: christian,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
      {
        id:6,
        name: 'Tojo',
        role: 'VP Finance',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: tojo,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
      {
        id:7,
        name: 'Corrinthina',
        role: 'Content Creator',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: coco,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
      {
        id:8,
        name: 'Kanto',
        role: 'Executive Secretary',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: kanto_s,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
      {
        id:9,
        name: 'Ny Antsa',
        role: '3rd & 4th Year Representative',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: nyantsa,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
      {
        id:10,
        name: 'Enzo',
        role: '1st & 2nd Year Representative',
        description:
          'Aliquam erat volutpat. Nullam auctor dolor in mauris fermentum malesuada.',
        image: enzo,
        email: 'mailto:name@email.com',
        linkedin: 'https://linkedin.com/marcuxdesign',
        instagram: 'https://instagram.com/marcus.ux',
      },
  ];

  const events = [
    {
      id: 1,
      title: 'MALOU x A.M.U.',
      date: 'TBA',
      organizers: 'MALOU x A.M.U.',
      location: 'TBA',
      time: 'TBA',
      image: amu,
      coming: true,
      registerLink: 'https://example.com/register-btcc',
      description: 'We are planning to collaborate with A.M.U. to organize a series of events. Stay tuned for more details!',
      gallery: [],
    },
    {
      id: 2,
      title: 'General Assembly',
      date: 'April 5',
      organizers: 'MALOU',
      location: 'CRX 408',
      time: '5 pm',
      image: photoAG1,
      coming: false,
      registerLink: '',
      description: 'Description of the event goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      gallery: [photoAG2, photoAG3, photoAG4, photoAG5, photoAG6, photoAG7, photoAG8, photoAG9, photoAG10, photoAG11, photoAG12, photoAG13, photoAG14, photoAG15, photoAG16, photoAG17, photoAG18, photoAG19, photoAG20 ], 
    },
    {
        id: 4,
        title: 'Visit of the Embassy of Madagascar',
        date: 'March 14',
        organizers: 'MALOU',
        location: 'Madagascar Embassy',
        time: '3pm',
        image: photoEm1,
        coming: false,
        registerLink: '',
        description: "Visit of the Embassy of Madagascar",
        gallery: [photoEm2, photoEm3],
    },
    {
        id: 5,
        title: 'Depths of cultures',
        date: 'February 27',
        organizers: 'MALOU and other clubs',
        location: 'VNR 5070',
        time: '6pm - 10pm',
        image: photoTre1,
        coming: false,
        registerLink: '',
        description: "To wrap up Black History Month in style, we're taking you on an unforgettable cultural journey!",
        gallery: [photoTre2, photoTre3, photoTre4, photoTre5, photoTre6, photoTre7],
    },
  ];
  

  export {profiles, events};