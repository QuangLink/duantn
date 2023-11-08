import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Button,
  Center,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CSSTransition } from "react-transition-group";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "./stylehome.css";
import axios from "axios";

import Cookies from "js-cookie";
//add singleData to cart
const postSingleData = async (data) => {
  try {
    // Lấy userID từ sessionStorage
    const userID = Cookies.get("userID");

    // Ensure data.prodID is a valid value, not [object Object]
    const prodID = data.prodID;

    // Tạo dữ liệu gửi đi kết hợp với userID và prodID
    const postData = {
      prodID,
      userID,
    };

    let response = await axios.post(
      `https://duantn-backend.onrender.com/cart/`,
      postData,
    );
    return response.data;
  } catch (error) {
    console.log("Trong hàm postSingleData xảy ra lỗi: ", error.response.data);
  }
};

const ItemCard5 = ({ type, heading }) => {
  var navigate = useNavigate();
  const handlePost = (prodID) => {
    postSingleData({ prodID }).then((res) => navigate("/cart"));
  };

  return (
    <Box
      justifyContent="center"
      w="70%"
      m="auto"
      mt="6"
      mb="2"
      cursor="pointer"
      textAlign="center"
    >
      <Heading
        heading={heading}
        textAlign="center"
        display="flex"
        justifyContent="center"
        w="95%"
        m="15p% 10% 10% 10%"
      />
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 10000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
        >
          {type.map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Box
                  className="list"
                  p="2"
                  mt="4"
                  borderRadius="15px"
                  boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                  w=""
                  h="auto"
                >
                  <Link to={i.linked}>
                    <Box className="list" p="2" mt="4" w="" h="auto">
                      <Box className="img">
                        <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                          <Image
                            src={`${i.img}`}
                            alt={i.name}
                            boxSize="160px"
                          />
                        </Square>

                        <Text
                          mt="2"
                          height="70px"
                          fontFamily="serif"
                          color="#424245"
                          noOfLines={2}
                          textAlign="center"
                          fontSize="25px"
                          _hover={{ color: "red" }}
                          fontWeight="700"
                        >
                          {i.name}
                        </Text>
                        <Box mt="2.5" m="20px 0 30px 0">
                          <Flex>
                            <Square>
                              <Text color="gray.600" fontSize="14px">
                                Giá mới :{" "}
                              </Text>
                            </Square>
                            <Square>
                              <Text
                                fontWeight="600"
                                fontSize="18px"
                                ml="1"
                                color="red"
                                _hover={{ color: "red" }}
                              >
                                {i.price&&
                                  i.price.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </Text>
                            </Square>
                          </Flex>
                          <Box h="20px">
                            {i.original !== 0 && (
                              <>
                                <Flex>
                                  <Text color="gray.600" fontSize="14px">
                                    Giá gốc:{" "}
                                  </Text>
                                  {"  "}
                                  <Text
                                    as="s"
                                    color="gray.600"
                                    fontSize="14px"
                                    ml="1"
                                  >
                                    {i.origina&&
                                      i.original.toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}
                                  </Text>
                                </Flex>
                                <Box
                                  padding="3px"
                                  borderRadius="5px"
                                  w="50%"
                                  color="#EC4C0A"
                                  bg="#FEB373"
                                  mt="2"
                                  textAlign="center"
                                >
                                  <Text fontSize="10px" fontWeight="500">
                                    GIẢM GIÁ SỐC
                                  </Text>
                                </Box>
                              </>
                            )}
                          </Box>

                          {/* <Flex>
                    <Text color="gray.600" fontSize="14px">
                      Giảm giá:{" "} 
                    </Text>
                    {"  "}
                    <Text color="gray.600" fontSize="14px" ml="1">
                      {i.discount} <sup>đ</sup>
                    </Text>
                  </Flex> */}
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                  <Box>
                    <Button
                      className="add-to-cart"
                      onClick={() => handlePost(i.prodID)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
export default ItemCard5;
