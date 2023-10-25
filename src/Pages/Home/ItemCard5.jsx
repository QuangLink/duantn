import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, Square, Button, Center} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CSSTransition } from 'react-transition-group';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import './stylehome.css';
import axios from 'axios';
const ItemCard5 = ({ type, heading }) => {
  
return (
<Box justifyContent="center" w="70%" m="auto" mt="6" cursor="pointer" textAlign="center">
<Heading heading={heading} textAlign="center" display="flex" justifyContent="center" w="95%" m="15p% 10% 10% 10%" />
<Box mt="1">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 10000 }}
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
          spaceBetween: 10,
        },
      }}
    >
      {type.map((i) => (
        <Box key={uuid()}>
          <SwiperSlide>
          <Box className="list" p="2" mt="4" borderRadius="15px" boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" w="" h="auto">
            <Link to={i.linked}>
              <Box className="list" p="2" mt="4"  w="" h="auto">
                <Box className="img">
                  <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                    <Image src={`${i.img}`} alt={i.name} boxSize="160px" />
                  </Square>

                  <Text mt="2" color="black" noOfLines={2} textAlign="center" fontSize="15px" _hover={{ color: "red" }}>
                    {i.name}
                  </Text>
                  <Box mt="2.5" m="20px 0 30px 0"  >
                  <Flex>
                    <Square>
                      <Text color="gray.600" fontSize="14px">
                        Giá mới :{" "}
                      </Text>
                    </Square>
                    <Square>
                      <Text fontWeight="600" fontSize="18px" ml="1" color="red" _hover={{ color: "red" }}>
                        {i.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} <sup>đ</sup>
                      </Text>
                    </Square>
                  </Flex>
                  <Flex>
                    <Text color="gray.600" fontSize="14px">
                      Giá gốc:{" "}
                    </Text>
                    {"  "}
                    <Text as="s" color="gray.600" fontSize="14px" ml="1">
                      {i.original.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} <sup>đ</sup>
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
                        padding="3px" borderRadius="5px" w="50%" color="#EC4C0A" bg="#FEB373" mt="2" textAlign="center"
                    
                  >
                    <Text fontSize="10px" fontWeight="500">
                      GIẢM GIÁ SỐC
                    </Text>
                  </Box>
                </Box>
                </Box>
              </Box>
            </Link>
            <Box>
        <Button className="add-to-cart" >
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