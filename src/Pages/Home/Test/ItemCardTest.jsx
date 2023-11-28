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
import Heading from "../Heading";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemCardTest = ({ type, heading }) => {
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
          <Box w="29%" h="auto" position="relative" overflow="hidden" borderRadius="15px" m={1} mr={"1%"}>
            <Image
              src="//isotech-demo.myshopify.com/cdn/shop/files/Watch_Banner_7b3ae013-75a3-479c-a76f-7c2eea9d4a9e_1500x.png?v=1696738786"
              alt="Smart Watch"
              height="100%"
              loading="lazy"
              borderRadius="15px"
              zIndex={1}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Stack
              ml="35px"
              mb="135%"
              position="absolute"
              bottom={4}
              zIndex={1} // Đặt zIndex của Stack lên cao hơn hình ảnh
            >
              <Box
                //hiện box này bên trên banner image và trong box này có text overlay và button show now có width bên trong Image
                color="white"
                right={1}
                p="2"
                w="90%"
                h="auto"
                borderRadius="15px"
                borderWidth={1}
                borderColor={"#555"}
                bg="rgba(0,0,0,0.5)"
              >
                <h3>Hot Deals</h3>
                <p>
                  Pair text with an image to focus on your chosen product,
                  collection, or blog post.
                </p>
                <Button>Xem thêm</Button>
              </Box>
            </Stack>
          </Box>
          {/* Banner Image */}


          {/* Text Overlay */}

          {/* Swiper Slider */}
          <Box
            w="70%" // Adjust the width of the Swiper slider as needed
            m="auto"
            mt="1"
          >
            <Swiper
              slidesPerView={4}
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
      </Center>
    </Center>
  );
};

export default ItemCardTest;
