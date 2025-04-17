import NavBar from './components/navBar.jsx';
import Background from './assets/logo.jpg';
import BackgroundVideo from './components/backgroundVideo';
import QuickLinks from './components/quickLinks.jsx';
import GetToKnow from './components/getToKnow.jsx';
import ContactUs from './components/contactUs.jsx';


export default function App() {
  return (
    <div className="scroll-smooth  ">
      <NavBar />

      <div className='md:-mt-24 sticky top-0 -z-50 '>
        <BackgroundVideo />

        <div className="absolute inset-0 flex justify-center items-center ">
          <h1 className="md:pb-10 text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Malou
          </h1>
        </div>


      </div>

      <div className="w-full flex justify-center bg-white/70 shadow-lg backdrop-blur-sm p-4"> 
             <GetToKnow />
      </div>


      <div className="scroll-mt-24 w-full flex justify-center bg-white/70 shadow-lg backdrop-blur-sm p-4"> 
        <QuickLinks  />      
      </div>
      

      {/* <div className="w-full flex justify-center">
          <img src={Background} alt="Malou Background" className="w-full h-auto" />
      </div> */}
      
      <div>
          <ContactUs />
      </div>
     
     
      
    </div>
  );
}
