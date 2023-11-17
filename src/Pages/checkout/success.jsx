import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(location.search);
        // Send a POST request to your backend with the searchParams
        const response = await axios.get(
          `https://duantn-backend.onrender.com/order/vnpay_return${location.search}`,
        );

        // Handle the response from the backend as needed
        console.log("Response from backend:", response.data);
      } catch (error) {
        console.error("Error calling backend API:", error);
        // Handle errors as needed
      }
    };

    fetchData();
  }, [searchParams]);

  // Extract parameters from the searchParams
  const code = searchParams.get("vnp_ResponseCode");
  const vnp_Amount = searchParams.get("vnp_Amount");
  const vnp_TxnRef = searchParams.get("vnp_TxnRef");
  const vnp_BankCode = searchParams.get("vnp_BankCode");
  const vnp_BankTranNo = searchParams.get("vnp_BankTranNo");
  const vnp_PayDate = searchParams.get("vnp_PayDate");
  const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
  const vnp_TransactionNo = searchParams.get("vnp_TransactionNo");
  const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");

  // Your JSX rendering logic here
  return (
    <div>
      {code === "00" ? (
        <div>
          <Box
            textAlign="center"
            py={10}
            px={6}
            style={{
              margin: "auto",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            <CheckIcon boxSize={"50px"} color={"green.500"} />
            <Heading as="h3" size="xl" mt={6} mb={2}>
              Giỏ hàng của bạn trống
            </Heading>
            <Text color={"gray.500"}>Hãy thêm sản phẩm vào giỏ hàng</Text>
          </Box>
          <p style={{ textAlign: "center" }}>GD thành công</p>
          <p style={{ textAlign: "center" }}>
            Số tiền thanh toán: {vnp_Amount}
          </p>
          <p style={{ textAlign: "center" }}>Mã GD: {vnp_TxnRef}</p>
          <p style={{ textAlign: "center" }}>Mã Ngân hàng: {vnp_BankCode}</p>
          <p style={{ textAlign: "center" }}>
            Mã GD của Ngân hàng: {vnp_BankTranNo}
          </p>
          <p style={{ textAlign: "center" }}>
            Thời gian thanh toán: {vnp_PayDate}
          </p>
          <p style={{ textAlign: "center" }}>
            Mã phản hồi của Ngân hàng: {vnp_ResponseCode}
          </p>
          <p style={{ textAlign: "center" }}>
            Mã GD của VNPAY: {vnp_TransactionNo}
          </p>
          <p style={{ textAlign: "center" }}>
            Mã GD của Người bán: {vnp_TxnRef}
          </p>
          <p style={{ textAlign: "center" }}>
            Mã GD của Người mua: {vnp_OrderInfo}
          </p>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>GD thất bại</p>
      )}

      <p style={{ textAlign: "center" }}>
        <a className="btn btn-default" href="/order">
          Về danh sách
        </a>
      </p>
    </div>
  );
};

export default Success;
