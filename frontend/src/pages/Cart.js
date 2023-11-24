import React from 'react';

const Cart = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => onRemoveItem(item)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
