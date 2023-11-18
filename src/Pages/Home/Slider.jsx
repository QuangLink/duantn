import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Badge,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const Slider = ({ type }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    try {
      let responce = await axios.get(`http://localhost:9000/category/apple`);
      console.log("in the logi func try", responce.data);
      if (responce.data) {
        setFilteredProducts(responce.data || []);
      }
    } catch (error) {}
  };
  const listDataIphone = filteredProducts.filter(
    (product) => product.prodType === "Phone",
  );

  console.log(listDataIphone, "listDataIphone");

  return (
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
      {listDataIphone.map((i) => (
        <Box key={uuid()}>
          <SwiperSlide>
            <Link to={`/${i.prodType}/${i.prodID}`}>
              <Box
                p="2"
                m={2}
                borderRadius="15px"
                boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                width="310px"
              >
                <Square m="5" _hover={{ transform: "scale(1.1)" }}>
                  <Image
                    src={`${i.prodImg}`}
                    alt={i.prodName}
                    boxSize={{ base: "160px" }}
                  />
                </Square>
                <Text
                  mt="2"
                  h="30px"
                  fontFamily="Arial"
                  color="gray.800"
                  noOfLines={2}
                  textAlign="center"
                  fontSize="20px"
                  w={{ xs: "80%", sm: "80%", base: "100px" }}
                  _hover={{ color: "blue" }}
                  fontWeight="500"
                >
                  {i.prodName}
                </Text>
                <Box mt="2.5" m="20px 0 50px 30px">
                  <Flex>
                    <Square>
                      <Text
                        color="gray.600"
                        fontSize="14px"
                        justifyContent="center"
                      >
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
                        {i.prodPrice &&
                          i.prodPrice.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                      </Text>
                    </Square>
                  </Flex>
                  <Box h="20px">
                    {i.original !== 0 && (
                      <>
                        <Flex>
                          <Text
                            color="gray.600"
                            fontSize="14px"
                            justifyContent="center"
                          >
                            Giá gốc:{" "}
                          </Text>
                          {"  "}
                          <Text as="s" color="gray.600" fontSize="14px" ml="1">
                            {i.original &&
                              i.original.toLocaleString("vi-VN", {
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
