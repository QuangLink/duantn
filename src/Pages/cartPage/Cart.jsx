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

export const GetData = async () => {
  try {
    let response = await axios.get(`http://localhost:9000/cart`);

    return await response.data;
  } catch (err) {
    return err;
  }
};

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data, error, dataLength, totalPrice, paybalPrice, coupon } =
    useSelector((store) => store.cart);

  const [val, setVal] = useState("");
  const toast = useToast();
  const [change, setChange] = useState(false);
  const DeleteRequest = async (cartID) => {
    try {
      let response = await axios.delete(`http://localhost:9000/cart/${cartID}`);
      setChange(!change);
    } catch (err) {
      return err;
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
              w="95%"
              m="15p% 10% 10% 10%"
              mt="5"
            >
              <Box className="headingCart">
                <Center fontSize="25px" fontWeight="500" color="red.500">
                  Giỏ hàng của bạn
                </Center>
              </Box>
            </Heading>
            <Center
              mt="5px"
              width="100%"
              w="95%"
              display="flex"
              flexWrap="wrap"
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
                    QTY={product.QTY}
                    quantity={product.quantity}
                    DeleteRequest={DeleteRequest}
                  />
                ))}
              </Flex>
            </Center>
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
            <Button
              w="710px"
              h="50px"
              border="1px solid  #70b1ea"
              borderRadius="10px"
              backgroundColor="#70b1ea"
              _hover={{ color: "#4a90e2" }}
              onClick={() => navigate("/checkout")}
            >
              <Text color="white">Tiến hành đặt hàng</Text>
            </Button>
          </Center>
        )}
      </Flex>
    </div>
  );
};

export default Cart;
