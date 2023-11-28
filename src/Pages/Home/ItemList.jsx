import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { v4 as uuid } from "uuid";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { Flex, Text, Image, Square, Box, Center, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemList = ({ type, heading }) => {
  return (
    <Center>
      <Center mb="2" w="80%" display="flex" flexWrap="wrap" >
        <Flex
          justifyContent="center"
          w="100%"
          mt="6"
          cursor="pointer"
          textAlign="center"
        >
   
          <Box
            w="100%" // Adjust the width of the Swiper slider as needed
            m="auto"
            mt="1"
          >
            <Swiper
              slidesPerView={5}
              grid={{ rows: 2, fill: "row" }}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
      
              modules={[Grid, Autoplay]}
              className="mySwiper"
            >
              {type.map((i) => (
                <Box key={uuid()}>
                  <SwiperSlide>
                    <Box
                      className="list"
                      p="2"
                      m={0.5}
                      borderRadius="15px"
                      borderWidth={1}
                      borderColor={"#ccc"}
                      h="auto"
                      bg="white"
                    >
                      <Link to={`/${i.type}/${i.id}`}>
                        <Box className="list" p="2" w="" h="auto" >
                          <Box className="img">
                            <Square
                              m="auto"
                              w={100}
                              h={200}
                              transition="transform 0.3s ease-in-out"
                              _hover={{ transform: "scale(1.1)" }}
                            >
                              <Image
                                src={`${i.img}`}
                                maxW={200}
                                maxH={150}
                                objectFit={"fill"}
                              />
                            </Square>

                            <Text
                              mt="2"
                              height="70px"
                              fontFamily={"Arial"}
                              color="#424245"
                              noOfLines={2}
                              textAlign="center"
                              fontSize="17px"
                              _hover={{ color: "blue" }}
                              fontWeight="700"
                            >
                              {i.name}
                            </Text>
                            <Box mt="3" m="10px 0 30px 0px">
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
                                    {i.price &&
                                      i.price.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                      })}
                                  </Text>
                                </Square>
                              </Flex>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  </SwiperSlide>
                </Box>
              ))}
            </Swiper>
          </Box>
        </Flex>
        <Center w="80%" mt="2">
        <Link to={`/${heading}`}>
        <Button
        variant='outline'
            w="100%"
            mt="6"
            bg="white"
            color="#424245"
            _hover={{ color: "blue" }}
            fontWeight="700"
        >
            Xem thêm
        </Button>
        </Link>
    </Center>
      </Center>

  
    </Center>
  );
};

export default ItemList;
