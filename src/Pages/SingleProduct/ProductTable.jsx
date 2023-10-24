import React from "react";
import axios from "axios";

const postSingleData = async (data) => {
  try {
    let response = await axios.post(
      `https://duantn-backend.onrender.com/cart/`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.log(
      "in the postSingleData function and error is :- ",
      error.response.data,
    );
  }
};
export const postSingleDataWish = async (data) => {
  try {
    let response = await axios.post(
      `https://duantn-backend.onrender.com/whishlist`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.log(
      "in the postSingleData function and error is :- ",
      error.response.data,
    );
  }
};

const ProductTable = () => {
  const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    color: "Phantom Black",
    storage: "128GB",
    ram: "8GB",
    price: "$999",
  };

  return (
    <table
      style={{ fontFamily: "Arial", borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th style={{ padding: "10px", textAlign: "left" }}>
            Thông tin cấu hình điện thoại
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: "#f5f5f5" }}>
          <td style={{ padding: "10px" }}>
            <strong>Thương hiệu:</strong>
          </td>
          <td style={{ padding: "10px" }}>{phone.brand}</td>
        </tr>
        <tr>
          <td style={{ padding: "10px" }}>
            <strong>Model:</strong>
          </td>
          <td style={{ padding: "10px" }}>{phone.model}</td>
        </tr>
        <tr style={{ backgroundColor: "#f5f5f5" }}>
          <td style={{ padding: "10px" }}>
            <strong>Màu sắc:</strong>
          </td>
          <td style={{ padding: "10px" }}>{phone.color}</td>
        </tr>
        <tr>
          <td style={{ padding: "10px" }}>
            <strong>Bộ nhớ trong:</strong>
          </td>
          <td style={{ padding: "10px" }}>{phone.storage}</td>
        </tr>
        <tr style={{ backgroundColor: "#f5f5f5" }}>
          <td style={{ padding: "10px" }}>
            <strong>RAM:</strong>
          </td>
          <td style={{ padding: "10px" }}>{phone.ram}</td>
        </tr>
        <tr>
          <td style={{ padding: "10px" }}>
            <strong>Giá:</strong>
          </td>
          <td style={{ padding: "10px" }}>{phone.price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
