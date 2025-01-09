import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-green-800 text-white py-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        <div className="lg:w-1/2 px-4">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 animate-fade-in-down">
            Kebaikan Alam di Setiap Gigitan
          </h1>
          <p className="text-lg lg:text-xl mb-6 animate-fade-in-up">
            Nikmati manfaat luar biasa dari daun kelor dalam cookies lezat kami. Sehat, bergizi, dan penuh rasa!
          </p>
          <a
            href="#products"
            className="inline-block bg-yellow-400 text-green-800 font-semibold px-6 py-2 rounded transition duration-300 hover:bg-yellow-500 hover:text-white animate-bounce"
          >
            Coba Sekarang
          </a>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src="https://placehold.co/400"
            alt="Cookies Daun Kelor"
            className="rounded-lg shadow-lg mx-auto animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
