///////////////// Production version ///////////////////////

import malouLogo from '../assets/logo.png';
import '../index.css';
import {Link} from 'react-router-dom'
// import { useParams } from 'react-router-dom';

export default function navBar() {
  // const params = useParams();
  // console.log(params);
  return (
    <nav className="border-green-200 bg-green-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to ="/" className="flex items-center space-x-3">
          <img src={malouLogo} className="h-8" alt="Malou Logo" />
          <span className="text-2xl font-semibold text-white">MALOU</span>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-10 text-white font-medium">
            <li><Link to ="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to ="/Events" className="hover:text-green-600">Events</Link></li>

            {/* <li><a href="#News" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#News').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="hover:text-green-600">News</a></li> */}

            <li><a href="https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses" className="hover:text-green-600">Join</a></li>
            <li><Link to ="/AboutUs" className="hover:text-green-600">About</Link></li>
          </ul>
        </div>

        {/* Language Toggle (Right on desktop, center on mobile) */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-end relative">
          <input type="checkbox" id="lang-toggle" className="hidden peer" />

          <label htmlFor="lang-toggle" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 hover:text-white">
            <img src="https://rlv.zcache.ca/canadian_flag_of_canada_maple_leaf_square_sticker-r466748126c7c46ce87a0a1262a765921_0ugra_8byvr_200.webp" className="w-5 h-5 rounded-full me-3" alt="Canada Flag" />
            English (CA) {''}
          </label>

          <div className="absolute hidden peer-checked:block top-full mt-2 w-48 border border-green-200 rounded-lg shadow-md bg-green-700 z-50">
            <ul className="py-2 text-sm text-white">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-green-600">
                  <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5 rounded-full me-3 inline-block" alt="French Flag" />
                  Français {''}
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-green-600">
                  <img src="https://flagpedia.net/data/flags/w580/mg.webp" className="w-5 h-5 rounded-full me-3 inline-block" alt="Madagascar Flag" />
                  Malagasy {''}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <div className="md:hidden ml-4">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

          <label htmlFor="menu-toggle" className="cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Mobile Menu */}
          <div className="absolute right-4 mt-2 hidden peer-checked:block bg-green-900 border border-green-200 rounded-lg shadow-lg z-50">
            <ul className="text-white font-medium">
              <li><Link to ="/" className="block px-4 py-2 hover:bg-green-700">Home</Link></li>
              <li><Link to ="/Events" className="block px-4 py-2 hover:bg-green-700">Events</Link></li>
              {/* <li><a href="#News" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#News').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="block px-4 py-2 hover:text-green-600">News</a></li> */}
              <li><a href="https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses" className="block px-4 py-2 hover:text-green-600">Join</a></li>
              <li><Link to ="/AboutUs" className="block px-4 py-2 hover:text-green-600">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}


////////////////// Developement version ///////////////////////


// import malouLogo from '../assets/logo.png';
// import '../index.css';
// import {Link} from 'react-router-dom'
// // import { useParams } from 'react-router-dom';

// export default function navBar() {
//   // const params = useParams();
//   // console.log(params);
//   return (
//     <nav className="border-green-200 bg-green-900 sticky top-0 z-50 shadow-md">
//       <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to ="/malou/" className="flex items-center space-x-3">
//           <img src={malouLogo} className="h-8" alt="Malou Logo" />
//           <span className="text-2xl font-semibold text-white">MALOU</span>
//         </Link>

//         {/* Center Nav Links (Desktop) */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <ul className="flex space-x-10 text-white font-medium">
//             <li><Link to ="/malou/" className="hover:text-green-600">Home</Link></li>
//             <li><Link to ="/malou/Events" className="hover:text-green-600">Events</Link></li>

//             {/* <li><a href="#News" 
//             onClick={(e) => {
//               e.preventDefault();
//               document.querySelector('#News').scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//               });
//             }}
//             className="hover:text-green-600">News</a></li> */}

//             <li><a href="https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses" className="hover:text-green-600">Join</a></li>
//             <li><Link to ="/malou/AboutUs" className="hover:text-green-600">About</Link></li>
//           </ul>
//         </div>

//         {/* Language Toggle (Right on desktop, center on mobile) */}
//         <div className="flex-1 md:flex-none flex justify-center md:justify-end relative">
//           <input type="checkbox" id="lang-toggle" className="hidden peer" />

//           <label htmlFor="lang-toggle" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 hover:text-white">
//             <img src="https://rlv.zcache.ca/canadian_flag_of_canada_maple_leaf_square_sticker-r466748126c7c46ce87a0a1262a765921_0ugra_8byvr_200.webp" className="w-5 h-5 rounded-full me-3" alt="Canada Flag" />
//             English (CA) {''}
//           </label>

//           <div className="absolute hidden peer-checked:block top-full mt-2 w-48 border border-green-200 rounded-lg shadow-md bg-green-700 z-50">
//             <ul className="py-2 text-sm text-white">
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-green-600">
//                   <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5 rounded-full me-3 inline-block" alt="French Flag" />
//                   Français {''}
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-green-600">
//                   <img src="https://flagpedia.net/data/flags/w580/mg.webp" className="w-5 h-5 rounded-full me-3 inline-block" alt="Madagascar Flag" />
//                   Malagasy {''}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Hamburger Menu (Mobile only) */}
//         <div className="md:hidden ml-4">
//           <input type="checkbox" id="menu-toggle" className="hidden peer" />

//           <label htmlFor="menu-toggle" className="cursor-pointer">
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </label>

//           {/* Mobile Menu */}
//           <div className="absolute right-4 mt-2 hidden peer-checked:block bg-green-900 border border-green-200 rounded-lg shadow-lg z-50">
//             <ul className="text-white font-medium">
//               <li><Link to ="/malou/" className="block px-4 py-2 hover:bg-green-700">Home</Link></li>
//               <li><Link to ="/malou/Events" className="block px-4 py-2 hover:bg-green-700">Events</Link></li>
//               {/* <li><a href="#News" 
//               onClick={(e) => {
//                 e.preventDefault();
//                 document.querySelector('#News').scrollIntoView({
//                   behavior: 'smooth',
//                   block: 'start'
//                 });
//               }}
//               className="block px-4 py-2 hover:text-green-600">News</a></li> */}
//               <li><a href="https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses" className="block px-4 py-2 hover:text-green-600">Join</a></li>
//               <li><Link to ="/malou/AboutUs" className="block px-4 py-2 hover:text-green-600">About</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
