import React from "react";
import ShoeCard from "./shoecard";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 4999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 5999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Puma Runner",
    price: 3999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Reebok Classic",
    price: 4599,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "New Balance",
    price: 5499,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Skechers GoRun",
    price: 4299,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "ASICS Gel",
    price: 5799,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Fila Sports",
    price: 3499,
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div style={{ width: "60%" }}>
      <h2>👟 Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ShoeCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
