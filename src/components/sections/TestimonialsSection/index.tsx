const testimonials = [
  {
    quote:
      "Cookies daun kelor dari KKN ITERA benar-benar enak dan sehat. Anak-anak saya menyukainya dan saya merasa lebih tenang karena mereka mendapatkan nutrisi yang baik.",
    name: "Andi",
  },
  {
    quote:
      "Setelah mencoba cookies daun kelor, saya langsung jatuh cinta! Rasa yang lezat dan manfaat kesehatannya membuat saya selalu ingin membeli lagi.",
    name: "Budi",
  },
  {
    quote:
      "Saya sangat merekomendasikan cookies daun kelor untuk siapa saja yang mencari camilan sehat. Luar biasa!",
    name: "Sari",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Apa Kata Pelanggan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-green-800 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
