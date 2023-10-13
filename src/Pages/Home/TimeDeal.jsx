import React from "react";
import { Box, Flex, Text, Image, Square, Heading, } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
import uuid from "react-uuid";
import './stylehome.css';

const TimeDeal = ({ type, heading }) => {
  return (
    <Box justifyContent="center" w="75%" m="auto" mt="6" cursor="pointer" textAlign="center" backgroundColor="gray"  borderRadius="15px">
     
     
      <Heading textAlign="center" display="flex" justifyContent="space-around" w="95%"  m="15p% 10% 10% 10%">
                      <Box mt="6" display="flex">
                      <i > <img width="40px" height="75px" src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/lightning-ic.png"/></i>
                        
                        <Text>
                        
                        <Text fontSize="30px" color="yellow.400"> GIỜ VÀNG DEAL SỐC</Text>
                        <Text fontFamily="-moz-initial" fontSize="2xl" color="blackAlpha.800" mt="2"><i fontSize="10px" >  Kết thúc trong 00: 00 :00 </i> </Text>
                        </Text>
                      
                      
                      </Box>
                      <Box mt="8"  >
                      <Text fontSize="20px" >Đang diễn ra</Text>
                      <Text fontFamily="-moz-initial" fontSize="2xl" color="blackAlpha.800" mt="2"   borderBottom="3px solid #E6CB47" borderBottomRadius="12px"><i fontSize="10px" > 00: 00 / 00:00 </i> </Text>
                      </Box>
                      <Box mt="8">
                      <Text fontSize="20px" >Ngày mai</Text>
                      <Text fontFamily="-moz-initial" fontSize="2xl" color="blackAlpha.800" mt="2"><i fontSize="10px" > 00: 00 / 00:00 </i> </Text>
                      </Box>

      </Heading>


     



      <Box mt="1" bachgroundColor="white" >
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
            <Box key={uuid()}  >
              <SwiperSlide  >
                <Link to={i.linked}>
                  
                  <Box className="list" p="2"  mt="4" ml="1" mr="1" backgroundColor="white" borderRadius="15px "boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" w="" h="auto"  >
                  <Box className="img" >
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
                          <Text fontWeight="650" fontSize="18px" ml="1" color="red"  _hover={{ color: "red" }}>
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
                      <Box mt="4"  display="flex" backgroundColor="yellow" borderRadius="15px">
                        <Text mt="-2"><img  width="22px" height="22px" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/fs-iconfire.png"/></Text>
                        <Box  ml="2"  >
                           
                            <Text >
                            <b>Còn 27/50 suất</b>
                            </Text>


                         </Box>

                        </Box>
                    </Box>
                  </Box>
                  </Box>
                  <Box className="list" p="2" mt="4" mb="5" ml="1" mr="1" backgroundColor="white" borderRadius="15px "boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" w="" h="auto"  >
                  <Box className="img" >
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
                          <Text fontWeight="650" fontSize="18px" ml="1" color="red"  _hover={{ color: "red" }}>
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

                      <Box mt="4"  display="flex" backgroundColor="yellow" borderRadius="15px">
                        <Text mt="-2"><img  width="22px" height="22px" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/fs-iconfire.png"/></Text>
                        <Box  ml="2"  >
                           
                            <Text >
                            <b>Còn 27/50 suất</b>
                            </Text>


                         </Box>

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

export default TimeDeal;
