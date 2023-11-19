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
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkerAlt, FaWallet } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
const CheckoutBox = ({
  items,
  totalPrice,
  paybalPrice,
  discount,
  setVal,
  handleApply,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleCheckout = async () => {
    const paymentMethod = selectedOption;
    const amount = paybalPrice;
    const userID = Cookies.get("userID");
    const bankCode = "VNBANK";
    const language = "vn";
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
    } 
    else if(selectedOption === "cash"){
      toast({
      title: "Thanh toán khi nhận hàng",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost:9000/orders/cod",
          {
            userID,
            amount,
          },
          {
            withCredentials: true,
          },
        );

        console.log("Response from server:", response);

        // Check if vnpUrl exists in response data
        if (response.data) {
          // Open the payment url on a new tab
        //  window.open(response.data);
        } else {
          console.error("No vnpUrl found in response data");
        }
      } catch (error) {
        console.error(error);
      }
    });}
    else {
      toast({
        title: "Proceed further for checkout",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(async () => {
        try {
          const response = await axios.post(
            "http://localhost:9000/orders/create_payment_url",
            {
              userID,
              amount,
              bankCode,
              language,
            },
            {
              withCredentials: true,
            },
          );

          console.log("Response from server:", response);

          // Check if vnpUrl exists in response data
          if (response.data) {
            // Open the payment url on a new tab
            window.open(response.data);
          } else {
            console.error("No vnpUrl found in response data");
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  };
  const username = Cookies.get("username");
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/address/${username}`)
      .then((response) => {
        console.log("Server response:", response.data);
        setAddressData(response.data);
      })
      .catch((error) => {
        console.error("Error getting address:", error);
      });
  }, [username]);
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
      <Center
        w="̃70%"
        mt="5"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
    
      
      <Box w="70%" mt="15px" mb="15px">
      <Text fontSize="25px" fontWeight="700">
        Chọn phương thức thanh toán:
      </Text>
      <Box
        w="100%"
        h="200px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        mt="5"
      >
        {['cash', 'vnpay'].map((option) => (
          <Box
            key={option}
        
            className={`payment-option ${selectedOption === option ? "selected" : ""}`}
            style={{
              backgroundColor: selectedOption === option ? "#c6e0f7" : "white",
              border:  "1px solid black",
             borderShadow: selectedOption === option ? "0 0 0 3px #3182ce" : "none",
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              margin: '0 10px',
            }}
            onClick={() => handleOptionClick(option)}
          >
            <Box marginBottom="5" mt="2">
              <Icon
                as={option === 'cash' ? FcHome : FaWallet}
          
                ml={10}
                mr={10}
                w={10}
                h={10}
                color="red"
              />
              {option === 'cash' ? 'Thanh toán khi nhận hàng' : 'Thanh toán qua ví VNPay'}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
    
    
  
        <Flex justifyContent="center" w="60%" m="5">
          <TbTruckDelivery size={20} />
          <Heading
            fontSize="13px"
            color={"rgb(0, 51, 128)"}
            lineHeight={"20px"}
          >
            Giao hàng nhanh: {dtString} / {change}
          </Heading>
        </Flex>
        <Box marginTop={"20px"} width={"60%"}>
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
        <Flex justifyContent="space-between" w="60%">
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
            {totalPrice &&
              totalPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}{" "}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="60%">
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
            {discount &&
              discount.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="60%">
          <Flex justifyContent="space-between" w="70%" display="flex-start">
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
          </Flex>

          <Text fontWeight="700" fontSize="25px" mt="2" color="red">
            {paybalPrice &&
              paybalPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Text>
        </Flex>
        <Center w="70%">
          <Heading
            fontSize={"15px"}
            fontWeight="500"
            lineHeight={1.5}
            color={"rgb(102, 102, 102)"}
            marginTop="2"
            marginBottom={"5"}
          >
            Thanh toán đảm bảo. Đổi trả dễ dàng. 100% hàng chính hãng
          </Heading>
        </Center>
        <Button
          w="52%"
          h="50px"
          border="1px solid  #70b1ea"
          borderRadius="10px"
          backgroundColor="#3978d7"
          _hover={{ color: "#4a90e2" }}
          onClick={() => {
            if (!addressData || !Array.isArray(addressData) || addressData.length === 0) {
             toast({
                title: "Bạn chưa có địa chỉ giao hàng",
                description: "",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            
            }
            else if(selectedOption === null){
            toast({
                title: "Bạn chưa chọn phương thức thanh toán",
                description: "",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top",
              });

            }
             else {
              handleCheckout();
            }
          }}
        >
          <Text color="white">Tiến hành đặt hàng</Text>
        </Button>
        <Button
          mb="5"
          mt="2"
          w="52%"
          h="50px"
          border="1px solid #4a90e2"
          borderRadius="10px"
          backgroundColor="white"
          _hover={{ color: "white" }}
          onClick={() => navigate("/")}
        >
          <Text color="#4a90e2">Chọn thêm sản phẩm khác</Text>
        </Button>
      </Center>
    </div>
  );
};

export default CheckoutBox;
