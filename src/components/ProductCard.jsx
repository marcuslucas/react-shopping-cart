import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img src={product.image} alt={product.title} width="100" />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>View Product</button>
      </Link>
    </div>
  );
};

export default ProductCard;
