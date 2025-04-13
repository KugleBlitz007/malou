import NavBar from './components/navBar.jsx';
import Background from './assets/logo.jpg';
import BackgroundVideo from './components/backgroundVideo';
import IgReels from './components/igReels.jsx';

export default function Form() {
  return (
    <div className="scroll-smooth">
      <NavBar />

      <div className='md:-m-24 sticky top-0 -z-50'>
        <BackgroundVideo />

        <div className="absolute inset-0 flex justify-center items-center ">
          <h1 className="md:pb-10 text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Malou
          </h1>
        </div>


      </div>


      <div id="News" className="scroll-mt-24 w-full flex justify-center bg-white/70 shadow-lg backdrop-blur-sm p-4"> 
        <IgReels  />      
      </div>
      

      <div className="w-full flex justify-center">
          <img src={Background} alt="Malou Background" className="w-full h-auto" />
      </div>
      
   
     
     
      
    </div>
  );
}
