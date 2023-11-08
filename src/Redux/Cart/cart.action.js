import { CartError, CartLoading, CartSuccess } from "./cart.types";
import Cookies from "js-cookie";
import axios from "axios";
export const getData = () => async (dispatch) => {
  dispatch({ type: CartLoading });
  try {
    //gửi token đang lưu trong session lên server để xác thực
    const userID = Cookies.get("userID");

    const res = await axios.get(`https://duantn-backend.onrender.com/cart/${userID}`, {});
    dispatch({ type: CartSuccess, payload: res.data });
  } catch (err) {
    dispatch({ type: CartError, error: "Có lỗi khi tải dữ liệu từ API." });
  }
};
