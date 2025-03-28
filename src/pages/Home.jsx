import React from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ storeData }) => {
  return (
    <div>
      <h1>This is the home page</h1>
      {storeData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
