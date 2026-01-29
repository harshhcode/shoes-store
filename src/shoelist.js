import React from "react";
import ShoeCard from "./shoecard";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Puma Runner",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Reebok Classic",
    price: 4599,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "New Balance",
    price: 5499,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Skechers GoRun",
    price: 4299,
    image:
      "https://images.unsplash.com/photo-1589187775328-882e91b3c2f8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "ASICS Gel",
    price: 5799,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Fila Sports",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
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
