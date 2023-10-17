import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Box, Grid, GridItem, Heading, Center, Flex, Text, Button, Input, Menu, MenuButton, MenuList, MenuItem, border, Image, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/products.action";
import { RotatingLines } from "react-loader-spinner";
import { Form } from "react-router-dom";
import HotProduct from "./HotProduct";

import {
  ItemDetails8,
  ItemDetails1,
  PrSales,
} from "../Home/CardDetails";
import SlideProuct from "./SlideProduct";

const getData = async (typeOfProduct) => {
  let response = await axios.get(
    `https://rus-digital-api.vercel.app/${typeOfProduct}`
  );
  return response.data;
};

const Products = ({ typeOfProduct }) => {
  // const [productArr, setProductArr] = useState([]);
  const productsList = useSelector((store) => store.product.data);
  console.log("in the products page and the products list", productsList);

  const loading = useSelector((store) => store.product.loading);
  const error = useSelector((store) => store.product.error);

  const dispatch = useDispatch();
  //   console.log("in the products page and productlist is :-",productsList,"loading status is:- ",loading,"error status is :-",error);

  const category = {
    mobilesandtablets: "MOBILES AND TABLETS",
    televisions: "TELEVISIONS",
    headphones: "HEADPHONES",
    homeappliances: "HOME-APPLIANCES",
    computers: "COMPUTERS",
    cameras: "CAMERAS",
    kitchen: "KITCHEN-APPLIANCES",
    personalcare: "PERSONAL-CARE",
    accessories: "ACCESSORIES",
    whishlist: "whishlist"
  };

  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(getProducts(typeOfProduct));
  }, [typeOfProduct]);

  if (error) {
    return (
      <Heading
        size="3xl"
        textAlign="center"
        color="red.500"
        marginTop={10}
        marginBottom="200px"
      >
        Some thing went wrong...
      </Heading>
    );
  }

  // loading ? (
  //   <Heading
  //     size="3xl"
  //     textAlign="center"
  //     color="blue.400"
  //     marginTop={10}
  //     marginBottom="200px"
  //   >
  //     Loading...
  //   </Heading>
  // )

  return (
    <Box p="5">
      {/* <Heading p="6" marginBottom={7}>
        {category[typeOfProduct]}
      </Heading>
      <hr></hr> */}
      <Box
      >
      <SlideProuct type={PrSales} />
      </Box>
      <Box
        mb="2%">
        <HotProduct type={PrSales} />
      </Box>
      <Box
        width="80%"
        height="76px"
        margin="0 0 3% 10%"
        display="flex"
        justifyContent="space-between"
        borderRadius="3px"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 2px"
      >
        <Flex
          p={2}
        >
          <Menu>
            <MenuButton
              fontWeight="bold.500"
              width="80px"
              borderRadius="5px"
              border="1px solid #e0e0e0;"
              height="50%"
              fontSize="0.7rem"
              backgroundColor="#FFFFFF"
              margin="2%"
            >
              Giá
            </MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="black"
                >
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Dưới 2 triệu
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Từ 2 - 4 triệu
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Từ 4 - 6 triệu
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontWeight="bold.500"
              width="80px"
              borderRadius="5px"
              border="1px solid #e0e0e0;"
              height="50%"
              fontSize="0.7rem"
              backgroundColor="#FFFFFF"
              margin="2%"
            >
              Hãng
            </MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="black"
                >
                  <Box>
                    <Box
                      _hover={{
                        // textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      fontSize={"12px"}
                      p={2}
                      border="1px solid #e0e0e0"
                    >
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      border="1px solid #e0e0e0"
                    >
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      border="1px solid #e0e0e0"
                    >
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      border="1px solid #e0e0e0"
                    >
                    </Box>
                  </Box>

                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontWeight="bold.500"
              width="80px"
              borderRadius="5px"
              border="1px solid #e0e0e0;"
              height="50%"
              fontSize="0.7rem"
              backgroundColor="#FFFFFF"
              margin="2%"
            >
              Loại
            </MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="black"
                >
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Laptop văn phòng
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Laptop Gaming
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Cấu hình cao
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontWeight="bold.500"
              width="80px"
              borderRadius="5px"
              border="1px solid #e0e0e0;"
              height="50%"
              fontSize="0.7rem"
              backgroundColor="#FFFFFF"
              margin="2%"
            >
              Nhu cầu
            </MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="black"
                >
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Học tập
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Chơi game
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      Làm việc
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontWeight="bold.500"
              width="80px"
              borderRadius="5px"
              border="1px solid #e0e0e0;"
              height="50%"
              fontSize="0.7rem"
              backgroundColor="#FFFFFF"
              margin="2%"
            >
              Ram
            </MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="black"
                >
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      4G
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                     8G
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{
                        // textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      p={2}
                      fontSize={"12px"}
                      border="1px solid #e0e0e0"
                    >
                      16G
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Button
            border="1px solid #e0e0e0;"
            fontSize="0.7rem"
            height="50%"
            backgroundColor="#FFFFFF"
            margin="2%"
          >
            Yêu thích
          </Button>


        </Flex>
        <Flex
          width="13%"
        >
          <Text
            // border="solid 1px"
            fontSize="1rem"
            backgroundColor="#FFFFFF"
          >
          </Text>
          <Box>
            <Menu>
              <MenuButton
                m={5}
                fontWeight="bold.800"
                width="120px"
                height="30px"
                fontSize="0.7rem"
                backgroundColor="#FFFFFF"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 3px"
              >
                Sắp xếp theo
              </MenuButton>
              <MenuList
              >
                <MenuItem
                >Giảm giá
                </MenuItem>
                <MenuItem>
                  Xem nhiều nhất
                </MenuItem>
                <MenuItem
                >Từ thấp đến cao</MenuItem>
                <MenuItem
                >Từ cao đến thấp
                </MenuItem>

              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>

      {loading ? (
        <Box h={20}>
          <Center>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              // width="150"
              height={50}
              visible={true}
            />
          </Center>
        </Box>
      )
        : (
          <Grid
            width="80%"
            m="auto"
            marginLeft="10%"
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
            ]}
            gap={2}
          >
            {productsList.map((elem, i) => {
              // console.log("in the products page in the map method and elem is :- ", elem);
              return (

                <GridItem
                  key={elem.name + i}
                  w="97%"
                  h="100 %"
                  bg="white.500"
                  boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"

                  padding="5%"
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    cursor: "pointer",
                  }}
                >
                  <Product data={elem} typeOfProduct={typeOfProduct} />
                </GridItem>
              );
            })}
          </Grid>
        )}
    </Box>

  );
};

export default Products;
