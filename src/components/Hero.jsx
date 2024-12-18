const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 pl-10 border-b border-gray-700">
        <span className="text-lg font-bold tracking-widest">
          DeveloperForReal
        </span>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-5xl font-bold">Parth Sali</h1>
        <p className="text-lg text-gray-400 max-w-md">
          I am a passionate developer specializing in building user-friendly web
          applications. With a focus on creating immersive and functional
          experiences, I combine creativity and technical expertise to solve
          real-world problems.
        </p>
      </div>
    </div>
  );
};

export default Hero;
