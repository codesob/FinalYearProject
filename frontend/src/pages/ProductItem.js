import React from 'react';

const ProductItem = ({ name, image, onSelect }) => {
  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button onClick={onSelect}>Try On</button>
    </div>
  );
};

export default ProductItem;
