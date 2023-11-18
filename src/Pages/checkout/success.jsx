import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(location.search);

        const response = await axios.get(
          `http://localhost:9000/order/vnpay_return${location.search}`,
        );

        console.log("Response from backend:", response.data);
      } catch (error) {
        console.error("Error calling backend API:", error);
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

  // Convert vnp_PayDate to date and time format
  const payDate = new Date(
    parseInt(vnp_PayDate.slice(0, 4)), // Year
    parseInt(vnp_PayDate.slice(4, 6)) - 1, // Month (0-based)
    parseInt(vnp_PayDate.slice(6, 8)), // Day
    parseInt(vnp_PayDate.slice(8, 10)), // Hour
    parseInt(vnp_PayDate.slice(10, 12)), // Minute
    parseInt(vnp_PayDate.slice(12, 14)), // Second
  );

  const vnp_TransactionNo = searchParams.get("vnp_TransactionNo");
  const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");

  // Your JSX rendering logic here
  return (
    <Center w="100%" alignItems="center" display="flex" flexWrap="wrap">
      {code === "00" ? (
        <Center w="70%" display="flex" flexWrap="wrap">
          <Box
            w="100%"
            textAlign="center"
            style={{
              margin: "auto",
              marginTop: "50px",
              marginBottom: "20px",
            }}
          >
            <Icon as={FaCheckCircle} w={12} h={12} color="green.500" />

            <Heading as="h3" size="xl" mt={6} mb={2}>
              Đã giao dịch thành công
            </Heading>
          </Box>
          <Center
            w="35%"
            border="10px solid #288ad6"
            borderRadius="15px"
            display="flex"
            flexWrap="wrap"
          >
            <Text
              style={{
                textAlign: "center",
                color: "green",
                fontSize: "30px",
                fontWeight: "600",
                width: "100%",
              }}
            >
              Thông tin giao dịch
            </Text>

            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Số tiền thanh toán:{" "}
              <Text color="#384edc" fontSize="20px">
                {parseInt(vnp_Amount).toLocaleString("vi-VN")} đ
              </Text>{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Mã giao dịch:{" "}
              <Text color="#384edc" fontSize="20px">
                {vnp_TxnRef}{" "}
              </Text>{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Mã Ngân hàng:{" "}
              <Text color="black" fontSize="20px">
                {vnp_BankCode}{" "}
              </Text>{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Mã GD của Ngân hàng:{" "}
              <Text color="black" fontSize="20px">
                {vnp_BankTranNo}{" "}
              </Text>{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {" "}
              Thời gian thanh toán:
              <Text color="black " fontSize="20px">
                {" "}
                {payDate.toLocaleString("vi-VN")}{" "}
              </Text>{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Mã GD của VNPAY:{" "}
              <Text color="black " fontSize="20px">
                {vnp_TransactionNo}
              </Text>{" "}
            </Text>
            <Text
              style={{
                textAlign: "left",
                width: "90%",
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {" "}
              Mã GD của Người bán:{" "}
              <Text color="black " fontSize="20px">
                {vnp_TxnRef}{" "}
              </Text>{" "}
            </Text>
          </Center>
        </Center>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "20px",
            fontWeight: "500",
            marginTop: "5px",
          }}
        >
          Giao dịch thất bại
        </p>
      )}

      <p
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Box
          width="auto"
          h="auto"
          p="2"
          borderRadius="15px"
          display="flex"
          justifyContent="center"
          boxShadow="2px 5px 12px 2px rgba(0,0,0,0.75)"
          background="linear-gradient( #d4eff8 , #0b6ff5)"
        >
          <a href="/myorder" style={{ color: "white" }}>
            Tình trạng đơn hàng
          </a>
        </Box>
      </p>
    </Center>
  );
};

export default Success;
