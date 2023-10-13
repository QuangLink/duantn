import React from "react";
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "../Home/Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const HotProduct = ({ type, heading, props }) => {
  const { data, typeOfProduct } = props;
  const { id, name, img, price, mrp, discount } = data;
  console.log("this is data from the outside hanldewish", data);

  return (
    <Box justifyContent="center" w="75%" m="auto" mt="6" cursor="pointer" textAlign="center">
      <Heading heading={heading} textAlign="center" display="flex" justifyContent="center" w="95%" m="15p% 10% 10% 10%" />
      <Box mt="1" >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >

          <Box  >
            <SwiperSlide >
              <Link to={`/${typeOfProduct}/${id}`}>
                <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                  <Image src={`${img}`} alt={name} boxSize="160px" />
                </Square>
                <Box p="5" mt="4" height="300px" boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
                  <Text
                    color="#424245"
                    noOfLines={2}
                    textAlign="left"
                    fontSize="15px"
                    _hover={{ color: "#fd8002" }}
                  >
                    {name}
                  </Text>
                  <Box mt="2.5">
                    <Flex>
                      <Square>
                        <Text color="gray.600" fontSize="14px">
                          Giá mới:{" "}
                        </Text>
                      </Square>
                      <Square>
                        <Text fontWeight="600" fontSize="18px" ml="1">
                          {price}  <sup>đ</sup>
                        </Text>
                      </Square>
                    </Flex>
                    <Flex>
                      <Text color="gray.600" fontSize="14px">
                        Giá gốc:{" "}
                      </Text>
                      {"  "}
                      <Text as="s" color="gray.600" fontSize="14px" ml="1">
                        {mrp} <sup>đ</sup>
                      </Text>
                    </Flex>
                    <Flex>
                      <Text color="gray.600" fontSize="14px">
                        Giảm giá:{" "}
                      </Text>
                      {"  "}
                      <Text color="gray.600" fontSize="14px" ml="1">
                        {discount} <sup>đ</sup>
                      </Text>
                    </Flex>
                    <Box
                      borderRadius="xl"
                      border="1px"
                      borderColor="green.900"
                      w="40%"
                      color="green.500"
                      bg="green.50"
                      mt="2"
                      textAlign="center"
                    >
                      <Text fontSize="10px" fontWeight="500">
                        GIẢM GIÁ SỐC
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};

export default HotProduct;
