import React from "react";
import Card from "./shoecard";

import Image1 from "./pics/image 1.webp"
import Image2 from "./pics/image 2.jpg"
import Image3 from "./pics/image 3.webp"
import Image4 from "./pics/image 4.jpg"

const products = [
  { id: 1, name: "Air Max", price: 3500, image: Image1 },
  { id: 2, name: "Nike Zoom", price: 4200, image: Image2 },
  { id: 3, name: "Puma Classic", price: 2800, image: Image3},
  { id: 4, name: "Adidas Ultraboost", price: 5200, image: Image4 },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <Card key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
