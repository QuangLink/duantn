import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemS3 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9000/category/apple');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
}
export default ItemS3;