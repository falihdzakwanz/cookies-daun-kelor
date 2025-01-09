import React from 'react';
import { Product } from '../../../../types/product';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 rounded-lg w-full h-48 object-cover transition-transform transform hover:scale-110 duration-300 ease-in-out"
      />
      <h3 className="text-xl font-semibold text-green-700 mb-2">
        {product.name}
      </h3>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-bold text-green-800">{product.price}</p>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-300"
      >
        Beli Sekarang
      </a>
    </div>
  );
};

export default ProductCard;
