import React, { useState } from "react";
import ProductList from "./shoelist";
import Cart from "./cart";

const Navbar = () => (
  <div
    style={{
      backgroundColor: "#222",
      color: "#fff",
      padding: "15px",
      textAlign: "center",
      fontSize: "20px",
    }}
  >
    🛍️ Shoe Store
  </div>
);

const Footer = () => (
  <div
    style={{
      backgroundColor: "#222",
      color: "#fff",
      padding: "10px",
      textAlign: "center",
      marginTop: "20px",
    }}
  >
    © 2026 React Shopping Cart Assignment
  </div>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <Cart
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          total={total}
        />
        <ProductList onAddToCart={addToCart} />
      </div>

      <Footer />

      <style>
        {`
          .container {
            display: flex;
            gap: 20px;
            padding: 20px;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default App;
