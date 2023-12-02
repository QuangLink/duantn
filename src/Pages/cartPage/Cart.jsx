import React from "react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Cart/cart.action";
import "./cartstyle.css";
import Cookies from "js-cookie";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Cart = () => {
  const userID = Cookies.get("userID");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data, error, dataLength, totalPrice, paybalPrice, coupon } =
    useSelector((store) => store.cart);

  const [val, setVal] = useState("");
  const toast = useToast();
  const [change, setChange] = useState(false);
  const DeleteRequest = (userID, prodID, colorID, storageID) => {
    // Get the current cart data from session storage
    const cartData = JSON.parse(sessionStorage.getItem("cart")) || {};

    // Get the user's cart directly using the userID
    const userCart = cartData[userID] || [];

    // Find the index of the item to be deleted based on specified conditions
    const itemIndex = userCart.findIndex(
      (item) =>
        item.prodID === prodID &&
        (colorID === null || item.colorID === colorID) &&
        (storageID === null || item.storageID === storageID),
    );

    // If the item is found, delete it from the cart
    if (itemIndex !== -1) {
      // Remove the item from the array
      userCart.splice(itemIndex, 1);

      // Update the cart data in session storage
      cartData[userID] = userCart;
      sessionStorage.setItem("cart", JSON.stringify(cartData));

      dispatch(getData());
      toast({
        title: "Đã xóa sản phẩm khỏi giỏ hàng",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // If the item is not found, display an error toast
      toast({
        title: "Lỗi",
        description: "Không thể xóa sản phẩm khỏi giỏ hàng",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  //sau khi DeleteRequest thì gọi lại hàm getData để cập nhật lại giỏ hàng

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        marginBottom: "100px",
      }}
    >
      <style>
        {`
        @keyframes blink {
          0% {
            color: black;
          }
          50% {
            color: white;
          }
          100% {
            color: yellow;
          }
        }
      `}
      </style>
      <Flex
        border={"0px solid #4a90e2"}
        width={"100%"}
        paddingX="20px"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        style={{
          margin: "auto",
          width: "100%",
          marginBottom: "100px",
        }}
        justifyContent="center"
        alignItems="center"
      >
        {dataLength === 0 ? (
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
            <WarningTwoIcon boxSize={"50px"} color={"red.500"} />
            <Heading as="h3" size="xl" mt={6} mb={2}>
              Giỏ hàng của bạn trống
            </Heading>
            <Text color={"gray.500"}>Hãy thêm sản phẩm vào giỏ hàng</Text>
          </Box>
        ) : (
          <Center className="cartPage">
            <Heading
              textAlign="center"
              display="flex"
              justifyContent="space-around"
              w="100%"
              m="15p% 10% 10% 10%"
              mt="5"
            >
              <Box className="headingCart">
                <Center fontSize="32px" fontWeight="700" color="black">
                  Giỏ hàng của bạn
                </Center>
              </Box>
            </Heading>
            <Center mt="5px" w="95%" display="flex" flexWrap="wrap">
              <Flex
                flexDirection={"column"}
                border={"0px solid blue"}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "75%",
                  xl: "75%",
                  "2xl": "74%",
                }}
                gap={"1"}
              >
                <MyCartLength item={dataLength} />
                {loading && (
                  <Center>
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                  </Center>
                )}

                {data.map((product) => (
                  <CartItem
                    userID={userID}
                    colorID={product.cart[0].colorID}
                    storageID={product.cart[0].storageID}
                    color={product.cart[0].color}
                    storage={product.cart[0].storage_value}
                    key={product.cart[0].prodID}
                    name={product.cart[0].prodName}
                    img={product.cart[0].prodImg}
                    price={product.cart[0].prodPrice}
                    priceSale={product.cart[0].prodPriceSale}
                    id={product.cart[0].prodID}
                    QTY={product.cart[0].QTY}
                    cartID={product.cart[0].cartID}
                    quantity={product.quantity}
                    DeleteRequest={DeleteRequest}
                  />
                ))}
              </Flex>
            </Center>
            <Center width="100%">
              <Flex justifyContent="space-between" w="50%">
                <Text
                  mt="2"
                  height="50px"
                  fontFamily="inherit"
                  color="#424245"
                  noOfLines={2}
                  fontSize="20px"
                  fontWeight="700"
                >
                  Tạm tính:
                </Text>

                <Text fontWeight="700" fontSize="20px" mt="2" color="red">
                  {paybalPrice &&
                    paybalPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                </Text>
              </Flex>
            </Center>
            <Center width="50%" display="flex" flexWrap="wrap">
            <Button
              w="100%"
              h="50px"
              
              borderRadius="10px"
              backgroundColor="red"
              _hover={{ color: "#4a90e2" }}
              onClick={() => navigate("/checkout")}
            >
              <Text color="white" m="auto">
                Tiến hành đặt hàng
              </Text>
            </Button>
            <Button
          mb="5"
          mt="2"
          w="100%"
          h="50px"
          border="1px solid #FF2323"
          borderRadius="10px"
          backgroundColor="white"
          _hover={{ color: "white" }}
          onClick={() => navigate("/")}
        >
          <Text color="#FF2323" m="auto">
            Chọn thêm sản phẩm khác
          </Text>
        </Button>
            </Center>
          </Center>
        )}
      </Flex>
    </div>
  );
};

export default Cart;
