import 'flowbite';
import { Dropdown } from 'flowbite-react';
import malouLogo from '../assets/logo.png';
import '../index.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (

<nav className="bg-white border-green-200 dark:bg-green-900">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://www.instagram.com/malou_uottawa/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={malouLogo} className="h-8" alt="Malou Logo" />
          <span className="text-2xl font-semibold text-white">MALOU</span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-10 text-white font-medium">
            <li><Link to="/malou/" className="hover:text-green-600">Home</Link></li>
            <li><a href="#News" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#News').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="hover:text-green-600">News</a></li>
            <li><a href="https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses" className="hover:text-green-600">Join</a></li>
            <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          </ul>
        </div>

        {/* Language Toggle (Right on desktop, center on mobile) */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-end relative">
          <input type="checkbox" id="lang-toggle" className="hidden peer" />

          <label htmlFor="lang-toggle" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 hover:text-white">
            <img src="https://rlv.zcache.ca/canadian_flag_of_canada_maple_leaf_square_sticker-r466748126c7c46ce87a0a1262a765921_0ugra_8byvr_200.webp" className="w-5 h-5 rounded-full me-3" alt="Canada Flag" />
            English (CA) {''}
          </label>

            <li>
              <a href="www.example.com" className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                  <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5 rounded-full me-3" alt="French Flag" />
                  Français {''}
                </div>
              </a>
            </li>

            <li>
              <a href="www.example.com" className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                  <img src="https://flagpedia.net/data/flags/w580/mg.webp" className="w-5 h-5 rounded-full me-3" alt="Madagascar Flag" />
                  Malagasy {''}
                </div>
              </a>
            </li>
        </ul>

      </div>

      <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-green-600" aria-controls="navbar-language" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

          {/* Mobile Menu */}
          <div className="absolute right-4 mt-2 hidden peer-checked:block bg-green-900 border border-green-200 rounded-lg shadow-lg z-50">
            <ul className="text-white font-medium">
              <li><a href="#" className="block px-4 py-2 hover:bg-green-700">Home</a></li>
              <li><a href="#News" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#News').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="block px-4 py-2 hover:text-green-600">News</a></li>
              <li><a href="https://docs.google.com/forms/d/1PHTyb86DdeZZEMI5imUf7hVbkCOl7mLGx-un8-daawM/viewform?edit_requested=true#responses" className="block px-4 py-2 hover:text-green-600">Join</a></li>
              <li><Link to="/about" className="block px-4 py-2 hover:text-green-600">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}