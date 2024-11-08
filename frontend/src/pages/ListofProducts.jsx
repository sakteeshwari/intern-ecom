import React, { useState } from "react";

const ListofProducts = ({ products, addToCart }) => {
  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product); // Use the addToCart function passed as a prop
    setDisabledButtons((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="grid grid-cols-2 gap-3 items-center m-2 mt-16 lg:mt-16 lg:grid lg:grid-cols-3  lg:m-5 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="relative">
          <img className="h-60 w-60  lg:ml-14 " src={product.src} alt={product.name} />
          <div className="text-center">
            <span className="font-semibold">{product.name}</span>
            <br />
            <button
              onClick={() => handleAddToCart(product)}
              disabled={disabledButtons[product.id]}
              className={`bg-cyan-600 mt-3 p-2 rounded text-white hover:bg-cyan-600 ${
                disabledButtons[product.id] ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {disabledButtons[product.id] ? "Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListofProducts;
