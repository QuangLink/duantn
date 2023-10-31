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
} from "@chakra-ui/react";
import "./Productbox.css";

const ProductFilter = ({ typeOfProduct }) => {
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
          <Menu>
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
          </Menu>
          <Menu>
            <MenuButton className="menu-button">Hãng</MenuButton>
            <MenuList bg="white">
              <Link to="#">
                <Grid className="grid-container">
                  <Box>
                    <Box className="text-btn"></Box>
                  </Box>
                  <Box>
                    <Box className="text-btn"></Box>
                  </Box>
                  <Box>
                    <Box className="text-btn"></Box>
                  </Box>
                  <Box>
                    <Box className="text-btn"></Box>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
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
          <Box>
            <Menu>
              <MenuButton
                margin="15% 0%"
                fontWeight="bold.800"
                width="120px"
                height="30px"
                fontSize="0.7rem"
                backgroundColor="#FFFFFF"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 3px"
              >
                Sắp xếp theo
              </MenuButton>
              <MenuList>
                <MenuItem>Giảm giá</MenuItem>
                <MenuItem>Xem nhiều nhất</MenuItem>
                <MenuItem>Từ thấp đến cao</MenuItem>
                <MenuItem>Từ cao đến thấp</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};
export default ProductFilter;
