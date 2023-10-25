import React from "react";
import { FaStar } from 'react-icons/fa';
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RatingBar from './RatingBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const postSingleDataWish = async (data) => {
  try {
    let response = await axios.post(
      `https://rus-digital-televisions.onrender.com/whishlist`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.log(
      "in the postSingleData function and error is :- ",
      error.response.data,
    );
  }
};

// const singleData = useSelector((store) => store.singleProduct.data);

const Product = (props, rating) => {
  const { data, typeOfProduct } = props;
  const { prodID, prodName, prodImg, prodPrice, prodPriceSale, prodSale } =
    data;
  console.log("this is data from the outside hanldewish", data);

  var navigate = useNavigate();
  const toast = useToast();
  const handleWish = (data) => {
    console.log("this is data from hadleWhish", data);
    let newData = {};
    for (let i in data) {
      if (i === "prodID") {
        continue;
      }
      newData[i] = data[i];
    }
    // console.log("newData is :-", newData);
    // console.log("in the handlePost function and viewing the data before the post request", data);
    postSingleDataWish(newData).then((res) => {
      // console.log("in the handlePost function and viewing the data after the post request", res)
      toast({
        title: "Added Item Successfully to WishList",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setTimeout(() => {
        navigate("/whishlist");
      }, 1000);
    });
  };

  return (
    <>
    <Link to={`${prodID}`}>
    <Box height="500px">
      <Box padding="10px">
        <FontAwesomeIcon icon={faEye} /> Xem
      </Box>
      <Image src={prodImg} alt={prodName} justifyItems="center" pl="12%" h="200" 
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "translateY(-10px)" }} />
      {
        prodSale !== 0 && (
          <>
            <Box
              mt="10px"
              h="100px"
              w="100%"
              fontSize="1.2rem"
              textAlign="center"
              fontWeight="bold"
              fontFamily="Source Sans Pro"
              color="#333"
              lineHeight="120%"
              marginBottom="3"
              textOverflow="ellipsis"
              overflow="hidden"
              _hover={{ color: "blue" }}
            >
              {prodName}
            </Box>
            <Box
              w="100%"
              marginBottom="2"
              marginLeft={5}
            >
              <RatingBar rating={rating} />
              <Heading as="h3" fontSize="1.1rem" color="red" fontWeight="black">
                Giá mới: {prodPrice}₫
              </Heading>
              <Text
                mt={2}
                size="1.1rem"
                fontWeight="bold"
                color="blackAlpha.600"
                textDecoration="line-through">
                Giá gốc: {prodPriceSale}₫
              </Text>
            </Box>
            <Badge
              borderRadius="5px"
              width="auto"
              px="2"
              backgroundColor="#fff0e9"
              color="#eb5757"
              fontSize="xs"
              marginBottom="10"
              marginLeft={5}
            >
              Giá ưu đãi
            </Badge>
          </>
        )
      }
      {
        prodSale == 0 && (
          <>
            <Box
             mt="10px"
             h="100px"
             w="100%"
             fontSize="1.2rem"
             textAlign="center"
             fontWeight="bold"
             fontFamily="Source Sans Pro"
             color="#333"
             lineHeight="120%"
             marginBottom="3"
             textOverflow="ellipsis"
             overflow="hidden"
             _hover={{ color: "blue" }}
            >
              {prodName}
            </Box>
            <Box
              w="100%"
              marginBottom="2"
              marginLeft={5}>
              <RatingBar rating={rating} />
              <Heading as="h3" fontSize="1.1rem" color="red" fontWeight="black">
                Giá: {prodPrice}₫
              </Heading>

            </Box>
            <Badge
              borderRadius="5px"
              width="auto"
              px="2"
              backgroundColor="#fff0e9"
              color="#eb5757"
              fontSize="xs"
              marginBottom="10"
              marginLeft={5}
            >
              Giá tốt
            </Badge>

          </>
        )
      }
    </Box >
      </Link>
      <Button
        w="100%"
        marginLeft="0"
        borderRadius="0"
        borderTop="1px solid rgb(202, 201, 201)"
        color="gray"
        bg="white"
        onClick={() => handleWish(data)}>
        <BsSuitHeart /> Yêu Thích
      </Button>
    </>
  );
};

export default Product;
