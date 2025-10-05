import React from "react";

const Card = ({ product, onAddToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        width: "200px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          borderRadius: "8px",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          
        }}

      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
