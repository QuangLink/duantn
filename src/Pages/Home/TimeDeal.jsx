import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide, slidesPerView } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from "axios";

import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "./stylehome.css";

const TimeDeal = ({ type, heading }) => {
  const [thoiGianConLai, setThoiGianConLai] = useState({
    gio: 0,
    phut: 0,
    giay: 0,
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const thoiGianKetThuc = new Date();
    thoiGianKetThuc.setHours(23);
    thoiGianKetThuc.setMinutes(59);
    thoiGianKetThuc.setSeconds(59);

    const interval = setInterval(() => {
      const thoiGianHienTai = new Date();
      const thoiGianConLai = tinhThoiGianConLai(
        thoiGianHienTai,
        thoiGianKetThuc,
      );

      if (
        thoiGianConLai.gio >= 0 &&
        thoiGianConLai.phut >= 0 &&
        thoiGianConLai.giay >= 0
      ) {
        setThoiGianConLai(thoiGianConLai);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const tinhThoiGianConLai = (thoiGianHienTai, thoiGianKetThuc) => {
    const thoiGianConLai = Math.floor(
      (thoiGianKetThuc - thoiGianHienTai) / 1000,
    ); // Đổi sang giây

    const gio = Math.floor(thoiGianConLai / 3600);
    const phut = Math.floor((thoiGianConLai % 3600) / 60);
    const giay = thoiGianConLai % 60;

    return { gio, phut, giay };
  };

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    try {
      let responce = await axios.get(
        `https://duantn-backend.onrender.com/products`,
      );
      console.log("in the logi func try", responce.data);
      if (responce.data) {
        setFilteredProducts(responce.data || []);
      }
    } catch (error) {}
  };
  const listDataSale = filteredProducts.filter(
    (product) => product.prodSale > 0,
  );
  const firstHalfData = listDataSale.slice(
    0,
    Math.ceil(listDataSale.length / 2),
  );
  const secondHalfData = listDataSale.slice(Math.ceil(listDataSale.length / 2));

  return (
    <Box
      justifyContent="center"
      w="73%"
      m="auto"
      mt="6"
      cursor="pointer"
      textAlign="center"
      backgroundColor="black"
      borderRadius="15px"
      //chuyển màu background sang
    >
      <Heading
        backgroundImage='url("https://cdn.tgdd.vn/2023/11/campaign/GIF-BF-DESK-1200x120.gif")'
        h="auto"
        textAlign="left"
        display="flex"
        w="100%"
        borderRadius="15px"
      >
        <Box mt="6" display="flex" mb="1" ml="6">
          <Box mr="4">
            {" "}
            <img
              width="40px"
              height="75px"
              src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/lightning-ic.png"
            />
          </Box>

          <Text>
            <Text fontSize="40px" color="#ffd559">
              {" "}
              GIỜ VÀNG DEAL SỐC
            </Text>
            <Text fontFamily="-moz-initial" fontSize="3xl" color="#fff" mt="3">
              <Text>
                {" "}
                <i>Kết thúc trong</i>{" "}
                <span
                  style={{
                    backgroundColor: "#ffe252",
                    borderRadius: "9px",
                    padding: "5px",
                    marginRight: "5px",
                    color: "black",
                  }}
                >
                  {thoiGianConLai.gio.toString().padStart(2, "0")}
                </span>
                :
                <span
                  style={{
                    backgroundColor: "#ffe252",
                    borderRadius: "9px",
                    padding: "5px",
                    marginRight: "5px",
                    color: "black",
                  }}
                >
                  {thoiGianConLai.phut.toString().padStart(2, "0")}
                </span>
                :
                <span
                  style={{
                    backgroundColor: "#ffe252",
                    borderRadius: "9px",
                    padding: "5px",
                    marginRight: "5px",
                    color: "black",
                  }}
                >
                  {thoiGianConLai.giay.toString().padStart(2, "0")}{" "}
                </span>
              </Text>{" "}
            </Text>
          </Text>
        </Box>
        {/* <Box mt="8" className="time">
          <Text fontSize="30px" color="#ffe252">Đang diễn ra</Text>
          <Text
            fontFamily="-moz-initial"
            fontSize="3xl"
            color="blackAlpha.800"
            mt="2"
            borderBottom="3px solid #E6CB47"
            borderBottomRadius="12px"
          >
            <i fontSize="10px" fontFamily="-moz-initial">
              {" "}
              08:00/23:59{" "}
            </i>{" "}
          </Text>
        </Box>
        <Box mt="8" className="time">
          <Text fontSize="30px" color="#ffe252">Sắp diễn ra</Text>
          <Text
            fontFamily="-moz-initial"
            fontSize="3xl"
            color="blackAlpha.800"
            mt="2"
            borderBottom="3px solid #ffe252"
            borderBottomRadius="12px"
          >
            <i fontSize="10px" fontFamily="-moz-initial">
              {" "}
              08:00/23:59{" "}
            </i>{" "}
          </Text>
        </Box> */}
      </Heading>

      <Box mt="1" bachgroundColor="white">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
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
              spaceBetween: 1,
            },
          }}
        >
          {firstHalfData.map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Link to={`/${i.prodType}/${i.prodID}`}>
                  <Box
                    className="list"
                    p="2"
                    mt="4"
                    m="2"
                    backgroundColor="white"
                    borderRadius="15px "
                    // boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    w=""
                    h="auto"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
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
                      <Box mt="2.5" m="10px 0 30px 0">
                        <Flex>
                          <Square>
                            <Text color="gray.600" fontSize="15px">
                              Giá mới:{" "}
                            </Text>
                          </Square>
                          <Square>
                            <Text
                              textAlign="center"
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
                                mt=""
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
                        <Box
                          mt="4"
                          display="flex"
                          backgroundColor="yellow"
                          borderRadius="15px"
                        >
                          <Text mt="-2">
                            <img
                              width="22px"
                              height="22px"
                              src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/fs-iconfire.png"
                            />
                          </Text>
                          <Box ml="2">
                            <Text>
                              <b>Còn {i.QTY}/100 suất</b>
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
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
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
              spaceBetween: 1,
            },
          }}
        >
          {secondHalfData.map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Link to={`/${i.prodType}/${i.prodID}`}>
                  <Box
                    className="list"
                    p="2"
                    mt="4"
                    m="2"
                    backgroundColor="white"
                    borderRadius="15px "
                    // boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    w=""
                    h="auto"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
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
                      <Box mt="2.5" m="10px 0 30px 0">
                        <Flex>
                          <Square>
                            <Text color="gray.600" fontSize="15px">
                              Giá mới:{" "}
                            </Text>
                          </Square>
                          <Square>
                            <Text
                              textAlign="center"
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
                                mt=""
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
                        <Box
                          mt="4"
                          display="flex"
                          backgroundColor="yellow"
                          borderRadius="15px"
                        >
                          <Text mt="-2">
                            <img
                              width="22px"
                              height="22px"
                              src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/fs-iconfire.png"
                            />
                          </Text>
                          <Box ml="2">
                            <Text>
                              <b>Còn {i.QTY}/100 suất</b>
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
