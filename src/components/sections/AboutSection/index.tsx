import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 min-h-screen flex items-center">
      <div className="container m-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 px-4 mb-8 lg:mb-0 text-center lg:text-left animate-fade-in-left">
          <h2 className="text-2xl font-bold text-green-800 mb-8 lg:text-4xl">Tentang Cookies</h2>
          <p className="text-gray-700 lg:text-xl mb-4">
            Cookies daun kelor adalah inovasi baru dalam dunia camilan sehat. Terbuat dari daun kelor yang dikenal sebagai "pohon ajaib," cookies kami menggabungkan manfaat kesehatan daun kelor dengan rasa yang lezat dan tekstur yang renyah.
          </p>
        </div>
        <div className="lg:w-1/2 px-4 animate-fade-in-right">
        <img
            src="/products/cookiesWithPackaging.jpg"
            alt="Cookies Daun Kelor"
            className="rounded-lg shadow-lg mx-auto animate-fade-in h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
