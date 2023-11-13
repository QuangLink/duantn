import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:9000/orders/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (orderCode) => {
    try {
      await axios.delete(`http://localhost:9000/orders/${orderCode}`);
      alert("Product deleted successfully");
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  const renderProducts = () => {
    const productsByOrderCode = products.reduce((acc, product) => {
      if (!acc[product.orderCode]) {
        acc[product.orderCode] = [product];
      } else {
        acc[product.orderCode].push(product);
      }
      return acc;
    }, {});

    return Object.entries(productsByOrderCode).map(
      ([orderCode, productList]) => (
        <React.Fragment key={orderCode}>
          <tr>
            <td colSpan="8" style={{ fontWeight: "bold" }}>
              Order Code: {orderCode}
            </td>
          </tr>
          {productList.map((product) => (
            <tr key={product.prodID}>
              <td style={{ padding: "10px" }}>{product.prodID}</td>
              <td style={{ padding: "10px" }}>{product.prodName}</td>
              <td style={{ padding: "10px" }}>{product.orderCode}</td>
              <td style={{ padding: "10px" }}>{product.quantity}</td>
              <td style={{ padding: "10px" }}>{product.userID}</td>
              <td style={{ padding: "10px" }}>{product.cartID}</td>
              <td style={{ padding: "10px" }}>{product.prodPrice}</td>
              <td style={{ padding: "10px" }}>{product.orderDate}</td>
              <td style={{ padding: "10px" }}>
                <button onClick={() => deleteProduct(product.orderCode)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </React.Fragment>
      ),
    );
  };

  return (
    <div>
      <h2>Order List</h2>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Product ID
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Product Name
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Order Code
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Quantity
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              User ID
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Cart ID
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Product Price
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Order Date
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
      </table>
    </div>
  );
};

export default ProductList;
