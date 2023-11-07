import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "./stylehome.css";
const PrDeal = ({ type }) => {
  return (
    <Box
      marginTop="2  "
      justifyContent="center"
      w="70%"
      m="auto"
      mb="5"
      cursor="pointer"
      textAlign="center"
      backgroundColor="#1078ff"
      borderRadius="15px"
    >
      <Heading
        textAlign="center"
        display="flex"
        justifyContent="center"
        w="100%"
        m="15p% 10% 10% 10%"
      >
        <Box>
          <i>
            {" "}
            <img
              width="120px"
              src={require("../../Components/Images/HDSale.png")}
            />
          </i>
        </Box>
        <Box mt="8">
          <Text fontSize="40px" color="#efefef" w="100%">
            {" "}
            TUẦN LỄ GIẢM GIÁ SẬP SÀN
          </Text>
        </Box>
      </Heading>
      <Swiper>
        <Box h="200px" m="1" className="bannerPr">
          <Image
            src="https://i.pinimg.com/564x/fd/e5/37/fde537bc33d05034f6aec0b0ea33f397.jpg"
            w="99%"
            h="200px"
            m="1"
            borderRadius="15px"
          />
        </Box>
      </Swiper>
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
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
                <Link to={i.linked}>
                  <Box
                    className="list"
                    p="2"
                    mt="4"
                    ml="1"
                    mr="1"
                    mb="5"
                    backgroundColor="white"
                    borderRadius="15px "
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    w=""
                    h="auto"
                  >
                    <Box className="img">
                      <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                        <Image src={`${i.img}`} alt={i.name} boxSize="160px" />
                      </Square>
                      <Text
                        mt="2"
                        h="70px"
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
                      <Center m="0 auto">
                        <Box mt="2.5" textAlign="center">
                          <Flex textAlign="center">
                            <Square>
                              <Text
                                color="gray.600"
                                fontSize="15px"
                                textAlign="center"
                              >
                                Giá mới:{" "}
                              </Text>
                            </Square>
                            <Square>
                              <Text
                                fontWeight="650"
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
                          <Box h="20px" mb="3">
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
                          <Box borderRadius="15px">
                            <Image
                              src={require("../../Components/Images/PrSaleimg.png")}
                              w="100%"
                              borderRadius="15px"
                            />
                          </Box>
                        </Box>
                      </Center>
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

export default PrDeal;
