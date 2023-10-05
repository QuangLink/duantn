import React from "react";
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const ItemCard5 = ({ type, heading }) => {
  return (
    <Box justifyContent="center" w="75%" m="auto" mt="6" cursor="pointer" textAlign="center">
      <Heading heading={heading} textAlign="center" display="flex" justifyContent="center" w="95%" />
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
          {type.map((i) => (
            <Box key={uuid()}  >
              <SwiperSlide >
                <Link to={i.linked}>
                  <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                    <Image src={`${i.img}`} alt={i.name} boxSize="160px" />
                  </Square>
                  <Box p="2" mt="4" boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
                    <Text
                      color="#424245"
                      noOfLines={2}
                      textAlign="left"
                      fontSize="15px"
                      _hover={{ color: "#fd8002" }}
                    >
                      {i.name}
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
                            {i.price}  <sup>đ</sup>
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
                      <Flex>
                        <Text color="gray.600" fontSize="14px">
                          Giảm giá:{" "} 
                        </Text>
                        {"  "}
                        <Text color="gray.600" fontSize="14px" ml="1">
                          {i.discount} <sup>đ</sup>
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
                          ƯU ĐÃI CÓ SẴN
                        </Text>
                      </Box>
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

export default ItemCard5;
