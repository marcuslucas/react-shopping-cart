import { useState, useEffect } from "react";
import axios from "axios";

const useFetchedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products/");
        setProducts(resp.data);
      } catch {
        setError("Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useFetchedProducts;
