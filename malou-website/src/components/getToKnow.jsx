///////////////// Production version ///////////////////////

import React from 'react'
import {Link} from 'react-router-dom'


export default function getToKnow() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 bg-green-900" >
        <p className="text-3xl font-bold text-center text-white">Malagasy at uOttawa (MALOU)</p>

        <br></br>

        <p className="text-2xl text-center text-white"> is a vibrant and welcoming student association dedicated to promoting Malagasy culture and showcasing the beauty of Madagascar at the University of Ottawa. We organize cultural events, interactive workshops, and fun activities that celebrate diversity, francophonie, and solidarity. Whether you’re Malagasy or simply curious about our island, MALOU offers a space where everyone feels at home, connects, and thrives. Come meet a warm community, build meaningful connections, and celebrate Madagascar with us!  </p>

        <br></br>


        <div className="flex justify-center">
            <Link to ="/AboutUs" className="flex justify-left text-white text-center bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none">
            Meet our team 

                <svg className="m-0.5 flex justify-right w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

            </Link>
            
        </div>

    </section>
  );
};



////////////////// Developement version ///////////////////////


/* import React from 'react'
import {Link} from 'react-router-dom'


export default function getToKnow() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 bg-green-900" >
        <p className="text-3xl font-bold text-center text-white">Malagasy at uOttawa (MALOU)</p>

        <br></br>

        <p className="text-2xl text-center text-white"> is a vibrant and welcoming student association dedicated to promoting Malagasy culture and showcasing the beauty of Madagascar at the University of Ottawa. We organize cultural events, interactive workshops, and fun activities that celebrate diversity, francophonie, and solidarity. Whether you’re Malagasy or simply curious about our island, MALOU offers a space where everyone feels at home, connects, and thrives. Come meet a warm community, build meaningful connections, and celebrate Madagascar with us!  </p>

        <br></br>


        <div className="flex justify-center">
            <Link to ="/malou/AboutUs" className="flex justify-left text-white text-center bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none">
            Meet our team 

                <svg className="m-0.5 flex justify-right w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

            </Link>
            
        </div>

    </section>
  );
};
 */