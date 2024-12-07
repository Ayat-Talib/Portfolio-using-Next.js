const Hero = () => (
  <section
    id="hero"
    className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
  >
    {/* Background Animation */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 opacity-60 z-[-1] animate-pulse"></div>

    {/* Profile Picture */}
    <div className="relative mb-12 mt-40">
      <img
        src="/images/profile.png"
        alt="Ayat Talib"
        className="w-[60%] md:w-48 md:h-48 rounded-full shadow-lg ring-4 ring-blue-500 object-cover transform hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
    </div>

    {/* Heading with Typing Animation */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-center animate__animated animate__fadeIn animate__delay-1s">
      Hi, I'm <span className="text-blue-400">Ayat Talib</span>
    </h1>
    
    {/* Description with Fade-In Animation */}
    <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl text-center animate__animated animate__fadeIn animate__delay-2s">
      A passionate web developer specializing in responsive design, animations, and WordPress development. 
      Always eager to learn and explore new technologies, including React, Next.js, and emerging trends in web development to create modern and impactful digital experiences.
    </p>

    {/* CTA Button with Hover Effect */}
    <a
      href="#contact"
      className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 hover:shadow-2xl transition transform hover:scale-105"
    >
      Contact Me
    </a>

    {/* Animated Down Arrow */}
    <div className="mt-12 animate-bounce">
      <a href="#projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  </section>
);

export default Hero;

