import React from "react";
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const Slider = ({ type }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
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
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      {type.map((i) => (
        <Box key={uuid()}>
          <SwiperSlide>
            <Link to={i.linked}>
              <Box
                p="2"
                mt="4"
                borderRadius="15px"
                boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              >
                <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                  <Image
                    src={`${i.img}`}
                    alt={i.name}
                    boxSize={{ base: "160px" }}
                  />
                </Square>
                <Text
                  color="#275293"
                  noOfLines={2}
                  textAlign="left"
                  fontSize="15px"
                  w={{ xs: "80%", sm: "80%", base: "100px" }}
                  _hover={{ color: "red" }}
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
                        {i.price} <sup>đ</sup>
                      </Text>
                    </Square>
                  </Flex>
                  <Flex>
                    <Text color="gray.600" fontSize="14px">
                      Giá gốc:{" "}
                    </Text>
                    {"  "}
                    <Text as="s" color="gray.600" fontSize="14px" ml="1">
                      {i.mrp} <sup>đ</sup>
                    </Text>
                  </Flex>
                  {/* <Flex>
                    <Text color="gray.600" fontSize="14px">
                      Giảm giá:{" "} 
                    </Text>
                    {"  "}
                    <Text color="gray.600" fontSize="14px" ml="1">
                      {i.discount} <sup>đ</sup>
                    </Text>
                  </Flex> */}
                  <Box
                    padding="3px"
                    borderRadius="5px"
                    w="40%"
                    color="#f72424"
                    bg="#fff0e9"
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
      ))}
    </Swiper>
  );
};

export default Slider;
