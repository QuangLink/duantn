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

    // Lưu token vào localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);

    // Dispatch action để lưu token vào Redux store
    dispatch({ type: LOGIN_SUCCESS, payload: { token } });

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
  localStorage.removeItem('token'); 
 localStorage.removeItem('username');
  return { type: LOGOUT };
};
