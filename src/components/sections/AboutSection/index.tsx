const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Tentang Cookies Daun Kelor
          </h2>
          <p className="text-gray-700 mb-4">
            Cookies daun kelor adalah inovasi baru dalam dunia camilan
            sehat. Terbuat dari daun kelor yang dikenal sebagai "pohon ajaib,"
            cookies kami menggabungkan manfaat kesehatan daun kelor dengan rasa
            yang lezat dan tekstur yang renyah.
          </p>
        </div>
        <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
          <img
            src="https://placehold.co/400"
            alt="Cookies Daun Kelor"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
