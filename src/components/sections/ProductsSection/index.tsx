import React from 'react';
import ProductCard from './Card';
import { Product } from '../../../types/product';

const products: Product[] = [
  {
    image: "/products/cookiesDisplay.jpg",
    name: "Cookies Daun Kelor",
    description: "Cookies daun kelor dengan rasa asli yang kaya akan nutrisi.",
    price: "Rp2.000",
    link: "https://id.shp.ee/mM3R9i2",
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
