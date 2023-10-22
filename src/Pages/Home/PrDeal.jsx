import React from "react";
import { Box, Flex, Text, Image, Square, Heading } from "@chakra-ui/react";
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
      justifyContent="center"
      w="75%"
      m="auto"
      mb="5"
      cursor="pointer"
      textAlign="center"
      backgroundColor="#1078ff"
      borderRadius="15px"
    >
      {/* <Heading textAlign="center" display="flex"  justifyContent="space-around" w="95%" back mt="6"  m="15p% 10% 10% 10%">
                            <Box mt="6" display="flex" >
                                             <i>
                                            <Image width="30%"  src="https://o.remove.bg/downloads/c4ee67e1-1d40-462a-a551-7de46e8310be/es%C3%A2fghrtn7af70332cb-removebg-preview.png"/> 
                                            </i>
                                            
                                            <Text fontSize="33px" color="#efefef" w="70%">  TUẦN LỄ GIẢM GIÁ SẬP SÀN</Text>
                                            
                            </Box>
                        </Heading> */}
      <Heading
        textAlign="center"
        display="flex"
        justifyContent="center"
        w="100%"
        m="15p% 10% 10% 10%"
      >
        <Box mt="0">
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
        <Box h="200px" display="flex" justifyContent="space-between" m="1">
          <Image
            src="https://i.pinimg.com/564x/fd/e5/37/fde537bc33d05034f6aec0b0ea33f397.jpg"
            w="49%"
            m="1"
            borderRadius="15px"
          />
          <Image
            src="https://i.pinimg.com/564x/d5/bf/c1/d5bfc1b3fd6c5ff7d62af85ef6e14604.jpg"
            w="49%"
            m="1"
            borderRadius="15px"
          />
          <Image
            src="https://i.pinimg.com/564x/94/99/ef/9499ef4235609a75d4a99f4b55213afa.jpg"
            w="49%"
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
                        color="#424245"
                        noOfLines={2}
                        textAlign="left"
                        fontSize="15px"
                        _hover={{ color: "red" }}
                      >
                        {i.name}
                      </Text>
                      <Box mt="2.5" m="20px 0 30px 0">
                        <Flex>
                          <Square>
                            <Text color="gray.600" fontSize="15px">
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
                        <Box mb="-5" borderRadius="15px">
                          <Image
                            src={require("../../Components/Images/PrSaleimg.png")}
                            w="100%"
                            borderRadius="15px"
                          />
                        </Box>
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

export default PrDeal;
