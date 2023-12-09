import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Image,
  Button,
  Heading,
  useToast,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Cart/cart.action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { postSingleDataWish } from "../SingleProduct/SingleProduct";

const CartItem = ({
  userID,

  quantity,
  colorID,
  storageID,
  name,
  img,
  price,
  priceSale,
  color,
  storage,
  id,
  QTY,
  DeleteRequest,
}) => {
  const singleData = {
    userID,
    id,
    colorID,
    storageID,
    quantity,
    color,
    storage,
    name,
    img,
    priceSale,
    price,
    QTY,
  };
  const toast = useToast();

  const [count, setCount] = useState(quantity);
  //handle change for this  onChange={(e) => setCount(e.target.value)}

  const handleChange = (e, userID, id, colorID, storageID) => {
    let newCount = parseInt(e.target.value, 10);
    if (!isNaN(newCount) && newCount >= 1) {
      setCount(newCount);
      let number = parseInt(price);

      dispatch({ type: "priceChange", payload: number * newCount });

      // Get the current cart data from session storage
      const cartData = JSON.parse(sessionStorage.getItem("cart")) || {};

      // Get the user's cart directly using the userID
      const userCart = cartData[userID] || [];
      // Find the index of the item to be deleted based on specified conditions
      const itemIndex = userCart.findIndex(
        (item) =>
          item.prodID === id &&
          (colorID === null || item.colorID === colorID) &&
          (storageID === null || item.storageID === storageID),
      );

      // If the item is found, change it quantity from the cart
      if (itemIndex !== -1) {
        // Remove the item from the array
        userCart[itemIndex].quantity = newCount;

        // Update the cart data in session storage
        cartData[userID] = userCart;
        sessionStorage.setItem("cart", JSON.stringify(cartData));
      }
      if (newCount > QTY) {
        toast({
          title: "Lỗi",
          description: "Số lượng vượt quá giới hạn",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        newCount = quantity;
        setCount(quantity);
      }
    }
  };

  const dispatch = useDispatch();
  var navigate = useNavigate();

  const handleInc = () => {
    const newCount = count + 1;
    let number = parseInt(price);
    dispatch({ type: "priceIncrease", payload: number });
    handleChange(
      { target: { value: newCount } },
      userID,
      id,
      colorID,
      storageID,
    );
  };

  const handleDec = () => {
    if (count > 1) {
      const newCount = count - 1;
      let number = parseInt(price);
      dispatch({ type: "priceDecrease", payload: number });
      handleChange(
        { target: { value: newCount } },
        userID,
        id,
        colorID,
        storageID,
      );
    }
  };

  const handleWish = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }

    postSingleDataWish(newData)
      .then((res) => {
        navigate("/wishlist");
        toast({
          title: "Đã thêm vào giỏ hàng",
          description: "Product Added",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "top",
        });
      })
      .catch((err) => {
        toast({
          title: "Đã xảy ra lỗi",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "top",
        });
      });
  };

  return (
    <Flex
      key={id}
      className=""
      border={"1px solid rgb(224, 224, 225)"}
      flexDirection="column"
      width={"100%"}
     
      boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
      borderRadius="4px"
    >
      <Flex
        m="1"
        p={"16px"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={{ sm: "center", base: "center" }}
        alignItems={{
          sm: "center",
          md: "normal",
          lg: "normal",
          xl: "normal",
          "2xl": "normal",
        }}
        gap={{ sm: "8px", base: "7px" }}
      >
        {/* //part1-17to 44line */}
        <Flex
          flexDirection="column"
          border={"0px solid blue"}
          justifyContent="center"
          alignItems={"center"}
          gap="2"
        >
          <Box>
            <Image src={img} alt={name} width="150px" />
          </Box>
        </Flex>
        {/* //part2-line 46 to 71 */}
        <Flex
          flexDirection={"column"}
          border={"0px solid green"}
          textAlign={{
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          gap={2}
        >
          <Heading
            fontSize="14px"
            color={" rgb(0, 51, 128)"}
            fontWeight="600"
            lineHeight={"1.1"}
          >
            {name} {color} {storage}
          </Heading>

          <Flex>
            <FcPlus />
            <Heading fontSize="12px" color={"gray"} fontStyle="italic">
              Dịch vụ/Gói bảo hành thiết bị điện tử được áp dụng cho sản phẩm
              này
            </Heading>
          </Flex>
        </Flex>
        {/* //part3- line 71 to 99*/}
        <Flex
          flexDirection={"column"}
          textAlign={{
            sm: "center",
            md: "right",
            lg: "right",
            xl: "right",
            "2xl": "right",
          }}
          width="20%"
          gap={1}
          fontWeight="500"
        >
          <Heading fontSize="18px" color={"red"}>
            {price &&
              price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Heading>
          <Heading
            fontSize="17px"
            color={"gray"}
            textDecoration={"line-through"}
          >
            {priceSale &&
              priceSale.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </Heading>
        </Flex>

        <Center flexWrap="wrap" display="flex" height="100px" mt="-3">
          <Box display={"flex"}>
            <Button onClick={handleDec}>-</Button>
            <input
              type="number"
              value={count}
              onChange={(e) => handleChange(e, userID, id, colorID, storageID)}
              style={{ width: "30px", height: "40px", textAlign: "center" }}
            />

            <Button onClick={handleInc}>+</Button>
          </Box>
          <Center width="100%">
            <Text>Trong kho:</Text>
            <Text color="red" marginLeft="4px">
              {QTY}
            </Text>
          </Center>
          <Box justifyContent="center" display="flex" width="90%">
            <Button
              h="auto"
              m="0"
              width="100%"
              textAlign="center"
              border="none"
              backgroundColor={"white"}
              color="rgb(23, 116, 239)"
              _hover={{ color: "red" }}
              onClick={() => {
                DeleteRequest(userID, id, colorID, storageID);
              }}
            >
              xóa
            </Button>
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
};

export default CartItem;
