import 'flowbite';
import malouLogo from '../assets/logo.png';

export default function NavBar() {
    return (

<nav className="bg-white border-green-200 dark:bg-green-900">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://www.instagram.com/malou_uottawa/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={malouLogo} className="h-8" alt="Malou Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MALOU</span>
      </a>

  <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-green-900 dark:text-white rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white">
          <img src="https://rlv.zcache.ca/canadian_flag_of_canada_maple_leaf_square_sticker-r466748126c7c46ce87a0a1262a765921_0ugra_8byvr_200.webp" className="w-5 h-5 rounded-full me-3" alt="Canada Flag" />
              English (CA) {''}
      </button>

      {/*Dropdown*/}

      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-green-100 rounded-lg shadow-sm dark:bg-green-700" id="language-dropdown-menu">
          <ul className="py-2 font-medium" role="none">
            <li>
              <a href="www.example.com" className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                  <img src="https://rlv.zcache.ca/canadian_flag_of_canada_maple_leaf_square_sticker-r466748126c7c46ce87a0a1262a765921_0ugra_8byvr_200.webp" className="w-5 h-5 rounded-full me-3" alt="Canada Flag" />
                  English (CA) {''}
                </div>
              </a>
            </li>

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

  </div>
  
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-green-100 rounded-lg bg-green-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-green-800 md:dark:bg-green-900 dark:border-green-700">
      <li>
        <a href="www.example.com" className="block py-2 px-3 text-white bg-green-700 rounded-sm md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="www.example.com" className="block py-2 px-3 md:p-0 text-green-900 rounded-sm hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">About</a>
      </li>
      <li>
        <a href="www.example.com" className="block py-2 px-3 md:p-0 text-green-900 rounded-sm hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">Services</a>
      </li>
      <li>
        <a href="www.example.com" className="block py-2 px-3 md:p-0 text-green-900 rounded-sm hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">Pricing</a>
      </li>
      <li>
        <a href="www.example.com" className="block py-2 px-3 md:p-0 text-green-900 rounded-sm hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
}