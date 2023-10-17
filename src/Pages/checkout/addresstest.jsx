import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = () => {
  const initialProductState = {
    prodName: '',
    prodcatID: '',
    prodType: '',
    prodImg: '',
    prodPrice: 0,
    prodDesc: '',
    prodStatus: 1,
  };

  const [product, setProduct] = useState(initialProductState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:9000/products/', product);
      
      setProduct(initialProductState); // Clear the form after successful submission
    } catch (error) {
      console.error('Error adding product:', error);
    
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '10px' }}>Add Product</h2>
      <form onSubmit={handleFormSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodName" style={{ marginRight: '10px' }}>Product Name:</label>
          <input
            type="text"
            id="prodName"
            name="prodName"
            value={product.prodName}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodcatID" style={{ marginRight: '10px' }}>Product prodcatID:</label>
          <input
            type="text"
            id="prodcatID"
            name="prodcatID"
            value={product.prodcatID}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodType" style={{ marginRight: '10px' }}>Product prodType:</label>
          <input
            type="text"
            id="prodType"
            name="prodType"
            value={product.prodType}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodImg" style={{ marginRight: '10px' }}>Product Image URL:</label>
          <input
            type="text"
            id="prodImg"
            name="prodImg"
            value={product.prodImg}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          />
          {product.prodImg && (
            <img
              src={product.prodImg}
              alt="Product"
              style={{ width: '100px', height: 'auto', marginLeft: '10px' }}
            />
          )}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodPrice" style={{ marginRight: '10px' }}>Product Price:</label>
          <input
            type="number"
            id="prodPrice"
            name="prodPrice"
            value={product.prodPrice}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodDesc" style={{ marginRight: '10px' }}>Product Description:</label>
          <textarea
            id="prodDesc"
            name="prodDesc"
            value={product.prodDesc}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="prodStatus" style={{ marginRight: '10px' }}>Product Status:</label>
          <select
            id="prodStatus"
            name="prodStatus"
            value={product.prodStatus}
            onChange={handleInputChange}
            style={{ border: '1px solid black', padding: '5px' }}
          >
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
        </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '5px' }}>Add Product</button>
      </form>
    </div>
  );
};

export default AddressForm;