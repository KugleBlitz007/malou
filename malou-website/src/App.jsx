import NavBar from './components/navBar.jsx';
import Background from './assets/logo.jpg';
import BackgroundVideo from './components/backgroundVideo';

export default function Form() {
  return (
    <>
      <NavBar />

      <div className='relative'>
        <BackgroundVideo />

        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Malou
          </h1>
        </div>


      </div>

      <div className="w-full flex justify-center">
          <img src={Background} alt="Malou Background" className="w-full h-auto" />
        </div>
    </>
  );
}
