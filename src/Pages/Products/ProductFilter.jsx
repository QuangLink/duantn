import React, { useEffect, useState } from "react";
import { Box, Flex, Menu, Button, Select } from "@chakra-ui/react";
import "./Productbox.css";
import { Link } from "react-router-dom";

const ProductFilter = ({
  typeOfProduct,
  filter,
  handleFilterChange,
  onTypeChangeStore,
}) => {
  const [type, setType] = useState(typeOfProduct);

  useEffect(() => {
    setType(typeOfProduct);
  }, [typeOfProduct]);
  console.log(type);

  const CategoryProduct = () => {
    if (
      type === "phone" ||
      type === "apple/phone" ||
      type === "xiaomi" ||
      type === "samsung"
    ) {
      return (
        <Flex className="grid-container">
          <Box>
            <Link to="/apple/phone">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png"
                />
              </Box>
            </Link>
          </Box>
          <Box>
            <Link to="/xiaomi">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                />
              </Box>
            </Link>
          </Box>
          <Box>
            <Link to="/samsung">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png"
                />
              </Box>
            </Link>
          </Box>
        </Flex>
      );
    } else if (
      type === "laptop" ||
      type === "asus" ||
      type === "acer" ||
      type === "lenovo" ||
      type === "hp"
    ) {
      return (
        <Flex className="grid-container">
          <Box>
            <Link href="/asus">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png"
                />
              </Box>
            </Link>
          </Box>
          <Box>
            <Link href="/acer">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png"
                />
              </Box>
            </Link>
          </Box>
          <Box>
            <Link href="/lenovo">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png"
                />
              </Box>
            </Link>
          </Box>
          <Box>
            <Link href="/hp">
              <Box className="text-btn">
                <img
                  width="100%"
                  height="75px"
                  src="https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png"
                />
              </Box>
            </Link>
          </Box>
        </Flex>
      );
    } else {
      return <Box></Box>;
    }
  };

  const CategoryProduct2 = () => {
    if (
      type === "phone" ||
      type === "apple/phone" ||
      type === "xiaomi" ||
      type === "samsung"
    ) {
      return (
        <Flex
          className="grid-container"
          css={{ "@media (max-width: 768px)": { display: "none" } }}
        >
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="128gb"
              onClick={onTypeChangeStore}
            >
              128GB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="256gb"
              onClick={onTypeChangeStore}
            >
              256GB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="512gb"
              onClick={onTypeChangeStore}
            >
              512GB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="1tgb"
              onClick={onTypeChangeStore}
            >
              1TGB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value=""
              onClick={onTypeChangeStore}
            >
              ALL
            </Button>
          </Box>
        </Flex>
      );
    } else if (
      type === "laptop" ||
      type === "asus" ||
      type === "acer" ||
      type === "lenovo" ||
      type === "hp"
    ) {
      return (
        // <Menu css={{ "@media (max-width: 768px)": { display: "none" } }}>
        //   <MenuButton className="menu-button">Ram</MenuButton>
        //   <MenuList bg="white">
        //     <Flex className="grid-container">
        //       <Box>
        //         <MenuItem value="128gb" onClick={onTypeChangeStore}>
        //           8GB
        //         </MenuItem>
        //       </Box>
        //       <Box>
        //         <MenuItem value="256gb" onClick={onTypeChangeStore}>
        //           16GB
        //         </MenuItem>
        //       </Box>
        //       <Box>
        //         <MenuItem value="512gb" onClick={onTypeChangeStore}>
        //           32GB
        //         </MenuItem>
        //       </Box>
        //       <Box>
        //         <MenuItem value="" onClick={onTypeChangeStore}>
        //           ALL
        //         </MenuItem>
        //       </Box>
        //     </Flex>
        //   </MenuList>
        // </Menu>
        <Flex
          className="grid-container"
          css={{ "@media (max-width: 768px)": { display: "none" } }}
        >
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="8gb"
              onClick={onTypeChangeStore}
            >
              8GB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="16gb"
              onClick={onTypeChangeStore}
            >
              16GB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value="32gb"
              onClick={onTypeChangeStore}
            >
              32GB
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight="450"
              bg="white"
              className="text-btn1"
              value=""
              onClick={onTypeChangeStore}
            >
              ALL
            </Button>
          </Box>
        </Flex>
      );
    } else {
      return (
        <>
          <Box></Box>
        </>
      );
    }
  };

  return (
    <div className="filter_1">
      <Box
        width="80%"
        height="76px"
        margin="0 0 0 10%"
        display="flex"
        justifyContent="space-between"
        borderRadius="3px"
        css={{
          "@media (max-width: 768px)": {
            margin: "2% 0%",
            width: "100%",
            justifyContent: "space-evenly",
          },
          "@media (max-width: 426px)": { display: "none" },
        }}
      >
        <Flex width="65%">
          <Menu>
            <CategoryProduct />
          </Menu>
        </Flex>
      </Box>
      <Box
        width="80%"
        height="76px"
        margin="0 0 0% 10%"
        display="flex"
        justifyContent="space-between"
        css={{
          "@media (max-width: 768px)": {
            margin: "2% 0%",
            width: "100%",
            justifyContent: "space-evenly",
          },
          "@media (max-width: 426px)": { display: "none" },
        }}
      >
        <CategoryProduct2 />
        <Flex width="13%" padding="15px 0px">
          <Box
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
export default React.memo(ProductFilter);
