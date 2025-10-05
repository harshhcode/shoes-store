import React, { useState } from "react";
import ProductList from "./shoelist";
import Cart from "./cart";

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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <ProductList onAddToCart={addToCart} />
      <Cart
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        total={total}
      />
    </div>
  );
};

export default App;
