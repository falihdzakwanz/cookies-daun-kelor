const HeroSection = () => {
    return (
      <section id="home" className="bg-green-800 text-white py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 px-4">
            <h1 className="text-4xl font-bold mb-4">Kebaikan Alam di Setiap Gigitan</h1>
            <p className="text-xl mb-6">
              Nikmati manfaat luar biasa dari daun kelor dalam cookies lezat kami. Sehat, bergizi, dan penuh rasa!
            </p>
            <a href="#products" className="inline-block bg-yellow-400 text-green-800 font-semibold px-6 py-2 rounded transition duration-300 hover:bg-yellow-500">
              Coba Sekarang
            </a>
          </div>
          <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
            <img src="https://placehold.co/400" alt="Cookies Daun Kelor" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  