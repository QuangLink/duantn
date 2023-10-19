import {
  CartError,
  CartLoading,
  CartSuccess,
} from "./cart.types";

import axios from "axios";
export const getData = () => async (dispatch) => {
  dispatch({ type: CartLoading });
  try {
    //gửi token đang lưu trong session lên server để xác thực
    const token = sessionStorage.getItem("token");
    const res = await axios.get("http://localhost:9000/cart/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: CartSuccess, payload: res.data });
  } catch (err) {
    dispatch({ type: CartError, error: "Có lỗi khi tải dữ liệu từ API." });

  }
};

