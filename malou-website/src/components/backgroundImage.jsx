const ImageOverlay = () => {
    return (
      <div className="relative w-full max-w-md mx-auto">
        {/* Background image */}
        <img
          src="./src/assets/logo.jpg"
          alt="Background"
          className="rounded-lg"
        />
  
        {/* Overlay image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/512px-Stack_Overflow_logo.svg.png"
          alt="Overlay"
          className="absolute top-1/2 left-1/2 w-24 opacity-70 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  };
  
  export default ImageOverlay;
  