import React from "react";

const Cart = ({ cart, onAddToCart, onRemoveFromCart, total }) => {
  return (
    <div
      style={{
        width: "35%",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#fafafa",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "8px",
                }}
              >
                <div>
                  <strong>{item.name}</strong>
                  <p>₹{item.price}</p>
                </div>
                <div>
                  <button onClick={() => onRemoveFromCart(item)}>-</button>
                  <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                  <button onClick={() => onAddToCart(item)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
