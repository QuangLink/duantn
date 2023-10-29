import axios from "axios";
import Cookies from "js-cookie";

import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post(
      "https://duantn-backend.onrender.com/users/login",
      creds,
    );
    const token = res.data.token; // Lấy token từ phản hồi
    const username = res.data.payload.username;
    const admin = res.data.payload.admin;
    //lấy userID từ header token
    const userID = res.data.payload.userID;
    Cookies.set("token", token);
    Cookies.set("username", username);
    Cookies.set("admin", admin);
    Cookies.set("userID", userID);

    // Dispatch action để lưu token vào Redux store với payload chứa dữ liệu
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, username, admin, userID },
    });

    console.log("Login successful:", res.data);
    return token; // Trả về token
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message });
    alert("Login failed");
    return null; // Trả về null nếu có lỗi
  }
};

export const logout = () => {
  // Remove the token from Local Storage
  Cookies.remove("token");
  Cookies.remove("username");
  Cookies.remove("admin");
  Cookies.remove("userID");
  return { type: LOGOUT };
};
