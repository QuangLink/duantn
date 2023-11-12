import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Divider,
  Heading,
  Text,
  useToast,
  Center,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
const CheckoutBox = ({
  items,
  totalPrice,
  paybalPrice,
  discount,
  setVal,
  handleApply,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleCheckout = () => {
    const userID = Cookies.get("userID");
    if (items === 0) {
      toast({
        title: "Please login and add items to cart",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      toast({
        title: "Proceed further for checkout",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        // axios
        //   .post("http://localhost:9000/order/", { userID })
        //   .then((response) => {
        //     console.log(response);
        //   });
        navigate("/checkout");
      }, 1500);
    }
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + 1000 * 3600 * 24);
  var dayName = new Array(
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  );
  var monName = new Array(
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  );
  var now = new Date();
  var dtString = dayName[now.getDay()] + " - " + now.getDate();
  var change =
    dayName[tomorrow.getDay()] +
    " - " +
    tomorrow.getDate() +
    ", " +
    monName[now.getMonth()] +
    ", " +
    tomorrow.getFullYear();
  return (
    <div>
      <Center w="750px" mt="5" display="flex" flexWrap="wrap">
        <Flex justifyContent="flex-end">
          <TbTruckDelivery size={20} />
          <Heading
            fontSize="13px"
            color={"rgb(0, 51, 128)"}
            lineHeight={"20px"}
          >
            Giao hàng nhanh: {dtString} / {change}
          </Heading>
        </Flex>
        <Box marginTop={"20px"} width={"100%"}>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder="Mã giảm giá"
              onChange={(e) => setVal(e.target.value)}
            />
            <InputRightElement width="4rem">
              <Button
                h="2.30rem"
                size="sm"
                borderRadius={"none"}
                color="rgb(54,129,240)"
                backgroundColor="white"
                borderLeft={"4px solid rgb(54,129,240)"}
                borderRight={"1px solid rgb(224, 224, 225)"}
                onClick={handleApply}
              >
                Áp dụng
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Flex justifyContent="space-between" w="710px">
          <Text
            mt="2"
            height="50px"
            fontFamily="inherit"
            color="#424245"
            noOfLines={2}
            fontSize="20px"
            fontWeight="700"
          >
            Tạm tính ({items} sản phẩm):
          </Text>

          <Text fontWeight="700" fontSize="20px" mt="2" color="red">
            {totalPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="710px">
          <Text
            mt="2"
            height="50px"
            fontFamily="inherit"
            color="#424245"
            noOfLines={2}
            fontSize="20px"
            fontWeight="700"
          >
            Giảm giá:
          </Text>

          <Text fontWeight="700" fontSize="20px" mt="2" color="green">
            {discount.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="710px">
          <Text
            mt="2"
            height="50px"
            fontFamily="inherit"
            color="#424245"
            noOfLines={2}
            fontSize="25px"
            fontWeight="700"
          >
            Tổng tiền:
          </Text>

          <Text fontWeight="700" fontSize="25px" mt="2" color="red">
            {paybalPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
        </Flex>
        <Button
          w="710px"
          h="50px"
          border="1px solid  #70b1ea"
          borderRadius="10px"
          backgroundColor="#70b1ea"
          _hover={{ color: "#4a90e2" }}
          onClick={handleCheckout}
        >
          <Text color="white">Tiến hành đặt hàng</Text>
        </Button>
        <Button
          mt="2"
          w="710px"
          h="50px"
          border="1px solid #4a90e2"
          borderRadius="10px"
          backgroundColor="white"
          _hover={{ color: "white" }}
        >
          <Text color="#4a90e2">Chọn thêm sản phẩm khác</Text>
        </Button>
      </Center>

      <Flex>
        <Heading
          fontSize={"13px"}
          fontWeight="500"
          lineHeight={1.5}
          color={"rgb(102, 102, 102)"}
          marginTop="1"
          marginBottom={"2"}
        >
          Thanh toán đảm bảo. Đổi trả dễ dàng. 100% hàng chính hãng
        </Heading>
      </Flex>
    </div>
  );
};

export default CheckoutBox;
