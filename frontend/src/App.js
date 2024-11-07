
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ListofProducts from './pages/ListofProducts';
import ShoppingCart from './pages/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import f1 from "./assets/f1.jpg";
import f2 from "./assets/f2.jpg";
import f3 from "./assets/f3.jpg";
import f4 from "./assets/f4.jpg";
import f5 from "./assets/f5.jpg";
import f6 from "./assets/f6.jpg";
import f7 from "./assets/f7.jpg";
import f8 from "./assets/f8.jpg";
import f9 from "./assets/f9.jpg";
import f10 from "./assets/f10.webp";
import f11 from "./assets/f11.webp";
import f12 from "./assets/f12.png";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, src: f1, name: "Floral" },
    { id: 2, src: f2, name: "Sweep" },
    { id: 3, src: f3, name: "Marshell" },
    { id: 4, src: f4, name: "Markery" },
    { id: 5, src: f5, name: "Anese" },
    { id: 6, src: f6, name: "Baseball" },
    { id: 7, src: f7, name: "Wondery" },
    { id: 8, src: f8, name: "Kireshi" },
    { id: 9, src: f9, name: "Carriage" },
    { id: 10, src: f10, name: "Denims" },
    { id: 11, src: f11, name: "Eagle" },
    { id: 12, src: f12, name: "German" }
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListofProducts products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

