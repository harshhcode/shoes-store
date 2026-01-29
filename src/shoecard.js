import React from "react";

const ShoeCard = ({ product, onAddToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          padding: "8px 12px",
          border: "none",
          backgroundColor: "#222",
          color: "#fff",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShoeCard;
