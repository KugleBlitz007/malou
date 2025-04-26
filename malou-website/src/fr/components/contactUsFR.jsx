import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <footer  className="bg-green-900 px-4 md:px-16 lg:px-28 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-1">
                <h2 className="text-lg font-bold mb-4 text-white">
                À propos de nous
                </h2>
                <p className="text-gray-300">
                Nous sommes une association étudiante francophone et accueillante qui célèbre 
                la culture malgache et la beauté de Madagascar à travers des événements, 
                des ateliers et des activités. Que vous soyez malgache ou simple curieux, MALOU 
                est un espace dynamique pour se connecter, partager et s'épanouir !
                </p>
            </div>

            <div className="md:order-2">
                <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
                <ul className="flex space-x-4">                  
                    <li>
                        {" "}
                        <FaInstagram className="text-orange-500" />{" "}
                        <a href="https://www.instagram.com/malou_uottawa/" className="text-white hover:text-orange-500">Instagram</a>
                    </li>                
                </ul>
            </div>
        </div>

        <div className=" pt-6 text-gray-300 text-center mt-6 hover:text">
            <p>© 2025 site Web par <a href="https://github.com/KugleBlitz007" className="hover:text-amber-300">Johann Rajosefa</a></p>
        </div>
    </footer>
  )
}