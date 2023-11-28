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
import { Flex, Text, Image, Square, Box, Center } from "@chakra-ui/react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemCardTest2 = ({ type, heading }) => {
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
            //hiện box này bên trên banner image và trong box này có text overlay và button show now có width bên trong Image
            position="absolute"
            mt="5%"
            ml="-45%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            zIndex={2} // Set z-index to ensure the text is on top of the image
            color="white"
            p="2"
            w="15%"
            h="auto"
            borderRadius="15px"
            borderWidth={1}
            borderColor={"#555"}
            bg="rgba(0,0,0,0.5)"
            fontSize="10px"
          >
            <h3>Asus</h3>
            <p>
                Chọn theo phong cách của bạn
            </p>
            <button className="button button--primary">Show Now</button>
          </Box>
            <Image
              mt="1"
              src="https://megabyte.andevfrontend.com/images/categories/sliders/notebooks.jpg"
              alt="Smart Watch"
              height="415px"
              mr={"1%"}
              width="30%"
              loading="lazy"
              borderRadius="15px"
              zIndex={1} // Set z-index to ensure the image is behind the text
            />
          {/* Banner Image */}


          {/* Text Overlay */}

          {/* Swiper Slider */}
          <Box
            w="75%" // Adjust the width of the Swiper slider as needed
            m="auto"
            mt="1"
          >
            <Swiper
              slidesPerView={4}
              grid={{ rows: 1, fill: "row" }}
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

export default ItemCardTest2;
