import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  Square,
  Button,
  Center,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CSSTransition } from "react-transition-group";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "./stylehome.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
//add singleData to cart
const postSingleData = async (data) => {
  try {
    // Lấy userID từ sessionStorage
    const userID = Cookies.get("userID");

    // Ensure data.prodID is a valid value, not [object Object]
    const prodID = data.prodID;

    // Tạo dữ liệu gửi đi kết hợp với userID và prodID
    const postData = {
      prodID,
      userID,
    };

    let response = await axios.post(`http://localhost:9000/cart/`, postData);
    return response.data;
  } catch (error) {
    console.log("Trong hàm postSingleData xảy ra lỗi: ", error.response.data);
  }
};

const ItemCard5 = ({ type, heading }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    try {
      let responce = await axios.get(`http://localhost:9000/products`);
      console.log("in the logi func try", responce.data);
      if (responce.data) {
        setFilteredProducts(responce.data || []);
      }
    } catch (error) {}
  };
  const listDataLaptop = filteredProducts.filter(
    (product) => product.prodType === "Laptop",
  );

  console.log(listDataLaptop, "sa");

  var navigate = useNavigate();
  const handlePost = (prodID) => {
    // postSingleData({ prodID }).then((res) => navigate("/cart"));
  };
  return (
    <Box
      justifyContent="center"
      w="73%"
      m="auto"
      mt="6"
      mb="10"
      cursor="pointer"
      textAlign="center"
    >
      <Heading
        heading={heading}
        textAlign="center"
        display="flex"
        justifyContent="center"
        w="95%"
        m="15p% 10% 10% 10%"
      />
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 10000 }}
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
              spaceBetween: 10,
            },
          }}
        >
          {listDataLaptop.slice(0, 10).map((i) => (
            <Box key={uuid()}>
              <SwiperSlide>
                <Box
                  className="list"
                  p="2"
                  m={0.5}
                  mt="4"
                  borderRadius="15px"
                  borderWidth={1}
                  borderColor={"#555"}
                  w=""
                  h="auto"
                >
                  <Link to={`/${i.prodType}/${i.prodID}`}>
                    <Box className="list" p="2" mt="4" w="" h="auto">
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
                    </Box>
                  </Link>
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
