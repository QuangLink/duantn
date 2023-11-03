import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Button,
  background,
  Badge,
  Center,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "../Home/Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const HotProduct = ({ type, heading }) => {
  return (
    <Box
      justifyContent="center"
      w="80%"
      m="auto"
      mt="6"
      cursor="pointer"
      textAlign="center"
      backgroundColor="#CCF1F9"
      borderRadius="5px"
      css={{ "@media (max-width: 768px)": { display: "none" } }}
    >
      <Box>
        <a href="">
          <Text
            fontSize="2.1rem"
            color="whiteAlpha.900"
            fontWeight="black"
            width="100%"
            backgroundColor="blue.300"
            h="60px"
            p={2}
          >
            Các sản phẩm hot nhất tuần qua{" "}
          </Text>
        </a>
      </Box>
      {/* <Heading heading={heading} textAlign="center" display="flex" justifyContent="center" w="95%"  m="15p% 10% 10% 10%"/> */}
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          // autoplay={{ delay:  }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {type.map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Link to="/computers/">
                  <Box
                    p="5"
                    m="2"
                    height="350px"
                    backgroundColor="white"
                    borderRadius="10px"
                    transition="transform 2s ease-in-out"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                  >
                    <Square
                      m="auto"
                      _hover={{ transform: "translateY(-10px)" }}
                    >
                      <Image src={`${i.img}`} alt={i.name} boxSize="160px" />
                    </Square>
                    <Box height="30px">
                    <Text
                      color="#424245"
                      noOfLines={2}
                      textAlign="center"
                      fontSize="15px"
                      fontWeight="bold"
                      _hover={{ color: "#fd8002" }}
                    >
                      {i.name}
                    </Text>
                    </Box>
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
                            {i.price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </Text>
                        </Square>
                      </Flex>
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
                              {i.original.toLocaleString("vi-VN", {
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
                  </Box>
                </Link>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HotProduct;
