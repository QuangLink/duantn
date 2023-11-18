import React from "react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Cart/cart.action";
import "./cartstyle.css";

import {
  Box,
  Image,
  Center,
  Flex,
  Heading,
  Text,
  Button,
  CardFooter,
  useToast,
} from "@chakra-ui/react";

import "react-slideshow-image/dist/styles.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import Checkout from "./Checkout";
export const GetData = async () => {
  try {
    let response = await axios.get(`https://duantn-backend.onrender.com/cart`);

    return await response.data;
  } catch (err) {
    return err;
  }
};

const MainCartPage = () => {
  const dispatch = useDispatch();
  const { loading, data, error, dataLength, totalPrice, paybalPrice, coupon } =
    useSelector((store) => store.cart);

  const [val, setVal] = useState("");
  const toast = useToast();
  const [change, setChange] = useState(false);
  const DeleteRequest = async (cartID) => {
    try {
      let response = await axios.delete(
        `https://duantn-backend.onrender.com/cart/${cartID}`,
      );
      setChange(!change);
    } catch (err) {
      return err;
    }
  };

  const handleApply = () => {
    if (val === "MASAI40") {
      dispatch({ type: "code", payload: val });
      setVal("");
      toast({
        title: "Successful",
        description: "Mã giảm giá đã áp dụng thành công",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Error",
        description: "Mã giảm giá sai",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, [change]);

  return (
    <div>
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
        margin="auto"
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
      >
        {dataLength === 0 ? (
          <Center>
            <div style={{ textAlign: "center" }}>
              <Text fontSize="2xl" fontWeight="bold" mt="10">
                Your cart is empty
              </Text>
            </div>
          </Center>
        ) : (
          <Center
            className="cartPage"
            borderRadius="2%"
            boxShadow="4px 10px 6px 8px rgba(12,12,12,0.2)"
          >
            <Heading
              textAlign="center"
              display="flex"
              justifyContent="space-around"
              w="95%"
              m="15p% 10% 10% 10%"
              mt="5"
            >
              <Box className="headingCart">
                <Text className="textHeader">
                  <ArrowBackIcon w={6} h={6} color="red.500" /> Trang chủ{" "}
                </Text>
                <Center fontSize="25px" fontWeight="500" color="red.500">
                  Đặt hàng
                </Center>
              </Box>
            </Heading>
            <Center
              mt="5px"
              width="100%"
              borderRadius="20px"
              display="flex"
              flexWrap="wrap"
              borderBottom="none"
              borderBottomRadius="none"
            >
              <Flex
                flexDirection={"column"}
                border={"0px solid blue"}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "70%",
                  xl: "70%",
                  "2xl": "70%",
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
                    cartID={product.cartID}
                    color={product.color}
                    storage={product.storage_value}
                    key={product.prodID}
                    name={product.prodName}
                    img={product.prodImg}
                    price={product.prodPrice}
                    priceSale={product.prodPriceSale}
                    id={product.prodID}
                    quantity={product.quantity}
                    DeleteRequest={DeleteRequest}
                  />
                ))}
              </Flex>
            </Center>
            <Checkout />
            <CheckoutBox
              items={dataLength}
              totalPrice={totalPrice}
              paybalPrice={paybalPrice}
              setVal={setVal}
              handleApply={handleApply}
              discount={coupon}
            />
          </Center>
        )}
      </Flex>
    </div>
  );
};

export default MainCartPage;
