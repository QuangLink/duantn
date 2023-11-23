import React from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RatingBar from "./RatingBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import Cookies from "js-cookie";
const postSingleDataWish = async (data) => {
  try {
    const userID = Cookies.get("userID");
    console.log(data);

    const postData = {
      userID,
      prodID: data.prodID,
      colorID: data.colorID,
      storageID: data.storageID,
    };
    let response = await axios.post(
      `http://localhost:9000/wishlist/`,
      postData,
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
  const { data } = props;
  const {
    prodID,
    prodName,
    prodImg,
    prodPrice,
    prodPriceSale,
    prodSale,
    prodRateAvg,
  } = data;

  var navigate = useNavigate();
  const toast = useToast();
  const handleWish = (data) => {
    console.log(data);

    postSingleDataWish(data).then((res) => {
      toast({
        title: "Added Item Successfully to WishList",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    });
  };

  return (
    <div className="div_1">
      <Link to={`${prodID}`}>
        <Box h={[280, 360, 520]}>
          <Box padding="10px">
            <FontAwesomeIcon icon={faEye} /> Xem
          </Box>
          <Center>
            <Image
              src={prodImg}
              alt={prodName}
              w={["65%", "80%", "90%"]}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "translateY(-10px)" }}
            />
          </Center>
          {prodSale !== 0 && (
            <Box
              className="div_2"
              css={{
                "@media (max-width: 430px)": {
                  width: "100%",
                  textAlign: "center",
                },
              }}
            >
              <Box
                className="box_1"
                fontSize={{ base: "15px", md: "20px", lg: "18px" }}
                h={["20px", "40px", "60px"]}
              >
                {prodName}
              </Box>
              <Box className="box_2">
                <RatingBar rating={prodRateAvg || 0.5} />
                <Heading
                  as="h3"
                  fontSize={{ base: "10px", md: "15px", lg: "13px" }}
                  color="red"
                  fontWeight="black"
                >
                  Giá mới:{" "}
                  {prodPrice &&
                    prodPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                </Heading>
                <Text
                  fontSize={{ base: "10px", md: "15px", lg: "13px" }}
                  mt={2}
                  fontWeight="bold"
                  color="blackAlpha.600"
                  textDecoration="line-through"
                >
                  Giá gốc:{" "}
                  {prodPriceSale &&
                    prodPriceSale.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                </Text>
              </Box>
              <Badge
                borderRadius="5px"
                width="auto"
                px="2"
                backgroundColor="#fff0e9"
                color="#eb5757"
                fontSize={{ base: "10px", md: "15px", lg: "13px" }}
                marginBottom="10"
                marginLeft={5}
              >
                Giá ưu đãi
              </Badge>
            </Box>
          )}
          {prodSale === 0 && (
            <Box className="div_2">
              <Box
                className="box_1"
                h={["20px", "40px", "60px"]}
                fontSize={{ base: "15px", md: "15px", lg: "18px" }}
              >
                {prodName}
              </Box>
              <Box w="100%" marginBottom="2" marginLeft={5}>
                <RatingBar rating={prodRateAvg || 0.5} />
                <Heading
                  as="h3"
                  fontSize={{ base: "10px", md: "15px", lg: "13px" }}
                  color="red"
                  fontWeight="black"
                >
                  Giá:{" "}
                  {prodPrice &&
                    prodPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                </Heading>
              </Box>
              <Badge
                borderRadius="5px"
                width="auto"
                px="2"
                backgroundColor="#fff0e9"
                color="#eb5757"
                fontSize={{ base: "10px", md: "15px", lg: "13px" }}
                marginBottom="10"
                marginLeft={5}
              >
                Giá tốt
              </Badge>
            </Box>
          )}
        </Box>
      </Link>
      <Button onClick={() => handleWish(data)}>
        <BsSuitHeart /> Yêu Thích
      </Button>
    </div>
  );
};

export default Product;
