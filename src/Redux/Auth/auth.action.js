import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post('http://localhost:9000/users/login', creds);
    const token = res.data.token; // Lấy token từ phản hồi
    const username = JSON.parse(atob(token.split('.')[1])).username;
    const admin = JSON.parse(atob(token.split('.')[1])).admin;

    // Lưu token vào sessionStorage và gửi dữ liệu vào payload
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('admin', admin);
    
    // Dispatch action để lưu token vào Redux store với payload chứa dữ liệu
    dispatch({ type: LOGIN_SUCCESS, payload: { token, username, admin } });

    console.log('Login successful:', res.data);
    return token; // Trả về token
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message });
    alert("Login failed");
    return null; // Trả về null nếu có lỗi
  }
};

export const logout = () => {
  // Remove the token from Local Storage
  sessionStorage.removeItem('token'); 
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('admin');
  return { type: LOGOUT };
};
