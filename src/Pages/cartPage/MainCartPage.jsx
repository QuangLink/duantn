import React from "react";
import { Center, Flex, useToast } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Cart/cart.action";
import Checkout from "../checkout/checkout";
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
  const DeleteRequest = async (prodID) => {
    try {
      let response = await axios.delete(
        `https://duantn-backend.onrender.com/cart/${prodID}`,
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
      <Flex
        border={"0px solid red"}
        margin="auto"
        width={"95%"}
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
          gap={"4"}
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
              key={product.prodID}
              name={product.prodName}
              img={product.prodImg}
              price={product.prodPrice}
              id={product.prodID}
              quantity={product.quantity}
              DeleteRequest={DeleteRequest}
            />
          ))}
        </Flex>
        <Flex
          border={"0px solid green"}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "30%",
            xl: "30%",
            "2xl": "30%",
          }}
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
      </Flex>
      <div>
        <Checkout />
      </div>
    </div>
  );
};

export default MainCartPage;
