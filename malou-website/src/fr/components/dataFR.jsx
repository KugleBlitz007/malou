// Profile photos
import rilah from '../../assets/profiles/rilah.jpg';
import kanto_g from '../../assets/profiles/kanto_g.jpg';
import anja from '../../assets/profiles/anja.jpg'; 
import christian from '../../assets/profiles/christian.jpg';
import coco from '../../assets/profiles/coco.jpg';
import enzo from '../../assets/profiles/enzo.jpg';
import kanto_s from '../../assets/profiles/kanto_s.jpg'; 
import leo from '../../assets/profiles/leo.jpg';
import nyantsa from '../../assets/profiles/nyantsa.jpg';
import tojo from '../../assets/profiles/tojo.jpg';

// Event photos
import amu from '../../assets/amu.png';
import photoAG1 from '../../assets/events/AG/1.png';
import photoAG2 from '../../assets/events/AG/2.jpg';
import photoAG3 from '../../assets/events/AG/3.jpg';
import photoAG4 from '../../assets/events/AG/4.jpg';       
import photoAG5 from '../../assets/events/AG/5.jpg';
import photoAG6 from '../../assets/events/AG/6.jpg';
import photoAG7 from '../../assets/events/AG/7.jpg';
import photoAG8 from '../../assets/events/AG/8.jpg';
import photoAG9 from '../../assets/events/AG/9.jpg';
import photoAG10 from '../../assets/events/AG/10.jpg';
import photoAG11 from '../../assets/events/AG/11.jpg'; 
import photoAG12 from '../../assets/events/AG/12.jpg';
import photoAG13 from '../../assets/events/AG/13.jpg';
import photoAG14 from '../../assets/events/AG/14.jpg';
import photoAG15 from '../../assets/events/AG/15.jpg';
import photoAG16 from '../../assets/events/AG/16.jpg';
import photoAG17 from '../../assets/events/AG/17.jpg';
import photoAG18 from '../../assets/events/AG/18.jpg';
import photoAG19 from '../../assets/events/AG/19.jpg';
import photoAG20 from '../../assets/events/AG/20.jpg';

import photoEm1 from '../../assets/events/MadaEmbassy/1.jpg';
import photoEm2 from '../../assets/events/MadaEmbassy/2.jpg';
import photoEm3 from '../../assets/events/MadaEmbassy/3.jpg';

import photoTre1 from '../../assets/events/Trefonds/1.jpg'; 
import photoTre2 from '../../assets/events/Trefonds/2.jpg';
import photoTre3 from '../../assets/events/Trefonds/3.jpg';
import photoTre4 from '../../assets/events/Trefonds/4.jpg';
import photoTre5 from '../../assets/events/Trefonds/5.jpg';
import photoTre6 from '../../assets/events/Trefonds/6.jpg';
import photoTre7 from '../../assets/events/Trefonds/7.jpg';



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
      role: 'Le Président',
      description:
        'Science politique',
      image: rilah,
      email: 'mailto:r1ratsimbazafy@gmail.com',
      linkedin: 'https://www.linkedin.com/in/rilah-ratsimbazafy-andriananja-2b4b24235/',
      instagram: 'https://www.instagram.com/the_rilah_1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    {
      id:2,
      name: 'Kanto',
      role: 'VP marketing & Communication',
      description:
        'Marketing & Communication',
      image: kanto_g,
      email: '',
      linkedin: 'https://www.linkedin.com/in/kanto-andrianirina/',
      instagram: 'https://www.instagram.com/kantouuu._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    {
      id:3,
      name: 'Anjatiana',
      role: 'VP Interne',
      description:
        'Génie civil',
      image: anja,
      email: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/dzamakely/',
    },
    {
        id:4,
        name: 'Leo',
        role: 'VP Externe',
        description:
          'Science politique',
        image: leo,
        email: '',
        linkedin: '',
        instagram: 'https://www.instagram.com/call.me.leoo_/',
      },
      {
        id:5,
        name: 'Christian',
        role: 'VP Événements',
        description:
          '',
        image: christian,
        email: '',
        linkedin: '',
        instagram: 'https://www.instagram.com/christian.rdr/',
      },
      {
        id:6,
        name: 'Tojo',
        role: 'VP Finance',
        description:
          "Business, Management, Marketing,",
        image: tojo,
        email: 'mailto:tojovlsrakotonjanahary@gmail.com',
        linkedin: 'https://www.linkedin.com/in/tojo-rakotonjanahary-44651b259/',
        instagram: 'https://www.instagram.com/tojo_vls/',
      },
      {
        id:7,
        name: 'Corrinthina',
        role: 'Créatrice de contenu',
        description:
          'Spécialiste junior en marketing numérique',
        image: coco,
        email: 'mailto:corrinthina@outlook.com',
        linkedin: 'https://linkedin.com/in/corrinthina',
        instagram: 'https://www.instagram.com/corrinthina/',
      },
      {
        id:8,
        name: 'Kanto',
        role: 'Secrétaire exécutif',
        description:
          '',
        image: kanto_s,
        email: '',
        linkedin: 'https://www.linkedin.com/in/kanto-rajemison-a4b940336/',
        instagram: 'https://www.instagram.com/kantouu_2006/',
      },
      {
        id:9,
        name: 'Ny Antsa',
        role: 'Représentant 3e & 4e année',
        description:
          'Génie civil',
        image: nyantsa,
        email: '',
        linkedin: '',
        instagram: '',
      },
      {
        id:10,
        name: 'Enzo',
        role: 'Représentant 1ere & 2e année',
        description:
          'Administration et gestion des affaires, général',
        image: enzo,
        email: '',
        linkedin: 'https://www.linkedin.com/in/nambinintsoa-enzo-tsilanizara-1aa2172a5/',
        instagram: '',
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
      description: "Nous prévoyons de collaborer avec l'A.M.U. pour organiser une série d'événements. Restez connectés pour plus de détails !",
      gallery: [],
    },
    {
      id: 2,
      title: 'Assemblée générale',
      date: '5 Avril',
      organizers: 'MALOU',
      location: 'CRX 408',
      time: '17h',
      image: photoAG1,
      coming: false,
      registerLink: '',
      description: "Lors de notre assemblée générale, nous avons présenté les membres du comité exécutif et le club MALOU. L'ambiance était festive : nous avons joué, chanté, beaucoup mangé et profité de délicieux mets offerts par notre sponsor, Orange Turtle Bakery.",
      gallery: [photoAG2, photoAG3, photoAG4, photoAG5, photoAG6, photoAG7, photoAG8, photoAG9, photoAG10, photoAG11, photoAG12, photoAG13, photoAG14, photoAG15, photoAG16, photoAG17, photoAG18, photoAG19, photoAG20 ], 
    },
    {
        id: 4,
        title: "Visite de l'ambassade de Madagascar",
        date: '14 Mars',
        organizers: 'MALOU',
        location: 'Ambassade de Madagascar',
        time: '15h',
        image: photoEm1,
        coming: false,
        registerLink: '',
        description: "Lors de la visite de l'ambassade de Madagascar, les représentants nous ont présenté les différents services et le rôle de l'ambassade. Après la présentation, nous avons partagé un moment convivial avec des jeux et de la nourriture.",
        gallery: [photoEm2, photoEm3],
    },
    {
        id: 5,
        title: 'Tréfonds de cultures',
        date: '27 Février',
        organizers: "MALOU et d'autres clubs",
        location: 'VNR 5070',
        time: '18h - 22h',
        image: photoTre1,
        coming: false,
        registerLink: '',
        description: "Pour clôturer en beauté le Mois de l'histoire des noirs, on vous embarque pour un voyage culturel inoubliable !",
        gallery: [photoTre2, photoTre3, photoTre4, photoTre5, photoTre6, photoTre7],
    },
  ];
  

  export {profiles, events};