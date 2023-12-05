import React, { useState, useEffect } from "react";
import { Box, Text, Image, Square, Flex } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import axios from "axios";
import "./product.css";

const RelateProduct = ({ type, heading }) => {
  const apiUrlBase = "https://duantn-backend.onrender.com/category/";

  const categoryUrl = {
    sale: apiUrlBase + type,
  };

  const fetchDataForCategory = async (category) => {
    try {
      const response = await axios.get(categoryUrl[category]);
      return response.data.map((product) => ({
        name: product.prodName,
        img: product.prodImg,
        price: product.prodPrice,
        id: product.prodID,
        sale: product.prodSale,
        original: product.prodPriceSale,
      }));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      return [];
    }
  };

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const loadRelated = async () => {
      try {
        const relatedData = await fetchDataForCategory("sale");
        setRelatedProducts(relatedData);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu sản phẩm liên quan:", error);
      }
    };

    loadRelated();
  }, []); // Empty dependency array to run the effect only once

  return (
    <Box
      justifyContent="center"
      w={["100%", "100%", "80%"]}
      display={["none", "block", "block"]}
      m="auto"
      mt="20"
      cursor="pointer"
      textAlign="left"
      backgroundColor="blackAlpha.50"
    >
      <Box>
        <a href="">
          <Text
            fontSize="2xl"
            width=""
            fontWeight="700"
            textColor="black"
            className="headingHome"
          >
            Các sản phẩm liên quan
          </Text>
        </a>
      </Box>
      {/* <Heading heading={heading} textAlign="center" display="flex" justifyContent="center" w="95%"  m="15p% 10% 10% 10%"/> */}
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          // autoplay={{ delay:  }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            7: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
        >
          {relatedProducts.map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Link to="/">
                  <Box
                    p="5"
                    m={["0%", "0%", "1%"]}
                    height="auto"
                    backgroundColor="white"
                    borderRadius="15px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                  >
                    <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                      <Image
                        src={`${i.img}`}
                        alt={i.name}
                        boxSize="160px"
                        marginBottom="10px"
                      />
                    </Square>
                    <Text
                      color="#424245"
                      noOfLines={2}
                      textAlign="left"
                      fontSize="15px"
                      fontWeight="bold"
                      _hover={{ color: "#fd8002" }}
                    >
                      {i.name}
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
                            {i.price &&
                              i.price.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })}
                          </Text>
                        </Square>
                      </Flex>
                      {i.original !== 0 && (
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
                </Link>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default RelateProduct;
