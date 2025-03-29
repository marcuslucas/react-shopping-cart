import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import useFetchedProducts from "../hooks/useFetchProducts";

const Home = () => {
  const { products, loading, error } = useFetchedProducts();
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return <h2>Loading products</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredProducts =
    searchQuery.trim() === ""
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div>
      <h1>This is the home page</h1>
      <input
        type="text"
        placeholder="Search for an item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Link to="cart">View Cart</Link>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
};

export default Home;
