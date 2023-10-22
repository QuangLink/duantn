import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
const exchangeRate = 300000;
const WishProduct = (props) => {
  const toast = useToast();
  const { data, handleDelete } = props;
  const { id, name, img, price, mrp } = data;

  const handleAdd = () => {
    let flag = false;
    axios
      .get("https://rus-digital-televisions.onrender.com/cart")
      .then((res) => {
        res.data.map((i) => {
          if (i.name === data.name) {
            flag = true;
          }
        });

        if (flag) {
          toast({
            title: "Sản phẩm đang trong giỏ hàng",
            description: `${name} hiện đã trong giỏ hàng`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          let newData = {};
          for (let i in data) {
            if (i === "id") {
              continue;
            }
            newData[i] = data[i];
          }
          axios
            .post("https://rus-digital-televisions.onrender.com/cart", newData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          toast({
            title: "Đơn hàng đã được thêm vào giỏ hàng",
            description: `${name} thêm vào giỏ hàng thành công`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Image src={img} alt={name} p="5" h="200" _hover={{ p: "0" }} />
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
        {name}
      </Box>
      <Flex
        w="75%"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="2"
      >
        <Heading as="h3" size="xs" color="red">
          {price
            ? `${(
                parseFloat(price.replace("₹", "")) * exchangeRate
              ).toLocaleString("vi-VN", {
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
          {mrp
            ? `${(
                parseFloat(mrp.replace("₹", "")) * exchangeRate
              ).toLocaleString("vi-VN", {
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
          onClick={() => handleDelete(id, name)}
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
