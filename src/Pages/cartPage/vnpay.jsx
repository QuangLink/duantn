import React from "react";
import axios from "axios";

const Vnpay = () => {
  const [amount, setAmount] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://duantn-backend.onrender.comorder/create_payment_url",
        {
          amount,
          bankCode: event.target.bankCode.value,
          language: event.target.language.value,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Response from server:", response.data);

      // Nếu thành công, redirect tới URL mới
      if (response.data) {
        window.location.href = response.data;
      } else {
        console.error("No vnpUrl found in response data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <layout>
      <div className="content">
        <h3>Title</h3>
        <div className="table-responsive">
          <form id="createOrder" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount">Số tiền</label>
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                placeholder="Số tiền"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Chọn Phương thức thanh toán:</label>
              <label className="control-label">
                <div className="controls">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="bankCode"
                      id="defaultPaymentMethod"
                      value=""
                      defaultChecked
                    />
                    Cổng thanh toán VNPAYQR
                  </label>
                  <div className="controls">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="bankCode"
                        id="vnpayqrPaymentMethod"
                        value="VNPAYQR"
                      />
                      Thanh toán qua ứng dụng hỗ trợ VNPAYQR
                    </label>
                    <div className="controls">
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="bankCode"
                          id="vnbankPaymentMethod"
                          value="VNBANK"
                        />
                        Thanh toán qua ATM-Tài khoản ngân hàng nội địa
                      </label>
                      <div className="controls">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="bankCode"
                            id="intcardPaymentMethod"
                            value="INTCARD"
                          />
                          Thanh toán qua thẻ quốc tế
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>Ngôn ngữ</label>
              <label className="control-label">
                <div className="controls">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="language"
                      id="vnLanguage"
                      value="vn"
                      defaultChecked
                    />
                    Tiếng việt
                  </label>
                  <div className="controls">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="language"
                        id="enLanguage"
                        value="en"
                      />
                      Tiếng anh
                    </label>
                  </div>
                </div>
              </label>
            </div>
            <button type="submit" className="btn btn-default" id="btnPopup">
              Thanh toán
            </button>
          </form>
        </div>
        <p>&nbsp;</p>
      </div>
    </layout>
  );
};

export default Vnpay;
