import React from "react";
import MyCartLength from "./MyCartLength";
import OrderItem from "./OrderItem";
import CheckoutBox from "./CheckoutBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Cart/cart.action";
import "./cartstyle.css";
import { Box, Center, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import Address from "./Address";
export const GetData = async () => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_DATABASE_API_URL}/cart`,
    );

    return await response.data;
  } catch (err) {
    return err;
  }
};
const CheckoutPage = () => {
  const breakpoints = {
    base: "320px", // 0px
    sm: "480px", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "600px", // ~768px
    lg: "800px", // ~992px
    xl: "768px", // ~1280px
    "2xl": "1024px", // ~1536px
  };
  const dispatch = useDispatch();
  const { loading, data, dataLength, totalPrice, paybalPrice, coupon } =
    useSelector((store) => store.cart);
  const [val, setVal] = useState("");
  const toast = useToast();
  const [change, setChange] = useState(false);
  const DeleteRequest = async (cartID) => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_DATABASE_API_URL}/cart/${cartID}`,
      );
      setChange(!change);
    } catch (err) {
      return err;
    }
  };
  const handleApply = () => {
    if (val === "DUANTN" || val === "JAGUARS") {
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
    <div w="100%">
      <Flex
        border={"0px solid #4a90e2"}
        margin="auto"
        width={"100%"}
        padding={{ "2xl": "0", base: "0 1% 0 1%" }}
        flexDirection={{
          base: "row",
          sm: "row",
          md: "row",
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
          <Center>
            <div style={{ textAlign: "center" }}>
              <Text fontSize="2xl" fontWeight="bold" mt="10">
                Your cart is empty
              </Text>
            </div>
          </Center>
        ) : (
          <Box
            className="cartPage"
            w={{ "2xl": "80%", base: "98%" }}
            marginTop={{ "2xl": "0", base: "80px" }}
          >
            {/* Box Tổng */}

            {/* Header  */}
            <Heading
              textAlign="center"
              display="flex"
              justifyContent="space-around"
              w="95%"
              m="15p% 10% 10% 10%"
              mt="5"
            >
              <Box className="headingCart">
                <Center fontSize="32px" fontWeight="700" color="black">
                  Đặt hàng
                </Center>
              </Box>
            </Heading>
            {/* Header  */}

            <Box
              display="flex"
              justifyContent={{ base: "center", "2xl": "space-between" }}
              width="100%"
              flexWrap={{ base: "wrap" }}
            >
              <Flex
                padding={{ "2xl": "0 15px 0 0", base: "0" }}
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
                <Address />

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
                  <OrderItem
                    color={product.cart[0].color}
                    storage={product.cart[0].storage_value}
                    key={product.cart[0].prodID}
                    name={product.cart[0].prodName}
                    img={product.cart[0].prodImg}
                    price={product.cart[0].prodPrice}
                    priceSale={product.cart[0].prodPriceSale}
                    id={product.cart[0].prodID}
                    QTY={product.cart[0].QTY}
                    quantity={product.quantity}
                    DeleteRequest={DeleteRequest}
                  />
                ))}
              </Flex>
              {/* Phân tách 2 box */}

              <Flex
                mt={{ "2xl": "0", base: "1" }}
                width={{ base: "100%", "2xl": "30%" }}
                border={"1px solid rgb(224, 224, 225)"}
                padding="0 0 10px"
              >
                <CheckoutBox
                  items={dataLength}
                  totalPrice={totalPrice}
                  paybalPrice={paybalPrice}
                  setVal={setVal}
                  handleApply={handleApply}
                  discount={coupon}
                />
              </Flex>
            </Box>
          </Box>
        )}
      </Flex>
    </div>
  );
};
export default CheckoutPage;
