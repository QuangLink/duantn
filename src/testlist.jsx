import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9000/y/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://duantn-backend.onrender.com/products/${productId}`);
      alert('Product deleted successfully');
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  const renderProducts = () => {
    return products.map((product) => (
        <div>
        <a>{product.prodID}</a>
        {product.prodImg && (
            <img
              src={product.prodImg}
              alt="Product"
              style={{ width: '100px', height: 'auto', marginLeft: '10px' }}
            />
          )}
          </div>
    ));
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <tbody>
          {renderProducts()}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;