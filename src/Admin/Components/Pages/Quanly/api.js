// api.js

import axios from "axios";

export const fetchTotalProducts = async () => {
  try {
    const response = await axios.get(
      "https://duantn-backend.onrender.com/products/total"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching total products:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://duantn-backend.onrender.com/orders/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://duantn-backend.onrender.com/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(
      "https://duantn-backend.onrender.com/orders/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};