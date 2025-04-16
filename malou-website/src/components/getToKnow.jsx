import React from 'react'

export default function getToKnow() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 bg-green-900" >
        <p className="text-3xl font-bold text-center text-white">For everyone or something here</p>

        <br></br>

        <p className="text-2xl text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet vitae dui non ullamcorper. Quisque non ultricies sem. Phasellus congue arcu fringilla sapien porttitor, ut pellentesque libero hendrerit. Cras id ligula et nibh venenatis egestas. Curabitur at est maximus, gravida leo sed, molestie risus. Aenean varius orci in sem luctus, quis rhoncus erat mattis. Sed facilisis malesuada lobortis. Proin nec mauris convallis, iaculis tortor id, tincidunt quam. Integer velit mi, mollis eget consectetur in, posuere eget urna. Vestibulum scelerisque nisi augue, quis ultricies eros viverra ut.</p>

        <br></br>


        <div className="flex justify-center">
            <a href="#" className="flex justify-left text-white text-center bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none">
            Read more {''}

                <svg className="m-0.5 flex justify-right w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

            </a>
            
        </div>

    </section>
  );
};
