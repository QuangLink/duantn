import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Image,
  Button,
  Heading,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { postSingleDataWish } from "../SingleProduct/SingleProduct";

const CartItem = ({
  quantity,
  cartID,
  name,
  img,
  price,
  priceSale,
  color,
  storage,
  id,
  DeleteRequest,
}) => {
  const singleData = {
    cartID,
    quantity,
    color,
    storage,
    name,
    img,
    priceSale,
    price,
  };
  const toast = useToast();

  const [count, setCount] = useState(quantity);

  const dispatch = useDispatch();
  var navigate = useNavigate();
  const handleInc = () => {
    setCount(count + 1);
    let number = parseInt(price);
    dispatch({ type: "priceIncrease", payload: number });

    axios
      .put(`https://duantn-backend.onrender.comcart/plus/${cartID}`, {
        quantity: count + 1,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDec = () => {
    if (count > 1) {
      let number = parseInt(price);
      setCount(count - 1);
      dispatch({ type: "priceDecrease", payload: number });

      axios
        .put(`https://duantn-backend.onrender.comcart/minus/${cartID}`, {
          quantity: count + 1,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
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
        navigate("/whishlist");
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
      key={cartID}
      className=""
      border={"1px solid rgb(224, 224, 225)"}
      flexDirection="column"
      width={"100%"}
      margin={"0px 0px 16px 0px"}
      boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
      borderRadius="4px"
    >
      <Flex
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
          <Box display={"flex"} gap="5">
            <Button onClick={handleDec}>-</Button>
            <Button
              backgroundColor={"white"}
              disabled={true}
              fontWeight={"bold"}
            >
              {count}
            </Button>
            <Button onClick={handleInc}>+</Button>
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

          <Heading fontSize="12px" color={"rgb(102, 102, 102)"}></Heading>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        borderTop={"1px solid rgb(224, 224, 225)"}
        fontSize="13px"
        fontWeight={"500"}
        background="transparent"
        textAlign={"center"}
      >
        <Box width={"50%"} borderRight="1px solid rgb(224, 224, 225)">
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={() => {
              DeleteRequest(cartID)
                .then((response) => {
                  toast({
                    title: "Delete Item Successfully",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top",
                  });
                })
                .catch((reject) => {
                  toast({
                    title: "Something Went Wrong",
                    description: `${reject.message}`,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom-right",
                  });
                });
            }}
          >
            Xóa
          </Button>
        </Box>
        <Box width={"50%"}>
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={() => handleWish(singleData)}
          >
            Thêm vào yêu thích
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
