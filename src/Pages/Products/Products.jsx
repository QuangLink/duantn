import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Box, Grid, GridItem, Heading, Center, Flex, Text, Button, Input, Menu, MenuButton, MenuList, MenuItem, border } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/products.action";
import { RotatingLines } from "react-loader-spinner";
import { Form } from "react-router-dom";
import HotProduct from "./HotProduct";
import {
  ItemDetails8,
} from "../Home/CardDetails";

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
      <Heading p="6" marginBottom={7}>
        {category[typeOfProduct]}
      </Heading>
      <hr></hr>
      <Box
        mb="5%">
        <HotProduct type={ItemDetails8} />
      </Box>
      <Box
        width="80%"
        height="76px"
        margin="0 0 3% 10%"
        display="flex"
        justifyContent="space-between">

        <Flex>
          <Button
            border="solid 1px"
            fontSize="0.7rem"
            height="50%"
            backgroundColor="#FFFFFF"
            margin="1%"
          >
            Bộ lọc
          </Button>
          {/* <Button
          border="solid 1px"
          height ="50%"
          fontSize="0.7rem"
          backgroundColor="#FFFFFF"
          margin="1%"
          >
            Hãng 
          </Button> */}
          <Menu>
            <MenuButton
              fontWeight="bold.500"
              width="80px"
              borderRadius="5px"
              border="solid 1px"
              height="50%"
              fontSize="0.7rem"
              backgroundColor="#FFFFFF"
              margin="1%"
            >
              Hãng
            </MenuButton>
            <MenuList>
              <MenuItem>Asur</MenuItem>
              <MenuItem>Rog</MenuItem>
              <MenuItem>AMD</MenuItem>
            </MenuList>
          </Menu>
          <Button
            border="solid 1px"
            fontSize="0.7rem"
            height="50%"
            backgroundColor="#FFFFFF"
            margin="1%"
          >
            Giá
          </Button>
          <Button
            border="solid 1px"
            fontSize="0.7rem"
            height="50%"
            backgroundColor="#FFFFFF"
            margin="1%"
          >
            Mơi nhất
          </Button>
          <Button
            border="solid 1px"
            fontSize="0.7rem"
            height="50%"
            backgroundColor="#FFFFFF"
            margin="1%"
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
          <Box
            fontSize="1rem"
            ml="3%"
            height="100%"
            backgroundColor="#FFFFFF">
            <div>
              <p>sap xep</p>
              <select >
                <option value="Từ thấp đến cao">Từ thấp đến cao</option>
                <option value="Từ cao đến thâp">Từ cao đến thâp</option>
              </select>
            </div>
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
            gap={3}
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
      <Center
        mt="2%"
      >
        <Button
          margin={2}
        ><a href="#">&laquo;</a></Button>
        <Button
          margin={2}
        ><a href="#">1</a></Button>
        <Button
          margin={2}
        ><a href="#">2</a></Button>
        <Button
          margin={2}
        ><a href="#">3</a></Button>
        <Button
          margin={2}
        > <a href="#">&raquo;</a></Button>
      </Center>
    </Box>

  );
};

export default Products;
