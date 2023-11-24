import React from 'react';
import ProductItem from './ProductItem'; // Import the ProductItem component

const ProductCatalog = ({ products, onItemSelect }) => {
  return (
    <div className="product-catalog">
      <h2>Choose a Product to Try On</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            image={product.image}
            onSelect={() => onItemSelect(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
