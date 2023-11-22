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

const ProductFilter = ({ typeOfProduct, filter, handleFilterChange }) => {
  const [type, setType] = useState(typeOfProduct);

  useEffect(() => {
    setType(typeOfProduct);
  }, [typeOfProduct]);
  console.log(type);

  const CategoryProduct = () => {
    if (
      type === "phone" ||
      type === "apple" ||
      type === "xiaomi" ||
      type === "samsung"
    ) {
      return (
        <MenuList bg="white">
          <Grid className="grid-container">
            <Box>
              <Link href="/apple/phone">
                <Box className="text-btn">Apple</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/xiaomi">
                <Box className="text-btn">Xiaomi</Box>
              </Link>
            </Box>
            <Box>
              <Link href="/samsung/phone">
                <Box className="text-btn">Samsung</Box>
              </Link>
            </Box>
          </Grid>
        </MenuList>
      );
    } else if (
      type === "laptop" ||
      type === "asus" ||
      type === "acer" ||
      type === "lenovo" ||
      type === "hp"
    ) {
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
      );
    } else {
      return (
        <MenuList bg="white">
          <Grid className="grid-container">
            <Box>
              <Link to="/apple/tablet">
                <Box className="text-btn">Apple</Box>
              </Link>
            </Box>
          </Grid>
        </MenuList>
      );
    }
  };
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
        <Flex p={2}>
          {/* <Menu>
            <MenuButton className="menu-button">Giá</MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid className="grid-container">
                  <Box>
                    <Text className="text-btn">Dưới 2 triệu</Text>
                  </Box>
                  <Box>
                    <Text className="text-btn">Từ 2 - 4 triệu</Text>
                  </Box>
                  <Box>
                    <Text className="text-btn">Từ 4 - 6 triệu</Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu> */}
          <Menu>
            <MenuButton className="menu-button">Hãng</MenuButton>
            <CategoryProduct />
            {/* <MenuList bg="white">
              <Grid className="grid-container">
                <Box>
                  <Link to="/cart">
                    <Box className="text-btn">Acer</Box>
                  </Link>
                </Box>
                <Box>
                  <Box className="text-btn">Asus</Box>
                </Box>
                <Box>
                  <Box className="text-btn">Lenovo</Box>
                </Box>
                <Box>
                  <Box className="text-btn">MacBook</Box>
                </Box>
              </Grid>
            </MenuList>  */}
          </Menu>
          <Menu>
            <MenuButton className="menu-button">Loại</MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid className="grid-container">
                  <Box>
                    <Text className="text-btn">Laptop văn phòng</Text>
                  </Box>
                  <Box>
                    <Text className="text-btn">Laptop Gaming</Text>
                  </Box>
                  <Box>
                    <Text className="text-btn">Cấu hình cao</Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton className="menu-button">Nhu cầu</MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid className="grid-container">
                  <Box>
                    <Text className="text-btn">Học tập</Text>
                  </Box>
                  <Box>
                    <Text className="text-btn">Chơi game</Text>
                  </Box>
                  <Box>
                    <Text className="text-btn">Làm việc</Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
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
          <Button
            border="1px solid #e0e0e0;"
            fontSize="0.7rem"
            height="50%"
            backgroundColor="#FFFFFF"
            margin="2%"
            css={{ "@media (max-width: 768px)": { display: "none" } }}
          >
            Yêu thích
          </Button>
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
    </div>
  );
};
export default ProductFilter;
