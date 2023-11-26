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
import { Navigation, Autoplay } from "swiper/modules";
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
      let responce = await axios.get(
        `https://duantn-backend.onrender.com/category/apple`,
      );

      if (responce.data) {
        setFilteredProducts(responce.data || []);
      }
    } catch (error) {}
  };
  const listDataIphone = filteredProducts.filter(
    (product) => product.prodType === "Phone",
  );

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
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
    >
      {listDataIphone.map((i) => (
        <Box key={uuid()}>
          <SwiperSlide>
            <Link to={`/${i.prodType}/${i.prodID}`}>
              <center>
                <Box p="2" m={1} border="1px solid black" borderRadius="15px">
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
                    h="70px"
                    fontFamily="Arial"
                    color="gray.800"
                    noOfLines={2}
                    textAlign="center"
                    fontSize="17px"
                    w={{ xs: "80%", sm: "80%", base: "100px" }}
                    _hover={{ color: "red" }}
                    fontWeight="700"
                  >
                    {i.prodName}
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
                          {i.prodPrice &&
                            i.prodPrice.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                        </Text>
                      </Square>
                    </Flex>
                  </Box>
                </Box>
              </center>
            </Link>
          </SwiperSlide>
        </Box>
      ))}
    </Swiper>
  );
};

export default Slider;
