import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9000/category/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:9000/products/${productId}`);
      alert('Product deleted successfully');
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  const renderProducts = () => {
    return products.map((product) => (
        <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>{product.prodName}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{product.prodBrand}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{product.prodView}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>
         {product.prodImg && (
            <img
              src={product.prodImg}
              alt="Product"
              style={{ width: '100px', height: 'auto', marginLeft: '10px' }}
            />
          )}
        </td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{product.prodPrice}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{product.prodDesc}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{product.prodStatus}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>
          <button onClick={() => deleteProduct(product.prodID)}>Delete</button>
          <button>Edit</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>Product Views</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderProducts()}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;