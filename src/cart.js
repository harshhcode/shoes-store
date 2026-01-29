import React from "react";

const Cart = ({ cart, onAddToCart, onRemoveFromCart, total }) => {
  return (
    <div
      className="cart"
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
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              maxHeight: "350px",
              overflowY: "auto",
            }}
          >
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "12px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "8px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <p>₹{item.price}</p>

                  <div>
                    <button onClick={() => onRemoveFromCart(item)}>-</button>
                    <span style={{ margin: "0 8px" }}>
                      {item.quantity}
                    </span>
                    <button onClick={() => onAddToCart(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>
        </>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            .cart {
              width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cart;
