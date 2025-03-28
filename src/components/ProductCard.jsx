import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>View Product</button>
      </Link>
    </div>
  );
};

export default ProductCard;
