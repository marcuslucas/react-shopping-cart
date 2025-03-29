import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const params = useParams();
  const id = parseInt(params.id);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(resp.data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Loading product details...</h2>;
  if (error) return <h2>{error}</h2>;

  // console.log("Raw Params:", params);
  // console.log("Parsed ID:", id, "Type:", typeof id);
  // console.log("Product List:", products);
  // const product = products.find((item) => item.id === id);

  console.log("Matched Product:", product);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Link to="/">Continue Shopping</Link>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          margin: "10px",
        }}
      >
        <img src={product.image} alt={product.title} width="100" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => navigate("/cart")}>View Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
