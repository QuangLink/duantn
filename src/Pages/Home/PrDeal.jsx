import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "./stylehome.css";
const PrDeal = ({ type }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    try {
      let responce = await axios.get(
        `https://duantn-backend.onrender.com/products`,
      );

      if (responce.data) {
        setFilteredProducts(responce.data || []);
      }
    } catch (error) {}
  };
  const listDataSaleLaptop = filteredProducts.filter(
    (product) => product.prodType === "Laptop" && product.prodSale > 0,
  );

  return (
    <Box
      marginTop="2  "
      justifyContent="center"
      w="80%"
      m="auto"
      mb="5"
      cursor="pointer"
      textAlign="center"
      backgroundColor="#043174"
      borderRadius="15px"
    >
      <Heading
        textAlign="center"
        display="flex"
        justifyContent="center"
        w="100%"
        m="15p% 10% 10% 10%"
      ></Heading>
      <Swiper>
        <Box h="auto" className="bannerPr">
          <Image
            src={require("../../Components/Images/bannerPr1.jpg")}
            w="100%"
            h="auto"
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
              slidesPerView: 5,
              spaceBetween: 2,
            },
          }}
        >
          {listDataSaleLaptop.map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Link to={`/${i.prodType}/${i.prodID}`}>
                  <Box
                    className="list"
                    p="2"
                    mt="4"
                    m="2"
                    mb="3"
                    backgroundColor="white"
                    borderRadius="15px "
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    w=""
                    h="auto"
                  >
                    <Box className="img">
                      <Square
                        m="auto"
                        w={200}
                        h={200}
                        _hover={{ transform: "scale(1.1)" }}
                      >
                        <Image
                          src={`${i.prodImg}`}
                          maxW={200}
                          maxH={150}
                          objectFit={"cover"}
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
                        {i.prodName}
                      </Text>
                      <Center m="0 auto">
                        <Box mt="2.5" textAlign="center">
                          <Flex textAlign="center">
                            <Square>
                              <Text
                                color="gray.600"
                                fontSize="15px"
                                textAlign="center"
                              >
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
                                {i.prodPrice &&
                                  i.prodPrice.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                              </Text>
                            </Square>
                          </Flex>
                          <Box h="20px" mb="3">
                            {i.prodSale !== 0 && (
                              <>
                                <Flex>
                                  <Text color="gray.600" fontSize="14px">
                                    Giá gốc:{" "}
                                  </Text>
                                  {"  "}
                                  <Text
                                    as="s"
                                    color="gray.600"
                                    fontSize="14px"
                                    ml="1"
                                  >
                                    {i.prodPriceSale &&
                                      i.prodPriceSale.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                      })}
                                  </Text>
                                </Flex>
                                {i.prodSale >= 20 ? (
                                  <Box
                                    borderRadius="5px"
                                    w="70%"
                                    backgroundImage="linear-gradient(135deg, rgb(255, 87, 87) 0%, rgb(255, 0, 0) 100%)"
                                    color="#fff "
                                    _hover={{ color: "black" }}
                                    textAlign="center"
                                  >
                                    <Text fontSize="13px" fontWeight="500">
                                      GIẢM GIÁ SỐC -{i.prodSale}%
                                    </Text>
                                  </Box>
                                ) : (
                                  <Flex>
                                    <Text color="gray.600" fontSize="14px">
                                      Giảm giá:{" "}
                                    </Text>
                                    {"  "}
                                    <Text
                                      bgColor="#fff0e9"
                                      color="#eb5757"
                                      fontSize="14px"
                                      fontWeight="700"
                                      borderRadius="5px"
                                      ml="1"
                                    >
                                      -{i.prodSale}%
                                    </Text>
                                  </Flex>
                                )}
                              </>
                            )}
                          </Box>
                          <Box borderRadius="15px">
                            <Image
                              src={require("../../Components/Images/PrSaleimg.png")}
                              w="100%"
                              borderRadius="15px"
                            />
                          </Box>
                        </Box>
                      </Center>
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
