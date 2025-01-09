import React from 'react';
import ProductCard from './Card';
import { Product } from '../../../types/product';

const products: Product[] = [
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor Original",
    description: "Cookies daun kelor dengan rasa asli yang kaya akan nutrisi.",
    price: "Rp50.000",
    link: "https://id.shp.ee/CuGeA7B",
  },
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor dengan Cokelat",
    description: "Kombinasi sempurna antara daun kelor dan cokelat premium.",
    price: "Rp60.000",
    link: "https://id.shp.ee/CuGeA7B",
  },
  {
    image: "https://placehold.co/400",
    name: "Cookies Daun Kelor dengan Kacang Almond",
    description:
      "Cookies renyah dengan tambahan kacang almond yang kaya nutrisi.",
    price: "Rp65.000",
    link: "https://id.shp.ee/CuGeA7B",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Produk Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
