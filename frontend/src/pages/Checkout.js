import React from 'react';

const Checkout = ({ selectedItem, onCheckout }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {selectedItem ? (
        <div className="selected-item">
          <h3>Selected Item: {selectedItem.name}</h3>
          <img src={selectedItem.image} alt={selectedItem.name} />
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </div>
      ) : (
        <p>No item selected for checkout.</p>
      )}
    </div>
  );
};

export default Checkout;
