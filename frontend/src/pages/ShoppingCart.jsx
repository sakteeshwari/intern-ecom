



import React from "react";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-2 border-b">
              <img src={item.src} alt={item.name} className="h-32 w-32" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
