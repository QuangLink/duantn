import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import {
  Box,
  Link,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  Button,
  Select,
} from "@chakra-ui/react";
import { PrApplePhone } from "../Home/CardDetails";

import "./Productbox.css";
import { Route } from "react-router-dom";

const ProductFilter = ({ typeOfProduct, filter, handleFilterChange, onTypeChangeStore }) => {
  const [type, setType] = useState(typeOfProduct);

  useEffect(() => {
    setType(typeOfProduct);
  }, [typeOfProduct]);
  console.log(type);

  const CategoryProduct = () => {
    if (type === 'phone' || type === 'apple/phone' || type === 'xiaomi' || type === 'samsung') {
      return (
        <MenuList bg="white">
          <Grid className="grid-container">
            <Box>
              <Link href="/applephone" >
                <Box className="text-btn">Apple</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/xiaomi" >
                <Box className="text-btn">Xiaomi</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/samsung" >
                <Box className="text-btn">Samsung</Box>
              </Link>
            </Box>
          </Grid>
        </MenuList>
      )
    } else if (type === 'laptop' || type === 'asus' || type === 'acer' || type === 'lenovo' || type === 'hp') {
      return (
        <MenuList bg="white">
          <Grid className="grid-container">
            <Box>
              <Link href="/asus">
                <Box className="text-btn">Asus</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/acer">
                <Box className="text-btn">Acer</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/lenovo">
                <Box className="text-btn">Lenovo</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/hp">
                <Box className="text-btn">Hp</Box>
              </Link>
            </Box>
          </Grid>
        </MenuList>
      )
    } else {
      return (
        <MenuList bg="white">
          <Grid className="grid-container">
            <Box>
              <Link to="/appletablet">
                <Box className="text-btn">Apple</Box>
              </Link>
            </Box>
          </Grid>
        </MenuList>
      )
    }
  }


  const CategoryProduct2 = () => {
    if (type === 'phone' || type === 'applephone' || type === 'xiaomi' || type === 'samsung') {
      return (
        <Menu css={{ "@media (max-width: 768px)": { display: "none" } }}>
          <MenuButton className="menu-button" >Dung lượng</MenuButton>
          <MenuList bg="white" >
            <Grid className="grid-container" >
              <Box>
                <MenuItem value="128gb" onClick={onTypeChangeStore}>128GB</MenuItem>
              </Box>
              <Box>
                <MenuItem value="256gb" onClick={onTypeChangeStore}>256GB</MenuItem>
              </Box>
              <Box>
                <MenuItem value="512gb" onClick={onTypeChangeStore}>512GB</MenuItem>
              </Box>
              <Box>
                <MenuItem value="1tgb" onClick={onTypeChangeStore}>1TGB</MenuItem>
              </Box>
              <Box>
                <MenuItem value="" onClick={onTypeChangeStore}>ALL</MenuItem>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
      )
    } else if (type === 'laptop' || type === 'asus' || type === 'acer' || type === 'lenovo' || type === 'hp') {
      return (
        <Menu css={{ "@media (max-width: 768px)": { display: "none" } }}>
          <MenuButton className="menu-button">Ram</MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid className="grid-container">
                <Box>
                  <Text className="text-btn">4G</Text>
                </Box>
                <Box>
                  <Text className="text-btn">8G</Text>
                </Box>
                <Box>
                  <Text className="text-btn">16G</Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
      )
    } else {
      return (
        <Menu css={{ "@media (max-width: 768px)": { display: "none" } }}>
          <MenuButton className="menu-button">Dung lượng</MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid className="grid-container">
                <Box>
                  <Text className="text-btn">4G</Text>
                </Box>
                <Box>
                  <Text className="text-btn">8G</Text>
                </Box>
                <Box>
                  <Text className="text-btn">16G</Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
      )
    }
  }

  return (
    <div className="filter_1">
      <Box
        width="80%"
        height="76px"
        margin="0 0 3% 10%"
        display="flex"
        justifyContent="space-between"
        borderRadius="3px"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 2px"
        css={{
          "@media (max-width: 768px)": {
            margin: "2% 0%",
            width: "100%",
            justifyContent: "space-evenly",
          },
          "@media (max-width: 426px)": { display: "none" },
        }}
      >
        <Flex width="65%" >
          <Menu>
            <MenuButton className="menu-button">Hãng</MenuButton>
            <CategoryProduct />
          </Menu>

          <CategoryProduct2 />
        </Flex>
        <Flex width="13%">
          <Box
            margin="10% 0%"
            fontWeight="bold.800"
            height="px"
            fontSize="0.7rem"
            backgroundColor="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 3px"
          >
            <Select value={filter} onChange={handleFilterChange} mb={4}>
              <option value="all">Tất cả sản phẩm</option>
              <option value="lowToHigh">Giá: Tăng dần</option>
              <option value="highToLow">Giá: Giảm dần</option>
              <option value="sale">Giảm giá</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    </div >
  );
};
export default ProductFilter;
