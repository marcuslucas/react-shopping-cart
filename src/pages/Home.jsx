import React from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import useFetchedProducts from "../hooks/useFetchProducts";

const Home = () => {
  const { products, loading, error } = useFetchedProducts();

  if (loading) {
    return <h2>Loading products</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="cart">View Cart</Link>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
