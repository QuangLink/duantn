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
    axios
      .get(`http://localhost:9000/cart/${userID}`)
      .then((res) => {
        res.data.map((i) => {
          if (i.prodID === data.prodID) {
            flag = true;
          }
        });
        if (flag) {
          toast({
            title: "Sản phẩm đang trong giỏ hàng",
            description: `${prodName} hiện đã trong giỏ hàng`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          const newData = {
            userID: userID,
            prodID: prodID,
            colorID: colorID,
            storageID: storageID,
          };
          axios
            .post("http://localhost:9000/cart", newData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          toast({
            title: "Đơn hàng đã được thêm vào giỏ hàng",
            description: `${prodName} thêm vào giỏ hàng thành công`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Link to={`/${prodID}`} style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default WishProduct;
