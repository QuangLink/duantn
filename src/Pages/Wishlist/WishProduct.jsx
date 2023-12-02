import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  color,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const WishProduct = (props) => {
  const toast = useToast();
  const { data, handleDelete } = props;
  const {
    prodID,
    prodName,
    prodImg,
    prodPrice,
    prodPriceSale,
    colorID,
    storageID,
  } = data;

  const handleAdd = () => {
    let flag = false;
    const userID = Cookies.get("userID");
   //cartID tự tăng giá trị
   const cartID = Math.floor(Math.random() * 1000000000);

   const productData = {
     cartID,
     userID,
     prodID,
     colorID,
     storageID,
     quantity: 1,
   };
 
   const cartData = JSON.parse(sessionStorage.getItem("cart")) || {};
 
   if (!cartData[userID]) {
     cartData[userID] = [];
   }
 
   const existingProductIndex = cartData[userID].findIndex(
     (product) =>
       product.prodID === prodID &&
       product.colorID === colorID &&
       product.storageID === storageID,
   );
 
   if (existingProductIndex !== -1) {
     cartData[userID][existingProductIndex].quantity += 1;
   } else {
     cartData[userID].push(productData);
   }
   sessionStorage.setItem("cart", JSON.stringify(cartData));
    toast({
      title: "Product Added.",
      description: `Added to cart`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });

  };

  return (
    
      <Box>
        <Image src={prodImg} alt={prodName} p="5" h="200" _hover={{ p: "0" }} />
        <Box
          h="10"
          w="100%"
          color="blue.700"
          lineHeight="120%"
          marginBottom="3"
          textOverflow="ellipsis"
          overflow="hidden"
          _hover={{ color: "red" }}
        >
          {prodName}
        </Box>
        <Flex
          w="75%"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="2"
        >
          <Heading as="h3" size="xs" color="red">
            {prodPrice
              ? `${prodPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}`
              : ""}
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="blackAlpha.600"
            textDecoration="line-through"
          >
            {prodPriceSale
              ? `${prodPriceSale.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}`
              : ""}
          </Text>
        </Flex>
        <Badge
          borderRadius="full"
          px="2"
          border="1px solid green"
          color="green"
          fontSize="xs"
          marginBottom="10"
        >
          Giảm giá còn khả dụng
        </Badge>
        <Flex>
          <Button
            w="125%"
            marginLeft="-6"
            borderRadius="0"
            borderTop="1px solid rgb(202, 201, 201)"
            color="gray"
            bg="white"
            _hover={{ color: "red", fontWeight: "bold" }}
            onClick={() => handleDelete(prodID)}
          >
            Xóa
          </Button>
          <Button
            w="125%"
            marginLeft="-6"
            borderRadius="0"
            borderTop="1px solid rgb(202, 201, 201)"
            color="gray"
            bg="white"
            _hover={{ color: "red", fontWeight: "bold" }}
            onClick={handleAdd}
          >
            Thêm vào giỏ
          </Button>
        </Flex>
      </Box>
  );
};

export default WishProduct;
