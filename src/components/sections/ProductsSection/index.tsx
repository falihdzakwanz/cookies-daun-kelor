const products = [
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor Original",
    description: "Cookies daun kelor dengan rasa asli yang kaya akan nutrisi.",
    price: "Rp50.000",
  },
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor dengan Cokelat",
    description: "Kombinasi sempurna antara daun kelor dan cokelat premium.",
    price: "Rp60.000",
  },
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor dengan Kacang Almond",
    description:
      "Cookies renyah dengan tambahan kacang almond yang kaya nutrisi.",
    price: "Rp65.000",
  },
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor Rasa Vanila",
    description: "Sensasi rasa vanila yang memanjakan lidah Anda.",
    price: "Rp55.000",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Produk Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-green-800">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
